"use client";

import { itemsByCategory } from "@/lib/menu";
import type { Category, MenuItem } from "@/lib/types";
import { MenuCard } from "./MenuCard";

interface MenuSectionProps {
  category: Category;
  onOpenItem: (item: MenuItem) => void;
}

export function MenuSection({ category, onOpenItem }: MenuSectionProps) {
  const items = itemsByCategory(category.id);

  return (
    <section id={category.id} className="scroll-mt-32 py-10">
      <div className="mb-6">
        <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
          <span className="mr-2">{category.emoji}</span>
          {category.name}
        </h2>
        <p className="mt-1 text-sm text-cream/60">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} onOpen={onOpenItem} />
        ))}
      </div>
    </section>
  );
}
