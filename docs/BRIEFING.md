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

| Asset                            | Arquivo esperado                                        | Status        | Observação                                                                                                                                                                                                                                                                   |
| -------------------------------- | ------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Serviço 1 — preventiva/corretiva | `src/assets/linhas/linha-1.png` (600×800, vertical)     | entregue      | Técnicos da Spinplus (`Capturar-2`), recortados em 3:4 com os dois rostos. **Avisos do check:lp:** proporção (o manifesto espera 800×600 do card original), sem recorte transparente e **resolução baixa** — a foto original tem 496px; substituir quando houver foto melhor |
| Serviço 2 — assistência técnica  | `src/assets/linhas/linha-2.png` (800×1067, vertical)    | entregue      | Render do RS 315 (LP irmã) recortado do fundo branco e montado no galpão vazio da LP irmã (`hero-fundo.jpg`) — **imagem ilustrativa composta**, não foto de atendimento. **Avisos do check:lp:** proporção e sem recorte transparente                                        |
| Serviço 3 — reconstrução         | `src/assets/linhas/linha-3.png` (800×1067, vertical)    | entregue      | Rotores na oficina, do original vertical (`rotores-1-scaled`), com o flange no quadro. **Avisos do check:lp:** proporção e sem recorte transparente                                                                                                                          |
| Serviço 4 — contratos (escuro)   | `src/assets/linhas/marcas.png` (1280×800)               | entregue      | Sala de compressores em operação                                                                                                                                                                                                                                             |
| Aplicações 1–4                   | `src/assets/aplicacoes/aplicacao-{1..4}.png` (1200×900) | entregue      | Recortes do render do hero, da unidade em bancada e da foto offshore do site. **Pendência:** fotos próprias 1200×900                                                                                                                                                         |
| Cenário (autoridade)             | `src/assets/diferenciais/cenario.jpg` (1600×900)        | entregue      | Planta de óleo e gás do site, em cor natural (na variante o texto não fica mais sobre a foto). Origem em 500×432 — **resolução baixa**                                                                                                                                       |
| Pessoa recortada (autoridade)    | `src/assets/diferenciais/pessoa.png` (1220×1000)        | **pendência** | Técnico recortado de `Capturar-2` (origem 232×404). **Aviso do check:lp:** proporção 1220×1977. Substituir por foto de corpo inteiro, recortada, 1220×1000                                                                                                                   |

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

## Desvios do padrão

O cliente aprovou em 19/10/2026 um layout de abertura diferente do padrão B2 e enviou o
mockup. Header e Hero são estrutura fixa (regra 13), então o desvio fica registrado aqui.

| O que mudou                            | Padrão v2.7.1                                                      | Nesta LP                                                                |
| -------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Barra do header                        | Navy, com a logo em placa branca pendurada (`-mt-3 -mb-10`)        | Branca, logo alinhada dentro da barra, tagline navy                     |
| Fundo do hero                          | Navy com véu em gradiente sobre a foto                             | Claro (branco → cinza-100), com risco vermelho de 10px na diagonal      |
| Texto do hero                          | Branco sobre navy                                                  | H1 navy, corpo em `ink-soft`                                            |
| Os 3 pontos                            | Caixa translúcida acima dos CTAs                                   | Card branco com sombra **abaixo** dos CTAs, ícones vermelhos em círculo |
| Âncora da foto                         | `right: var(--page-edge)`, 1700px, com véu navy fechando a direita | `right: 0`, 1700px — sangra até a borda da tela, porque o véu navy saiu |
| Malha de pontos e mira técnica do hero | Presentes                                                          | Removidas (não existem no layout aprovado)                              |

**Consequência no `check:lp`.** A verificação A8 compara Header e Hero com a assinatura da
estrutura fixa. As duas assinaturas foram **repinadas na estrutura nova** em
`scripts/check-lp.mjs`, com o motivo no próprio arquivo: o guard continua pegando mudança
acidental, agora a partir desta base. O grid de três colunas
(`minmax(0, 1fr) 270px 300px`), a coluna de 300px do shortcode, o `data-hero-grid` e o
`fetchpriority="high"` do banner seguem os do padrão e continuam na assinatura.

**O que ficou diferente do mockup, de propósito:**

- **Coluna do chat.** O mockup não a mostra; o usuário pediu para mantê-la (19/10/2026).
  A foto passa por baixo dela e o shortcode do chat fica sobre a imagem.
- **Largura do container.** O mockup usa margens de ~107px em 1853px (container de
  ~1640px); esta LP mantém o `--container-page: 1320px` do padrão, porque o token vale para
  a página inteira e mudá-lo reposiciona todas as seções. Pendente de decisão.
- **Ícone de engrenagem.** O `gear` do padrão desenhava um sol em 20px; o caminho foi
  trocado por uma engrenagem de verdade em `src/data/icons.ts` (regra 9 permite entrada
  nova no mapa). Vale também para os selos de cotação e para `diferenciais`.

### Hero — segunda versão (substitui a cunha clara e a diagonal vermelha)

Mockup e banner novos enviados pelo usuário em 19/10/2026.

- **Banner** (`src/assets/heroBg.png`): render do RS 75i numa sala de ar comprimido, com o
  lado esquerdo esfumado em branco, onde fica o texto. Recebido em 1902×827 e recortado só na
  borda direita para 2,2:1 → 1981×900, a especificação do padrão. O banner anterior foi
  guardado em `src/assets/processo/sala-compressores.png`, porque é o fundo do Como funciona.
- **Posição da foto:** ancorada ao fim da coluna de texto (`--col-end`), para o RS 75i
  começar logo depois do texto em qualquer largura. O hero tem altura mínima de 752px no
  desktop, o que fixa a escala do banner. Medido de 1024 a 2560px: o texto termina 49 a 184px
  antes do compressor.
- **Os 3 pontos:** itens soltos com ícone vermelho em círculo e divisórias, sem card.
- **Chat:** card de vidro fosco com o shortcode dentro, sem formulário falso — o título e os
  campos do mockup vêm do plugin. A coluna continua com 300px, mas o card é deslocado para
  encostar a 40px da margem da tela, como no mockup.
- **Sobreposição conhecida:** de 1920px para cima o card fica ao lado do compressor; entre
  1024 e 1600px ele cobre parte dele (119 a 474px), porque o container de 1320px não deixa
  espaço para texto, compressor e card lado a lado. É a mesma pendência da largura do container.

### Serviços (`linhas`) — variante local

Mockup aprovado pelo usuário em 19/10/2026. O componente
`src/components/sections/ProductLines.astro` foi reescrito **só nesta LP**, como a LP Spinplus
Compressores já fez com outras seções.

| O que mudou | Biblioteca `linhas`                                                 | Nesta LP                                                                                                                                     |
| ----------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Cabeçalho   | Título e texto empilhados à esquerda, carrossel de marcas à direita | Título à esquerda, texto à direita, fio vermelho fechando; eyebrow em vermelho. O carrossel continua no componente e só aparece com 4+ logos |
| Grade       | 4 cards em linha                                                    | 2×2                                                                                                                                          |
| Card        | Foto de produto recortada sobre palco claro, conteúdo embaixo       | Foto em toda a altura na lateral esquerda (44%), conteúdo à direita; numeração em vermelho com fio e o chip da tag em texto                  |
| Fotos       | 800×600 paisagem, recortadas                                        | Verticais (3:4), de cena                                                                                                                     |

O contrato da seção não mudou: mesmos dados, mesmos CTAs `linhas-{id}` com `btn-slave-whats`,
um card escuro, `tone`/`rhythm` vindos da composição, imagens `lazy` e guarda de
`prefers-reduced-motion`.

**Risco:** `npm run compose` sempre recopia o componente da biblioteca e **desfaz esta
variante** (os dados e as fotos ficam, porque o compositor preserva os que já existem). Se a
página for recomposta, restaure o arquivo do git:
`git checkout -- src/components/sections/ProductLines.astro`. O aviso também está no
cabeçalho do componente.

**Avisos novos do check:lp:** os de proporção dos três cards claros vêm do manifesto, que
descreve o card original; na variante o espaço da foto é vertical. O de resolução do card 01 é
real (foto de 496px).

### Como funciona (`processo`) e Aplicações (`aplicacoes`) — variantes locais

Mockup aprovado pelo usuário em 19/10/2026. Mesmo caminho da seção de Serviços:
`ProcessSteps.astro` e `ApplicationsGallery.astro` reescritos **só nesta LP**.

| Seção        | Biblioteca                                                                    | Nesta LP                                                                                                                                                                                              |
| ------------ | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `processo`   | Painel navy arredondado dentro do container, etapas lado a lado na horizontal | Bloco navy de ponta a ponta com a sala de compressores (`heroBg.png`) escurecida ao fundo; texto à esquerda, linha do tempo vertical à direita com fio vermelho; fio vermelho de 3px fechando o bloco |
| `aplicacoes` | Cabeçalho centralizado, número sobre a foto, seta em círculo                  | Cabeçalho à esquerda, número em vermelho acima do título, seta vermelha solta no rodapé do card                                                                                                       |

**O bloco navy encosta em Aplicações.** A composição dá ao `processo` um respiro de baixo
(`panel-lead`, 64px) que, com o bloco de ponta a ponta, viraria uma faixa branca entre o navy e
o cinza. O componente aplica uma margem negativa **lida do próprio ritmo** (`RHYTHMS[rhythm].bottom`),
então continua certo se a composição mudar o respiro.

**A foto do fundo é a mesma do hero**, posicionada para o RS 75i cair no vão entre o texto e a
linha do tempo — como no mockup, que também repete o compressor. Não é asset novo da seção.

**Ícone novo:** `hard-hat` (capacete), em `src/data/icons.ts`, para "Equipe técnica em campo".

O contrato das duas seções não mudou: mesmos dados, CTAs `processo-cta` e `aplicacoes-{id}`
com `btn-slave-whats`, o card inteiro de aplicação como botão, o `processo` ainda é o bloco
navy da fase de apoio, `tone`/`rhythm` vindos da composição, imagens `lazy` e guarda de
`prefers-reduced-motion` em Aplicações.

**Mesmo risco:** `npm run compose` recopia os dois componentes da biblioteca e desfaz as
variantes. Restaure com
`git checkout -- src/components/sections/ProcessSteps.astro src/components/sections/ApplicationsGallery.astro`.

### Diferenciais (`diferenciais`) — variante local, e Cotação — desvio da estrutura fixa

Mockup aprovado pelo usuário em 19/10/2026, com a instrução de **não colocar formulário**:
o lugar dele fica como um card vazio, onde o plugin renderiza o formulário.

| Parte        | Padrão                                                                                          | Nesta LP                                                                                                                                                      |
| ------------ | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Diferenciais | Eyebrow "Por que a Spinplus", foto escurecida com gradiente, 5 cards sobrepostos à base do navy | Traço vermelho no lugar do eyebrow, foto clara à direita com o técnico recortado à frente, 5 diferenciais numa faixa branca com divisórias e ícones vermelhos |
| Cotação      | Formulário (shortcode) à esquerda, texto à direita                                              | Texto à esquerda, card branco **vazio** à direita; eyebrow com traço vermelho; WhatsApp e selos maiores                                                       |

**Diferenciais.** `WhyBrand.astro` reescrito só nesta LP. O texto do eyebrow continua nos dados
e virou o `aria-label` da faixa de diferenciais. No mobile a foto vem antes do texto, então ela
voltou à cor natural. Ícones trocados para os do mockup: `calendar` e `offshore` (novos em
`src/data/icons.ts`) e `shield` em "Autorização Ingersoll Rand"; o selo "Técnicos certificados"
da cotação também passou a `shield`. Mesmo risco das outras variantes:
`git checkout -- src/components/sections/WhyBrand.astro` depois de um `npm run compose`.

**Cotação.** `QuoteForm.astro` é estrutura fixa, como Header e Hero: a assinatura A8 do
`check:lp` foi repinada na ordem nova (`scripts/check-lp.mjs`, com o motivo). O card do
formulário **não está vazio no HTML**: dentro dele fica o shortcode `[atendimento_form …]`, que o
plugin do WordPress troca pelo formulário — sem ele não há formulário no site publicado, e a
verificação A7 exige os dois slots. Na prévia estática o código aparece em texto. O card não
define fonte, cor nem alinhamento do conteúdo, para não interferir no formulário do plugin.

### Divisórias arredondadas entre as seções

Pedido do usuário em 19/10/2026, com o mesmo tratamento da LP Spinplus Compressores: cada
seção termina com os cantos de baixo curvos (`--lp-round`: 32px no mobile, 48px a partir de
1024px) e a seguinte passa por baixo dela. O CSS está no fim de `src/styles/global.css` e não
desloca conteúdo: a margem negativa e a borda transparente do mesmo tamanho se anulam.

A curva só aparece entre cores diferentes, então os blocos coloridos passaram a ocupar a
seção até a borda — senão três das seis divisões cairiam entre duas áreas da mesma cor:

| Divisão                          | O que fica de cada lado                  | Ajuste                                                                                                                                                     |
| -------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero → Serviços                  | Foto e área clara do hero sobre o branco | Nenhum (o hero já recorta o conteúdo). O risco vermelho do hero passou a existir só na faixa da diagonal: se cobrisse a cunha, vazava como um fio na curva |
| Serviços → Como funciona         | Branco sobre o navy                      | O navy de `processo` sobe sobre o respiro de cima e a faixa sob a curva, com padding do mesmo tamanho para o texto não mudar de lugar                      |
| Como funciona → Aplicações       | Navy (com o fio vermelho) sobre o cinza  | O navy de `processo` ganhou os cantos de baixo; o fio vermelho acompanha a curva                                                                           |
| Aplicações → Diferenciais        | Cinza sobre o navy                       | O navy de `diferenciais` sobe, como o de `processo`                                                                                                        |
| Faixa dos diferenciais → Cotação | Branco sobre o cinza                     | A faixa branca desce sobre o respiro de baixo e ganhou os cantos e uma sombra suave — branco sobre cinza-100 quase não aparece sem ela                     |
| Cotação → Rodapé                 | Cinza sobre o navy                       | Nenhum                                                                                                                                                     |

Os avanços sobre os respiros leem o valor do próprio ritmo da composição
(`RHYTHMS[rhythm].top`/`.bottom`), não números fixos.

## Aprovação

- [x] Composição apresentada e aprovada pelo usuário em: `19/10/2026`
- [x] **Hero redesenhado e aprovado** em `19/10/2026`, a partir do mockup enviado pelo usuário (ver Desvios do padrão).
- [ ] Resumo da entrevista apresentado e aprovado pelo usuário em: `____/____/______`
- [x] Padrão B2 versão: `2.7.1`
