export type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  body: string;
  actions: HeroAction[];
};

export type HomeStat = {
  value: string;
  label: string;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export type FocusArea = {
  kicker: string;
  title: string;
  body: string;
};

export type ProjectItem = {
  name: string;
  status: string;
  description: string;
  tags: string[];
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  body: string;
  actions: HeroAction[];
  availability: string[];
};

export const hero = {
  eyebrow: "Personal homepage",
  title: "NEONITY.cc",
  body: "I'm Andi. This is my small corner of the internet for projects, notes, experiments, and the ideas I keep returning to.",
  actions: [
    { label: "Explore the work", href: "#work" },
    { label: "Read the blog", href: "/blog/", variant: "secondary" },
    { label: "Say hello", href: "#contact", variant: "secondary" },
  ],
} satisfies HeroContent;

export const homeStats = [
  { value: "01", label: "Build useful little systems" },
  { value: "02", label: "Write to think clearly" },
  { value: "03", label: "Prototype with taste" },
  { value: "04", label: "Keep the web personal" },
] satisfies HomeStat[];

export const about = {
  eyebrow: "About the site",
  title: "A personal node on the open web",
  paragraphs: [
    "NEONITY.cc is where I collect the things I am making, learning, and quietly obsessing over. It is part portfolio, part notebook, and part living lab.",
    "The site is intentionally small and direct: a place for software experiments, interface studies, writing, and links that deserve a permanent home.",
  ],
} satisfies AboutContent;

export const focusAreas = [
  {
    kicker: "Software",
    title: "Tools with a point of view",
    body: "Small, focused products and prototypes that make complex workflows feel lighter, calmer, and more legible.",
  },
  {
    kicker: "Writing",
    title: "Notes before certainty",
    body: "Short essays, build logs, and field notes about software, design, language, AI, and the texture of making things.",
  },
  {
    kicker: "Experiments",
    title: "Useful oddities",
    body: "Interface sketches, automation ideas, and strange little systems that may or may not grow into something larger.",
  },
] satisfies FocusArea[];

export const projects = [
  {
    name: "Digital Garden",
    status: "Growing",
    description: "A public notebook for ideas, references, fragments, and the connective tissue between them.",
    tags: ["notes", "writing", "web"],
  },
  {
    name: "Interface Studies",
    status: "Ongoing",
    description: "Visual and interaction experiments for tools that feel dense, fast, and humane.",
    tags: ["design", "frontend", "systems"],
  },
  {
    name: "AI Tooling Lab",
    status: "In progress",
    description: "Personal workflows and prototypes around agentic coding, memory, automation, and creative assistance.",
    tags: ["AI", "tools", "automation"],
  },
  {
    name: "Open Notebook",
    status: "Drafts",
    description: "A place for work-in-progress thinking before it becomes polished enough to pretend it was obvious.",
    tags: ["essays", "process", "learning"],
  },
] satisfies ProjectItem[];

export const contact = {
  eyebrow: "Contact",
  title: "Let's trade signals",
  body: "If something here resonates, send a note. I like conversations about software, design, language, tools, and small systems that make daily work feel better.",
  actions: [
    { label: "Email hello@neonity.cc", href: "mailto:hello@neonity.cc" },
    { label: "Back to top", href: "#top", variant: "secondary" },
  ],
  availability: ["Independent projects", "Collaborations", "Thoughtful async conversations"],
} satisfies ContactContent;
