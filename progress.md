# Forno & Brasa — Cardápio Digital — Progresso

## Última atualização: 2026-08-30

## 📌 Visão Geral
- **Objetivo:** peça de portfólio — cardápio digital de pizzaria/hamburgeria fictícia
- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- **Status:** MVP visual completo e funcional em `localhost:3000`, build de produção passando

## ✅ Concluído
- Scaffold Next.js 16 + Tailwind v4 + TS
- Paleta da marca aplicada (coolors: 5F0F40 / 9A031E / FB8B24 / E36414 / 0F4C5C)
- Dados do cardápio: 5 categorias, 27 itens (8 pizzas, 6 lanches, 3 combos, 6 bebidas, 4 sobremesas)
- Header sticky com contador do carrinho
- Hero com foto de fundo + selos (aberto, entrega, pedido mínimo)
- Navegação de categorias sticky com scrollspy (IntersectionObserver)
- Cards de item com foto, selos, descrição, preço e botão "+"
- Modal de detalhe do item com seletor de quantidade
- Carrinho lateral: quantidade, remover, limpar, subtotal, taxa, pedido mínimo
- Checkout gera mensagem formatada no WhatsApp (wa.me)
- Carrinho persiste em localStorage
- Componente FoodImage com fallback de marca (emoji + gradiente) quando a foto cai
- Footer com dados fictícios + crédito
- README, .env.example, histórico

## 🚧 Em progresso
- Nada — aguardando feedback do Marcelo

## ⚠️ Problemas encontrados
- `create-next-app` falhou por permissão no cache do npm (`~/.npm/_cacache`).
  Resolvido usando `--cache` apontando pra `Desktop/Projetos AI/.npm-cache-vdt`.
- 3 fotos do Unsplash vieram com assunto errado (Coca 2L veio Pepsi, Limonada
  veio foto de bar, Pizza de Nutella veio yakisoba). Coca e Limonada trocadas por
  IDs verificados visualmente; Pizza de Nutella ficou com placeholder da marca
  (não achei foto boa no acervo sem API key).
- Next 16 gera `AGENTS.md`/`CLAUDE.md` no projeto automaticamente — desativado com
  `agentRules: false` no `next.config.ts`.

## 📋 Próximos passos
- Feedback do Marcelo sobre nome, itens e visual
- (opcional) Deploy na Vercel via CLI
- (opcional) Painel admin / backend de pedidos

## 🔧 Configurações importantes
- `next.config.ts`: `turbopack.root` fixado + `agentRules: false`
- Sem variáveis de ambiente obrigatórias (ver `.env.example` para o futuro)
- Número de WhatsApp fictício em `src/lib/restaurant.ts`

## 📚 Dependências principais
- next 16.3.3
- react / react-dom 19.2.8
- tailwindcss 4
