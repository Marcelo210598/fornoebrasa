"use client";

import { useEffect, useRef, useState } from "react";
import { categories } from "@/lib/menu";

export function CategoryNav() {
  const [active, setActive] = useState(categories[0].id);
  const clickLockRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLockRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setActive(id);
    clickLockRef.current = true;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      clickLockRef.current = false;
    }, 700);
  };

  return (
    <nav className="sticky top-[57px] z-30 border-b border-white/10 bg-ink/85 backdrop-blur-md">
      <div className="no-scrollbar mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => handleClick(cat.id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              active === cat.id
                ? "bg-gold text-ink"
                : "bg-white/5 text-cream/70 hover:bg-white/10 hover:text-cream"
            }`}
          >
            <span>{cat.emoji}</span>
            {cat.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
