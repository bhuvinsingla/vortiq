import { services } from "@/data/content";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

export default function Services() {
  return (
    <Section
      id="services"
      tone="muted"
      title="Our Expertise"
      intro="Technology solutions designed to help businesses innovate, operate efficiently, and grow with confidence."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal as="li" key={service.title} delay={i * 80}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10">
              <div aria-hidden className="absolute inset-0 bg-linear-to-br from-brand/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-gradient text-white">
                  <Icon name={service.icon} />
                </span>
                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-ink/70">{service.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
