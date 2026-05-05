import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

const items = [
  "GLSL fragment shader backgrounds",
  "Gradient noise and Perlin noise patterns",
  "Animated gradient mesh effects",
  "Mouse-responsive shader uniforms",
  "Performance-optimized with requestAnimationFrame",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/addons/shader-background">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Shader Background
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          WebGL shader backgrounds using Three.js and GLSL. Gradient noise,
          grain, and animated gradient mesh effects.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <CommandBlock command="npx arctis add shader-background --all" />
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          What This Provides
        </h2>
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item}
              className="border border-[var(--color-border)] bg-[var(--color-panel)] p-4"
            >
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </DocPageShell>
  );
}
