import type { Lang } from '../i18n/ui';

export type SealKey = 'D' | 'F' | 'S' | 'R';

export interface SealInfo {
  key: SealKey;
  color: string;
  /** One-line description per language. */
  desc: Record<Lang, string>;
  /** Bullet requirements per language. */
  requirements: Record<Lang, string[]>;
}

export const sealInfo: SealInfo[] = [
  {
    key: 'D',
    color: 'var(--seal-d)',
    desc: {
      pt: 'Código e/ou dados disponíveis em um repositório estável e público.',
      en: 'Code and/or data available in a stable, public repository.',
      es: 'Código y/o datos disponibles en un repositorio estable y público.',
    },
    requirements: {
      pt: [
        'Disponível em repositório estável (GitHub, GitLab, ...).',
        'README.md com os requisitos mínimos presente no repositório.',
      ],
      en: [
        'Available in a stable repository (GitHub, GitLab, ...).',
        'A README.md with the minimum requirements present in the repository.',
      ],
      es: [
        'Disponible en un repositorio estable (GitHub, GitLab, ...).',
        'Un README.md con los requisitos mínimos presente en el repositorio.',
      ],
    },
  },
  {
    key: 'F',
    color: 'var(--seal-f)',
    desc: {
      pt: 'O artefato pode ser executado e o revisor observa suas funcionalidades.',
      en: 'The artifact can be executed and the reviewer observes its functionality.',
      es: 'El artefacto puede ejecutarse y el revisor observa sus funcionalidades.',
    },
    requirements: {
      pt: [
        'Lista de dependências e suas versões.',
        'Descrição do ambiente de execução.',
        'Instruções de instalação e execução.',
        'Um exemplo de execução mínima.',
      ],
      en: [
        'List of dependencies and their versions.',
        'Description of the execution environment.',
        'Installation and execution instructions.',
        'A minimal execution example.',
      ],
      es: [
        'Lista de dependencias y sus versiones.',
        'Descripción del entorno de ejecución.',
        'Instrucciones de instalación y ejecución.',
        'Un ejemplo de ejecución mínima.',
      ],
    },
  },
  {
    key: 'S',
    color: 'var(--seal-s)',
    desc: {
      pt: 'Código modularizado, organizado, inteligível e de fácil compreensão.',
      en: 'Modular, organized, intelligible, and easy-to-understand code.',
      es: 'Código modularizado, organizado, inteligible y fácil de comprender.',
    },
    requirements: {
      pt: [
        'Documentação mínima do código (arquivos, funções, ...).',
        'Legibilidade mínima de código.',
        'Permite identificar as principais reivindicações do artigo no artefato.',
      ],
      en: [
        'Minimal code documentation (files, functions, ...).',
        'Minimal code readability.',
        "Lets evaluators identify the paper's main claims within the artifact.",
      ],
      es: [
        'Documentación mínima del código (archivos, funciones, ...).',
        'Legibilidad mínima del código.',
        'Permite identificar las principales afirmaciones del artículo en el artefacto.',
      ],
    },
  },
  {
    key: 'R',
    color: 'var(--seal-r)',
    desc: {
      pt: 'As principais reivindicações do artigo podem ser reproduzidas pelo revisor.',
      en: "The paper's main claims can be reproduced by the reviewer.",
      es: 'Las principales afirmaciones del artículo pueden ser reproducidas por el revisor.',
    },
    requirements: {
      pt: [
        'Instruções para executar as principais reivindicações (gráficos/tabelas).',
        'Descrição de como os experimentos foram executados.',
        'Sugere-se scripts que automatizem a reprodução (VMs, containers).',
      ],
      en: [
        'Instructions to run the main claims (figures/tables).',
        'A description of how the experiments were run.',
        'Scripts that automate reproduction are suggested (VMs, containers).',
      ],
      es: [
        'Instrucciones para ejecutar las principales afirmaciones (gráficos/tablas).',
        'Una descripción de cómo se ejecutaron los experimentos.',
        'Se sugieren scripts que automaticen la reproducción (VMs, contenedores).',
      ],
    },
  },
];
