"use client";

import { useState } from "react";
import { categories } from "@/lib/menu";
import type { MenuItem } from "@/lib/types";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryNav } from "@/components/CategoryNav";
import { MenuSection } from "@/components/MenuSection";
import { ItemModal } from "@/components/ItemModal";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Header onOpenCart={() => setCartOpen(true)} />
      <Hero />
      <CategoryNav />

      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        {categories.map((category) => (
          <MenuSection
            key={category.id}
            category={category}
            onOpenItem={setSelected}
          />
        ))}
      </main>

      <Footer />

      <ItemModal item={selected} onClose={() => setSelected(null)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
