"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHome = pathname === "/";
    const bgClass = scrolled
        ? "bg-[#EAF1F6]/92 backdrop-blur-md border-b border-[var(--color-border-hairline)] shadow-sm"
        : "bg-[#EAF1F6]/85 backdrop-blur-md border-b border-[var(--color-border-hairline)]";
    const textClass = "text-[var(--color-text-main)]";
    const mutedTextClass = "text-[var(--color-text-muted)]";
    const buttonClass = "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] border border-transparent";

    const links = [
        { href: "/", label: "Home" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/kontakt", label: "Kontakt" },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-500 ${bgClass}`}>
            <div className={`max-w-[1400px] w-full mx-auto px-6 md:px-12 flex justify-between items-center ${textClass}`}>
                <Link href="/" className="text-[22px] font-semibold tracking-tight transition-opacity hover:opacity-80">
                    Liza Holiarchuk
                </Link>
                <nav className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {links.map((link) => {
                            const isActive = pathname === link.href;

                            let linkColor = "";
                            if (isActive) {
                                linkColor = textClass;
                            } else {
                                linkColor = `${mutedTextClass} hover:${textClass} hover:underline hover:underline-offset-4 hover:decoration-1`;
                            }

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-[15px] font-medium transition-colors relative py-1 ${linkColor}`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <span className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-[var(--color-dark-bg)]`} />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                    <Link
                        href="/kontakt"
                        className={`${buttonClass} px-8 py-3 rounded-2xl text-[15px] font-medium transition-colors flex items-center gap-2`}
                    >
                        Verfügbarkeit prüfen
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={`md:hidden p-2 -mr-2 ${textClass}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {mobileMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-[80px] left-0 right-0 bg-[#EAF1F6] border-b border-[var(--color-border-hairline)] px-6 py-8 flex flex-col gap-8 md:hidden shadow-sm">
                    <div className="flex flex-col gap-6">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-lg font-medium ${isActive ? "text-[var(--color-text-main)]" : "text-[var(--color-text-muted)]"}`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                    <Link
                        href="/kontakt"
                        onClick={() => setMobileMenuOpen(false)}
                        className="bg-[var(--color-accent)] text-white text-center w-full py-4 rounded-2xl text-[16px] font-medium transition-colors hover:bg-[var(--color-accent-hover)] border border-transparent"
                    >
                        Verfügbarkeit prüfen
                    </Link>
                </div>
            )}
        </header>
    );
}
