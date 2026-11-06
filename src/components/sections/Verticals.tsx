"use client";

import { useState } from "react";
import { projects, verticals } from "@/data/content";
import Section from "@/components/ui/Section";
import ProductScreen from "@/components/ui/ProductScreen";
import Reveal from "@/components/ui/Reveal";

export default function Verticals() {
  const [activeId, setActiveId] = useState(verticals[0].id);
  const active = verticals.find((item) => item.id === activeId) ?? verticals[0];
  const project = projects.find((item) => item.id === active.projectId);

  return (
    <Section
      id="verticals"
      tone="light"
      title="Industries we build for"
      intro="Each vertical is a working product: the job it replaces, the numbers it moves, and the screen teams actually use."
    >
      <div className="mb-8 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Industry verticals">
        {verticals.map((item) => {
          const selected = item.id === active.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`panel-${item.id}`}
              onClick={() => setActiveId(item.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                selected
                  ? "bg-brand-gradient text-white"
                  : "border border-ink/15 text-ink/70 hover:border-ink/40"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="grid items-center gap-10 lg:grid-cols-2"
      >
        <Reveal key={active.id}>
          <p className="text-xs font-bold tracking-wider text-brand uppercase">{active.label}</p>
          <h3 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{active.title}</h3>
          <p className="mt-4 text-lg text-ink/70">{active.description}</p>
          <dl className="mt-8 grid grid-cols-3 gap-3">
            {active.values.map((item) => (
              <div key={item.label} className="rounded-2xl border border-ink/10 bg-white p-3">
                <dt className="text-xl font-extrabold text-ink">{item.value}</dt>
                <dd className="mt-1 text-xs text-ink/60">{item.label}</dd>
              </div>
            ))}
          </dl>
          {project && (
            <div className="mt-8">
              <p className="text-sm font-bold text-ink">{project.title}</p>
              <p className="mt-2 text-sm text-ink/70">{project.summary}</p>
              <a href={`#${project.id}`} className="mt-4 inline-flex text-sm font-bold text-brand hover:text-brand-dark">
                Read the project →
              </a>
            </div>
          )}
        </Reveal>
        <ProductScreen screen={active.screen} />
      </div>
    </Section>
  );
}
