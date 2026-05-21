import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectById, getAllProjectIds, type ProjectDetail } from "@/lib/projects-data";
import { ProjectNav } from "@/components/project-nav";
import { ImageSlider } from "@/components/image-slider";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const ids = getAllProjectIds();
  return ids.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Sammi Tan`,
    description: project.description.slice(0, 160),
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <ProjectNav projectTitle={project.title} />

      {/* Section 1: Hero with Title */}
      <section
        id="hero"
        className="pt-32 pb-16 md:pt-40 md:pb-24 max-w-6xl mx-auto px-6 md:px-10"
      >
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.award && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground text-primary-foreground text-xs font-medium">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M6 1l1.2 3.6H11L8.1 6.8l1.1 3.5L6 8.4 2.9 10.3l1.1-3.5L1 4.6h3.8L6 1z"
                    fill="currentColor"
                  />
                </svg>
                {project.award}
              </span>
            )}
            <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4 text-balance">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            {project.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-12">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-sm font-medium bg-[var(--tag-bg)] text-[var(--tag-fg)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Section 2: Beauty Shot Image */}
      <section className="pb-16 md:pb-24 max-w-6xl mx-auto px-6 md:px-10">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-secondary border border-border">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>
      </section>

      {/* Section 3: Description */}
      <section
        id="description"
        className="py-16 md:py-24 max-w-6xl mx-auto px-6 md:px-10"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
            About This Project
          </p>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Section 4: Image Slider / Gallery */}
      <section
        id="gallery"
        className="py-16 md:py-24 max-w-6xl mx-auto px-6 md:px-10"
      >
        <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8">
          Project Gallery
        </p>
        <ImageSlider images={project.galleryImages} alt={project.title} />
      </section>

      {/* Section 5: Features and Case Study */}
      <section
        id="features"
        className="py-16 md:py-24 max-w-6xl mx-auto px-6 md:px-10"
      >
        {/* Features Grid */}
        <div className="mb-20">
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8">
            Key Features
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-foreground text-primary-foreground flex items-center justify-center mb-4">
                  <span className="text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div>
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8">
            Case Study
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-destructive" />
                <h4 className="font-semibold text-foreground">Challenge</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.caseStudy.challenge}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <h4 className="font-semibold text-foreground">Solution</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-chart-2" />
                <h4 className="font-semibold text-foreground">Outcome</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.caseStudy.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA to return to work section */}
      <section
        id="cta"
        className="py-24 md:py-32 max-w-6xl mx-auto px-6 md:px-10"
      >
        <div className="text-center">
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-4">
            Explore More
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8 text-balance">
            Check out other works
          </h2>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Selected Works
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sammi Tan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
