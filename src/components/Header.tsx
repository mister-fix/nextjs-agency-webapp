"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="w-full bg-background/80 backdrop-blur border-b border-border fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center py-6 px-4 md:px-12">
        <div className="flex items-center gap-8 flex-1">
          <Link href="/" className="text-2xl font-semibold -tracking-widest text-primary">
            Devhaus
          </Link>
          {/* Desktop nav */}
          <nav className="hidden md:flex gap-2 md:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-neutral-600/50 hover:text-black transition-colors px-3 py-1 rounded-full border border-transparent hover:border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        {/* Desktop Contact button */}
        <div className="hidden md:flex flex-0">
          <Link
            href="#contact"
            className="ml-6 text-base font-semibold rounded-full bg-neutral-900 text-white tracking-tighter px-3 py-1 border border-neutral-900 hover:bg-neutral-800 hover:border-neutral-800 transition-colors shadow-none"
          >
            Contact
          </Link>
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-neutral-200"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </button>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 md:hidden h-screen" onClick={() => setMenuOpen(false)}>
            <div className="absolute top-0 left-0 w-full h-full bg-background shadow-lg px-4 py-6 flex flex-col gap-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="text-2xl font-semibold -tracking-widest text-primary" onClick={() => setMenuOpen(false)}>
                  Devhaus
                </Link>
                <button
                  className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-neutral-200"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                </button>
              </div>
              <nav className="flex flex-col divide-y divide-neutral-100 gap-y-4 border-t border-b pt-4 border-neutral-100">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-neutral-400 hover:text-black transition-colors pb-4 hover:border-neutral-200 tracking-tighter"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col items-center border-b border-neutral-100 pb-8">
                <span className="text-lg text-center text-neutral-400 tracking-tighter">Available for new business</span>
                <Link
                  href="#contact"
                  className="w-full mt-4 text-lg font-semibold rounded-full bg-neutral-900 text-white px-5 py-2 border border-neutral-900 hover:bg-neutral-800 hover:border-neutral-800 transition-colors shadow-none text-center tracking-tighter"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>

  );
} 