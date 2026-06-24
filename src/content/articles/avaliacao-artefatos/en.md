---
articleSlug: avaliacao-artefatos
title: 'Between theory and practice: the Brazilian experience in evaluating scientific artifacts'
lang: en
authors: Diego Kreutz and Tiago Heinrich
date: June 16, 2026
dateISO: '2026-06-16'
abstract: How SBSeg and SBRC built a national process to evaluate research artifacts, and why it changes what it means to publish science in Brazil, train researchers, and prepare professionals for the job market.
isBridge: false
originalUrl: https://horizontes.sbc.org.br/index.php/2026/06/entre-a-teoria-e-a-pratica/
---

## When the paper is not enough

In computer science there is a comfortable habit: treating the published paper as the final product of research. The paper is submitted, reviewed, accepted, published, and the community moves on. But in experimental fields this view does not hold. Work on a new network protocol, an intrusion detector, or a distributed system does not end with the text of the paper. It depends, inseparably, on the code that implements it, the data that feeds it, and the scripts that produce the analyses. Without these materials, all that remains is a claim. It may be correct or not, but no outsider can verify it.

This is where the discussion stops being merely technical and becomes scientific, in the most classic sense of the term. Reproducibility is not a methodological detail: it is a basic condition of experimental science. If the community accepts that artifacts are an essential part of the research result, it needs formal mechanisms to evaluate, recognize, and improve them. And, above all, it needs to train researchers capable of producing and evaluating them.

This is exactly what members of the Brazilian cybersecurity and networking communities decided to build, starting in 2022. This process is documented in the paper "An Experience Report on Artifact Evaluation in Brazilian Conferences," published in ACM SIGCOMM Computer Communication Review (vol. 56, no. 1, April 2026).

## The starting point: the absence of a process and its formative effects

Until recently, Brazilian symposia had no formal mechanisms for submitting and evaluating artifacts. When these materials existed, they were cited loosely: a link in a footnote, some repository, with no minimum criteria for availability, documentation, functioning, or reproducibility. This informality generated recurring problems: missing or insufficient documentation, code that would not compile in a new environment, scripts that depended on fixed paths on the author's machine, and results that could not be reproduced with the material provided.

A reflection of an educational nature is in order. If the paper is what counts for the community, and the artifact is just an optional attachment with no evaluation process of its own, what real incentive is there for an advisor to invest time teaching documentation, modularization, and packaging? And what incentive is there for graduate students to develop these skills amid the pressure to publish? The honest answer is: almost none.

Without that incentive, the scientific literature accumulates claims that are increasingly hard to validate independently. And, along the way, a valuable training opportunity is lost. The price of this absence is not paid by an isolated paper. It is paid by the foundation on which the next generation of researchers should build their work.

Inspired by international initiatives such as ACM SIGCOMM, USENIX, NSDI, and EuroSys, Brazilian researchers decided to change this scenario. The Brazilian Symposium on Cybersecurity (SBSeg) and the Brazilian Symposium on Computer Networks and Distributed Systems (SBRC) began, starting in 2023, to have a formal Artifact Technical Committee (CTA), built gradually over four editions.

## The four badges: objective criteria for a culture of quality

The goal of the CTA is to evaluate artifacts in order to recognize the works that make an effort to release them, allowing other researchers to use, extend, and reproduce the results. An artifact can be software, data, documentation, raw results, proofs, models, or benchmarks. To evaluate them, a model with four badges was defined:

- The **Available** badge recognizes that the material was deposited in a stable, publicly accessible repository, with minimum documentation organized in a README covering ten topics.
- The **Functional** badge confirms that the artifact works and that the reviewer can see its functionality in a clean environment, installed from scratch.
- The **Reproducible** badge confirms that the paper's main results can be reproduced with the material provided.
- The **Sustainable** badge, an original contribution of the Brazilian model, recognizes the effort of organization, modularization, and clarity of the code. It shifts the discussion from "works today" to "still useful tomorrow."

## Evolution of the process: from judgment to formative dialogue

The structure of the review process also changed. In the first editions, following the SIGCOMM model, the evaluation had a single round. The problem observed was recurring: authors left fixing pending issues to the last few days, and little time remained for reviewers to validate the corrections.

Based on this observation, the process was reorganized into two rounds. The first does not produce a decision; it produces dialogue. Reviewers point out problems, authors correct them in a response phase (rebuttal), and only in the second round are the badges actually awarded. This apparent operational complication turned out to be one of the most transformative parts of the model. It is where much of the educational effect lies.

Another important element is the mandatory proof of execution. For the functionality and reproducibility badges, reviewers must record logs and observed results. It is not enough to say that it "worked": you have to show it. This mechanism serves three functions at once: it detects divergences among reviewers, gives authors concrete information about where the problem appeared, and creates an auditable record of the evaluation process itself.

## Brazilian innovations: sustainability and the process as a classroom

Two original contributions of the Brazilian model are worth highlighting, as they solve problems not addressed by the international reference models.

The first is the sustainability badge. Its creation came from a recurring observation: artifacts can "work" and still be difficult to maintain, understand, or extend. A monolithic two-thousand-line script can run and produce the paper's numbers. But what is its value to a graduate student who tries, two years later, to adapt it to a new research question? The Sustainable badge recognizes and rewards the effort of organization, modularization, and internal documentation of the code. In doing so, it signals that the community values not only point-in-time verification but also the possibility of long-term reuse.

The second is the interactive structure of the review process. Here lies, perhaps, the most interesting point for this column. The first round, which deliberately has no decision, turns what would be merely a judgment into a space for learning. Researchers learn, during the cycle itself, what is expected of a mature artifact: which criteria the README must meet, how to describe hardware requirements, how to separate installation from execution, and how to organize the evidence for each of the paper's central results.

Within a few editions, this learning is reflected in artifacts that are better documented, more reproducible, and more sustainable. This happens not because authors were punished for their mistakes, but because the process taught them, in practice, what a quality artifact is.

There is a similar effect on the reviewers' side. The CTAs have also worked as a school for evaluators. Through the meetings, contact with experienced reviewers, the mandatory proof of execution, and the conversation with authors, new reviewers are trained in good practices of evaluation, reproducibility, and research engineering. Among them are graduate students and industry professionals.

The CTAs are, at the same time, an instrument of evaluation and an instrument of training. This dual function is probably a necessary condition for building a healthy and sustainable culture of quality artifacts in Brazil.

## The numbers and what lies behind them

The results are striking. In the first experience (SBSeg 2023), only 56.52% of the submitted artifacts received the availability badge, and only 13.04% received the reproducibility badge. In 2025, 100% of the 38 SBSeg artifacts received the availability badge, 84.21% the functionality badge, and 57.89% the reproducibility badge. Even the sustainability badge, created to meet a deeper requirement, reached 71.05% at SBSeg 2025.

SBSeg also recorded a 31% growth in the number of artifact submissions between 2024 and 2025. This is a clear sign that the process generates buy-in, not rejection.

More important than the numbers is the cultural change they reflect. Researchers begin to plan experiments and systems with reproducibility in mind from the start, and not as a last-minute adjustment before publication. README templates, review forms, and guides for authors and reviewers, now publicly available at [https://doc-artefatos.github.io](https://doc-artefatos.github.io), begin to circulate among advisors and students as a reference for good practice. In some labs, the skeleton of the artifact starts to be built alongside the skeleton of the paper.

Among the main lessons learned, four stand out:

- Artifact review generally requires more effort than reviewing the papers themselves.
- Objective badge criteria considerably reduce the subjectivity of the reviews.
- Proof of execution is an essential element in evaluating reproducibility.
- Early, guided interaction between authors and reviewers is decisive for the efficiency of the process.

## Why this matters for science, for training, and for the profession

Some treat artifact evaluation as just another bureaucratic requirement, one more demand on an already overloaded academic system. This way of seeing confuses cost with investment. Without evaluated artifacts, the scientific literature accumulates claims that no one can verify, experiments that cannot be reproduced, and systems whose critical details exist only in the memory of those who wrote them.

Institutionalizing artifact evaluation is, above all, an act of care for the community. It raises the standard of documentation. It values the engineering work that underpins research, often invisible in traditional academic metrics. It publicly recognizes authors who release quality materials. And it creates the conditions for students and early-career researchers to find reusable foundations on which to advance, instead of reimplementing from scratch what others have already done.

There is also an effect that goes beyond the boundaries of academia and deserves special attention in a column about Education. When students learn, during the evaluation cycle, what a well-structured README is, how to organize dependencies, how to document hardware requirements, how to separate installation from execution, and how to make an experiment reproducible in a clean environment, they are also learning software engineering practices that the market demands every day.

Modularization, readability, traceability, packaging, execution automation, and clarity of documentation are not just badge criteria. They are central professional competencies for anyone who will build products in companies, startups, or public-sector development teams.

Artifact evaluation broadens the professional training of researchers in formation. It connects the rigor of science to the rigor of industry and helps prepare professionals who are better able to deliver reliable, sustainable, and auditable software outside the academic environment.

There are challenges, of course. Evaluating artifacts takes more time than evaluating papers, it requires training reviewers, and it imposes an initial cost on authors. But the Brazilian experience shows that these costs are quickly offset. With clear guidelines, reusable templates, and iterative cycles, the process becomes increasingly efficient, and the artifacts increasingly better.

## An invitation to the SBC community

The experience of SBSeg and SBRC shows that it is possible to adapt good international practices to the Brazilian context, respecting local limitations and, at the same time, raising the scientific standard of national events.

More than that, it shows that this process does not need to start big. It can start simple and optional, with a reduced set of badges focused on availability and functionality, and gradually evolve toward reproducibility and sustainability as the community matures. All the material produced (badges, review forms, guides for authors and reviewers, and a README template) is available for reuse at [https://doc-artefatos.github.io](https://doc-artefatos.github.io). The ACM CCR paper offers a practical roadmap, with pitfalls to avoid and process decisions already tested.

So here is a direct invitation: national computing events should consider gradually adopting artifact evaluation processes. If we want more rigorous, transparent, and relevant science, and a training of researchers more connected to the demands of current research and the job market, we need to go beyond the published paper.

And you, reader: have you stopped to think about what happens to your research after the paper is accepted? Would the artifact that supports your results be ready to be run, in a clean environment, by someone who has never spoken with you? And, more importantly: are the researchers you advise learning to produce it during their training?

## References

HEINRICH, Tiago; KREUTZ, Diego et al. An Experience Report on Artifact Evaluation in Brazilian Conferences. ACM SIGCOMM Computer Communication Review, v. 56, n. 1, Apr. 2026. Available at: [https://dl.acm.org/doi/10.1145/3717554.3717558](https://dl.acm.org/doi/10.1145/3717554.3717558). Accessed: May 2026.

EUROSYS ARTIFACT EVALUATION. EuroSys Artifact Evaluation Process. Available at: [https://sysartifacts.github.io/eurosys2024/](https://sysartifacts.github.io/eurosys2024/). Accessed: May 2026.

OSDI ARTIFACT EVALUATION. OSDI Artifact Evaluation. Available at: [https://www.usenix.org/osdi24/call-for-artifacts](https://www.usenix.org/osdi24/call-for-artifacts). Accessed: May 2026.

## How to cite this article

KREUTZ, Diego; HEINRICH, Tiago. Entre a teoria e a prática: a experiência brasileira na avaliação de artefatos científicos. SBC Horizontes, 16 jun. 2026. ISSN 2175-9235. Originally published in Portuguese. Available at: [https://horizontes.sbc.org.br/index.php/2026/06/entre-a-teoria-e-a-pratica/](https://horizontes.sbc.org.br/index.php/2026/06/entre-a-teoria-e-a-pratica/). Accessed: DD month. YYYY.

## About the authors

**Diego Kreutz.** I am a professor at the Federal University of Pampa (UNIPAMPA), I work in the Graduate Program in Software Engineering (PPGES), and I co-coordinate AI Horizon Labs. My research focuses on cybersecurity, applied artificial intelligence, and secure digital infrastructures. I co-chaired SBSeg 2024 and have worked, together with researchers from the cybersecurity, computer networks, and distributed systems communities, on building and consolidating Brazilian processes for evaluating scientific artifacts, the subject of this article. I believe that open science, reproducibility, transparency, and the training of people are inseparable pillars of quality research, and that scientific output needs to move beyond the PDF, incorporating software, data, experiments, and reproducible artifacts as an integral part of scientific knowledge. Lattes CV: [http://lattes.cnpq.br/2781747995973774](http://lattes.cnpq.br/2781747995973774)

**Tiago Heinrich.** I am a researcher at the Max Planck Institute for Informatics (MPI), in Germany, working in cybersecurity, systems, and computer networks. Publications Chair for Artifact Evaluation at USENIX Security 2025 and 2026. I have collaborated with colleagues on creating the Brazilian model for evaluating scientific artifacts addressed in this report. Our proposal draws on international review models, which we adapted and improved to meet the specific demands of the Brazilian cybersecurity and computer networks communities. Lattes CV: [http://lattes.cnpq.br/1318030512054485](http://lattes.cnpq.br/1318030512054485). Website: [https://www.mpi-inf.mpg.de/tiago-heinrich](https://www.mpi-inf.mpg.de/tiago-heinrich)
