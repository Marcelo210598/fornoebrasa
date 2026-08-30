import { RESTAURANT } from "@/lib/restaurant";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-ink/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="font-display text-lg font-extrabold">
              Forno <span className="text-gold">&amp;</span> Brasa
            </span>
          </div>
          <p className="mt-3 text-sm text-cream/60">
            Pizzaria e hamburgeria artesanal. Massa de fermentação natural e forno
            a lenha.
          </p>
        </div>

        <div className="text-sm">
          <h3 className="font-display font-bold text-cream">Onde estamos</h3>
          <p className="mt-2 text-cream/60">{RESTAURANT.address}</p>
          <p className="mt-1 text-cream/60">{RESTAURANT.hours}</p>
        </div>

        <div className="text-sm">
          <h3 className="font-display font-bold text-cream">Contato</h3>
          <p className="mt-2 text-cream/60">WhatsApp: (21) 99999-8888</p>
          <p className="mt-1 text-cream/60">Instagram: {RESTAURANT.instagram}</p>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-cream/40 sm:px-6">
        Projeto de demonstração · cardápio digital · dados e estabelecimento
        fictícios. Desenvolvido por Marcelo Di Foggia.
      </div>
    </footer>
  );
}
