import type { Skill } from "@/shared/types/skills";

export const skills: Skill[] = [
  {
    slug: "brutalist-ui",
    name: "Brutalist UI",
    category: "design-style",
    description:
      "Generate sharp, high-contrast interfaces with strict grids, hard borders, and unapologetic visual hierarchy.",
    longDescription:
      "Brutalist UI is a design system skill that forces your agent to produce raw, structural, high-contrast interfaces. It emphasizes strict grid systems, hard 90-degree geometry, monospace typography, and uncompromising visual hierarchy. No soft corners. No gradients. No fluff.",
    agents: ["claude-code", "opencode", "codex"],
    frameworks: ["React", "Next.js", "Tailwind CSS"],
    installCommand: "npx arctis add brutalist-ui --all",
    bestFor: [
      "Developer tools",
      "Technical dashboards",
      "Architecture portfolios",
      "Data-heavy interfaces",
    ],
    notGoodFor: [
      "Consumer social apps",
      "E-commerce storefronts",
      "Playful brand pages",
    ],
    examplePrompt:
      "Build a technical dashboard using Brutalist UI principles: strict grid, hard borders, monospace typography, and high contrast.",
  },
  {
    slug: "minimal-saas",
    name: "Minimal SaaS",
    category: "industry-template",
    description:
      "Clean, conversion-optimized SaaS layouts with crisp spacing, restrained color, and product-led storytelling.",
    longDescription:
      "Minimal SaaS gives your agent the rules to generate clean, high-conversion SaaS landing pages and product interfaces. It focuses on breathing room, crisp typographic hierarchy, feature grids, and restrained accent color usage — everything a SaaS product needs without visual noise.",
    agents: ["claude-code", "opencode", "codex"],
    frameworks: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
    installCommand: "npx arctis add minimal-saas --all",
    bestFor: [
      "SaaS landing pages",
      "Product marketing sites",
      "Pricing pages",
      "Feature showcases",
    ],
    notGoodFor: [
      "Entertainment apps",
      "Experimental art sites",
      "Game interfaces",
    ],
    examplePrompt:
      "Create a SaaS landing page with hero, feature grid, pricing table, and CTA sections using Minimal SaaS conventions.",
  },
  {
    slug: "retro-web",
    name: "Retro Web",
    category: "design-style",
    description:
      "Y2K-era web aesthetics with pixel fonts, scanlines, terminal vibes, and nostalgic UI patterns from the early internet.",
    longDescription:
      "Retro Web packages the aesthetic language of the late 90s and early 2000s web into agent-parseable rules. Think GeoCities meets neobrutalism — pixel fonts, terminal chrome, scanline overlays, 8-bit decorative elements, and visitor-counter energy executed with modern CSS.",
    agents: ["claude-code", "opencode", "codex"],
    frameworks: ["React", "Next.js", "Tailwind CSS"],
    installCommand: "npx arctis add retro-web --all",
    bestFor: [
      "Personal blogs",
      "Portfolio sites",
      "Creative agencies",
      "Music/artist pages",
    ],
    notGoodFor: [
      "Enterprise dashboards",
      "Financial applications",
      "Government websites",
    ],
    examplePrompt:
      "Design a personal blog with Retro Web style: pixel fonts, scanline effects, terminal-inspired chrome, and visitor counter badge.",
  },
  {
    slug: "game-storefront",
    name: "Game Storefront",
    category: "industry-template",
    description:
      "Dark, immersive game store layouts with hero trailers, achievement grids, and purchase-flow patterns optimized for gaming.",
    longDescription:
      "Game Storefront teaches your agent the visual language of modern game distribution platforms. Dark immersive backgrounds, cinematic hero sections, achievement badge grids, DLC/expansion cards, review summaries, and optimized purchase flows — all packaged as repeatable patterns.",
    agents: ["claude-code", "opencode", "codex"],
    frameworks: ["React", "Next.js", "Tailwind CSS"],
    installCommand: "npx arctis add game-storefront --all",
    bestFor: [
      "Game marketplaces",
      "Platform stores",
      "Media streaming apps",
      "Entertainment hubs",
    ],
    notGoodFor: ["B2B SaaS", "Developer tools", "Healthcare apps"],
    examplePrompt:
      "Build a game detail page with cinematic hero, achievement grid, DLC cards, review summaries, and purchase flow.",
  },
  {
    slug: "admin-dashboard",
    name: "Admin Dashboard",
    category: "layout-pattern",
    description:
      "Dense, efficient admin interfaces with data tables, stat cards, sidebar navigation, and CRUD patterns for internal tools.",
    longDescription:
      "Admin Dashboard provides your agent with battle-tested patterns for internal tool interfaces. Data tables with sort/filter, stat overview cards, sidebar navigation with collapsible groups, form layouts, modal workflows, and notification systems — all designed for information density and operator efficiency.",
    agents: ["claude-code", "opencode", "codex"],
    frameworks: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
    installCommand: "npx arctis add admin-dashboard --all",
    bestFor: [
      "Internal tools",
      "Admin panels",
      "CMS backends",
      "Analytics dashboards",
    ],
    notGoodFor: [
      "Consumer-facing pages",
      "Marketing websites",
      "Content-heavy blogs",
    ],
    examplePrompt:
      "Create an admin dashboard with sidebar navigation, data table, stat cards, and filter bar for a content management system.",
  },
  {
    slug: "web3-landing",
    name: "Web3 Landing Page",
    category: "industry-template",
    description:
      "Premium Web3 landing pages with glassmorphism panels, glow accents, token metrics, and ecosystem roadmaps for crypto projects.",
    longDescription:
      "Web3 Landing Page equips your agent with the visual grammar of premium crypto and Web3 projects. Glassmorphism panels with hard borders, radial glow accents, tokenomics displays, roadmap timelines, team grids, partnership logos, and wallet-connect flows — all tuned for credibility and technical polish.",
    agents: ["claude-code", "opencode", "codex"],
    frameworks: ["React", "Next.js", "Tailwind CSS"],
    installCommand: "npx arctis add web3-landing --all",
    bestFor: [
      "Crypto projects",
      "DeFi protocols",
      "NFT collections",
      "DAO websites",
    ],
    notGoodFor: [
      "Regulated industries",
      "Traditional corporate sites",
      "Healthcare",
    ],
    examplePrompt:
      "Design a Web3 protocol landing page with glass hero, token metrics section, roadmap timeline, and team grid.",
  },
  {
    slug: "developer-portfolio",
    name: "Developer Portfolio",
    category: "layout-pattern",
    description:
      "Technical portfolio layouts with project grids, experience timelines, skill matrices, and clean typography for engineering profiles.",
    longDescription:
      "Developer Portfolio gives your agent the blueprint for engineering-focused personal sites. Project grids with hover reveals, experience timelines, skill matrices with proficiency indicators, GitHub activity integration, and clean monospace/sans-serif typography pairing — everything a developer needs to present their work with precision.",
    agents: ["claude-code", "opencode", "codex"],
    frameworks: ["React", "Next.js", "Tailwind CSS"],
    installCommand: "npx arctis add developer-portfolio --all",
    bestFor: [
      "Engineering portfolios",
      "Freelancer profiles",
      "Open-source maintainer pages",
      "Resume websites",
    ],
    notGoodFor: [
      "E-commerce",
      "Enterprise marketing",
      "Social networks",
    ],
    examplePrompt:
      "Build a developer portfolio with project showcase grid, experience timeline, skill matrix, and GitHub activity integration.",
  },
  {
    slug: "motion-landing",
    name: "Motion Landing",
    category: "motion",
    description:
      "Animation-rich landing pages with scroll-triggered reveals, parallax layers, and choreographed entrance sequences for brand impact.",
    longDescription:
      "Motion Landing encodes animation and motion design patterns for high-impact brand pages. Scroll-triggered reveals, parallax depth layers, staggered list entrances, animated counters, SVG path drawing, and smooth page transitions — packaged as reusable choreography rules your agent can apply consistently.",
    agents: ["claude-code", "opencode", "codex"],
    frameworks: ["React", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion"],
    installCommand: "npx arctis add motion-landing --all",
    bestFor: [
      "Brand landing pages",
      "Product launches",
      "Agency portfolios",
      "Creative showcases",
    ],
    notGoodFor: [
      "Data-heavy dashboards",
      "Form-heavy applications",
      "Accessibility-critical apps",
    ],
    examplePrompt:
      "Create a brand landing page with scroll-triggered reveals, parallax hero, staggered feature list, and animated stat counters.",
  },
  {
    slug: "editorial-landing",
    name: "Editorial Landing",
    category: "layout-pattern",
    description:
      "Magazine-quality content layouts with article grids, pull quotes, drop caps, and sophisticated typography for publication sites.",
    longDescription:
      "Editorial Landing gives your agent the rules to generate publication-grade content pages. Article grids with varied card sizes, pull quote treatments, drop caps, section dividers, author bylines, reading-time indicators, and sophisticated typographic scales — everything that makes content feel curated and premium.",
    agents: ["claude-code", "opencode", "codex"],
    frameworks: ["React", "Next.js", "Tailwind CSS"],
    installCommand: "npx arctis add editorial-landing --all",
    bestFor: [
      "Online magazines",
      "News publications",
      "Content platforms",
      "Newsletter sites",
    ],
    notGoodFor: [
      "Real-time dashboards",
      "Admin tools",
      "Mobile-first utilities",
    ],
    examplePrompt:
      "Build an editorial homepage with varied article grid, featured story hero, pull quotes, and author bylines.",
  },
  {
    slug: "glassmorphism-dashboard",
    name: "Glassmorphism Dashboard",
    category: "layout-pattern",
    description:
      "Translucent panel dashboard systems with backdrop blur, layered depth, and glowing accent lines for premium data interfaces.",
    longDescription:
      "Glassmorphism Dashboard teaches your agent to build premium, layered data interfaces using translucent panels, backdrop blur, and glowing accent lines. Multi-layer depth through opacity stacking, floating stat cards, blurred sidebar, and neon-accented data visualization containers — all with hard borders and zero-radius precision.",
    agents: ["claude-code", "opencode", "codex"],
    frameworks: ["React", "Next.js", "Tailwind CSS"],
    installCommand: "npx arctis add glassmorphism-dashboard --all",
    bestFor: [
      "Premium analytics",
      "Financial dashboards",
      "Crypto trading interfaces",
      "Executive portals",
    ],
    notGoodFor: [
      "Low-powered devices",
      "Print-style reports",
      "Accessibility-first tools",
    ],
    examplePrompt:
      "Create a premium analytics dashboard with glassmorphism panels, layered depth, glowing accent lines, and translucent sidebar.",
  },
];

export function getSkillBySlug(slug: string): Skill | undefined {
  return skills.find((s) => s.slug === slug);
}

export function getAllSkillSlugs(): string[] {
  return skills.map((s) => s.slug);
}
