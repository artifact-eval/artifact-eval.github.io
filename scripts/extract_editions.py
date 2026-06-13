#!/usr/bin/env python3
"""Extract committee + results data from legacy mdBook edition folders into JSON.

Run from repo root:  python3 scripts/extract_editions.py
Outputs:  src/data/editions/<slug>.json  (committee + results; language-neutral)
"""
import json
import re
import sys
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src" / "data" / "editions"

# slug -> legacy folder, optionally overriding committee/results filenames
EDITIONS = {
    "sbrc-2026": {"dir": "sbrc2026"},
    "sbrc-2025": {"dir": "sbrc2025"},
    "wgrs-2024": {"dir": "wgrs2024"},
    "sbseg-2026": {"dir": "sbseg2026"},
    "sbseg-2025": {"dir": "sbseg2025"},
    "sbseg-2024": {"dir": "sbseg2024"},
    "wticg-2023": {"dir": "wticg2023", "comite": "comite23.html", "results": "resultados.html"},
}

TAG = re.compile(r"<[^>]+>")
WS = re.compile(r"\s+")


def text(s: str) -> str:
    return WS.sub(" ", unescape(TAG.sub("", s))).strip()


def main_region(html: str) -> str:
    """Slice the mdBook content area (between <main> and </main> if present)."""
    m = re.search(r"<main>(.*?)</main>", html, re.S)
    return m.group(1) if m else html


def parse_committee(html: str):
    region = main_region(html)
    groups = []
    # Each role group: <h2 ...>TITLE</h2> followed by one or more <p>names</p>.
    parts = re.split(r"<h2\b[^>]*>(.*?)</h2>", region, flags=re.S)
    # parts[0] is preamble (h1 etc.); then alternating (title, body)
    for i in range(1, len(parts), 2):
        title = text(parts[i])
        body = parts[i + 1] if i + 1 < len(parts) else ""
        # stop body at the next h1/footer if any
        body = re.split(r"<h1\b", body)[0]
        names = []
        for p in re.findall(r"<p>(.*?)</p>", body, re.S):
            for line in re.split(r"<br\s*/?>", p):
                name = text(line)
                if name:
                    names.append(name)
        if title and names:
            groups.append({"group": title, "members": names})
    return groups


SEAL_MAP = {"disp": "D", "func": "F", "sus": "S", "repr": "R"}


def classify_headers(ths):
    """Map column index -> role: D/F/S/R, 'title', 'track', 'link', or None."""
    roles = []
    for th in ths:
        t = text(th).lower()
        role = None
        for key, seal in SEAL_MAP.items():
            if t.startswith(key):
                role = seal
                break
        if role is None:
            if "selos atribu" in t:
                role = "sealtext"  # single cell holding seal tokens as text
            elif "tipo" in t or "track" in t or "trilha" in t:
                role = "track"
            elif "tulo" in t or "artigo" in t or "trabalho" in t:
                role = "title"
            elif "link" in t or "artefato" in t:
                role = "link"
        roles.append(role)
    return roles


SEALTEXT = re.compile(r"selo\s*([dfsr])", re.I)


def parse_sealtext(cell_text: str):
    seals = {"D": False, "F": False, "S": False, "R": False}
    for m in SEALTEXT.finditer(cell_text):
        seals[m.group(1).upper()] = True
    return seals


def parse_results(html: str):
    region = main_region(html)
    rows_out = []
    # Walk h2 subsections (used by some editions as track labels) + tables in order.
    # Simpler: process each table; use Track column when present, else nearest
    # preceding <h2> as the track label.
    tokens = re.split(r"(<h2\b[^>]*>.*?</h2>|<table>.*?</table>)", region, flags=re.S)
    current_h2 = None
    for tok in tokens:
        if tok.startswith("<h2"):
            label = text(tok)
            # ignore generic section titles
            if "selos atribu" in label.lower() or "resultado" in label.lower():
                current_h2 = None
            else:
                current_h2 = label
        elif tok.startswith("<table"):
            thead = re.search(r"<thead>(.*?)</thead>", tok, re.S)
            if not thead:
                continue
            ths = re.findall(r"<th>(.*?)</th>", thead.group(1), re.S)
            roles = classify_headers(ths)
            tbody = re.search(r"<tbody>(.*?)</tbody>", tok, re.S)
            body = tbody.group(1) if tbody else tok
            for tr in re.findall(r"<tr>(.*?)</tr>", body, re.S):
                cells = re.findall(r"<td[^>]*>(.*?)</td>", tr, re.S)
                if not cells:
                    continue
                row = {"seals": {"D": False, "F": False, "S": False, "R": False},
                       "title": "", "track": current_h2, "link": None}
                for idx, cell in enumerate(cells):
                    role = roles[idx] if idx < len(roles) else None
                    if role in ("D", "F", "S", "R"):
                        row["seals"][role] = "<img" in cell
                    elif role == "sealtext":
                        row["seals"] = parse_sealtext(text(cell))
                    elif role == "title":
                        row["title"] = text(cell)
                    elif role == "track":
                        tr_txt = text(cell)
                        if tr_txt:
                            row["track"] = tr_txt
                    elif role == "link":
                        href = re.search(r'href="([^"]+)"', cell)
                        if href:
                            row["link"] = href.group(1)
                if row["title"]:
                    rows_out.append(row)
    return rows_out


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    summary = {}
    for slug, cfg in EDITIONS.items():
        folder = cfg["dir"]
        base = ROOT / folder
        data = {"slug": slug, "legacyDir": folder, "committee": [], "results": []}
        comite = base / cfg.get("comite", "comite.html")
        results = base / cfg.get("results", "results.html")
        if comite.exists():
            data["committee"] = parse_committee(comite.read_text(encoding="utf-8", errors="replace"))
        if results.exists():
            data["results"] = parse_results(results.read_text(encoding="utf-8", errors="replace"))
        (OUT / f"{slug}.json").write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
        summary[slug] = {
            "committee_groups": len(data["committee"]),
            "committee_members": sum(len(g["members"]) for g in data["committee"]),
            "results": len(data["results"]),
        }
    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    sys.exit(main())
