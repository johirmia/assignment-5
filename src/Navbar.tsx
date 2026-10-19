
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <nav className="container relative flex min-h-[76px] items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-all duration-200 hover:border-pink-300 hover:bg-pink-50 hover:text-pink-600 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Logo />
        </div>
        <div className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-pink-50 hover:text-pink-600 hover:shadow-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href="sign-in"
            className="rounded-full px-3 py-2 text-xs font-semibold text-slate-700 transition-all duration-200 hover:bg-pink-50 hover:text-pink-600 hover:shadow-sm sm:px-4 sm:text-sm"
          >
            Sign In
          </a>

          <a
            href="sign-up"
            className="button-gradient rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white p-3 shadow-lg md:hidden">
          <div className="container flex flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="mb-1 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-pink-50 hover:text-pink-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
