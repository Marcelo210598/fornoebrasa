# 🔥 Forno & Brasa — Cardápio Digital

Cardápio digital de uma pizzaria/hamburgeria artesanal **fictícia**, feito como
peça de portfólio para demonstrar esse tipo de projeto.

> ⚠️ Estabelecimento, endereço, telefone e preços são todos fictícios.
> Nenhum pedido real é enviado — o botão de finalizar apenas monta uma mensagem
> pré-preenchida no WhatsApp.

## ✨ Features

- **Cardápio por categorias** — Pizzas, Lanches, Combos, Bebidas e Sobremesas
- **Navegação sticky com scrollspy** — a categoria ativa acompanha o scroll
- **Cards com foto, descrição, preço e selos** (novo, mais pedido, vegetariano, picante)
- **Modal de detalhe do item** com seletor de quantidade
- **Carrinho lateral** com quantidade, subtotal, taxa de entrega e pedido mínimo
- **Checkout no WhatsApp** — gera a mensagem do pedido formatada
- **Persistência do carrinho** em `localStorage`
- **Mobile-first** — pensado pra ser usado no celular, na mesa
- **Fallback de imagem** — se a foto da internet cair, aparece um tile da marca com emoji

## 🎨 Paleta

| Hex | Nome | Uso |
|-----|------|-----|
| `#5F0F40` | plum | base escura / gradientes |
| `#9A031E` | wine | header, destaques |
| `#FB8B24` | gold | preços, selos, categoria ativa |
| `#E36414` | ember | botões e CTAs |
| `#0F4C5C` | teal | acentos, gradiente do hero |

## 🧱 Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- Fontes: Poppins (display) + Inter (texto)
- Imagens: Unsplash (links diretos, sem API key)

## 🚀 Rodando localmente

```bash
npm install
npm run dev
# http://localhost:3000
```

Build de produção:

```bash
npm run build
npm start
```

## 📁 Estrutura

```
src/
├── app/
│   ├── layout.tsx        # metadata + fontes + CartProvider
│   ├── page.tsx          # monta o cardápio (client component)
│   └── globals.css       # paleta e tokens do Tailwind
├── components/
│   ├── Header.tsx        # logo + botão do carrinho
│   ├── Hero.tsx          # topo com foto de fundo
│   ├── CategoryNav.tsx   # navegação sticky com IntersectionObserver
│   ├── MenuSection.tsx   # seção de uma categoria
│   ├── MenuCard.tsx      # card de um item
│   ├── ItemModal.tsx     # detalhe + quantidade
│   ├── CartDrawer.tsx    # carrinho lateral + checkout WhatsApp
│   ├── FoodImage.tsx     # <img> com fallback de marca
│   ├── Tag.tsx           # selos (novo, mais pedido, etc)
│   └── Footer.tsx
├── context/
│   └── CartContext.tsx   # estado do carrinho + localStorage
└── lib/
    ├── menu.ts           # dados do cardápio (categorias + itens)
    ├── restaurant.ts     # dados fictícios do estabelecimento
    ├── types.ts
    └── format.ts         # formatação de moeda (BRL)
```

## 🔜 Possíveis evoluções

- Painel admin para editar itens (hoje o cardápio é um array em `lib/menu.ts`)
- Backend real de pedidos (Neon PostgreSQL) + status do pedido
- Busca e filtros (vegetariano, sem lactose, faixa de preço)
- Variações do item (tamanho da pizza, ponto da carne, adicionais)
- Deploy na Vercel
