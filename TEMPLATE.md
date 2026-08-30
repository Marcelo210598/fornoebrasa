# 🧩 Como reaproveitar como base pra um cliente real

Este projeto foi feito como peça de portfólio, mas já serve de **starter pronto**
pra quando aparecer um cliente querendo cardápio digital (pizzaria, hamburgeria,
lanchonete, açaí, etc).

## 1. Clonar como novo projeto

```bash
cd "Desktop/Projetos AI"
cp -R cardapio-digital cardapio-<cliente>
cd cardapio-<cliente>
rm -rf .git .vercel node_modules .next
git init -b main
npm install --cache "../.npm-cache-vdt"
npm run dev
```

## 2. O que trocar (checklist)

| Arquivo | O que mudar |
|---|---|
| `src/lib/menu.ts` | **o cardápio inteiro** — categorias, itens, descrições, preços, selos, fotos |
| `src/lib/restaurant.ts` | nome, telefone do WhatsApp (real!), endereço, horário, Instagram, taxa de entrega, pedido mínimo |
| `src/app/globals.css` (`@theme`) | a paleta — trocar os 5 `--color-*` pelas cores da marca do cliente |
| `src/app/layout.tsx` | `metadata` (title/description) |
| `src/components/Header.tsx` e `Footer.tsx` | nome/logo "Forno & Brasa" → do cliente (trocar o emoji 🔥 por um `<img>` de logo se tiver) |
| `src/components/Hero.tsx` | título, subtítulo, selos e a foto de fundo |
| `vercel.json` | o `alias` pro subdomínio do cliente (ou domínio próprio dele) |
| `public/` | favicon e assets |

> Busca rápida pelo que é fixo: `grep -rn "Forno & Brasa\|fornoebrasa\|Botafogo\|99998888" src vercel.json`

## 3. Fotos dos itens

- Hoje: links diretos do Unsplash em `menu.ts` (`img("photo-...")`).
- Se algum link vier errado, o `<FoodImage>` cai num tile da marca (emoji) — 100% seguro.
- **Cliente real:** pedir as fotos dos pratos dele, jogar em `public/itens/` e apontar
  `image: "/itens/x-tudo.jpg"`. Fotos reais do estabelecimento > banco de imagem.

## 4. Deploy

```bash
git remote add origin <repo-do-cliente>
git add -A && git commit -m "feat: cardápio digital <cliente>"
git push -u origin main
vercel deploy --prod --yes --scope <scope>
```

O `vercel.json` já auto-aliasa a URL a cada deploy prod.

## 5. Evoluções que dá pra vender como upsell

- **Painel admin** pra o cliente editar itens/preços sozinho (hoje é código)
- **Backend de pedidos** (Neon PostgreSQL) com status do pedido e histórico
- **Variações de item**: tamanho da pizza, meia-a-meia, adicionais, ponto da carne
- **Busca e filtros** (vegetariano, sem lactose, faixa de preço)
- **Integração real com WhatsApp** (API oficial / bot) em vez do link `wa.me`
- **Domínio próprio** + Google Business + SEO local
- **Impressão de comanda** / integração com sistema de PDV

## 6. Arquitetura (pra lembrar rápido)

- Página única `src/app/page.tsx` (`"use client"`) — sem SSR/DB nessa fase
- Estado do carrinho: `src/context/CartContext.tsx` (+ `localStorage`)
- Dados: arrays em `src/lib/` — sem banco
- Estilo: Tailwind v4, tokens de cor no `@theme` do `globals.css`, tema dark fixo
