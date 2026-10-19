# Briefing da LP — registro da entrevista

> Preenchido pelo agente durante a entrevista do `docs/PROMPT-PADRAO-LP.md`.
> Esta é a fonte: `docs/briefing-cliente/` fica fora do git e vem vazia num clone novo.

## Origem: documento do cliente

| Campo                          | Valor                                                                                                                                                                                                                                        |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arquivo recebido               | `docs/briefing-cliente/briefing-spinplus-b2-lp-starter _1_.md`                                                                                                                                                                               |
| Tipo                           | A (estruturado — saída do `PROMPT-BRIEFING-CLIENTE.md`, classificado como Tipo A pelo próprio documento)                                                                                                                                     |
| Lido integralmente em          | `19/10/2026`                                                                                                                                                                                                                                 |
| Referências visuais do cliente | Página de assistência técnica autorizada (https://spinplus.com.br/service/assistencia-tecnica-autorizada-ingersoll/) — usada como fonte de conteúdo, imagens e identidade de marca, a pedido do usuário. Estrutura do site **não** aplicada. |
| Dados não aplicados por padrão | Telefone (21) 2445-0001 e e-mail contato@spinplus.com.br fora do corpo da página; menu de navegação, blog, venda, locação e catálogo de peças descartados                                                                                    |

### Mapa de aproveitamento

| Bloco do briefing                                     | Veredito   | Destino (seção da biblioteca ou campo)     | Motivo                                                                             |
| ----------------------------------------------------- | ---------- | ------------------------------------------ | ---------------------------------------------------------------------------------- |
| 8 serviços em 5 agrupamentos                          | equivale   | `linhas` (4 cards de serviço)              | Catálogo de serviço consolidado em 4 famílias; card escuro = contratos             |
| Manutenção preventiva / corretiva                     | cabe em    | `linhas` card 1 e `processo`               | Core da oferta e da palavra-chave                                                  |
| Assistência técnica autorizada Ingersoll Rand         | cabe em    | `linhas` card 2, hero, selos               | Extraído do site e do briefing                                                     |
| Reconstrução de unidades compressoras                 | cabe em    | `linhas` card 3, `aplicacoes` item 2       | Único bloco com foto própria aprovada                                              |
| Contratos de manutenção (CARE)                        | cabe em    | `linhas` card escuro, `processo` etapa 5   | Atendimento recorrente fecha o grid                                                |
| Inspeções e diagnósticos elétricos/mecânicos/controle | equivale   | `processo` etapas 1–3                      | Elementos de manutenção publicados pelo próprio cliente (`Capturar.png`)           |
| Atendimento offshore (CBSP, HUET, NR10)               | cabe em    | `aplicacoes` item 4, `diferenciais` item 5 | Documentado na página Oil & Gás                                                    |
| Secadores de ar comprimido                            | cabe em    | `aplicacoes` item 3, título de `linhas`    | Serviço complementar, sem ampliar a oferta principal                               |
| 5 diferenciais do Quem Somos                          | equivale   | `diferenciais`                             | Único bloco `completo` do briefing                                                 |
| Frase de autoridade                                   | equivale   | `diferenciais.titleLines`                  | "Seu compressor precisa seguir operando."                                          |
| 7 segmentos industriais                               | descartado | —                                          | `segmentos` exige 3 equipamentos e 1 descrição por setor; o briefing só tem o nome |
| Clientes e números                                    | descartado | —                                          | Sem logos autorizados nem métrica com fonte                                        |
| Perguntas frequentes                                  | descartado | —                                          | Nenhuma pergunta real do comercial fornecida                                       |
| 6 dados de triagem (`identificar`)                    | descartado | —                                          | `ausente` no briefing; `processo` ocupou o bloco navy de apoio                     |
| Venda, locação e catálogo de peças                    | descartado | —                                          | Intenção de compra distinta da LP de serviço                                       |
| Auditoria em Sistemas de Ar                           | descartado | —                                          | Não integra a lista de serviços enviada; confirmar antes de incluir                |

## Campanha

| Campo                      | Valor                                                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Foco desta LP              | Manutenção de compressores industriais Ingersoll Rand (uma única campanha; sem briefing de campanha, só lista de palavras-chave)                                                                 |
| Fora desta execução        | Venda de compressores, locação, peças como oferta independente                                                                                                                                   |
| Palavra-chave principal    | `manutenção de compressores industriais` — no H1 e no title                                                                                                                                      |
| Origem                     | Lista informada pelo usuário (9 termos aderentes após o recorte de marca)                                                                                                                        |
| Área atendida              | **Estado do Rio de Janeiro**, confirmado pelo usuário em 19/10/2026. Dito no 3º ponto do hero e no 3º selo da cotação                                                                            |
| Negativas de oferta        | `atlas copco` — o usuário confirmou oferta exclusiva de manutenção Ingersoll Rand. Exclusão na conta do Google Ads ainda a verificar                                                             |
| Negativas de intenção      | `ausente` — lista da conta não fornecida                                                                                                                                                         |
| Claims proibidos           | Nenhum. "Autorizada" e "certificados" são claims do próprio cliente, extraídos do site e do briefing                                                                                             |
| Divergência de vocabulário | Cliente diz "manutenção em compressores e secadores"; a campanha compra "manutenção de compressores industriais". O termo da campanha abriu a página; secadores entram como serviço complementar |

### Comitê de compra

`Não aplicável`: o briefing não separa papéis (Engenharia, Manutenção, Compras, Diretoria). Nenhum argumento foi inferido por papel.

### Conteúdo futuro

| Grupo                 | O que oferece               | Por que está fora                               |
| --------------------- | --------------------------- | ----------------------------------------------- |
| Venda de equipamentos | Compressores Ingersoll Rand | Fora do destino de manutenção                   |
| Locação               | Locação de compressores     | Fora do destino de manutenção                   |
| Peças                 | Peças e lubrificantes       | Só como atributo do serviço ("peças originais") |

## Composição

Aplicada em 19/10/2026 com `npm run compose -- linhas processo aplicacoes diferenciais`.

### Seções escolhidas

| Fase       | Seção          | Fundo     | Respiro       | Por que entrou (trecho do briefing)                                                                      |
| ---------- | -------------- | --------- | ------------- | -------------------------------------------------------------------------------------------------------- |
| oferta     | `linhas`       | branco    | `pt-20 pb-10` | "8 itens em 5 agrupamentos editoriais" consolidados em 4 famílias de serviço, cada uma com 3 features    |
| apoio      | `processo`     | branco    | `pt-6 pb-16`  | LP de serviço: a dúvida é "como funciona", não "o que é". Etapas = elementos de manutenção do cliente    |
| prova      | `aplicacoes`   | cinza-100 | `pt-4 pb-20`  | "Quatro contextos candidatos existem" — compressores, parafuso, secadores, offshore, todos com foto real |
| autoridade | `diferenciais` | cinza-100 | `pt-6 pb-8`   | Único bloco `completo`: 5 diferenciais + frase de autoridade, ambos extraídos do Quem Somos              |

### Seções descartadas

| Seção            | Motivo do descarte                                                         | O que faria ela entrar                                           |
| ---------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `vitrine`        | 8 serviços sem foto dedicada; `linhas` vende melhor com 3 features/item    | 6+ fotos 800×600, uma por serviço                                |
| `especificacoes` | A oferta é serviço, não catálogo de modelos comparáveis                    | Nada: o manifesto veta serviço                                   |
| `situacoes`      | O comercial não forneceu os 4–6 gatilhos recorrentes de contato            | Lista real de gatilhos ("compressor parado", "queda de pressão") |
| `identificar`    | Os 6 dados de triagem estão `ausente`; a fase de apoio aceita 1 bloco navy | Os 6 dados que o comercial pede para abrir chamado               |
| `segmentos`      | 7 setores nomeados, mas sem descrição nem 3 equipamentos por setor         | Descrição (90–160 car.) + 3 equipamentos para cada um dos 7      |
| `clientes`       | Sem logos autorizados e sem 3 métricas com fonte                           | 4–8 logos com autorização + 3 números verificáveis               |
| `perguntas`      | Nenhuma pergunta real do atendimento foi fornecida                         | 4–8 dúvidas do comercial com respostas confirmadas               |
| `escopo`         | O argumento de fechamento é a equipe, não a consolidação de compra         | Nada: `diferenciais` ocupa o bloco navy de autoridade            |

### Seção nova criada na biblioteca (se houve)

Nenhuma.

## Entradas do núcleo

| #   | Entrada                 | Status     | Valor confirmado                                                                                       | Referência no briefing / observação                                                                                  |
| --- | ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| 1   | MARCA                   | extraído   | Spinplus                                                                                               | Núcleo #1                                                                                                            |
| 2   | MARCA_CURTA             | extraído   | Spinplus                                                                                               | Núcleo #2                                                                                                            |
| 3   | PRODUTO_PRINCIPAL       | inferido   | Manutenção de compressores industriais                                                                 | Núcleo #3, alinhado à palavra-chave da campanha                                                                      |
| 4   | CONTEXTO_DE_USO         | inferido   | Ingersoll Rand                                                                                         | H1: "Manutenção de compressores industriais Ingersoll Rand", como o briefing propôs                                  |
| 5   | PUBLICO                 | ausente    | —                                                                                                      | Cargos dos decisores não informados; nenhum argumento por papel foi inventado                                        |
| 6   | HERO                    | inferido   | Preventiva e corretiva · Técnicos certificados · 24 horas em todo o RJ                                 | Pontos 1 e 2 do briefing; o 3º foi trocado pela área atendida + 24h, confirmados pelo usuário                        |
| 7   | MARCAS_ATENDIDAS        | conflito   | Só Ingersoll Rand, **sem logo na página**                                                              | Com 1 marca o carrossel não renderiza. Autorização de uso do logo **pendente** — o nome por extenso não depende dela |
| 8   | SELOS_DE_CONFIANCA      | extraído   | Técnicos certificados Ingersoll Rand · Peças originais de fábrica · Atendimento em todo o estado do RJ | Dois primeiros do briefing; o terceiro virou a área atendida, a pedido da regra de campanha                          |
| 9   | ENDERECO                | extraído   | Estrada do Outeiro Santo, 631, Boxes 15/16 - Taquara, Rio de Janeiro - RJ                              | Rodapé do site                                                                                                       |
| 10  | URL_FINAL + PRIVACIDADE | parcial    | `https://lp-spinplus-manutencao.vercel.app` (**provisória**) · privacidade confirmada                  | URL final `ausente` no briefing. Trocar antes de publicar                                                            |
| 11  | SHORTCODES              | default    | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`                             | `ausente` no briefing; mantidos os do padrão                                                                         |
| 12  | WHATSAPP                | confirmado | `552124450001`                                                                                         | Usuário confirmou em 19/10/2026 que o (21) 2445-0001 recebe WhatsApp. O briefing o trazia só como telefone           |
| 13  | STACK + PUBLICACAO      | default    | Astro 7 + Tailwind 4; `main` → `wp-build`                                                              | `ausente` no briefing; detectado no template                                                                         |
| 14  | TOKENS_DE_COR + FONTE   | inferido   | Navy do padrão + acento no vermelho da logo Spinplus (`#e52620` / `#c21a15`), Manrope                  | A pedido do usuário, identidade da página do cliente. Mesmos hex da LP Spinplus Compressores                         |
| 15  | CAMPANHA                | extraído   | ver seção **Campanha**                                                                                 | —                                                                                                                    |

## Entradas por seção

### `linhas` — Linhas de produto (4 serviços)

| Item / campo                           | Status   | Valor confirmado                                               | Observação                                             |
| -------------------------------------- | -------- | -------------------------------------------------------------- | ------------------------------------------------------ |
| 1 · Preventiva e corretiva             | extraído | Inspeção geral · Limpeza de filtros · Troca de lubrificantes   | Features vindas dos elementos de manutenção do cliente |
| 2 · Assistência técnica Ingersoll Rand | extraído | Equipe certificada · Peças originais · Atendimento 24 horas    | 24h confirmado pelo usuário em 19/10/2026              |
| 3 · Reconstrução de unidades           | extraído | Unidades de parafuso · Peças originais · Desempenho recuperado | —                                                      |
| 4 · Contratos de manutenção (escuro)   | extraído | Planos preventivos · Programas preditivos · Com ou sem peças   | Card escuro do grid, conforme o manifesto              |

### `processo` — Como funciona (5 etapas)

| Item / campo         | Status   | Valor confirmado                                                       | Observação                                                                                                             |
| -------------------- | -------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Etapas 1–5           | inferido | Inspeção · Diagnóstico · Avaliação · Intervenção · Plano de manutenção | **Validar com a equipe.** São os elementos de manutenção que o cliente publica, não uma sequência comercial confirmada |
| `when` (prazo/marco) | ausente  | —                                                                      | Omitido de propósito: o manifesto proíbe prazo não assumido publicamente                                               |

### `aplicacoes` — Aplicações (4 contextos)

| Item / campo                 | Status   | Valor confirmado                             | Observação                            |
| ---------------------------- | -------- | -------------------------------------------- | ------------------------------------- |
| 1 · Compressores industriais | extraído | Sala de ar comprimido Ingersoll Rand         | —                                     |
| 2 · Unidades de parafuso     | extraído | Revisão e reconstrução                       | Foto própria da oficina               |
| 3 · Secadores de ar          | extraído | Secadores, filtros e drenos                  | —                                     |
| 4 · Sistemas offshore        | extraído | Plataformas, equipe habilitada para embarque | CBSP, HUET e NR10 na página Oil & Gás |

### `diferenciais` — Diferenciais (5)

| Item / campo     | Status   | Valor confirmado                                                                                                     | Observação                     |
| ---------------- | -------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| Frase            | inferido | "Seu compressor precisa / seguir operando."                                                                          | Síntese aprovada no briefing   |
| Diferenciais 1–5 | extraído | Experiência desde 2003 · Autorização Ingersoll Rand · Peças originais · Técnicos certificados · Atendimento offshore | Quem Somos + página de serviço |

## Assets

| Asset          | Arquivo esperado                                    | Status      | Observação                                                                                   |
| -------------- | --------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------- |
| Logo           | `src/assets/LOGO.png` (240×200, fundo transparente) | entregue    | Logo Spinplus do acervo da LP irmã (LP Spinplus Compressores)                                |
| Banner do hero | `src/assets/heroBg.png` (1981×900, brief 4.1.3)     | entregue    | Render de sala de ar comprimido Ingersoll Rand. **Pendência:** banner próprio no brief 4.1.3 |
| Logo de marca  | `src/assets/brands/ingersoll-rand.webp` (400×160)   | não exibido | Com 1 marca o carrossel não renderiza. Só exibir após autorização de uso do logo (entrada 7) |

| Asset                            | Arquivo esperado                                        | Status        | Observação                                                                                                                                                 |
| -------------------------------- | ------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Serviço 1 — preventiva/corretiva | `src/assets/linhas/linha-1.png` (800×600)               | entregue      | Técnicos da Spinplus (`Capturar-2`). **Aviso do check:lp:** não é recorte com fundo transparente                                                           |
| Serviço 2 — assistência técnica  | `src/assets/linhas/linha-2.png` (800×600)               | entregue      | Render de compressor Ingersoll Rand. **Aviso do check:lp:** fundo branco sólido                                                                            |
| Serviço 3 — reconstrução         | `src/assets/linhas/linha-3.png` (800×600)               | entregue      | Rotores na oficina (`rotores-1`). **Aviso do check:lp:** foto de cena, não recorte                                                                         |
| Serviço 4 — contratos (escuro)   | `src/assets/linhas/marcas.png` (1280×800)               | entregue      | Sala de compressores em operação                                                                                                                           |
| Aplicações 1–4                   | `src/assets/aplicacoes/aplicacao-{1..4}.png` (1200×900) | entregue      | Recortes do render do hero, da unidade em bancada e da foto offshore do site. **Pendência:** fotos próprias 1200×900                                       |
| Cenário (autoridade)             | `src/assets/diferenciais/cenario.jpg` (1600×900)        | entregue      | Planta de óleo e gás do site, escurecida para o texto branco do bloco navy. Origem em 500×432 — **resolução baixa**                                        |
| Pessoa recortada (autoridade)    | `src/assets/diferenciais/pessoa.png` (1220×1000)        | **pendência** | Técnico recortado de `Capturar-2` (origem 232×404). **Aviso do check:lp:** proporção 1220×1977. Substituir por foto de corpo inteiro, recortada, 1220×1000 |

## Pendências priorizadas

| Prioridade | O que falta                                                            | Impacto                                                                                                                         |
| ---------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| P0         | Condições reais do atendimento 24 horas                                | Está no hero e num card. O usuário autorizou em 19/10/2026 "como está no site"; se houver restrição de canal ou região, ajustar |
| P1         | Validar as 5 etapas de `processo` com a equipe                         | Hoje são os elementos de manutenção publicados, não a sequência comercial                                                       |
| P1         | Fotos próprias dos 4 serviços e das 4 aplicações                       | Remove os 3 avisos do `check:lp` e eleva a qualidade da oferta                                                                  |
| P1         | Foto de técnico recortada, corpo inteiro, 1220×1000                    | Remove o aviso de proporção no bloco de autoridade                                                                              |
| P1         | Autorização de uso do logo Ingersoll Rand                              | Destrava o carrossel de marcas                                                                                                  |
| P2         | 6 dados de triagem · perguntas frequentes · setores com 3 equipamentos | Destravam `identificar`, `perguntas` e `segmentos`                                                                              |
| P2         | Clientes com autorização e 3 números com fonte                         | Destrava `clientes`                                                                                                             |
| P2         | URL final de publicação                                                | `site.url` está provisória                                                                                                      |

## Aprovação

- [x] Composição apresentada e aprovada pelo usuário em: `19/10/2026`
- [x] **Hero congelado.** O usuário aprovou a primeira dobra como está em `19/10/2026` (eyebrow, H1, texto, os 3 pontos, os 2 CTAs e o enquadramento do banner). Não alterar sem novo pedido.
- [ ] Resumo da entrevista apresentado e aprovado pelo usuário em: `____/____/______`
- [x] Padrão B2 versão: `2.7.1`
