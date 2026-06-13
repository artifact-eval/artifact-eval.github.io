# Instruções para revisão

Seu objetivo como um revisor de artefato consiste em garantir que a qualidade do artefato corresponda com o conteúdo do artigo e os **requisitos mínimos esperados para a obtenção de cada selo**.

> **Note:**
> Observe que o período de revisão é relativamente curto. Recomendamos iniciar suas revisões assim que receber sua tarefa, já que dois selos requerem a execução do artefato.

## Passos para a Avaliação de um Artefato

O processo de revisão pode ser realizado em um ambiente de sua preferência, desde que satisfaça os requisitos mínimos do ambiente de execução esperado para o artefato. Recomendamos a execução do artefato (quando aplicável) em um ambiente virtual, por trazer praticidade para os revisores e garantir que componentes presentes na sua máquina local não prejudiquem o processo de avaliação (uma instalação limpa em um ambiente novo pode reduzir imprevistos).

Todos os recursos adicionais necessários para execução do artefato (infraestrutura de nuvem, chaves SSH etc.) devem estar presentes no apêndice que descreve o artefato.

O artefato em avaliação está relacionado a um artigo em avaliação pelos comitês técnicos da conferência. O foco de um revisor do CTA está voltado para o artefato e não para a revisão do artigo. No entanto, caso seja encontrado algum problema, ele deve ser relatado aos coordenadores de avaliação de artefatos.

> **Note:**
> Lembre-se de que todos os artefatos, análises e discussões são confidenciais.

## Processo de Revisão

No momento que um artefato é alocado para revisão, você já pode começar o trabalho de revisão. Quanto antes você começar melhor, pois permite que problemas sejam encontrados e discutidos com os autores. Neste ano teremos **a revisão em 2 etapas**: 
- Na primeira etapa (**r1**) os revisores fazem a revisão do artefato considerando os [critérios de avaliação](#critérios-de-avaliação). Durante este processo mensagens podem ser postadas na plataforma hotcrp, estas podem ser discussões entre membros do comitê de revisão, como perguntas para os autores, como por exemplo perguntas em relação a problemas encontrados no artefato.
No final do processo de revisão você deve submeter um parecer que será apresentado para os autores. Este deve destacar as etapas que foram realizadas para a avaliação de cada selo, o processo de execução observado e resultado alcançado (problemas no processo de execução deve estar claramente explicados na revisão). Os autores vão responder aos pontos levantados nesta etapa na fase de rebuttal.

- A segunda etapa (**r2-decision**) ocorrerá após a fase de rebuttal dos autores. No qual, os autores com base na revisão realizada na primeira fase devem esclarecer dúvidas, solucionar problemas encontrados, informar eventuais equívocos e/ou explicar algo que passou despercebido aos revisores. Seu papel como revisor na segunda etapa consiste em considerar os pontos levantados na primeira fase e na fase de rebuttal para tomar uma decisão em quais selos devem ser atribuídos ou não. 

Calendário de revisão para o ciclo de revisão:
- Prazo para Submissão de Artefatos 
- Rodada 1 de Revisão (r1) 
- Fase de Rebuttal
- Decisão do Revisor (r2-decision)

*As datas estão disponíveis no [hotcrp](https://hotcrp.c3sl.ufpr.br/). 

> **Note**
> Procure escrever sua revisão de forma precisa, impessoal e polida, considerando que a mesma estará disponível para os autores em uma fase posterior do processo.

## Critérios de avaliação

Para realizar esta atividade com excelência, você deve considerar os quatro Selos e seus respectivos requisitos mínimos que devem ser alcançados para a alocação de um selo:

### Artefatos Disponíveis (SeloD)

É esperado que o código e/ou dados estejam **disponíveis em um repositório estável** (como GitHub e GitLab). Neste repositório é esperado encontrar um [README.md](https://github.com/matiassingers/awesome-readme) com os **requisitos mínimos do README.md**. Os requisitos mínimos do README.md sendo:

```
# Título projeto

Resumo descrevendo o objetivo do artefato, com o respectivo título e resumo do artigo.

# Estrutura do readme.md

Apresenta a estrutura do readme.md, descrevendo como o repositório está organizado.

# Selos Considerados

Os autores devem descrever quais selos devem ser considerados no processo de avaliação. Como por exemplo: ``Os selos considerados são: Disponíveis e Funcionais.''

# Informações básicas

Esta seção deve apresentar informações básicas de todos os componentes necessários para a execução e replicação dos experimentos.
Descrevendo todo o ambiente de execução, com requisitos de hardware e software.

# Dependências

Informações relacionadas a benchmarks utilizados e dependências para a execução devem ser descritas nesta seção.
Busque deixar o mais claro possível, apresentando informações como versões de dependências e processos para acessar recursos de terceiros caso necessário.

# Preocupações com segurança

Caso a execução do artefato ofereça algum tipo de risco para os avaliadores. Este risco deve ser descrito e o processo adequado para garantir a segurança dos revisores deve ser apresentado.

# Instalação

O processo de baixar e instalar a aplicação deve ser descrito nesta seção. Ao final deste processo já é esperado que a aplicação/benchmark/ferramenta consiga ser executada.

# Teste mínimo

Esta seção deve apresentar um passo a passo para a execução de um teste mínimo.
Um teste mínimo de execução permite que os revisores consigam observar algumas funcionalidades do artefato.
Este teste é útil para a identificação de problemas durante o processo de instalação.

# Experimentos

Esta seção deve descrever um passo a passo para a execução e obtenção dos resultados do artigo. Permitindo que os revisores consigam alcançar as reivindicações apresentadas no artigo.
Cada reivindicações deve ser apresentada em uma subseção, com detalhes de arquivos de configurações a serem alterados, comandos a serem executados, flags a serem utilizadas, tempo esperado de execução, expectativa de recursos a serem utilizados como 1GB RAM/Disk e resultado esperado.

Caso o processo para a reprodução de todos os experimentos não seja possível em tempo viável. Os autores devem escolher as principais reivindicações apresentadas no artigo e apresentar o respectivo processo para reprodução.

## Reivindicações #X

## Reivindicações #Y

# LICENSE

Apresente a licença.

```

### Artefatos Funcionais (SeloF)

É esperado que o código e/ou artefato possa ser **executado** e o revisor consiga observar algumas de suas **funcionalidades**. Para adquirir este artefato, é importante que informações adicionais estejam presentes no README.md do repositório, como
  1. lista de dependências;
  2. lista de versões das dependências/linguagens/ambiente;
  3. descrição do ambiente de execução;
  4. instruções de instalação e execução;
  5. um exemplo de execução mínima.

> **Note:**
> Como revisor além de verificar que o artefato possua os respectivos critérios é **necessário a execução do artefato**. Na sua revisão será esperado uma prova de execução, com alguns dos *outputs* apresentados pela ferramenta.

### Artefatos Sustentáveis (SeloS)

É esperado que o código e/ou **artefato esteja modularizado, organizado, inteligível e de fácil compreensão**. Para obter o selo é interessante que:
  1. exista uma documentação mínima do código (descrevendo arquivos, funções,..);
  2. legibilidade mínima de código;
  3. permita que os avaliadores consigam identificar as principais reivindicações do artigo no artefato.

### Experimentos Reprodutíveis (SeloR)

É esperado que o **revisor consiga reproduzir as principais reivindicações apresentadas no artigo**. Para obter este selo é esperado:
  1. instrução para executar as principais reivindicações (e.g., resultados dos principais gráficos/tabelas);
  2. descrição de um processo de como foram executados os experimentos para chegar até o resultado do artigo;

> **Note:**
> Para a atribuição do selo você deve reproduzir (executar) os experimentos apresentados no artigo através do conteúdo encontrado no artefato. Alcançando as reinvidicações encontradas no artigo, reproduzindo tabelas e figuras. Na sua revisão é esperado um resumo com estes resultados.

## Entrega das Revisões

Para cada artefato, você deve produzir uma breve revisão justificando a razão por atribuir ou negar um selo ao artefato. Esta avaliação só deve ser completada após o processo de avaliação ter sido realizado.

Para facilitar o processo de avaliação, um exemplo está disponível junto ao formulário de submissão.

### Melhores trabalhos

Para atribuir os prêmios de melhores trabalhos, utilizaremos como um dos critérios a classificação atribuída pelos revisores na categoria “Candidato ao Prêmio Artefato Distinto”. Dessa forma, espera-se que os revisores atribuam notas mais elevadas (3 e 4) para trabalhos com pelo menos 3 selos e que se destaquem pela qualidade em relação aos demais. Ainda, se espera que trabalhos que não obtiveram mais de dois selos não possuam nota superior a nota mínima (1).


