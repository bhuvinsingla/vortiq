"use client";

import { stats } from "@/data/content";
import type { Stat } from "@/types";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import Reveal from "@/components/ui/Reveal";

function StatItem({ value, suffix, label }: Stat) {
  const { ref, inView } = useInView(0.5);
  const count = useCountUp(value, inView);

  return (
    <div ref={ref} className="flex flex-col-reverse">
      <dt className="text-sm tracking-wide text-white/85 uppercase">{label}</dt>
      <dd className="text-5xl font-extrabold md:text-6xl">{count}{suffix}</dd>
    </div>
  );
}

export default function Stats() {
  return (
    <section aria-label="Company in numbers" className="bg-brand-gradient py-16 text-white">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90} variant="scale">
            <StatItem {...stat} />
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
