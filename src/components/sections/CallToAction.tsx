import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-20 text-white md:py-28">
      <div aria-hidden className="absolute -right-32 -top-32 opacity-40">
        <div className="vortex-ring" style={{ width: 460, height: 460 }} />
      </div>
      <Reveal className="relative mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight md:text-6xl">Have a project in mind?</h2>
        <p className="mt-4 max-w-xl text-lg text-white/85">
          Share your idea and get a clear plan, timeline and estimate within a week.
        </p>
        <Button href="#contact" variant="light" className="mt-8">Start a conversation</Button>
      </Reveal>
    </section>
  );
}
