export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: "uiux" | "creative";
  year: string;
  tags: string[];
  heroImage: string;
  description: string;
  galleryImages: string[];
  features: {
    title: string;
    description: string;
  }[];
  caseStudy: {
    challenge: string;
    solution: string;
    outcome: string;
  };
  award?: string;
}

export const projectsData: Record<string, ProjectDetail> = {
  storyweaver: {
    id: "storyweaver",
    title: "StoryWeaver",
    subtitle: "Interactive Fiction Android App",
    category: "uiux",
    year: "2024",
    tags: ["Android", "Java", "XML Layouts", "Interactive Fiction"],
    heroImage: "/images/project-android.jpg",
    description:
      "StoryWeaver is a dynamic, in-app interactive fiction feature that generates quick, replayable mystery stories. Built with Android Studio, the app leverages custom XML layouts and Java to create an immersive storytelling experience where users make choices that affect the narrative outcome.",
    galleryImages: [
      "/images/project-android.jpg",
      "/images/project-android.jpg",
      "/images/project-android.jpg",
    ],
    features: [
      {
        title: "Branching Narratives",
        description:
          "Dynamic story paths that adapt based on user choices, creating unique experiences with every playthrough.",
      },
      {
        title: "Mystery Generator",
        description:
          "Algorithm-driven plot generation that creates fresh mystery scenarios with randomized elements.",
      },
      {
        title: "Quick Sessions",
        description:
          "Stories designed for 5-10 minute sessions, perfect for commutes or short breaks.",
      },
      {
        title: "Progress Tracking",
        description:
          "Persistent save system that tracks story completions and unlocked endings.",
      },
    ],
    caseStudy: {
      challenge:
        "Mobile users wanted engaging narrative experiences but lacked time for lengthy gaming sessions. Existing interactive fiction apps required significant time investment.",
      solution:
        "Developed a modular story system with bite-sized chapters and meaningful choices. Implemented a custom XML-based dialogue system for smooth transitions and animations.",
      outcome:
        "Successfully launched on the Play Store with positive feedback on replayability and session length. Users particularly appreciated the quick mystery format.",
    },
  },
  pollnow: {
    id: "pollnow",
    title: "PollNow",
    subtitle: "Event Polling Android Application",
    category: "uiux",
    year: "2026–Present",
    tags: ["Figma", "Android", "Kotlin", "Real-time Polling"],
    heroImage: "/images/project-luvion.jpg",
    description:
      "PollNow is a real-time event polling application designed for conferences, meetups, and classroom settings. The app enables organizers to create instant polls and gather live feedback from attendees, fostering engagement and data-driven decision making.",
    galleryImages: [
      "/images/project-luvion.jpg",
      "/images/project-luvion.jpg",
      "/images/project-luvion.jpg",
    ],
    features: [
      {
        title: "Real-time Results",
        description:
          "Live poll results update instantly as participants submit their responses.",
      },
      {
        title: "Multiple Poll Types",
        description:
          "Support for multiple choice, rating scales, word clouds, and open-ended responses.",
      },
      {
        title: "QR Code Join",
        description:
          "Attendees can quickly join polls by scanning a QR code displayed by the organizer.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Post-event analytics with exportable reports and response breakdowns.",
      },
    ],
    caseStudy: {
      challenge:
        "Event organizers struggled to gauge audience sentiment and engagement in real-time. Traditional feedback methods were slow and had low participation rates.",
      solution:
        "Built a frictionless polling experience with minimal setup time. Focused on intuitive UI that works equally well on presenter screens and participant phones.",
      outcome:
        "Deployed at multiple SUTD events with over 500 participants. Achieved 85% participation rate compared to 20% with traditional feedback forms.",
    },
  },
  "orb-e": {
    id: "orb-e",
    title: "ORB-E",
    subtitle: "Orbital Robotic Entity System Design",
    category: "uiux",
    year: "2025–2026",
    tags: ["System Design", "Dashboard UI", "Interaction Design"],
    heroImage: "/images/project-orbe.jpg",
    description:
      "ORB-E is a comprehensive systems design project for an orbital robotic entity. The project encompasses sensor data dashboards, control flow diagrams, and interaction models for both autonomous and manual operation modes.",
    galleryImages: [
      "/images/project-orbe.jpg",
      "/images/project-orbe.jpg",
      "/images/project-orbe.jpg",
    ],
    features: [
      {
        title: "Sensor Dashboard",
        description:
          "Real-time visualization of all sensor inputs including proximity, thermal, and optical data.",
      },
      {
        title: "Control Flow System",
        description:
          "Visual programming interface for defining autonomous behavior patterns and responses.",
      },
      {
        title: "Mission Planner",
        description:
          "Drag-and-drop mission planning with waypoints and conditional triggers.",
      },
      {
        title: "Remote Operations",
        description:
          "Low-latency control interface for manual override and real-time adjustments.",
      },
    ],
    caseStudy: {
      challenge:
        "Robotic systems interfaces were often too technical for non-engineers. The challenge was creating an interface accessible to operators while maintaining full system control.",
      solution:
        "Designed a layered UI with progressive disclosure — simple controls on the surface with advanced options available when needed. Used familiar visual metaphors and consistent design language.",
      outcome:
        "Prototype interface tested with engineering students showed 60% faster task completion compared to traditional terminal-based controls.",
    },
  },
  "asleep-in-the-deep": {
    id: "asleep-in-the-deep",
    title: "Asleep in the Deep",
    subtitle: "3D Art & Game Design",
    category: "creative",
    year: "2023",
    tags: ["Blender", "3D Art", "Game Design"],
    heroImage: "/images/project-asleep.jpg",
    description:
      "Asleep in the Deep is an atmospheric underwater exploration game featuring hand-crafted 3D environments and bioluminescent creatures. The project showcases advanced Blender techniques including volumetric lighting, procedural textures, and particle systems.",
    galleryImages: [
      "/images/project-asleep.jpg",
      "/images/project-asleep.jpg",
      "/images/project-asleep.jpg",
    ],
    features: [
      {
        title: "Volumetric Lighting",
        description:
          "Dynamic god rays and caustic effects create realistic underwater atmosphere.",
      },
      {
        title: "Procedural Creatures",
        description:
          "Bioluminescent sea life with procedurally animated movements and glow patterns.",
      },
      {
        title: "Environmental Storytelling",
        description:
          "Hidden details and visual narratives reward exploration and observation.",
      },
      {
        title: "Ambient Soundscape",
        description:
          "Spatial audio design that responds to depth and proximity to creatures.",
      },
    ],
    caseStudy: {
      challenge:
        "Creating an immersive underwater experience that felt alive and mysterious without relying on traditional game mechanics or combat.",
      solution:
        "Focused on environmental detail and ambient interactions. Every element — from particle systems to creature behaviors — was designed to enhance the sense of wonder.",
      outcome:
        "Nominated for SEA Games Award 2023 in the Student Category. Praised for visual fidelity and emotional impact.",
    },
    award: "Nominated — SEA Games Award 2023",
  },
  "maibel": {
    id: "maibel",
    title: "AI Companion",
    subtitle: "Experience & Missions Design",
    category: "creative",
    year: "2024",
    tags: ["3D", "Substance Painter", "Maya", "Game Design"],
    heroImage: "/images/project-maibel.jpg",
    description:
      "AI Companion is a game design project focused on creating meaningful relationships between players and their AI partners. The project explores character design, emotional AI behaviors, and mission structures that reinforce the companion bond.",
    galleryImages: [
      "/images/project-maibel.jpg",
      "/images/project-maibel.jpg",
      "/images/project-maibel.jpg",
    ],
    features: [
      {
        title: "Character Design",
        description:
          "Expressive companion design with customizable appearance and personality traits.",
      },
      {
        title: "Emotional AI",
        description:
          "Companion reacts to player actions, environment, and mission outcomes.",
      },
      {
        title: "Mission Framework",
        description:
          "Cooperative missions designed to build trust and showcase companion abilities.",
      },
      {
        title: "Memory System",
        description:
          "Companions remember past interactions and reference them in dialogue.",
      },
    ],
    caseStudy: {
      challenge:
        "Most game companions feel like tools rather than partners. The challenge was creating emotional investment in an AI character.",
      solution:
        "Developed a relationship system where companions have opinions, preferences, and growth arcs. Missions were designed to require genuine cooperation rather than simple command-following.",
      outcome:
        "User testing showed players formed genuine emotional connections, with many reporting feeling protective of their companion.",
    },
  },
  "digital-arts": {
    id: "digital-arts",
    title: "Digital Arts",
    subtitle: "Photoshop & Illustrator Composites",
    category: "creative",
    year: "2022–2024",
    tags: ["Photoshop", "Illustrator", "Compositing"],
    heroImage: "/images/project-digital-arts.jpg",
    description:
      "A collection of digital art pieces created over two years, showcasing proficiency in Adobe Photoshop and Illustrator. The collection includes photo manipulations, vector illustrations, and mixed-media compositions exploring various artistic styles.",
    galleryImages: [
      "/images/project-digital-arts.jpg",
      "/images/project-digital-arts.jpg",
      "/images/project-digital-arts.jpg",
    ],
    features: [
      {
        title: "Photo Manipulation",
        description:
          "Surreal composites combining multiple photographs into cohesive scenes.",
      },
      {
        title: "Vector Illustration",
        description:
          "Clean, scalable illustrations for various applications from icons to posters.",
      },
      {
        title: "Typography Art",
        description:
          "Experimental typography pieces exploring letterforms as visual elements.",
      },
      {
        title: "Mixed Media",
        description:
          "Combinations of traditional and digital techniques for unique textures.",
      },
    ],
    caseStudy: {
      challenge:
        "Developing a distinctive artistic voice while mastering technical skills across different digital art disciplines.",
      solution:
        "Committed to daily practice and experimentation. Each piece explored a specific technique or concept while building on previous work.",
      outcome:
        "Portfolio pieces have been featured in school exhibitions and used in student publications. Several works were commissioned for event materials.",
    },
  },
  "climate-changer-poster": {
    id: "climate-changer-poster",
    title: "Climate Changer Poster",
    subtitle: "Environmental Awareness Design",
    category: "creative",
    year: "2024",
    tags: ["Poster Design", "Illustrator", "Environmental"],
    heroImage: "/images/project-climate-poster.jpg",
    description:
      "A series of environmental awareness posters designed to communicate the urgency of climate action. The project combines striking visuals with clear messaging to inspire behavioral change and environmental consciousness.",
    galleryImages: [
      "/images/project-climate-poster.jpg",
      "/images/project-climate-poster.jpg",
      "/images/project-climate-poster.jpg",
    ],
    features: [
      {
        title: "Visual Impact",
        description:
          "Bold imagery designed to stop viewers and provoke thought about climate issues.",
      },
      {
        title: "Clear Messaging",
        description:
          "Concise text that communicates key facts without overwhelming the design.",
      },
      {
        title: "Print Ready",
        description:
          "Designed for multiple formats from A4 flyers to large format banners.",
      },
      {
        title: "Social Adaptation",
        description:
          "Versions optimized for social media sharing and digital campaigns.",
      },
    ],
    caseStudy: {
      challenge:
        "Climate messaging often feels preachy or doom-focused. The challenge was creating impactful work that inspires action rather than despair.",
      solution:
        "Focused on hope-oriented messaging paired with striking but not disturbing visuals. Used contrasts between healthy and degraded environments to show stakes without shock tactics.",
      outcome:
        "Posters displayed during SUTD Environment Week. Received positive feedback for accessibility and visual appeal. Digital versions shared widely on student social media.",
    },
  },
  "3d-sculpture": {
    id: "3d-sculpture",
    title: "3D Sculpture",
    subtitle: "Digital Sculpture Art",
    category: "creative",
    year: "2023",
    tags: ["Blender", "ZBrush", "Digital Sculpture"],
    heroImage: "/images/project-3d-sculpture.jpg",
    description:
      "A digital sculpture project exploring organic forms and abstract shapes in 3D space. Created using Blender and ZBrush, the works investigate the interplay of light, form, and texture in virtual environments.",
    galleryImages: [
      "/images/project-3d-sculpture.jpg",
      "/images/project-3d-sculpture.jpg",
      "/images/project-3d-sculpture.jpg",
    ],
    features: [
      {
        title: "Organic Forms",
        description:
          "Flowing, natural shapes inspired by biology and natural phenomena.",
      },
      {
        title: "Material Study",
        description:
          "Exploration of different surface treatments from marble to iridescent metals.",
      },
      {
        title: "Lighting Design",
        description:
          "Studio lighting setups that enhance form and create dramatic presentations.",
      },
      {
        title: "High Detail",
        description:
          "Micro-detail sculpting visible in close-up renders and prints.",
      },
    ],
    caseStudy: {
      challenge:
        "Translating traditional sculpture sensibilities into the digital medium while leveraging unique capabilities of 3D tools.",
      solution:
        "Started with physical clay sketches to understand forms, then recreated and enhanced in ZBrush. Used Blender for final rendering with museum-quality lighting.",
      outcome:
        "Works rendered for virtual gallery exhibition. Select pieces 3D printed for physical display in the SUTD design showcase.",
    },
  },
  "carnival-namecard": {
    id: "carnival-namecard",
    title: "Back To School Carnival Name Card",
    subtitle: "Event Branding Design",
    category: "creative",
    year: "2024",
    tags: ["Graphic Design", "Illustrator", "Event Design"],
    heroImage: "/images/project-carnival-namecard.jpg",
    description:
      "A vibrant name card and event branding system designed for the annual Back To School Carnival. The project encompasses name badges, signage, and promotional materials with a cohesive festive aesthetic.",
    galleryImages: [
      "/images/project-carnival-namecard.jpg",
      "/images/project-carnival-namecard.jpg",
      "/images/project-carnival-namecard.jpg",
    ],
    features: [
      {
        title: "Festive Branding",
        description:
          "Cohesive visual identity capturing the excitement and energy of carnival events.",
      },
      {
        title: "Print System",
        description:
          "Scalable design system for badges, banners, and promotional materials.",
      },
      {
        title: "Easy Production",
        description:
          "Designed for quick printing and assembly by volunteer staff.",
      },
      {
        title: "Durable Design",
        description:
          "Consideration for outdoor use with readable fonts and weather-resistant formats.",
      },
    ],
    caseStudy: {
      challenge:
        "Creating event materials that are visually exciting while remaining practical for large-scale production with limited budget and volunteer assembly.",
      solution:
        "Developed a modular design system with reusable elements. Chose a bright, forgiving color palette that prints well even on basic equipment.",
      outcome:
        "Successfully produced 500+ name cards and supporting materials for the event. Design praised for professionalism and adopted as template for future events.",
    },
  },
};

export function getProjectById(id: string): ProjectDetail | undefined {
  return projectsData[id];
}

export function getAllProjectIds(): string[] {
  return Object.keys(projectsData);
}
