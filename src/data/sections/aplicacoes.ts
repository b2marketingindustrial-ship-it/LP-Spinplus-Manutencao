/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * Os quatro contextos de manutenção documentados no briefing: compressores
 * industriais, unidades de parafuso, secadores e sistemas offshore.
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Aplicações',
  title: 'Onde a manutenção da Spinplus atua',
  text: 'Atendimento a sistemas de ar comprimido industriais, da sala de compressores em planta à operação embarcada.',
  items: [
    {
      id: 'compressores',
      label: 'Compressores industriais',
      description: 'Manutenção da linha Ingersoll Rand em sala de ar comprimido.',
      photo: { src: app1, alt: 'Compressor de parafuso Ingersoll Rand instalado em sala de ar' },
    },
    {
      id: 'parafuso',
      label: 'Unidades de parafuso',
      description: 'Revisão e reconstrução de unidades de parafuso.',
      photo: {
        src: app2,
        alt: 'Unidade compressora de parafuso sobre base, em bancada de oficina',
      },
    },
    {
      id: 'secadores',
      label: 'Secadores de ar',
      description: 'Secadores, filtros e drenos do tratamento de ar.',
      photo: {
        src: app3,
        alt: 'Secador de ar comprimido e filtros coalescentes da linha Ingersoll Rand',
      },
    },
    {
      id: 'offshore',
      label: 'Sistemas offshore',
      description: 'Equipe habilitada para ar comprimido em plataformas.',
      photo: { src: app4, alt: 'Plataforma de petróleo offshore com técnico no convés' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
}
