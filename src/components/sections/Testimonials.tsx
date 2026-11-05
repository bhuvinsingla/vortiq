import { testimonials } from "@/data/content";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  return (
    <Section id="clients" tone="dark" title="What clients say">
      <ul className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal as="li" key={item.quote} delay={i * 100}>
            <figure className="h-full rounded-2xl border border-white/10 bg-white/5 p-8">
              <span aria-hidden className="text-gradient block text-7xl font-extrabold leading-none">&ldquo;</span>
              <blockquote className="mt-2 text-lg">{item.quote}</blockquote>
              <figcaption className="mt-6 text-sm text-white/60">
                <span className="font-bold text-white">{item.name}</span>, {item.role}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
