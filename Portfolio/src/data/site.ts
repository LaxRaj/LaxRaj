// ---------------------------------------------------------------------------
// SITE CONFIG — edit this file to make the portfolio yours.
// Everything below feeds the layout, nav, hero, and footer.
// ---------------------------------------------------------------------------

export const site = {
  name: "LAKSH",
  initials: "LB",
  role: "Designer / Engineer / Polymath",
  // One punchy line. Keep it short and loud.
  tagline: "I build cool, functional systems where design meets code.",
  // Longer intro shown in the hero sub-block.
  intro:
    "Independent technologist working across product design, front-end engineering, and systems. I like hard edges, fast pages, and things that actually ship.",
  email: "lbhati2804@gmail.com",
  location: "EARTH / GMT+5:30",
  // Toggles the green status pill in the nav.
  status: "AVAILABLE FOR WORK",
  available: true,

  // Disciplines — drives the marquee and the "what I do" grid.
  disciplines: [
    "DESIGN",
    "ENGINEERING",
    "SYSTEMS",
    "BRANDING",
    "PROTOTYPING",
    "MOTION",
    "RESEARCH",
    "TYPOGRAPHY",
  ],

  nav: [
    { label: "WORK", href: "#work" },
    { label: "STACK", href: "#stack" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ],

  socials: [
    { label: "GITHUB", href: "https://github.com/" },
    { label: "X / TWITTER", href: "https://x.com/" },
    { label: "LINKEDIN", href: "https://linkedin.com/" },
    { label: "EMAIL", href: "mailto:lbhati2804@gmail.com" },
  ],
} as const;

// "What I do" cards — the polymath grid.
export const capabilities = [
  {
    no: "01",
    title: "DESIGN",
    body: "Interfaces, identity, and systems. High-contrast, function-first, no decoration without a reason.",
  },
  {
    no: "02",
    title: "ENGINEERING",
    body: "Front-end builds that are fast and reliable. Astro, TypeScript, and clean, shippable code.",
  },
  {
    no: "03",
    title: "SYSTEMS",
    body: "Design systems, tooling, and the connective tissue that keeps products coherent at scale.",
  },
  {
    no: "04",
    title: "RESEARCH",
    body: "Cross-domain curiosity. I read widely and pull ideas from where they don't usually belong.",
  },
] as const;
