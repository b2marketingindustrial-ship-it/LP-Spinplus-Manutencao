/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * As etapas seguem os elementos de manutenção que a própria Spinplus publica na
 * página de assistência técnica autorizada: inspeção, diagnóstico, avaliação,
 * intervenção e programa de manutenção.
 *
 * Sem `when`: o cliente ainda não confirmou prazos que assuma publicamente
 * (docs/BRIEFING.md, pendência P1). Prazo inventado não entra.
 */
import type { IconName } from '@data/icons'

export interface ProcessStep {
  id: string
  icon: IconName
  title: string
  description: string
  /** Prazo ou marco da etapa, 2–4 palavras. Opcional. */
  when?: string
}

export const process = {
  eyebrow: 'Como funciona',
  title: 'Do chamado ao compressor em operação',
  text: 'O atendimento segue as etapas de manutenção da Ingersoll Rand, da inspeção do sistema ao plano que mantém o equipamento disponível.',
  microcopy: 'Equipe técnica em campo',
  steps: [
    {
      id: 'inspecao',
      icon: 'search',
      title: 'Inspeção geral',
      description: 'Verificação de vazamentos, filtros e componentes do sistema de ar.',
    },
    {
      id: 'diagnostico',
      icon: 'bolt',
      title: 'Diagnóstico',
      description: 'Análise elétrica, mecânica e do sistema de controle do equipamento.',
    },
    {
      id: 'avaliacao',
      icon: 'clipboard-check',
      title: 'Avaliação técnica',
      description: 'Levantamento das ineficiências de cada compressor.',
    },
    {
      id: 'intervencao',
      icon: 'wrench',
      title: 'Intervenção técnica',
      description: 'Manutenção preventiva, corretiva ou reconstrução com peças originais.',
    },
    {
      id: 'plano',
      icon: 'refresh',
      title: 'Plano de manutenção',
      description: 'Programa preventivo ou preditivo, com ou sem peças sobressalentes.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  steps: readonly ProcessStep[]
}
