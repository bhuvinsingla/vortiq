import { processSteps } from "@/data/content";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Process() {
  return (
    <Section id="process" tone="light" title="How we work" intro="A simple process with clear checkpoints.">
      <ol className="grid gap-10 md:grid-cols-4">
        {processSteps.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 120} className="relative border-t-2 border-ink/15 pt-8">
            <span className="absolute -top-5 grid size-9 place-items-center rounded-full bg-brand-gradient text-sm font-extrabold text-white shadow-lg shadow-brand/30">
              {index + 1}
            </span>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="mt-2 text-ink/70">{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
