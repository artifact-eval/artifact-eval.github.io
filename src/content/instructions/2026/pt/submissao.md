---
title: Instruções de submissão
section: submissao
year: 2026
lang: pt
order: 1
summary: Como registrar e submeter artefatos, requisitos mínimos do README.md, apêndice e requisitos por selo.
---

Quatro selos de qualidade podem ser considerados para um artefato.

Após a notificação de aceite do artigo, os autores podem opcionalmente submeter o(s) artefato(s) relacionado(s) (os autores do Salão de Ferramentas são **obrigados** a fazer a submissão do artefato).

Os autores devem fazer o registro do artefato na plataforma **hotcrp**. Este registro requer algumas informações como contato dos autores, um link para o artefato e opcionalmente um apêndice. Vale lembrar que o processo de revisão do CTA é independente da revisão do artigo no JEMS e as submissões são *single-blind*.

Importante ressaltar que para um artefato o comitê de revisão espera que:

- os requisitos mínimos do README estejam presentes no repositório;
- informações sobre recursos específicos estejam presentes no apêndice;
- o artefato atenda os critérios dos selos solicitados;
- os autores respondam às perguntas postadas pelos revisores na plataforma, bem como enviem a carta de rebuttal dentro do prazo.

Todo o processo de revisão do artefato será realizado pela plataforma hotcrp. Os autores com artefatos registrados para o processo de revisão serão notificados sobre o acesso à plataforma e devem observar os e-mails enviados pela plataforma com dúvidas do comitê de revisão. Todo o processo de comunicação dos revisores de artefatos com os autores é realizado pelo hotcrp.

## Requisitos mínimos do README.md (Obrigatório)

Para facilitar o processo de avaliação dos artefatos, foi criado um modelo de `README.md` (Obrigatório) com todos os campos mínimos esperados para um artefato. Veja [exemplos de README.md de artefatos com 4 selos](/pt/instrucoes/2026/exemplos-readme/).

```markdown
# Título do projeto
Resumo descrevendo o objetivo do artefato, com o respectivo título e resumo do artigo.

# Estrutura do README.md
Apresenta a estrutura do README.md, descrevendo como o repositório está organizado.

# Selos Considerados
Os autores devem descrever quais selos devem ser considerados no processo de
avaliação. Como por exemplo: "Os selos considerados são: Disponível e Funcional."

# Informações básicas
Informações básicas de todos os componentes necessários para a execução e
replicação dos experimentos, descrevendo todo o ambiente de execução, com
requisitos de hardware e software.

# Dependências
Informações relacionadas a benchmarks utilizados e dependências para a execução.
Busque deixar o mais claro possível: versões de dependências e processos para
acessar recursos de terceiros caso necessário.

# Preocupações com segurança
Caso a execução do artefato ofereça algum tipo de risco para os avaliadores,
este risco deve ser descrito e o processo adequado para garantir a segurança
dos revisores deve ser apresentado.

# Instalação
O processo de baixar e instalar a aplicação. Ao final deste processo já é
esperado que a aplicação/benchmark/ferramenta consiga ser executada.

# Teste mínimo
Um passo a passo para a execução de um teste mínimo, que permite aos revisores
observar algumas funcionalidades do artefato e identificar problemas de instalação.

# Experimentos
Um passo a passo para a execução e obtenção dos resultados do artigo. Cada
reivindicação deve ser apresentada em uma subseção, com detalhes de arquivos de
configuração, comandos, flags, tempo esperado de execução, recursos esperados
(ex.: 1GB RAM/Disk) e resultado esperado.
## Reivindicação #X
## Reivindicação #Y

# LICENSE
Apresente a licença.
```

É **obrigatório** que TODAS as seções apresentadas no requisito mínimo do README.md estejam presentes. Se você tiver qualquer dúvida, por favor, entre em contato conosco.

> **Nota:** antes de submeter o seu artefato, é interessante que os autores realizem a instalação e execução do seu artefato em um ambiente novo (máquina virtual) seguindo somente as instruções presentes no README.md.

## Recursos específicos ou restrições

Caso recursos adicionais sejam necessários (infraestrutura de nuvem, chaves SSH, etc.) para a avaliação do artefato, estas informações devem ser submetidas através de um apêndice. Nele os autores incluem informações adicionais (privadas, como chaves SSH para acessar o Google Cloud) para auxiliar os revisores do Comitê Técnico de Artefatos.

O modelo LaTeX de apêndice está disponível em [Exemplo de Apêndice](https://www.overleaf.com/read/jscjwsnqsxfh). Todos os campos devem ser apresentados no apêndice, além dos requisitos mínimos para o README.md que são obrigatórios. O apêndice é um critério adicional no momento em que recursos específicos acabam sendo necessários para a avaliação do artefato ou quando restrições de acesso existam.

## Requisitos por selo

Para que o trabalho/artefato seja apto a receber o selo, os respectivos requisitos devem ser alcançados:

### Artefatos Disponíveis (Selo D)
É esperado que o código e/ou dados estejam disponíveis em um repositório estável (como GitHub e GitLab). Neste repositório é esperado encontrar um README.md com os requisitos mínimos. O arquivo README.md do repositório pode ser o mesmo arquivo submetido para apreciação do CTA.

### Artefatos Funcionais (Selo F)
É esperado que o código e/ou artefato possa ser executado e o revisor consiga observar algumas de suas funcionalidades. Para adquirir este selo, é importante que informações adicionais estejam presentes no README.md do repositório, como:

- lista de dependências;
- lista de versões das dependências/linguagens/ambiente;
- descrição do ambiente de execução;
- instruções de instalação e execução;
- um exemplo de execução mínima.

### Artefatos Sustentáveis (Selo S)
É esperado que o código e/ou artefato esteja modularizado, organizado, inteligível e de fácil compreensão. Para obter o selo é interessante que:

- exista uma documentação mínima do código (descrevendo arquivos, funções, ...);
- haja legibilidade mínima de código;
- os avaliadores consigam identificar as principais reivindicações do artigo no artefato.

### Experimentos Reprodutíveis (Selo R)
É esperado que o revisor consiga reproduzir as principais reivindicações apresentadas no artigo. Sugere-se a utilização de máquinas virtuais, containers ou scripts que facilitem e reduzam o tempo de criação do ambiente. Para obter este selo é esperado:

- instrução para executar as principais reivindicações (e.g., resultados dos principais gráficos/tabelas);
- descrição de um processo de como foram executados os experimentos para chegar até o resultado do artigo.

Para atender esses requisitos sugere-se a inclusão de script(s) que automatizem ao máximo todo o processo de reprodução.

## Processo de revisão

O processo de revisão de artefatos está dividido em duas etapas. Como autor, você deve ficar atento às perguntas levantadas pelos revisores na plataforma. Após o término da primeira etapa de revisão (r1), os autores devem submeter uma carta de rebuttal que visa esclarecer problemas encontrados pelos revisores e auxiliar no processo de revisão. Por fim, os revisores vão considerar as revisões da primeira fase e a carta de rebuttal para tomar uma decisão na segunda fase de avaliação (r2-decision).

Calendário do ciclo de revisão:

- Prazo para Submissão de Artefatos
- Rodada 1 de Revisão (r1)
- Fase de Rebuttal
- Decisão do Revisor (r2-decision)

*As datas estão disponíveis no hotcrp.*
