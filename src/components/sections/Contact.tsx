"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { company } from "@/data/content";
import {
  CONTACT_LIMITS,
  validateContactPayload,
  type ContactApiResponse,
  type ContactFormValues,
} from "@/lib/contact";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const initialState: ContactFormValues = {
  name: "",
  email: "",
  message: "",
  website: "",
};

const fieldClass =
  "mt-1 w-full rounded-lg border border-ink/30 bg-white p-3 text-base focus:border-brand focus:outline-none disabled:cursor-not-allowed disabled:opacity-60";

export default function Contact() {
  const [form, setForm] = useState<ContactFormValues>(initialState);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isSubmitting = status === "submitting";

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status === "error" || status === "success") {
      setStatus("idle");
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validation = validateContactPayload(form);
    if (!validation.valid) {
      setStatus("error");
      setErrorMessage(validation.error);
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json().catch(() => null)) as ContactApiResponse | null;

      if (!response.ok || !data?.ok) {
        setStatus("error");
        setErrorMessage(
          data?.error ?? "Unable to send your message right now. Please try again later.",
        );
        return;
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <Section id="contact" tone="muted" title="Let's build something" intro="Tell us about your project and we will reply within one business day.">
      <div className="grid gap-8 lg:gap-12 md:grid-cols-2 items-stretch">
        <form onSubmit={handleSubmit} className="flex flex-col justify-between space-y-5 rounded-2xl border border-ink/10 bg-white p-8 shadow-xl shadow-ink/5">
          <div className="space-y-5">
            {/* Honeypot field to catch automated spam bots */}
            <div aria-hidden="true" className="sr-only">
              <label>
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={handleChange}
                />
              </label>
            </div>
            <label className="block text-sm font-bold">
              Name
              <input
                required
                name="name"
                maxLength={CONTACT_LIMITS.nameMax}
                disabled={isSubmitting}
                value={form.name}
                onChange={handleChange}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm font-bold">
              Email
              <input
                required
                type="email"
                name="email"
                maxLength={CONTACT_LIMITS.emailMax}
                disabled={isSubmitting}
                value={form.email}
                onChange={handleChange}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm font-bold">
              Project details
              <textarea
                required
                rows={5}
                name="message"
                minLength={CONTACT_LIMITS.messageMin}
                maxLength={CONTACT_LIMITS.messageMax}
                disabled={isSubmitting}
                value={form.message}
                onChange={handleChange}
                className={fieldClass}
              />
            </label>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-brand-gradient px-7 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
            {status === "success" && (
              <p role="status" className="mt-3 text-sm font-bold text-emerald-700">
                Thanks! Your message has been sent. We will be in touch soon.
              </p>
            )}
            {status === "error" && errorMessage && (
              <p role="alert" className="mt-3 text-sm font-bold text-brand">
                {errorMessage}
              </p>
            )}
          </div>
        </form>

        <div className="flex h-full flex-col justify-between gap-4 md:gap-5">
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
