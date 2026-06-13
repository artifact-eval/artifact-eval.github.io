---
title: Submission instructions
section: submissao
year: 2026
lang: en
order: 1
summary: How to register and submit artifacts, minimum README.md requirements, the appendix, and per-badge requirements.
---

Four quality badges can be considered for an artifact.

After the paper acceptance notification, authors may optionally submit the related artifact(s) (Tools Track authors are **required** to submit the artifact).

Authors must register the artifact on the **hotcrp** platform. This registration requires information such as author contact, a link to the artifact, and optionally an appendix. Note that the CTA review process is independent of the paper review on JEMS, and submissions are *single-blind*.

For an artifact, the review committee expects that:

- the minimum README requirements are present in the repository;
- information about specific resources is present in the appendix;
- the artifact meets the criteria of the requested badges;
- authors answer the questions posted by reviewers on the platform and submit the rebuttal letter within the deadline.

The entire artifact review process is conducted on the hotcrp platform. Authors with artifacts registered for review will be notified about platform access and should watch for emails sent by the platform with the review committee's questions. All communication between artifact reviewers and authors happens through hotcrp.

## Minimum README.md requirements (Mandatory)

To ease the artifact evaluation process, a `README.md` template (mandatory) was created with all the minimum fields expected for an artifact. See [examples of README.md from 4-badge artifacts](/en/instrucoes/2026/exemplos-readme/).

```markdown
# Project title
Summary describing the goal of the artifact, with the paper's title and abstract.

# README.md structure
Presents the README.md structure, describing how the repository is organized.

# Considered badges
Authors must describe which badges should be considered during evaluation.
For example: "The considered badges are: Available and Functional."

# Basic information
Basic information about all components needed to run and replicate the
experiments, describing the full execution environment with hardware and
software requirements.

# Dependencies
Information about benchmarks used and dependencies for execution. Be as clear
as possible: dependency versions and processes to access third-party resources
when needed.

# Security concerns
If running the artifact poses any risk to the evaluators, this risk must be
described and the proper process to ensure reviewer safety must be presented.

# Installation
The process to download and install the application. By the end of this process
the application/benchmark/tool is expected to be runnable.

# Minimal test
A step-by-step minimal test that lets reviewers observe some artifact
functionality and detect installation problems.

# Experiments
A step-by-step guide to run and obtain the paper's results. Each claim must be
presented in a subsection, with details of configuration files, commands, flags,
expected runtime, expected resources (e.g., 1GB RAM/Disk), and expected result.
## Claim #X
## Claim #Y

# LICENSE
State the license.
```

ALL sections presented in the minimum README.md requirement **must** be present. If you have any questions, please contact us.

> **Note:** before submitting your artifact, it is advisable to install and run it in a fresh environment (virtual machine) following only the instructions in the README.md.

## Specific resources or restrictions

If additional resources are required (cloud infrastructure, SSH keys, etc.) to evaluate the artifact, this information must be submitted through an appendix. There, authors include additional (private) information — such as SSH keys to access Google Cloud — to assist the Artifact Technical Committee reviewers.

The LaTeX appendix template is available at [Appendix Example](https://www.overleaf.com/read/jscjwsnqsxfh). All fields must be presented in the appendix, in addition to the mandatory minimum README.md requirements. The appendix is an additional criterion whenever specific resources turn out to be needed for evaluation or access restrictions exist.

## Per-badge requirements

For the work/artifact to be eligible for a badge, the respective requirements must be met:

### Available Artifacts (Badge D)
The code and/or data are expected to be available in a stable repository (such as GitHub or GitLab). This repository is expected to contain a README.md with the minimum requirements. The repository's README.md may be the same file submitted for CTA appreciation.

### Functional Artifacts (Badge F)
The code and/or artifact is expected to be executable so the reviewer can observe some of its functionality. To obtain this badge, additional information should be present in the repository's README.md, such as:

- list of dependencies;
- list of versions of dependencies/languages/environment;
- description of the execution environment;
- installation and execution instructions;
- a minimal execution example.

### Sustainable Artifacts (Badge S)
The code and/or artifact is expected to be modular, organized, intelligible, and easy to understand. To obtain the badge it is advisable that:

- there is minimal code documentation (describing files, functions, ...);
- there is minimal code readability;
- evaluators can identify the paper's main claims within the artifact.

### Reproducible Experiments (Badge R)
The reviewer is expected to be able to reproduce the paper's main claims. The use of virtual machines, containers, or scripts that ease and reduce environment setup time is suggested. To obtain this badge:

- instructions to run the main claims (e.g., the main figures/tables results);
- a description of how the experiments were run to reach the paper's results.

To meet these requirements, including script(s) that automate the reproduction process as much as possible is suggested.

## Review process

The artifact review process is split into two stages. As an author, you must watch for the questions raised by reviewers on the platform. After the first review stage (r1) ends, authors must submit a rebuttal letter aiming to clarify problems found by reviewers and assist the review process. Finally, reviewers consider the first-stage reviews and the rebuttal letter to make a decision in the second evaluation stage (r2-decision).

Review cycle calendar:

- Artifact submission deadline
- Review Round 1 (r1)
- Rebuttal phase
- Reviewer decision (r2-decision)

*Dates are available on hotcrp.*
