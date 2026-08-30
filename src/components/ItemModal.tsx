"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatBRL } from "@/lib/format";
import type { MenuItem } from "@/lib/types";
import { FoodImage } from "./FoodImage";
import { Tag } from "./Tag";

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function ItemModal({ item, onClose }: ItemModalProps) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setQty(1);
  }, [item]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  if (!item) return null;

  const handleAdd = () => {
    add(item, qty);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        className="animate-float-in w-full max-w-lg overflow-hidden rounded-t-3xl border border-white/10 bg-surface sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10]">
          <FoodImage
            src={item.image}
            alt={item.name}
            emoji={item.emoji}
            className="h-full w-full"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
            aria-label="Fechar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5">
          {item.tags && item.tags.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-1">
              {item.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          )}

          <h2 className="font-display text-xl font-extrabold">{item.name}</h2>
          <p className="mt-1.5 text-sm text-cream/70">{item.description}</p>
          {item.serves && (
            <p className="mt-2 text-xs font-medium text-cream/50">{item.serves}</p>
          )}

          <div className="mt-5 flex items-center justify-between">
            <span className="font-display text-xl font-bold text-gold">
              {formatBRL(item.price)}
            </span>

            <div className="flex items-center gap-3 rounded-full bg-white/5 p-1">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-white/20 active:scale-90"
                aria-label="Diminuir quantidade"
              >
                −
              </button>
              <span className="min-w-6 text-center font-semibold">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-white/20 active:scale-90"
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 font-semibold text-white transition hover:bg-ember/90 active:scale-[0.98]"
          >
            Adicionar {formatBRL(item.price * qty)}
          </button>
        </div>
      </div>
    </div>
  );
}
