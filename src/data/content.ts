/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Conteúdo da Spinplus, extraído do briefing e da página de assistência técnica
 * autorizada do cliente (docs/BRIEFING.md).
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu produto',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Assistência técnica autorizada',
  /** Carrega a palavra-chave da campanha e a marca atendida (entrada 15). */
  title: `${site.product} ${site.context}`,
  text: 'Manutenção preventiva, corretiva e reconstrução de unidades compressoras, com técnicos certificados pela Ingersoll Rand e peças originais de fábrica.',
  banner: {
    src: heroBg,
    alt: 'Compressor de parafuso Ingersoll Rand RS 75i instalado em sala de ar comprimido, com tubulação e reservatório',
  },
  points: [
    { icon: 'gear', line1: 'Manutenção preventiva', line2: 'e corretiva' },
    { icon: 'shield', line1: 'Técnicos', line2: 'certificados' },
    { icon: 'clock', line1: 'Atendimento 24 horas', line2: 'no Rio de Janeiro' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: 'Fale com a equipe técnica da Spinplus.',
  text: 'Informe o modelo do compressor e o tipo de atendimento que você precisa. Nossa equipe avalia o equipamento e retorna com a proposta de serviço.',
  trust: [
    { icon: 'shield', label: 'Técnicos certificados Ingersoll Rand' },
    { icon: 'gear', label: 'Peças originais de fábrica' },
    { icon: 'map-pin', label: 'Atendimento em todo o estado do RJ' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: `Seus dados são usados apenas para responder à sua solicitação de cotação, conforme a LGPD.`,
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
