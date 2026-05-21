"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Subtle drifting geometric lines
    const lines: { x: number; y: number; vx: number; vy: number; len: number; angle: number }[] = [];
    for (let i = 0; i < 18; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        len: 60 + Math.random() * 120,
        angle: Math.random() * Math.PI,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const l of lines) {
        l.x += l.vx;
        l.y += l.vy;
        l.angle += 0.0012;
        if (l.x < -200) l.x = canvas.width + 200;
        if (l.x > canvas.width + 200) l.x = -200;
        if (l.y < -200) l.y = canvas.height + 200;
        if (l.y > canvas.height + 200) l.y = -200;

        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate(l.angle);
        ctx.strokeStyle = "rgba(60,60,80,0.055)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-l.len / 2, 0);
        ctx.lineTo(l.len / 2, 0);
        ctx.stroke();
        ctx.restore();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs text-muted-foreground mb-10 font-mono tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
            Available for internship &amp; freelance · Singapore
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.05] mb-6 text-balance">
            Sammi Tan
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl font-medium text-foreground/80 mb-5 tracking-tight">
            Computer Science &amp; Design Student
          </p>

          {/* Pitch */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-12">
            Crafting intuitive digital experiences and bridging the gap between compelling visual
            design and frontend execution — from Figma prototypes to polished Android apps and
            immersive 3D worlds.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-primary-foreground text-sm font-medium hover:opacity-85 transition-opacity duration-200"
            >
              View Case Studies
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors duration-200"
            >
              Resume
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 10l3-3 2 2 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-6 md:left-10 flex items-center gap-3 text-xs text-muted-foreground font-mono tracking-widest uppercase">
          <div className="w-8 h-px bg-border" aria-hidden="true" />
          Scroll
        </div>
      </div>
    </section>
  );
}
