import Image from "next/image";

// SVG icon components — monochrome, consistent 28×28

const FigmaIcon = () => (
  <svg viewBox="0 0 38 57" fill="none" aria-hidden="true" className="w-full h-full">
    <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="currentColor" />
    <path d="M9.5 9.5A9.5 9.5 0 0 1 19 0h9.5a9.5 9.5 0 0 1 0 19H19a9.5 9.5 0 0 1-9.5-9.5z" fill="currentColor" fillOpacity=".6" />
    <path d="M9.5 28.5A9.5 9.5 0 0 1 19 19v19a9.5 9.5 0 0 1-9.5-9.5z" fill="currentColor" fillOpacity=".6" />
    <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38v9.5a9.5 9.5 0 0 1-9.5 9.5 9.5 9.5 0 0 1 0-19z" fill="currentColor" fillOpacity=".6" />
  </svg>
);

const PsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity=".12" />
    <path d="M4.5 17V7h3.6c.9 0 1.6.2 2.1.7s.8 1.2.8 2-.3 1.5-.8 2-1.2.7-2.1.7H6.2V17H4.5zm1.7-5.5h1.7c.5 0 .9-.1 1.1-.4s.4-.6.4-1.1-.1-.8-.4-1-.7-.4-1.2-.4H6.2v2.9zM13.4 17.1c-.6 0-1.1-.1-1.5-.3s-.6-.5-.6-.9c0-.3.1-.5.4-.7s.5-.3.8-.3c.3.1.5.3.7.7.1.2.3.4.5.5s.4.2.7.2.5-.1.7-.2.3-.4.3-.6c0-.3-.1-.5-.3-.6s-.5-.3-1-.4c-.8-.2-1.4-.5-1.7-.9s-.5-.8-.5-1.4c0-.4.1-.8.3-1.1s.5-.6.9-.8.9-.3 1.4-.3c.5 0 1 .1 1.4.3s.7.5.9.8.3.7.3 1h-1.5c0-.3-.1-.5-.3-.7s-.4-.2-.7-.2-.5.1-.7.2-.3.3-.3.6c0 .2.1.4.3.5s.5.3 1 .4c.8.2 1.4.5 1.8.9s.5.9.5 1.5c0 .6-.2 1-.5 1.4s-.9.6-1.5.7z" fill="currentColor" />
  </svg>
);

const AiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity=".12" />
    <path d="M14.9 17l-.8-2.4h-3.7L9.6 17H7.8l3.5-10h2l3.5 10h-1.9zm-2.7-7.9L10.9 13h2.8l-1.3-3.9h-.2zM17.2 8.5c0-.3.1-.5.3-.7s.4-.3.7-.3.5.1.7.3.3.4.3.7-.1.5-.3.7-.4.3-.7.3-.5-.1-.7-.3-.3-.4-.3-.7zm1.7 8.5h-1.5v-7h1.5v7z" fill="currentColor" />
  </svg>
);

const IdIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity=".12" />
    <path d="M7.3 17V7h1.7v10H7.3zM10.9 17V7h3.2c1.1 0 2 .2 2.7.7s1.2 1.1 1.5 1.9.5 1.7.5 2.7-.2 1.9-.5 2.7-1 1.4-1.7 1.8-1.5.7-2.5.7h-3.2zm1.7-1.5h1.3c.7 0 1.3-.2 1.7-.5s.7-.7.9-1.3.3-1.2.3-1.9-.1-1.3-.3-1.8-.5-1-1-1.2-1-.5-1.7-.5h-1.2v7.2z" fill="currentColor" />
  </svg>
);

const XdIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity=".12" />
    <path d="M9.8 12.7L12.6 17h-2L8.7 14 6.9 17H5l2.8-4.3L5.1 7h2l1.7 3 1.7-3h1.9L9.8 12.7zm3.5.7l2.6-6.4h1.7l-3.6 8.7c-.2.5-.5.9-.9 1.2s-.9.4-1.4.4h-.8V16h.4c.3 0 .5-.1.7-.2s.3-.3.4-.6l.2-.4-.1-.4H13.3z" fill="currentColor" />
  </svg>
);

const AeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity=".12" />
    <path d="M7.4 14.5H5.1L4.5 17H3l2.7-10h1.6L10 17H8.5L7.4 14.5zm-2-.8h1.8l-.5-1.8-.4-2.1h-.1l-.4 2.1-.4 1.8zM19.6 17c-.2-.3-.3-.6-.3-.9h-.1c-.2.3-.5.6-.8.7s-.7.3-1.1.3c-.4 0-.8-.1-1.1-.3s-.6-.4-.8-.8-.3-.7-.3-1.2c0-.9.3-1.5.9-1.9s1.4-.6 2.5-.6h.7v-.5c0-.4-.1-.7-.3-.9s-.4-.3-.7-.3c-.3 0-.5.1-.7.2s-.3.4-.3.6h-1.4c0-.4.1-.8.4-1.1s.6-.6 1-.7.9-.2 1.3-.2c.7 0 1.3.2 1.7.5s.7.9.7 1.5V16c0 .4.1.7.2 1H19.6zm-2.1-1c.3 0 .5-.1.8-.2s.4-.4.5-.6v-1.3H18c-.6 0-1 .1-1.3.3s-.4.5-.4.9c0 .3.1.5.3.7s.5.2.7.2h.2z" fill="currentColor" />
  </svg>
);

const SubstancePainterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity=".12" />
    <path d="M12 4a8 8 0 1 0 0 16A8 8 0 0 0 12 4zm0 2a6 6 0 0 1 5.3 3.2l-2.2 1.3A3.6 3.6 0 0 0 12 9a3.6 3.6 0 0 0-3 1.5L6.7 9.2A6 6 0 0 1 12 6zm0 3.4c.9 0 1.7.5 2.1 1.3l-2.1 1.2-2.1-1.2c.4-.8 1.2-1.3 2.1-1.3zm-5.3 2.8l2.2 1.3A3.6 3.6 0 0 0 12 15a3.6 3.6 0 0 0 3.1-1.5l2.2 1.3A6 6 0 0 1 12 18a6 6 0 0 1-5.3-5.8z" fill="currentColor" />
  </svg>
);

const FusionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity=".12" />
    <path d="M12 3l8 4.5V17L12 21l-8-3.5V7.5L12 3zm0 2.2L6 8.4v7.4l6 2.8 6-2.8V8.4L12 5.2zm0 2.1l4.5 2.5V14L12 16.5 7.5 14V9.8L12 7.3z" fill="currentColor" />
  </svg>
);

const MayaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity=".12" />
    <path d="M5 7h2v5l3.5-5H12l-3.5 5 3.5 5h-2L6.5 12.2V17H5V7zm10 0h1.5l3 10H18l-.7-2.5h-3l-.7 2.5H12l3-10zm.5 2.5l-1 4.5h2.5l-1-4.5H15.5z" fill="currentColor" />
  </svg>
);

const MotionBuilderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity=".12" />
    <path d="M12 4a8 8 0 1 0 0 16A8 8 0 0 0 12 4zm3.5 5.5l-5 3 5 3V9.5z" fill="currentColor" />
  </svg>
);

const BlenderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity=".12" />
    <path d="M12.5 9a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM7 8.5c.8-1.1 2-1.9 3.4-2.2l-1.2-1.8C7.6 5.2 6.2 6.5 5.4 8L7 8.5zm8.6-2.2c1.4.3 2.6 1.1 3.4 2.2l1.6-.5c-.8-1.5-2.2-2.8-3.8-3.5l-1.2 1.8zM5 11H3c0 1.6.5 3.1 1.4 4.3l1.3-1.2A5.9 5.9 0 0 1 5 11zm14 0h-2c0 1.1-.3 2.1-.7 3.1l1.3 1.2C18.5 14.1 19 12.6 19 11z" fill="currentColor" />
  </svg>
);

const WordIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity=".12" />
    <path d="M14 4h5v16h-5V4zM5 4h7v16H5V4zm1 4l1.5 8L9 10l1.5 6L12 8v1L10.5 17 9 11l-1.5 6L6 8V7l1 1z" fill="currentColor" />
  </svg>
);

const PowerPointIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity=".12" />
    <path d="M5 4h14v16H5V4zm2 3v10h2v-4h3c1.7 0 3-1.3 3-3s-1.3-3-3-3H7zm2 2h3c.6 0 1 .4 1 1s-.4 1-1 1H9V9z" fill="currentColor" />
  </svg>
);

const ExcelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity=".12" />
    <path d="M5 4h14v16H5V4zm2 3v2h4v2H7v2h4v2H7v2h4v2H7v1h10V7H7zm6 0v2h2V7h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zM8.5 9L10 12l-1.5 3h1.3l.7-1.5.7 1.5H12.5L11 12l1.5-3h-1.3l-.7 1.5L9.8 9H8.5z" fill="currentColor" />
  </svg>
);

const tools = [
  { name: "Figma", Icon: FigmaIcon },
  { name: "Photoshop", Icon: PsIcon },
  { name: "Illustrator", Icon: AiIcon },
  { name: "InDesign", Icon: IdIcon },
  { name: "Adobe XD", Icon: XdIcon },
  { name: "After Effects", Icon: AeIcon },
  { name: "Substance Painter", Icon: SubstancePainterIcon },
  { name: "Autodesk Fusion", Icon: FusionIcon },
  { name: "Maya", Icon: MayaIcon },
  { name: "Motionbuilder", Icon: MotionBuilderIcon },
  { name: "Blender", Icon: BlenderIcon },
  { name: "Word", Icon: WordIcon },
  { name: "PowerPoint", Icon: PowerPointIcon },
  { name: "Excel", Icon: ExcelIcon },
];

const experiences = [
  {
    role: "3D Artist",
    company: "Continental Automotive Singapore",
    period: "2023–2023",
    description:
      "Created award-nominated 3D environments and game assets using Blender, Maya, and Substance Painter. Focus on cinematic lighting, procedural texturing, and game-ready optimization.",
  },
  {
    role: "Experience & Missions Design Intern",
    company: "Maibel",
    period: "2025-2026",
    description:
      "Designed player experience flows, scripted mission logic, and created 3D companion assets. Collaborated cross-functionally with narrative and engineering teams.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Label */}
        <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-12">
          About &amp; Experience
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20">
          {/* Left — headshot */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-border bg-card self-start">
              <Image
                src="/images/Portrait.jpg"
                alt="Sammi Tan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              {/* Name card overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-foreground/70 to-transparent">
                <p className="text-primary-foreground font-semibold text-lg">Sammi Tan</p>
                <p className="text-primary-foreground/80 text-sm">SUTD, Singapore</p>
              </div>
            </div>
          </div>

          {/* Right — bio + experience */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 text-balance">
              CS × Design, bridging both worlds
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I&apos;m a Computer Science and Design student at the Singapore University of Technology
              and Design (SUTD), where I explore the intersection of technology and human-centred
              thinking. My work spans UI/UX design, Android development, and 3D art — I believe
              the best digital products come from designers who understand how things are actually
              built.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Whether I&apos;m wireframing user flows in Figma, crafting pixel-perfect XML layouts in
              Java, or sculpting immersive 3D worlds in Blender, I bring the same obsession with
              craft and clarity to every project.
            </p>

            {/* Experience */}
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.role}
                  className="flex gap-5 p-5 rounded-2xl bg-card border border-border"
                >
                  <div className="w-1 rounded-full bg-foreground/20 shrink-0" aria-hidden="true" />
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{exp.role}</h3>
                      <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tool Stack — icons only */}
        <div>
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8">
            Tool Stack
          </p>
          <div className="grid grid-cols-7 sm:grid-cols-10 md:grid-cols-14 gap-3">
            {tools.map(({ name, Icon }) => (
              <div
                key={name}
                title={name}
                aria-label={name}
                className="group w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-secondary transition-all duration-200 cursor-default p-2"
              >
                <Icon />
                <span className="sr-only">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
