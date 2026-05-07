"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuCheck, LuPaintbrush, LuPlus, LuListChecks } from "react-icons/lu";

const brands = [
  { name: "Anime.js", src: "/assets/brands/animejs.svg" },
  { name: "Bootstrap", src: "/assets/brands/bootstrap.svg" },
  { name: "Claude Code", src: "/assets/brands/claudecode.png" },
  { name: "Codex", src: "/assets/brands/codex.png" },
  { name: "Gemini CLI", src: "/assets/brands/geminicli.svg" },
  { name: "GSAP", src: "/assets/brands/gsap.svg" },
  { name: "OpenCode", src: "/assets/brands/opencode.svg" },
  { name: "PixiJS", src: "/assets/brands/pixijs.svg" },
  { name: "React Bits", src: "/assets/brands/reactbits.svg" },
  { name: "Tailwind CSS", src: "/assets/brands/tailwindcss.svg" },
];

const skillCategories = [
  {
    title: "Themes",
    slug: "themes",
    desc: "Design styles and full-page layouts for every project.",
    icon: LuPaintbrush,
  },
  {
    title: "Add-Ons",
    slug: "add-ons",
    desc: "Interactive enhancements, animations, and visual effects.",
    icon: LuPlus,
  },
  {
    title: "Rules",
    slug: "rules",
    desc: "Design constraints and conventions for consistent output.",
    icon: LuListChecks,
  },
];

const benefitColumns = [
  {
    side: "developers",
    title: "For Developers",
    items: [
      "Consistent design across every agent session",
      "No more re-pasting prompts or style guides",
      "Version-controlled rules your team can review",
      "One install works across all major agents",
    ],
  },
  {
    side: "agents",
    title: "For Agents",
    items: [
      "Structured instructions with explicit rules",
      "Design tokens as structured data, not suggestions",
      "Reference implementations to learn from",
      "Persistent skill memory across sessions",
    ],
  },
];

const whiteSectionVars = {
  "--color-background": "#ffffff",
  "--color-foreground": "#111827",
  "--color-muted": "#6b7280",
  "--color-muted-strong": "#4b5563",
  "--color-border": "rgba(0,0,0,0.12)",
  "--color-border-strong": "rgba(0,0,0,0.20)",
  "--color-panel": "rgba(0,0,0,0.02)",
  "--color-panel-strong": "rgba(0,0,0,0.04)",
} as React.CSSProperties;

function WhiteSection({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="bg-white"
      style={whiteSectionVars}
      data-section-theme="light"
    >
      <div className="mx-auto max-w-7xl border-x border-b border-gray-300">
        {children}
      </div>
    </section>
  );
}

function InstallTabs() {
  const [tab, setTab] = useState<"macos" | "windows">("macos");
  const [copied, setCopied] = useState(false);

  const commands = {
    macos: "curl -fsSL https://arctis.dev | bash",
    windows: "irm https://arctis.dev/ps1 | iex",
  };

  const copy = async () => {
    await navigator.clipboard.writeText(commands[tab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mx-auto max-w-lg">
      <div className="flex">
        <button
          className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
            tab === "macos"
              ? "text-foreground border-b-2 border-foreground"
              : "text-muted border-b border-border hover:text-foreground"
          }`}
          onClick={() => setTab("macos")}
        >
          macOS / Linux
        </button>
        <button
          className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
            tab === "windows"
              ? "text-foreground border-b-2 border-foreground"
              : "text-muted border-b border-border hover:text-foreground"
          }`}
          onClick={() => setTab("windows")}
        >
          Windows
        </button>
      </div>
      <div className="flex items-center justify-between border border-border bg-panel px-4 py-3 font-mono text-sm">
        <code className="text-foreground select-all">{commands[tab]}</code>
        <button
          onClick={copy}
          className="ml-4 shrink-0 border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted hover:border-border-strong hover:text-foreground transition-colors"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

const INTERVALS = [1800, 2200, 2600, 3000, 3400] as const;

function RotatingLogo({
  items,
  interval,
  startIndex,
}: {
  items: { name: string; src: string }[];
  interval: number;
  startIndex: number;
}) {
  const [index, setIndex] = useState(startIndex);
  const current = items[index] ?? items[0]!;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items, interval]);

  return (
    <div className="relative h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={current.src}
            alt={current.name}
            fill
            className="object-contain p-4 md:p-6 lg:p-10"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ===== DARK SECTIONS 1–3 ===== */}
      <div className="mx-auto max-w-7xl border-x border-border">
        {/* ===== 1. HERO ===== */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 70% 50% at 50% 30%, black 15%, transparent 55%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 50% at 50% 30%, black 15%, transparent 55%)",
            }}
          />

          <div className="relative px-6 py-24 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-2xl text-center flex flex-col gap-6">
              <h1 className="mb-4 font-mono text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl text-balance">
                <span className="inline-block">Give your coding agent</span>
                <br />
                <span className="inline-block">better taste.</span>
              </h1>
              <InstallTabs />
            </div>
          </div>
        </section>

        {/* ===== 2. TERMINAL ===== */}
        <section className="relative border-b border-border h-[640px] overflow-hidden flex justify-center items-end">
          <div
            className="full-bleed absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/background.jpg')" }}
          />
          <div className="relative w-full max-w-[800px] h-[527px] mx-4 sm:mx-8 bg-[#0a0a0a] px-5 py-5 border border-white/6 outline outline-offset-[3px] outline-white/6">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="font-mono text-sm leading-relaxed space-y-1.5">
              <div>
                <span className="text-green-400">$</span>{" "}
                <span className="text-foreground">
                  npx arctis add brutalist-ui --all
                </span>
              </div>
              <div>
                <span className="text-purple-400">◇</span>{" "}
                <span className="text-muted">Select agent: Claude Code</span>
              </div>
              <div>
                <span className="text-purple-400">◇</span>{" "}
                <span className="text-muted">Installing brutalist-ui...</span>
              </div>
              <div>
                <span className="text-cyan-400">•</span>{" "}
                <span className="text-muted">
                  Next.js 15 · React 19 · Tailwind v4
                </span>
              </div>
              <div>
                <span className="text-green-400">✓</span>{" "}
                <span className="text-green-400">Skill installed in 2.3s</span>
              </div>
              <div>
                <span className="text-yellow-400">→</span>{" "}
                <span className="text-muted">
                  Next: restart your agent and start building
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 3. WORKS WITH ===== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-50 lg:h-[126px] border-b border-border">
          {INTERVALS.map((interval, i) => (
            <div key={i} className="border-r border-b border-border h-full">
              <RotatingLogo
                items={brands}
                interval={interval}
                startIndex={i * 2}
              />
            </div>
          ))}
        </div>

        {/* ===== 4. BENEFITS ===== */}
        <section className="border-b border-border">
          <div className="grid md:grid-cols-2">
            {benefitColumns.map((col) => (
              <div
                key={col.side}
                className={
                  col.side === "developers"
                    ? "border-b border-border md:border-b-0 md:border-r"
                    : ""
                }
              >
                <div className="px-8 pt-8">
                  <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-strong">
                    {col.side === "developers"
                      ? "WHY DEVELOPERS CHOOSE ARCTIS"
                      : "HOW AGENTS BENEFIT"}
                  </div>
                  <h3 className="mb-6 font-mono text-2xl font-semibold tracking-tight md:text-3xl">
                    {col.title}
                  </h3>
                </div>
                <div className="divide-y divide-border border-t border-border">
                  {col.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 px-8 py-4 transition-colors duration-(--transition-fast) hover:bg-panel-strong"
                    >
                      <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-muted-strong" />
                      <span className="text-sm leading-relaxed text-muted">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 5. SKILL CATEGORIES ===== */}
        <section className="border-b border-border">
          <div className="px-6 pt-20 pb-12 lg:px-10">
            <div className="text-center">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                SKILL CATEGORIES
              </div>
              <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight md:text-4xl">
                Built for agent-native development.
              </h2>
              <p className="text-base text-muted">
                Three categories covering every frontend pattern.
              </p>
            </div>
          </div>

          <div className="grid divide-x divide-y divide-border border-t border-border sm:grid-cols-3">
            {skillCategories.map((cat) => (
              <Link
                key={cat.title}
                href={`/docs/${cat.slug}`}
                className="group block p-6 transition-colors duration-(--transition-fast) hover:bg-panel-strong lg:px-10"
              >
                <div className="mb-3">
                  <h3 className="flex items-center gap-2 font-mono text-lg font-semibold text-foreground transition-colors duration-(--transition-fast)">
                    <cat.icon className="h-4 w-4 shrink-0" />
                    {cat.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ===== DARK SECTIONS ===== */}
      <div className="mx-auto max-w-7xl border-x border-border">
        {/* ===== 6. FINAL CTA ===== */}
        <section className="relative border-b border-border h-[200px] overflow-hidden flex items-center justify-center">
          <div
            className="full-bleed absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/background.jpg')" }}
          />
          <div className="relative text-center px-6">
            <Image
              src="/logo/logo-with-bg.svg"
              alt="ARCTIS"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>
        </section>
      </div>
    </>
  );
}
