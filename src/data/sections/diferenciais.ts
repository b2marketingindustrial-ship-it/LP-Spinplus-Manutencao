/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Os 5 diferenciais vêm do Quem Somos da Spinplus e da página de assistência
 * técnica; a frase de autoridade é a síntese aprovada no briefing. São 5 exatos:
 * o grid é `lg:grid-cols-5`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

// Banner enviado pelo cliente (19/10/2026, segunda versão): o navy à esquerda já vem fundido na foto.
import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Seu compressor precisa', 'seguir operando.'],
  text: `Desde 2003 em ar comprimido, a ${site.brandShort} mantém compressores e secadores Ingersoll Rand com equipe certificada pelo fabricante, peças originais e técnicos habilitados para atuação em plataformas.`,
  scene: {
    src: cenario,
    alt: 'Técnico de óculos de proteção fazendo diagnóstico com aparelho de medição na unidade compressora aberta de um compressor',
  },
  reasons: [
    {
      icon: 'calendar',
      title: 'Desde 2003',
      description: 'Especialização em ar comprimido.',
    },
    {
      icon: 'shield',
      title: 'Autorizada Ingersoll',
      description: 'Serviços autorizados no RJ.',
    },
    {
      icon: 'gear',
      title: 'Peças originais',
      description: 'Peças originais do fabricante.',
    },
    {
      icon: 'users',
      title: 'Equipe certificada',
      description: 'Certificação pela Ingersoll Rand.',
    },
    {
      icon: 'offshore',
      title: 'Atendimento offshore',
      description: 'Habilitados para plataformas.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
