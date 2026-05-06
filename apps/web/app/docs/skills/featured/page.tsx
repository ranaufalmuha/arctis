import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { Badge } from "@/shared/components/ui/Badge";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

export default function Page() {
  return (
    <DocPageShell href="/docs/skills/featured" title="Featured Skills">
      <Section>
        <p className="max-w-2xl font-mono text-lg leading-relaxed text-[var(--color-muted)]">
          These are the most popular and well-crafted skills in the ARCTIS
          registry. Each has been reviewed for quality, composability, and
          adherence to the ARCTIS skill specification.
        </p>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          Top Featured Skills
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {[
            {
              name: "Prismatic Architecture",
              category: "THEME",
              desc: "A high-contrast design system built on black backgrounds, white text, and a restrained #ffeb50 accent. Features hard borders, zero border-radius, monospace metadata labels, and radial gradient glows. The signature ARCTIS aesthetic.",
              cmd: "npx arctis add prismatic-architecture --all",
            },
            {
              name: "Brutalist UI",
              category: "THEME",
              desc: "Raw, unpolished design language inspired by brutalist web aesthetics. Heavy borders, monospace typography, no shadows, and primary-color backgrounds. Makes a bold statement.",
              cmd: "npx arctis add brutalist-ui --all",
            },
            {
              name: "Minimal SaaS",
              category: "THEME",
              desc: "Clean, professional design system optimized for SaaS landing pages and dashboards. Subtle shadows, soft borders, restrained palette, and shadcn/ui component compatibility.",
              cmd: "npx arctis add minimal-saas --all",
            },
            {
              name: "Custom Cursor",
              category: "ADD-ON",
              desc: "Replaces the default browser cursor with a custom follower that morphs on interactive elements. Supports hover states, click feedback, and magnetic snapping to buttons and links.",
              cmd: "npx arctis add custom-cursor --all",
            },
            {
              name: "GSAP Scroll Reveal",
              category: "ADD-ON",
              desc: "Scroll-triggered reveal animations using GSAP ScrollTrigger. Sections fade in, slide up, or scale into view as the user scrolls. Configurable thresholds and stagger delays for list items.",
              cmd: "npx arctis add gsap-scroll-reveal --all",
            },
            {
              name: "Zero Radius",
              category: "RULE",
              desc: "A design constraint that enforces zero border-radius across all generated components. No rounded corners anywhere. Sharp, architectural edges throughout the interface.",
              cmd: "npx arctis add zero-radius --all",
            },
          ].map((skill) => (
            <div
              key={skill.name}
              className="border border-[var(--color-border)] bg-[var(--color-panel)] p-6"
            >
              <div className="mb-3">
                <Badge variant="accent">{skill.category}</Badge>
              </div>
              <h3 className="mb-3 font-mono text-lg font-semibold text-[var(--color-foreground)]">
                {skill.name}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-[var(--color-muted)]">
                {skill.desc}
              </p>
              <CommandBlock command={skill.cmd} />
            </div>
          ))}
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          Why These Skills?
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
          <p>
            Featured skills are selected based on four criteria: design quality,
            composability with other skills, adherence to the ARCTIS
            specification, and community adoption. Each featured skill has been
            tested across all three supported agents.
          </p>
          <p>
            New skills are reviewed weekly. If you&apos;ve built a skill that
            meets the quality bar, you can submit it for featured status through
            the{" "}
            <span className="text-[var(--color-accent)]">contribution guide</span>.
          </p>
        </div>
      </Section>
    </DocPageShell>
  );
}
