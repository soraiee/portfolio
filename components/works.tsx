"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectMedia } from "@/components/project-media";

const TABS = ["Product & UI/UX", "Creative & 3D"] as const;
type Tab = (typeof TABS)[number];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  img: string;
  span?: "wide" | "tall" | "normal";
  year?: string;
  award?: string;
}

export const uiuxProjects: Project[] = [
  {
    id: "storyweaver",
    title: "StoryWeaver",
    subtitle:
      "A dynamic, in-app interactive fiction feature that generates quick, replayable mystery stories made with Android Studio.",
    tags: ["Android", "Java", "UI/UX", "Figma", "Interactive Fiction"],
    img: "/images/project-StoryWeaver.png",
    span: "wide",
    year: "2024",
  },
  {
    id: "pollnow",
    title: "PollNow",
    subtitle: "Event polling android application.",
    tags: ["Android", "Java", "UI/UX", "Figma", "Real-time Polling"],
    img: "/images/project-PollNow.png",
    span: "normal",
    year: "2026–Present",
  },
  {
    id: "orb-e",
    title: "ORB-E",
    subtitle:
      "Systems design and interface for an orbital robotic entity — sensor data dashboards, control flow diagrams, and interaction models.",
    tags: ["System Design", "Dashboard UI", "Interaction Design"],
    img: "/images/project-Orb-E.jpg",
    span: "normal",
    year: "2025–2026",
  },
  {
    id: "maibel",
    title: "Evren — AI wellness companion for women",
    subtitle: "Experience & Missions Design @ Maibel",
    tags: ["UI/UX", "AI", "Figma", "Gamification", "Internship"],
    img: "/images/project-Maibel.jpg",
    span: "normal",
    year: "2025-2026",
  },

];

export const creativeProjects: Project[] = [
  {
    id: "asleep-in-the-deep",
    title: "Asleep in the Deep",
    subtitle: "3D competition game project",
    tags: ["3D", "Competition", "Maya", "Unity", "Substance Painter", "After Effects", "Game Design"],
    img: "/images/ASITD/project-ASITDTrailer.mp4",
    span: "wide",
    year: "2023",
    award: "Nominated — SEA Games Award 2023",
  },
    {
        id: "carnival-namecard",
        title: "Back To School Carnival Name Card",
        subtitle: "Vibrant event name card design for school carnival",
        tags: ["Graphic Design", "Illustrator", "Canva", "Event Design"],
        img: "/images/project-carnival-namecard.png",
        span: "wide",
        year: "2025",
    },
  {
    id: "showroom",
    title: "Automotive VR showroom",
    subtitle: "3D Asset production",
    tags: ["3D", "VR", "Project Management", "Blender", "Substance Painter", "Unity", "Internship"],
    img: "/images/project-Showroom.mp4",
    span: "normal",
    year: "2023",
  },
  {
    id: "digital-arts",
    title: "Asenath — 2D Character Design",
    subtitle: "Photoshop & Illustrator composites",
    tags: ["2D Illustration", "Photoshop", "After Effects", "Character Design"],
    img: "/images/Asenath.mp4",
    span: "normal",
    year: "2023",
  },
  {
    id: "climate-changer-poster",
    title: "Climate Changer Poster",
    subtitle: "Environmental awareness poster design with impactful visuals",
    tags: ["Poster Design", "Illustrator", "Environmental"],
    img: "/images/project-climate-poster.jpg",
    span: "normal",
    year: "2024",
  },
  {
    id: "3d-sculpture",
    title: "Sci-fi Basilisk Sculpt",
    subtitle: "Sci-Fi quadrupedal sculpture",
    tags: ["3D", "ZBrush", "Digital Sculpture"],
    img: "/images/project-3d-sculpture.jpg",
    span: "normal",
    year: "2023",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.id}`} target="_blank">
      <article
        className={cn(
          "group relative rounded-2xl overflow-hidden border border-border bg-card cursor-pointer",
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/8",
          project.span === "wide" && "md:col-span-2",
          project.span === "tall" && "md:row-span-2"
        )}
      >
        {/* Image */}
        <div
          className={cn(
            "relative w-full overflow-hidden bg-secondary",
            project.span === "wide" ? "h-64 md:h-80" : "h-52"
          )}
        >
          <ProjectMedia
            src={project.img}
            alt={project.title}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />

          {/* Award badge */}
          {project.award && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground border border-border">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M6 1l1.2 3.6H11L8.1 6.8l1.1 3.5L6 8.4 2.9 10.3l1.1-3.5L1 4.6h3.8L6 1z"
                  fill="currentColor"
                />
              </svg>
              {project.award}
            </div>
          )}

          {/* Year chip */}
          {project.year && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-mono text-muted-foreground border border-border">
              {project.year}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-semibold text-base text-foreground mb-1.5 tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.subtitle}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--tag-bg)] text-[var(--tag-fg)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow on hover */}
        <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-foreground text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M3 7h8M7 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
}

export function Works() {
  const [activeTab, setActiveTab] = useState<Tab>("Product & UI/UX");
  const projects = activeTab === "Product & UI/UX" ? uiuxProjects : creativeProjects;

  return (
    <section id="work" className="py-24 md:py-32 max-w-6xl mx-auto px-6 md:px-10">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">
            Selected Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Things I&apos;ve designed &amp; built
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex items-center p-1 bg-secondary rounded-full border border-border self-start md:self-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                activeTab === tab
                  ? "bg-foreground text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div
        key={activeTab}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
