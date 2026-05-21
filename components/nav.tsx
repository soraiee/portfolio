"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-medium tracking-tight text-foreground hover:opacity-70 transition-opacity"
        >
          ST
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {["Work", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:sammi.tan@example.com"
          className="hidden md:inline-flex text-sm font-medium px-4 py-1.5 rounded-full border border-foreground/20 hover:bg-foreground hover:text-primary-foreground transition-all duration-200"
        >
          Let&apos;s talk
        </a>
        {/* Mobile menu placeholder */}
        <button className="md:hidden p-2 text-foreground" aria-label="Open menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
