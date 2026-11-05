import { company, navLinks } from "@/data/content";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-dark-gradient text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <a href="#top" className="inline-flex items-center" aria-label={company.name}>
            <Logo className="h-14 sm:h-16" />
          </a>
          <p className="mt-3 max-w-xs">{company.intro}</p>
        </div>
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.href}><a href={link.href} className="hover:text-white">{link.label}</a></li>
          ))}
        </ul>
        <address className="space-y-2 not-italic">
          <p>{company.email}</p>
          <p>{company.phone}</p>
          <p>{company.address}</p>
        </address>
      </div>
      <p className="border-t border-white/10 py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
      </p>
    </footer>
  );
}
