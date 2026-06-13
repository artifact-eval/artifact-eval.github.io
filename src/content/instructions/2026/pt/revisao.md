---
title: Instruções para revisão
section: revisao
year: 2026
lang: pt
order: 2
summary: Papel do revisor, processo em duas etapas, critérios por selo e entrega das revisões.
---

Seu objetivo como revisor de artefato consiste em garantir que a qualidade do artefato corresponda com o conteúdo do artigo e os requisitos mínimos esperados para a obtenção de cada selo.

> **Nota:** observe que o período de revisão é relativamente curto. Recomendamos iniciar suas revisões assim que receber sua tarefa, já que dois selos requerem a execução do artefato.

## Passos para a avaliação de um artefato

O processo de revisão pode ser realizado em um ambiente de sua preferência, desde que satisfaça os requisitos mínimos do ambiente de execução esperado para o artefato. Recomendamos a execução do artefato (quando aplicável) em um ambiente virtual, por trazer praticidade para os revisores e garantir que componentes presentes na sua máquina local não prejudiquem o processo de avaliação (uma instalação limpa em um ambiente novo pode reduzir imprevistos).

Todos os recursos adicionais necessários para execução do artefato (infraestrutura de nuvem, chaves SSH etc.) devem estar presentes no apêndice que descreve o artefato.

O artefato em avaliação está relacionado a um artigo em avaliação pelos comitês técnicos da conferência. O foco de um revisor do CTA está voltado para o artefato e não para a revisão do artigo. No entanto, caso seja encontrado algum problema, ele deve ser relatado aos coordenadores de avaliação de artefatos.

> **Nota:** lembre-se de que todos os artefatos, análises e discussões são confidenciais.

## Processo de revisão

No momento em que um artefato é alocado para revisão, você já pode começar o trabalho. Quanto antes você começar, melhor, pois permite que problemas sejam encontrados e discutidos com os autores. Neste ano teremos a revisão em duas etapas:

Na **primeira etapa (r1)** os revisores fazem a revisão do artefato considerando os critérios de avaliação. Durante este processo, mensagens podem ser postadas na plataforma hotcrp — discussões entre membros do comitê de revisão ou perguntas para os autores, como por exemplo perguntas em relação a problemas encontrados no artefato. No final do processo de revisão você deve submeter um parecer que será apresentado para os autores. Este deve destacar as etapas que foram realizadas para a avaliação de cada selo, o processo de execução observado e o resultado alcançado (problemas no processo de execução devem estar claramente explicados na revisão). Os autores vão responder aos pontos levantados nesta etapa na fase de rebuttal.

A **segunda etapa (r2-decision)** ocorrerá após a fase de rebuttal dos autores. Nela, os autores, com base na revisão realizada na primeira fase, devem esclarecer dúvidas, solucionar problemas encontrados, informar eventuais equívocos e/ou explicar algo que passou despercebido aos revisores. Seu papel como revisor na segunda etapa consiste em considerar os pontos levantados na primeira fase e na fase de rebuttal para tomar uma decisão sobre quais selos devem ser atribuídos ou não.

Calendário do ciclo de revisão:

- Prazo para Submissão de Artefatos
- Rodada 1 de Revisão (r1)
- Fase de Rebuttal
- Decisão do Revisor (r2-decision)

*As datas estão disponíveis no hotcrp.*

> **Nota:** procure escrever sua revisão de forma precisa, impessoal e polida, considerando que a mesma estará disponível para os autores em uma fase posterior do processo.

## Critérios de avaliação

Para realizar esta atividade com excelência, você deve considerar os quatro selos e seus respectivos requisitos mínimos que devem ser alcançados para a alocação de um selo.

### Artefatos Disponíveis (Selo D)
É esperado que o código e/ou dados estejam disponíveis em um repositório estável (como GitHub e GitLab). Neste repositório é esperado encontrar um README.md com os [requisitos mínimos do README.md](/pt/instrucoes/2026/submissao/).

### Artefatos Funcionais (Selo F)
É esperado que o código e/ou artefato possa ser executado e o revisor consiga observar algumas de suas funcionalidades. Para adquirir este selo, é importante que informações adicionais estejam presentes no README.md do repositório, como lista de dependências, lista de versões das dependências/linguagens/ambiente, descrição do ambiente de execução, instruções de instalação e execução, e um exemplo de execução mínima.

> **Nota:** como revisor, além de verificar que o artefato possui os respectivos critérios, é necessário a execução do artefato. Na sua revisão será esperada uma prova de execução, com alguns dos outputs apresentados pela ferramenta.

### Artefatos Sustentáveis (Selo S)
É esperado que o código e/ou artefato esteja modularizado, organizado, inteligível e de fácil compreensão. Para obter o selo é interessante que exista uma documentação mínima do código (descrevendo arquivos, funções, ...), legibilidade mínima de código e que os avaliadores consigam identificar as principais reivindicações do artigo no artefato.

### Experimentos Reprodutíveis (Selo R)
É esperado que o revisor consiga reproduzir as principais reivindicações apresentadas no artigo. Para obter este selo é esperado instrução para executar as principais reivindicações (e.g., resultados dos principais gráficos/tabelas) e descrição de um processo de como foram executados os experimentos para chegar até o resultado do artigo.

> **Nota:** para a atribuição do selo você deve reproduzir (executar) os experimentos apresentados no artigo através do conteúdo encontrado no artefato, alcançando as reivindicações encontradas no artigo, reproduzindo tabelas e figuras. Na sua revisão é esperado um resumo com estes resultados.

## Entrega das revisões

Para cada artefato, você deve produzir uma breve revisão justificando a razão por atribuir ou negar um selo ao artefato. Esta avaliação só deve ser completada após o processo de avaliação ter sido realizado. Para facilitar o processo de avaliação, um exemplo está disponível junto ao formulário de submissão.

## Melhores trabalhos

Para atribuir os prêmios de melhores trabalhos, utilizaremos como um dos critérios a classificação atribuída pelos revisores na categoria "Candidato ao Prêmio Artefato Distinto". Dessa forma, espera-se que os revisores atribuam notas mais elevadas (3 e 4) para trabalhos com pelo menos 3 selos e que se destaquem pela qualidade em relação aos demais. Ainda, espera-se que trabalhos que não obtiveram mais de dois selos não possuam nota superior à nota mínima (1).
