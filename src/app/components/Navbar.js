
"use client";

import { useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Platform", href: "#dashboard" },
  { label: "About", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuButton = useRef(null);

  return (
    <header id="top" className="relative z-50"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          menuButton.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10"
      >
        <a
          href="#top"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-bold tracking-[-0.06em]"
          aria-label="Nexora homepage"
        >
          nexora<span className="text-[#635bff]">.</span>
        </a>

        <div className="hidden items-center gap-9 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[#635bff]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#dashboard"
          className="hidden items-center gap-2 rounded-full bg-[#1b1d2b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#635bff] md:inline-flex"
        >
          Live preview <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <button
          ref={menuButton}
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#1b1d2b] md:hidden"
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-4 right-4 top-full rounded-2xl border border-slate-200 bg-white p-4 shadow-xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-indigo-50"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#dashboard"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-xl bg-[#635bff] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Explore demo →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
