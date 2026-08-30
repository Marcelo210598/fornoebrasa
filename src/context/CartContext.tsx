"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartLine, MenuItem } from "@/lib/types";

interface CartContextValue {
  lines: CartLine[];
  add: (item: MenuItem, qty?: number) => void;
  setQty: (itemId: string, qty: number) => void;
  remove: (itemId: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "forno-brasa:cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* storage indisponível — segue vazio */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignora falha de escrita */
    }
  }, [lines, hydrated]);

  const add = useCallback((item: MenuItem, qty = 1) => {
    setLines((prev) => {
      const index = prev.findIndex((line) => line.item.id === item.id);
      if (index === -1) return [...prev, { item, qty }];
      const next = [...prev];
      next[index] = { ...next[index], qty: next[index].qty + qty };
      return next;
    });
  }, []);

  const setQty = useCallback((itemId: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((line) => line.item.id !== itemId)
        : prev.map((line) =>
            line.item.id === itemId ? { ...line, qty } : line,
          ),
    );
  }, []);

  const remove = useCallback((itemId: string) => {
    setLines((prev) => prev.filter((line) => line.item.id !== itemId));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const count = useMemo(
    () => lines.reduce((sum, line) => sum + line.qty, 0),
    [lines],
  );

  const subtotal = useMemo(
    () => lines.reduce((sum, line) => sum + line.qty * line.item.price, 0),
    [lines],
  );

  const value: CartContextValue = {
    lines,
    add,
    setQty,
    remove,
    clear,
    count,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart precisa estar dentro de <CartProvider>");
  return ctx;
}
