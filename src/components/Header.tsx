"use client";

import { useCart } from "@/context/CartContext";

export function Header({ onOpenCart }: { onOpenCart: () => void }) {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#topo" className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <span className="font-display text-lg font-extrabold leading-none tracking-tight">
            Forno <span className="text-gold">&amp;</span> Brasa
          </span>
        </a>

        <button
          type="button"
          onClick={onOpenCart}
          className="relative flex items-center gap-2 rounded-full bg-ember px-4 py-2 text-sm font-semibold text-white transition hover:bg-ember/90 active:scale-95"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="hidden sm:inline">Meu pedido</span>
          {count > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-wine px-1 text-xs font-bold text-white ring-2 ring-ink">
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
