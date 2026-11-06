"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { company } from "@/data/content";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", message: "" };
const fieldClass = "mt-1 w-full rounded-lg border border-ink/30 bg-white p-3 text-base focus:border-brand focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: send `form` to your backend or a form service.
    setSent(true);
    setForm(initialState);
  };

  return (
    <Section id="contact" tone="muted" title="Let's build something" intro="Tell us about your project and we will reply within one business day.">
      <div className="grid gap-8 lg:gap-12 md:grid-cols-2 items-stretch">
        <form onSubmit={handleSubmit} className="flex flex-col justify-between space-y-5 rounded-2xl border border-ink/10 bg-white p-8 shadow-xl shadow-ink/5">
          <div className="space-y-5">
            <label className="block text-sm font-bold">
              Name
              <input required name="name" value={form.name} onChange={handleChange} className={fieldClass} />
            </label>
            <label className="block text-sm font-bold">
              Email
              <input required type="email" name="email" value={form.email} onChange={handleChange} className={fieldClass} />
            </label>
            <label className="block text-sm font-bold">
              Project details
              <textarea required rows={5} name="message" value={form.message} onChange={handleChange} className={fieldClass} />
            </label>
          </div>
          <div>
            <button type="submit" className="rounded-full bg-brand-gradient px-7 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:brightness-110">
              Send message
            </button>
            {sent && <p role="status" className="mt-3 font-bold text-brand">Thanks! We will be in touch soon.</p>}
          </div>
        </form>

        <div className="flex h-full flex-col justify-between gap-4 md:gap-5">
          {/* Email Card */}
          <article className="flex flex-1 items-center gap-5 rounded-2xl border border-ink/10 bg-white p-6 shadow-xl shadow-ink/5 transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-brand/5">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand/20">
              <Icon name="mail" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-ink/50">Email us</p>
              <a href={`mailto:${company.email}`} className="mt-1 block truncate text-base sm:text-lg font-bold text-ink hover:text-brand transition">
                {company.email}
              </a>
              <p className="mt-0.5 text-xs text-ink/60">We reply within 24 hours</p>
            </div>
          </article>

          {/* Phone Card */}
          <article className="flex flex-1 items-center gap-5 rounded-2xl border border-ink/10 bg-white p-6 shadow-xl shadow-ink/5 transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-brand/5">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand/20">
              <Icon name="mobile" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-ink/50">Call us</p>
              <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="mt-1 block truncate text-base sm:text-lg font-bold text-ink hover:text-brand transition">
                {company.phone}
              </a>
              <p className="mt-0.5 text-xs text-ink/60">Mon – Fri, 9am to 6pm IST</p>
            </div>
          </article>

          {/* Office Address Card */}
          <article className="flex flex-1 items-center gap-5 rounded-2xl border border-ink/10 bg-white p-6 shadow-xl shadow-ink/5 transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-brand/5">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white shadow-md shadow-brand/20">
              <Icon name="pin" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-ink/50">Visit our office</p>
              <p className="mt-1 text-base sm:text-lg font-bold text-ink">
                {company.address}
              </p>
              <p className="mt-0.5 text-xs text-ink/60">Headquarters & Tech Center</p>
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}
