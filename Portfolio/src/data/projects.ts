// ---------------------------------------------------------------------------
// PROJECTS — add / remove entries here and the WORK grid updates automatically.
// `featured: true` can be used later if you want to filter a subset.
// ---------------------------------------------------------------------------

export interface Project {
  no: string;
  title: string;
  blurb: string;
  tags: string[];
  year: string;
  href: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    no: "01",
    title: "CROSSCODE",
    blurb:
      "AI HTS classification tool for customs brokers. Product design + front-end build.",
    tags: ["PRODUCT", "AI", "FRONTEND"],
    year: "2026",
    href: "#",
    featured: true,
  },
  {
    no: "02",
    title: "PROJECT TWO",
    blurb:
      "Short, concrete description of what it is and what you actually did on it.",
    tags: ["DESIGN", "SYSTEMS"],
    year: "2025",
    href: "#",
    featured: true,
  },
  {
    no: "03",
    title: "PROJECT THREE",
    blurb:
      "Another build. Swap these placeholders for real work as you ship it.",
    tags: ["BRANDING", "MOTION"],
    year: "2025",
    href: "#",
  },
  {
    no: "04",
    title: "PROJECT FOUR",
    blurb: "Experiment, side project, or tool. Anything that shows range.",
    tags: ["PROTOTYPE", "RESEARCH"],
    year: "2024",
    href: "#",
  },
];
