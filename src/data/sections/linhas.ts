/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * LP de serviço: cada card é uma frente de manutenção da Spinplus e o card escuro
 * fecha o grid com o atendimento recorrente — os contratos de manutenção.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'
import marcasPhoto from '@assets/linhas/marcas.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Serviços',
  title: 'Manutenção em compressores e secadores',
  text: 'Serviços para compressores e secadores Ingersoll Rand, com equipe certificada pelo fabricante.',
  items: [
    {
      id: 'preventiva-corretiva',
      tag: 'Manutenção',
      title: 'Preventiva e corretiva',
      description: 'Intervenções programadas e correção de falhas no sistema de ar.',
      photo: {
        src: linha1,
        alt: 'Técnicos da Spinplus na manutenção de uma unidade compressora aberta',
      },
      features: ['Inspeção geral', 'Limpeza de filtros', 'Troca de lubrificantes'],
      dark: false,
    },
    {
      id: 'assistencia-tecnica',
      tag: 'Assistência',
      title: 'Assistência autorizada',
      description: 'Atendimento técnico em compressores e secadores da marca.',
      photo: {
        src: linha2,
        alt: 'Compressor de parafuso Ingersoll Rand da linha atendida pela Spinplus',
      },
      features: ['Equipe certificada', 'Peças originais', 'Atendimento 24 horas'],
      dark: false,
    },
    {
      id: 'reconstrucao',
      tag: 'Especializado',
      title: 'Reconstrução',
      description: 'Recuperação técnica de unidades de parafuso.',
      photo: {
        src: linha3,
        alt: 'Rotores de uma unidade compressora de parafuso içados na oficina da Spinplus',
      },
      features: ['Unidades de parafuso', 'Peças originais', 'Desempenho recuperado'],
      dark: false,
    },
    {
      id: 'contratos',
      tag: 'Contratos',
      title: 'Contratos de manutenção',
      description: 'Programas preventivos e preditivos para a sua sala de ar comprimido.',
      photo: {
        src: marcasPhoto,
        alt: 'Sala de ar comprimido industrial com vários compressores em operação',
      },
      features: ['Planos preventivos', 'Programas preditivos', 'Com ou sem peças'],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
