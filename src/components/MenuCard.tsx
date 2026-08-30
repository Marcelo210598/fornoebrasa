"use client";

import { useCart } from "@/context/CartContext";
import { formatBRL } from "@/lib/format";
import type { MenuItem } from "@/lib/types";
import { FoodImage } from "./FoodImage";
import { Tag } from "./Tag";

interface MenuCardProps {
  item: MenuItem;
  onOpen: (item: MenuItem) => void;
}

export function MenuCard({ item, onOpen }: MenuCardProps) {
  const { add } = useCart();

  return (
    <article
      onClick={() => onOpen(item)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/70 transition hover:border-gold/40 hover:bg-surface"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <FoodImage
          src={item.image}
          alt={item.name}
          emoji={item.emoji}
          className="h-full w-full transition duration-500 group-hover:scale-105"
        />
        {item.tags && item.tags.length > 0 && (
          <div className="absolute left-2 top-2 flex flex-wrap gap-1">
            {item.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-base font-bold">{item.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-cream/60">{item.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-gold">
            {formatBRL(item.price)}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              add(item, 1);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ember text-white transition hover:bg-ember/90 active:scale-90"
            aria-label={`Adicionar ${item.name} ao pedido`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
