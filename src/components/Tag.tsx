import type { Tag as TagType } from "@/lib/types";

const CONFIG: Record<TagType, { label: string; className: string }> = {
  "mais-pedido": {
    label: "Mais pedido",
    className: "bg-gold/20 text-gold ring-gold/40",
  },
  novo: {
    label: "Novo",
    className: "bg-teal/25 text-cream ring-teal/50",
  },
  vegetariano: {
    label: "Vegetariano",
    className: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/40",
  },
  picante: {
    label: "Picante",
    className: "bg-ember/20 text-ember ring-ember/40",
  },
};

export function Tag({ tag }: { tag: TagType }) {
  const { label, className } = CONFIG[tag];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${className}`}
    >
      {label}
    </span>
  );
}
