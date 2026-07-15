"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { getDictionary, Language } from "@/i18n";

const enServiceLinks = [
  { href: "/event-photographer-hamburg", label: "Event Photographer Hamburg" },
  { href: "/conference-photographer-hamburg", label: "Conference Photography" },
  { href: "/trade-show-photographer-hamburg", label: "Trade Show Photography" },
  { href: "/corporate-event-photographer-hamburg", label: "Corporate Event Photography" },
];

const deServiceLinks = [
  { href: "/eventfotograf-hamburg", label: "Eventfotograf Hamburg" },
  { href: "/konferenzfotografie-hamburg", label: "Konferenzfotografie" },
  { href: "/messefotograf-hamburg", label: "Messefotografie" },
  { href: "/corporate-event-fotograf-hamburg", label: "Corporate Event Fotografie" },
];

const enNavLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

const deNavLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/insights", label: "Insights" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/preise", label: "Preise" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const lang: Language = pathname.startsWith("/de") ? "de" : "en";
  const t = getDictionary(lang).header;

  const switchLanguage = (newLang: Language) => {
    if (newLang === lang) return;
    document.cookie = `site_lang=${newLang}; path=/; max-age=31536000; samesite=lax`;
    let newPath = pathname;
    if (newLang === "de") {
      newPath = `/de${pathname === "/" ? "" : pathname}`;
    } else {
      newPath = pathname.replace(/^\/de/, "") || "/";
    }
    window.location.href = newPath;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isDE = lang === "de";
  const currentServiceLinks = isDE ? deServiceLinks : enServiceLinks;
  const currentNavLinks = isDE ? deNavLinks : enNavLinks;

  const bgClass = scrolled
    ? "bg-[#EAF1F6]/92 backdrop-blur-md border-b border-[var(--color-border-hairline)] shadow-sm"
    : "bg-[#EAF1F6]/85 backdrop-blur-md border-b border-[var(--color-border-hairline)]";
  const textClass = "text-[var(--color-text-main)]";
  const mutedTextClass = "text-[var(--color-text-muted)]";
  const buttonClass = "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] border border-transparent";

  const getLocalizedHref = (href: string) => {
    if (!isDE) return href;
    return href === "/" ? "/de" : `/de${href}`;
  };

  const isActive = (href: string) => {
    const loc = getLocalizedHref(href);
    return pathname === loc || pathname.startsWith(loc + "/");
  };

  const linkClass = (href: string) =>
    `text-[15px] font-medium transition-colors relative py-1 ${
      isActive(href)
        ? `${textClass} underline underline-offset-4 decoration-1`
        : `${mutedTextClass} hover:${textClass} hover:underline hover:underline-offset-4 hover:decoration-1`
    }`;

  const contactHref = isDE ? "/de/kontakt" : "/contact";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-500 ${bgClass}`}>
      <div className={`max-w-[1400px] w-full mx-auto px-6 md:px-12 flex justify-between items-center ${textClass}`}>
        {/* Logo */}
        <Link href={getLocalizedHref("/")} className="text-[22px] font-semibold tracking-tight transition-opacity hover:opacity-80 shrink-0">
          Liza Holiarchuk
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {/* Portfolio */}
          <Link href={getLocalizedHref("/portfolio")} className={linkClass("/portfolio")}>
            Portfolio
          </Link>

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`text-[15px] font-medium transition-colors relative py-1 flex items-center gap-1 ${
                currentServiceLinks.some(s => pathname.startsWith(getLocalizedHref(s.href)))
                  ? `${textClass} underline underline-offset-4 decoration-1`
                  : `${mutedTextClass} hover:${textClass}`
              }`}
            >
              {isDE ? "Leistungen" : "Services"}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#EAF1F6] border border-[var(--color-border-hairline)] shadow-lg rounded-2xl py-3 px-2 min-w-[280px] flex flex-col gap-1 z-50">
                {currentServiceLinks.map(s => (
                  <Link
                    key={s.href}
                    href={getLocalizedHref(s.href)}
                    className={`text-[14px] px-4 py-2.5 rounded-xl transition-colors ${
                      pathname === getLocalizedHref(s.href)
                        ? "bg-[var(--color-border-hairline)] text-[var(--color-text-main)] font-medium"
                        : "text-[var(--color-text-muted)] hover:bg-[var(--color-border-hairline)] hover:text-[var(--color-text-main)]"
                    }`}
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other nav links */}
          {currentNavLinks.map(link => {
            if (link.href === "/portfolio") return null; // already rendered above
            return (
              <Link key={link.href} href={getLocalizedHref(link.href)} className={linkClass(link.href)}>
                {link.label}
              </Link>
            );
          })}

          {/* Contact CTA */}
          <Link href={contactHref} className={`${buttonClass} px-7 py-2.5 rounded-2xl text-[15px] font-medium transition-colors flex items-center gap-2 ml-2`}>
            {isDE ? "Kontakt" : "Contact"}
          </Link>

          {/* Language switcher */}
          <div className="flex items-center gap-2 text-[14px] font-medium border-l border-gray-300 pl-5">
            <button onClick={() => switchLanguage("en")} className={`transition-colors ${lang === "en" ? textClass : mutedTextClass + " hover:" + textClass}`}>EN</button>
            <span className={mutedTextClass}>|</span>
            <button onClick={() => switchLanguage("de")} className={`transition-colors ${lang === "de" ? textClass : mutedTextClass + " hover:" + textClass}`}>DE</button>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button className={`md:hidden p-2 -mr-2 ${textClass}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[80px] left-0 right-0 bg-[#EAF1F6] border-b border-[var(--color-border-hairline)] px-6 py-8 flex flex-col gap-6 md:hidden shadow-sm max-h-[80vh] overflow-y-auto">
          <Link href={getLocalizedHref("/portfolio")} onClick={() => setMobileMenuOpen(false)} className={`text-lg font-medium ${isActive("/portfolio") ? textClass : mutedTextClass}`}>Portfolio</Link>

          <div className="text-lg font-medium text-[var(--color-text-muted)]">{isDE ? "Leistungen" : "Services"}</div>
          <div className="flex flex-col gap-4 pl-4">
            {currentServiceLinks.map(s => (
              <Link key={s.href} href={getLocalizedHref(s.href)} onClick={() => setMobileMenuOpen(false)} className={`text-base font-normal ${pathname === getLocalizedHref(s.href) ? textClass : mutedTextClass}`}>{s.label}</Link>
            ))}
          </div>
          {currentNavLinks.map(link => {
            if (link.href === "/portfolio") return null;
            return (
              <Link key={link.href} href={getLocalizedHref(link.href)} onClick={() => setMobileMenuOpen(false)} className={`text-lg font-medium ${isActive(link.href) ? textClass : mutedTextClass}`}>{link.label}</Link>
            );
          })}

          <Link href={contactHref} onClick={() => setMobileMenuOpen(false)} className="bg-[var(--color-accent)] text-white text-center w-full py-4 rounded-2xl text-[16px] font-medium transition-colors hover:bg-[var(--color-accent-hover)]">
            {isDE ? "Kontakt" : "Contact"}
          </Link>

          <div className="flex items-center justify-center gap-4 text-[16px] font-medium pt-4 border-t border-[var(--color-border-hairline)]">
            <button onClick={() => { switchLanguage("en"); setMobileMenuOpen(false); }} className={lang === "en" ? textClass : mutedTextClass}>EN</button>
            <span className={mutedTextClass}>|</span>
            <button onClick={() => { switchLanguage("de"); setMobileMenuOpen(false); }} className={lang === "de" ? textClass : mutedTextClass}>DE</button>
          </div>
        </div>
      )}
    </header>
  );
}
