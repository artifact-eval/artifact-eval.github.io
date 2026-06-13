import type { Lang } from '../i18n/ui';

export interface Edition {
  /** Stable slug used in URLs, e.g. /pt/sbseg/2026/. */
  slug: string;
  /** Short display label, e.g. "SF'26". */
  label: string;
  year: number;
  /** Marks the active edition (highlighted chip). */
  current?: boolean;
}

export interface CtaEvent {
  /** Short code shown on the card, e.g. "SBSeg". */
  code: string;
  /** Full name per language. */
  name: Record<Lang, string>;
  /** Most recent first; the first `current` is the headline edition. */
  editions: Edition[];
}

export const events: CtaEvent[] = [
  {
    code: 'SBRC',
    name: {
      pt: 'Simpósio Brasileiro de Redes de Computadores e Sistemas Distribuídos',
      en: 'Brazilian Symposium on Computer Networks and Distributed Systems',
      es: 'Simposio Brasileño de Redes de Computadoras y Sistemas Distribuidos',
    },
    editions: [
      { slug: 'sbrc-2026', label: "SF'26", year: 2026, current: true },
      { slug: 'sbrc-2025', label: "SF'25", year: 2025 },
      { slug: 'wgrs-2024', label: "WGRS'24", year: 2024 },
    ],
  },
  {
    code: 'SBSeg',
    name: {
      pt: 'Simpósio Brasileiro em Segurança da Informação e de Sistemas Computacionais',
      en: 'Brazilian Symposium on Information and Computer System Security',
      es: 'Simposio Brasileño de Seguridad de la Información y de Sistemas Computacionales',
    },
    editions: [
      { slug: 'sbseg-2026', label: "SF'26", year: 2026, current: true },
      { slug: 'sbseg-2025', label: "SF'25", year: 2025 },
      { slug: 'sbseg-2024', label: "WTICG'24", year: 2024 },
      { slug: 'wticg-2023', label: "WTICG'23", year: 2023 },
    ],
  },
];

/** The four quality seals, in canonical display order. */
export const seals = [
  { key: 'D', color: 'var(--seal-d)' },
  { key: 'F', color: 'var(--seal-f)' },
  { key: 'S', color: 'var(--seal-s)' },
  { key: 'R', color: 'var(--seal-r)' },
] as const;
