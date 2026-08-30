export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate overflow-hidden"
    >
      {/* Foto de fundo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=70"
        alt="Pizza de pepperoni saindo do forno"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/85 to-plum/70" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-cream/80">
          Pizzaria &amp; Hamburgeria Artesanal
        </p>

        <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Do forno a lenha
          <br />
          <span className="text-gold">direto pra sua mesa</span>
        </h1>

        <p className="mt-4 max-w-xl text-base text-cream/75 sm:text-lg">
          Massa de fermentação natural de 48h, blend 180g na chapa e ingredientes
          selecionados. Monte seu pedido pelo cardápio e finalize no WhatsApp.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Aberto agora
          </span>
          <span className="rounded-full bg-white/5 px-3 py-1 text-cream/70 ring-1 ring-inset ring-white/10">
            Entrega 30–45 min
          </span>
          <span className="rounded-full bg-white/5 px-3 py-1 text-cream/70 ring-1 ring-inset ring-white/10">
            Pedido mínimo R$ 25
          </span>
        </div>

        <a
          href="#pizzas"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 font-semibold text-white transition hover:bg-ember/90 active:scale-95"
        >
          Ver cardápio
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
