"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/schedule", label: "Schedule" },
  { href: "/tuition", label: "Tuition" },
  { href: "/faq", label: "FAQ" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/contact", label: "Contact" },
];

export function PublicNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-forest text-cream shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <img
            src="/learning-lantern-logo.svg"
            alt="Learning Lantern"
            className="h-10 w-10 rounded-full"
          />
          <span className="heading-serif text-xl font-bold tracking-wide">
            Learning Lantern
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-lantern text-white"
                  : "text-cream/80 hover:bg-forest-light hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="btn btn-accent btn-sm ml-2">
            Login
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="rounded-md p-2 text-cream md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="flex flex-col gap-1 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 text-sm font-medium ${
                pathname === link.href
                  ? "bg-lantern text-white"
                  : "text-cream/80 hover:bg-forest-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="btn btn-accent btn-sm mt-2"
          >
            Login
          </Link>
        </nav>
      )}
    </header>
  );
}

export function PublicFooter() {
  return (
    <footer className="mt-auto bg-forest-dark text-cream/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <img
              src="/learning-lantern-logo.svg"
              alt="Learning Lantern"
              className="h-10 w-10 rounded-full"
            />
            <span className="heading-serif text-lg font-bold text-cream">
              Learning Lantern
            </span>
          </div>
          <p className="text-sm">
            Illuminating minds, nurturing hearts — a Christian homeschool
            co-op community.
          </p>
        </div>
        <div>
          <h3 className="heading-serif mb-3 text-sm font-semibold uppercase tracking-wide text-lantern">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-lantern">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/classes" className="hover:text-lantern">
                Classes
              </Link>
            </li>
            <li>
              <Link href="/tuition" className="hover:text-lantern">
                Tuition & Fees
              </Link>
            </li>
            <li>
              <Link href="/sponsor" className="hover:text-lantern">
                Sponsor Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="heading-serif mb-3 text-sm font-semibold uppercase tracking-wide text-lantern">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:info@learninglantern.com"
                className="hover:text-lantern"
              >
                info@learninglantern.com
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-lantern">
                Contact Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-light/30 py-4 text-center text-xs">
        © {new Date().getFullYear()} Learning Lantern. All rights reserved.
      </div>
    </footer>
  );
}

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicNavbar />
      <main className="flex-1">{children}</main>
      <PublicFooter />
    </>
  );
}
