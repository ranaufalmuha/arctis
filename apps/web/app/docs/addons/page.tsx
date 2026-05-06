import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";

export default function Page() {
  return (
    <DocPageShell href="/docs/addons">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Browse All Add-ons
        </h2>
        <p className="font-mono text-base leading-relaxed text-[var(--color-muted)]">
          Add-ons define interaction, animation, visual effects, and
          library-specific behavior. They layer on top of any Theme and can be
          combined freely. Use multiple Add-ons with one Theme for a complete
          project setup.
        </p>
      </Section>
    </DocPageShell>
  );
}
