import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

/** Slow, continuous marquee carousel. Pauses on hover; respects reduced motion. */
export function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul className="flex w-max gap-5 animate-marquee" aria-label="Depoimentos de clientes">
        {loop.map((t, i) => (
          <li
            key={`${t.name}-${i}`}
            aria-hidden={i >= TESTIMONIALS.length}
            className="w-80 shrink-0 rounded-2xl border border-border bg-card p-6"
          >
            <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="mt-3 text-sm leading-relaxed text-foreground">{t.text}</p>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="font-display text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
              <div className="flex text-primary-glow" aria-label="5 estrelas">
                {Array.from({ length: 5 }, (_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
