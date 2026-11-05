import { useState, useEffect } from "react";
import { company, navLinks } from "@/data/content";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Lock background scroll and handle Escape key when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") close();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 text-white backdrop-blur-lg">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
          {/* Mobile Left: 3-line hamburger menu button + Logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-brand md:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>

            <a href="#top" className="flex items-center" aria-label={company.name}>
              <Logo className="h-12 sm:h-14" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/80 transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button href="#contact" className="px-5 py-2">
                Get a quote
              </Button>
            </li>
          </ul>

          {/* Mobile Right: Quick CTA */}
          <div className="md:hidden">
            <Button href="#contact" className="px-4 py-1.5 text-xs font-bold">
              Get a quote
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      <div
        aria-hidden="true"
        onClick={close}
        className={`fixed inset-0 z-60 bg-black/75 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sideways Mobile Drawer */}
      <aside
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`fixed inset-y-0 left-0 z-60 flex w-72 sm:w-80 max-w-[85vw] flex-col justify-between border-r border-white/10 bg-ink p-6 text-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Drawer Header with Logo and Close button */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <a href="#top" onClick={close} className="flex items-center" aria-label={company.name}>
              <Logo className="h-12" />
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-white/40">Navigation</p>
            <ul className="mt-4 space-y-1.5">
              {navLinks.map((link, idx) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="group flex items-center justify-between rounded-xl px-3.5 py-3 text-base font-semibold text-white/85 transition hover:bg-white/5 hover:text-white"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-white/30 group-hover:text-brand">0{idx + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Drawer Bottom CTA & Contacts */}
        <div className="border-t border-white/10 pt-6">
          <Button href="#contact" onClick={close} className="w-full text-center py-2.5">
            Get a quote
          </Button>
          <div className="mt-4 space-y-1 text-xs text-white/50">
            <p className="truncate">{company.email}</p>
            <p>{company.phone}</p>
          </div>
        </div>
      </aside>
    </>
  );
}
