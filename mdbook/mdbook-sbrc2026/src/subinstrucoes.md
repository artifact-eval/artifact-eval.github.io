# Instruções de submissão

Quatro selos de qualidade podem ser considerados para um artefato.
Após a notificação de aceite do artigo, os autores podem opcionalmente submeter o(s) artefato(s) relacionado(s) (os autores do Salão de Ferramentas são obrigados a fazer a submissão do artefato).

Os autores devem fazer o registro do artefato na plataforma [hotcrp](https://hotcrp.c3sl.ufpr.br/).
Este registro requer algumas informações como contato dos autores, um link para o artefato e opcionalmente um apêndice.
Vale lembrar que o processo de revisão do CTA é independente da revisão do artigo no JEMS e as submissões são single-blind.

Importante ressaltar que para um artefato o comitê de revisão espera que:
1. [Os requisitos mínimos do README](#requisitos-mínimo-readmemd-obrigatório) estejam presentes no repositório;
2. Informações sobre [recursos específicos](#recursos-específicos-ou-restrições) estejam presentes no apêndice.
3. O artefato atenda os [critérios dos selos solicitados](#requisitos-por-selo);
4. Os autores respondam as perguntas postadas pelos revisores na plataforma, como enviem a carta de rebuttal dentro do prazo.

Todo o processo de revisão do artefato será realizado pela plataforma [hotcrp](https://hotcrp.c3sl.ufpr.br/).
Os autores com artefatos registrados para o processo de revisão serão notificados sobre o acesso à plataforma e devem observar por emails enviados pela plataforma com dúvidas do comitê de revisão.
Todo o processo de comunicação dos revisores de artefatos com os autores é realizado pelo hotcrp.

## Requisitos mínimo README.md (Obrigatório)

Para facilitar o processo de avaliação dos artefatos, foi criado um modelo de README.md (Obrigatório) com todos os campos mínimos esperados para um artefato. Veja [exemplos de README.md de Artefatos com 4 Selos](./exemplos-4selos.md). 

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

É obrigatório que **TODAS** as Seções apresentadas no requisito mínimo README.md estejam presentes.
Se você tiver qualquer dúvida, por favor, entre em contato conosco.

> **Note**
> Antes de submeter o seu artefato, é interessante que os autores realizem a instalação e execução do seu artefato em um ambiente novo (máquina virtual) seguindo somente as instruções presente no README.md.

### Recursos específicos ou restrições

Caso **recursos adicionais** sejam necessários (infraestrutura de nuvem, chaves SSH, etc.) para a avaliação do artefato, estas informações devem ser submetidas através de um apêndice.
Neste os autores incluem informações adicionais (privadas, como chaves SSH para acessar o Google Cloud) para auxiliar os revisores do Comitê Técnico de Artefatos.
O modelo LaTeX de apêndice está disponível em [Exemplo-Apendice](https://www.overleaf.com/read/jscjwsnqsxfh).
Todos os campos devem ser apresentados no apêndice, além dos requisitos mínimos para o README.md que são obrigatórios.

O apêndice é um critério **adicional** no momento que recursos específicos acabam sendo necessários para a avaliação do artefato ou restrições de acesso existam.
  	 
## Requisitos por selo

Para que o trabalho/artefato seja apto a receber o selo, os respectivos requisitos devem ser alcançados:

### Artefatos Disponíveis (SeloD)

É esperado que o código e/ou dados estejam **disponíveis em um repositório estável** (como GitHub e GitLab).
Neste repositório é esperado encontrar um [README.md](https://github.com/matiassingers/awesome-readme) com os **requisitos mínimos**. O arquivo README.md do repositório pode ser o mesmo arquivo submetido para apreciação do CTA.

### Artefatos Funcionais (SeloF)

É esperado que o código e/ou artefato possa ser **executado** e o revisor consiga observar algumas de suas **funcionalidades**.
Para adquirir este artefato, é importante que informações adicionais estejam presentes no README.md do repositório, como
  1. lista de dependências;
  2. lista de versões das dependências/linguagens/ambiente;
  3. descrição do ambiente de execução;
  4. instruções de instalação e execução;
  5. um exemplo de execução mínima.

### Artefatos Sustentáveis (SeloS)

É esperado que o código e/ou **artefato esteja modularizado, organizado, inteligível e de fácil compreensão**. Para obter o selo é interessante que:
  1. exista uma documentação mínima do código (descrevendo arquivos, funções,..);
  2. legibilidade mínima de código;
  3. permita que os avaliadores consigam identificar as principais reivindicações do artigo no artefato.

### Experimentos Reprodutíveis (SeloR)

É esperado que o **revisor consiga reproduzir as principais reivindicações apresentadas no artigo**. Sugere-se a utilização de máquinas virtuais, containers ou scripts que facilitem e reduzam o tempo de criação do ambiente. Para obter este selo é esperado:
  1. instrução para executar as principais reivindicações (e.g., resultados dos principais gráficos/tabelas);
  2. descrição de um processo de como foram executados os experimentos para chegar até o resultado do artigo.
Para atender esses requisitos sugere-se a inclusão de script(s) que automatizem ao máximo todo o processo de reprodução;

## Processo de revisão

O processo de revisão de artefatos está dividido em duas etapas de revisão, como autor você deve ficar atento às perguntas levantadas pelos revisores na plataforma. Após o término da primeira etapa de revisão (r1), os autores devem submeter uma carta de rebuttal que visa esclarecer problemas encontrados pelos revisores e auxiliar no processo de revisão. Por fim, os revisores vão considerar as revisões da primeira fase e a carta de rebuttal para tomar uma decisão na segunda fase de avaliação (r2-decision). 

Calendário de revisão para o ciclo de revisão:
- Prazo para Submissão de Artefatos 
- Rodada 1 de Revisão (r1) 
- Fase de Rebuttal
- Decisão do Revisor (r2-decision)

*As datas estão disponíveis no [hotcrp](https://hotcrp.c3sl.ufpr.br/). 

