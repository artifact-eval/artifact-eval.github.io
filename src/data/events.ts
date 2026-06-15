import type { Lang } from '../i18n/ui';

export interface Edition {
  /** Stable slug used in URLs, e.g. /pt/sbseg/2026/. */
  slug: string;
  /** Short display label, e.g. "SF'26". */
  label: string;
  year: number;
  /** Marks the active edition (highlighted chip). */
  current?: boolean;
  /** Track(s) the CTA evaluated, localized — e.g. Salão de Ferramentas, Trilha Principal, or both. */
  track?: Record<Lang, string>;
  /** Official event website (external). */
  officialUrl?: string;
  /** Proceedings (anais) on the SBC Open Library (SOL). */
  proceedingsUrl?: string;
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
      {
        slug: 'sbrc-2026',
        label: "TP'26 + SF'26",
        year: 2026,
        current: true,
        track: {
          pt: 'Salão de Ferramentas + Trilha Principal',
          en: 'Tools Track + Main Track',
          es: 'Salón de Herramientas + Pista Principal',
        },
        officialUrl: 'https://sbrc.sbc.org.br/2026/',
        proceedingsUrl: 'https://sol.sbc.org.br/index.php/sbrc/issue/view/1678',
      },
      {
        slug: 'sbrc-2025',
        label: "SF'25",
        year: 2025,
        track: {
          pt: 'Salão de Ferramentas',
          en: 'Tools Track',
          es: 'Salón de Herramientas',
        },
        officialUrl: 'https://sbrc.sbc.org.br/2025/pt_br/',
        proceedingsUrl: 'https://sol.sbc.org.br/index.php/sbrc/issue/view/1500',
      },
      {
        slug: 'wgrs-2024',
        label: "WGRS'24",
        year: 2024,
        track: {
          pt: 'WGRS — Workshop de Gerência e Operação de Redes e Serviços',
          en: 'WGRS — Workshop on Network and Service Management and Operation',
          es: 'WGRS — Taller de Gestión y Operación de Redes y Servicios',
        },
        officialUrl: 'https://sbrc.sbc.org.br/2024/workshops_aceitos.html',
        // WGRS proceedings are published within the SBRC 2024 anais.
        proceedingsUrl: 'https://sol.sbc.org.br/index.php/sbrc/issue/view/1340',
      },
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
      {
        slug: 'sbseg-2026',
        label: "TP'26 + SF'26",
        year: 2026,
        current: true,
        track: {
          pt: 'Salão de Ferramentas + Trilha Principal',
          en: 'Tools Track + Main Track',
          es: 'Salón de Herramientas + Pista Principal',
        },
        officialUrl: 'https://www.sbseg2026.uff.br',
        proceedingsUrl: 'https://sol.sbc.org.br/index.php/sbseg/issue/archive',
      },
      {
        slug: 'sbseg-2025',
        label: "TP'25 + SF'25",
        year: 2025,
        track: {
          pt: 'Salão de Ferramentas + Trilha Principal',
          en: 'Tools Track + Main Track',
          es: 'Salón de Herramientas + Pista Principal',
        },
        officialUrl: 'https://sbseg2025.ppgia.pucpr.br',
        proceedingsUrl: 'https://sol.sbc.org.br/index.php/sbseg/issue/archive',
      },
      {
        slug: 'sbseg-2024',
        label: "WTICG'24",
        year: 2024,
        track: {
          pt: 'Salão de Ferramentas + WTICG',
          en: 'Tools Track + WTICG',
          es: 'Salón de Herramientas + WTICG',
        },
        officialUrl: 'https://sbseg2024.ita.br/chamadas/wticg/',
        // SF and WTICG proceedings are published within the SBSeg 2024 anais.
        proceedingsUrl: 'https://sol.sbc.org.br/index.php/sbseg/issue/view/1348',
      },
      {
        slug: 'wticg-2023',
        label: "WTICG'23",
        year: 2023,
        track: {
          pt: 'WTICG — Workshop de Trabalhos de Iniciação Científica e de Graduação',
          en: 'WTICG — Workshop on Undergraduate and Early-Stage Research Works',
          es: 'WTICG — Taller de Trabajos de Iniciación Científica y de Graduación',
        },
        officialUrl:
          'https://www2.ufjf.br/noticias/2023/09/22/23a-edicao-do-simposio-brasileiro-em-seguranca-da-informacao-termina-com-recorde-de-participantes/',
        // WTICG 2023 proceedings are published within the SBSeg 2023 anais.
        proceedingsUrl: 'https://sol.sbc.org.br/index.php/sbseg/issue/view/1209',
      },
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
