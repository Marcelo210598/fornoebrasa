"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { formatBRL } from "@/lib/format";
import { RESTAURANT } from "@/lib/restaurant";
import { FoodImage } from "./FoodImage";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { lines, setQty, remove, clear, subtotal, count } = useCart();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const reachedMin = subtotal >= RESTAURANT.minOrder;
  const total = subtotal + (subtotal > 0 ? RESTAURANT.deliveryFee : 0);

  const checkout = () => {
    const linhas = lines
      .map((l) => `• ${l.qty}x ${l.item.name} — ${formatBRL(l.qty * l.item.price)}`)
      .join("\n");
    const msg =
      `*Pedido — ${RESTAURANT.name}*\n\n${linhas}\n\n` +
      `Subtotal: ${formatBRL(subtotal)}\n` +
      `Entrega: ${formatBRL(RESTAURANT.deliveryFee)}\n` +
      `*Total: ${formatBRL(total)}*\n\n` +
      `Nome:\nEndereço:\nForma de pagamento:`;
    window.open(
      `https://wa.me/${RESTAURANT.phone}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-surface transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h2 className="font-display text-lg font-extrabold">
            Meu pedido {count > 0 && <span className="text-cream/50">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
            aria-label="Fechar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="text-5xl">🛒</span>
            <p className="text-cream/60">Seu carrinho está vazio.</p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
            >
              Ver cardápio
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {lines.map((line) => (
                <div
                  key={line.item.id}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
                >
                  <FoodImage
                    src={line.item.image}
                    alt={line.item.name}
                    emoji={line.item.emoji}
                    className="h-16 w-16 shrink-0 rounded-lg"
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="truncate text-sm font-semibold">{line.item.name}</h3>
                      <button
                        type="button"
                        onClick={() => remove(line.item.id)}
                        className="shrink-0 text-xs text-cream/40 transition hover:text-ember"
                      >
                        remover
                      </button>
                    </div>
                    <span className="text-xs text-gold">{formatBRL(line.item.price)}</span>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full bg-white/5 p-0.5">
                        <button
                          type="button"
                          onClick={() => setQty(line.item.id, line.qty - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 active:scale-90"
                          aria-label="Diminuir"
                        >
                          −
                        </button>
                        <span className="min-w-5 text-center text-sm font-semibold">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQty(line.item.id, line.qty + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 active:scale-90"
                          aria-label="Aumentar"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-semibold">
                        {formatBRL(line.qty * line.item.price)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={clear}
                className="text-xs text-cream/40 underline-offset-2 transition hover:text-cream/70 hover:underline"
              >
                Limpar pedido
              </button>
            </div>

            <div className="border-t border-white/10 px-5 py-4">
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-cream/60">
                  <span>Subtotal</span>
                  <span>{formatBRL(subtotal)}</span>
                </div>
                <div className="flex justify-between text-cream/60">
                  <span>Taxa de entrega</span>
                  <span>{formatBRL(RESTAURANT.deliveryFee)}</span>
                </div>
                <div className="flex justify-between pt-1 font-display text-base font-bold">
                  <span>Total</span>
                  <span className="text-gold">{formatBRL(total)}</span>
                </div>
              </div>

              {!reachedMin && (
                <p className="mt-3 rounded-lg bg-wine/20 px-3 py-2 text-xs text-cream/80 ring-1 ring-inset ring-wine/40">
                  Pedido mínimo de {formatBRL(RESTAURANT.minOrder)}. Faltam{" "}
                  {formatBRL(RESTAURANT.minOrder - subtotal)}.
                </p>
              )}

              <button
                type="button"
                onClick={checkout}
                disabled={!reachedMin}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-black transition hover:brightness-95 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.47 14.38c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.65.15s-.75.94-.92 1.14-.34.22-.63.07a8.2 8.2 0 0 1-2.42-1.49 9 9 0 0 1-1.67-2.08c-.17-.3 0-.46.13-.61s.29-.34.44-.51a2 2 0 0 0 .29-.49.55.55 0 0 0 0-.52c-.07-.15-.65-1.58-.9-2.16s-.47-.48-.65-.49h-.56a1.06 1.06 0 0 0-.77.36 3.25 3.25 0 0 0-1 2.42 5.68 5.68 0 0 0 1.18 3 13 13 0 0 0 5 4.42 15.9 15.9 0 0 0 1.67.62 4 4 0 0 0 1.85.12 3 3 0 0 0 2-1.39 2.45 2.45 0 0 0 .17-1.39c-.07-.13-.26-.2-.55-.34zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.33A10 10 0 1 0 12 2z" />
                </svg>
                Finalizar no WhatsApp
              </button>
              <p className="mt-2 text-center text-[11px] text-cream/40">
                Demonstração — nenhum pedido real é enviado.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
