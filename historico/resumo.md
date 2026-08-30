# Resumo geral — Forno & Brasa (Cardápio Digital)

## O que é
Cardápio digital de pizzaria/hamburgeria **fictícia** ("Forno & Brasa").
Peça de portfólio do Marcelo para mostrar esse tipo de projeto.

## Stack
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.
Sem backend, sem DB — cardápio é um array em `src/lib/menu.ts`.

## Como rodar
`npm install` → `npm run dev` → http://localhost:3000

## Estado
- 2026-08-30: MVP visual completo e funcional, build de produção OK.
  Push para GitHub: https://github.com/Marcelo210598/fornoebrasa.git

## O que já funciona
Cardápio por categorias com scrollspy, cards com foto/preço/selos, modal de item,
carrinho lateral com persistência, checkout que monta o pedido no WhatsApp.

## Pontos de atenção
- Fotos vêm do Unsplash por link direto; `FoodImage` mostra tile da marca se cair.
  "Pizza Doce de Nutella" está com tile da marca de propósito (sem foto boa no acervo).
- Endereço/telefone/preços são fictícios (`src/lib/restaurant.ts`).
- Cache npm dedicado em `Desktop/Projetos AI/.npm-cache-vdt` (o `~/.npm` estava com problema de permissão).

## Próximos passos possíveis
Deploy Vercel · painel admin pra editar itens · backend de pedidos (Neon) ·
variações de item (tamanho, adicionais) · busca/filtros.
