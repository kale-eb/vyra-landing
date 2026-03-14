"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[var(--surface-border)] bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-2xl backdrop-saturate-150"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2"
          >
            <span
              className="text-[22px] font-extrabold tracking-tight text-[var(--foreground)] transition-colors duration-200"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Vyra
            </span>
          </a>

          {/* Desktop links — pill navigation */}
          <div className="hidden items-center gap-1 rounded-full border border-[var(--surface-border)] bg-white/60 px-1.5 py-1 backdrop-blur-sm md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-[13px] font-medium text-[var(--foreground-muted)] transition-all duration-200 hover:bg-black/[0.03] hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://app.usevyra.com"
              className="hidden text-[13px] font-medium text-[var(--foreground-muted)] transition-colors duration-200 hover:text-[var(--foreground)] md:inline-flex"
            >
              Log in
            </a>
            <a
              href="https://app.usevyra.com"
              className="hidden rounded-full bg-[var(--foreground)] px-4 py-1.5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-[#222] hover:shadow-lg hover:shadow-black/10 md:inline-flex"
            >
              Get Started
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg transition-colors hover:bg-black/[0.04] md:hidden"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 6, width: 18 }
                    : { rotate: 0, y: 0, width: 18 }
                }
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] rounded-full bg-[var(--foreground)]"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className="block h-[1.5px] w-[18px] rounded-full bg-[var(--foreground)]"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -6, width: 18 }
                    : { rotate: 0, y: 0, width: 18 }
                }
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] rounded-full bg-[var(--foreground)]"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="text-3xl font-bold tracking-tight text-[var(--foreground)] transition-colors hover:text-[var(--brand-blue)]"
                  style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://app.usevyra.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mt-6 rounded-full bg-[var(--foreground)] px-8 py-3 text-base font-semibold text-white transition-all hover:bg-[#222]"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
