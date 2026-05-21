"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "hero", label: "Overview" },
  { id: "description", label: "Description" },
  { id: "gallery", label: "Gallery" },
  { id: "features", label: "Features" },
  { id: "cta", label: "More Work" },
] as const;

interface ProjectNavProps {
  projectTitle: string;
}

export function ProjectNav({ projectTitle }: ProjectNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Determine active section
      const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter(
        Boolean
      ) as HTMLElement[];

      const scrollPosition = window.scrollY + 150;
      let current = "hero";

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Top Navigation - Same as home page */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-foreground hover:opacity-70 transition-opacity"
          >
            ST
          </Link>
          <ul className="hidden md:flex items-center gap-8">
            {[
              { label: "Work", href: "/#work" },
              { label: "About", href: "/#about" },
              { label: "Contact", href: "/#contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="mailto:sammi.tan@example.com"
            className="hidden md:inline-flex text-sm font-medium px-4 py-1.5 rounded-full border border-foreground/20 hover:bg-foreground hover:text-primary-foreground transition-all duration-200"
          >
            Let&apos;s talk
          </Link>
          {/* Mobile menu placeholder */}
          <button
            className="md:hidden p-2 text-foreground"
            aria-label="Open menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 5h14M3 10h14M3 15h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Bottom Section Navigation */}
      <nav
        className={cn(
          "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex items-center gap-1 p-1.5 bg-foreground/95 backdrop-blur-md rounded-full shadow-lg border border-foreground/10">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                activeSection === section.id
                  ? "bg-background text-foreground"
                  : "text-background/70 hover:text-background"
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
