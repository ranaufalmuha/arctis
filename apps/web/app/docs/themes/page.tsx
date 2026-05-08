import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";

export default function Page() {
  return (
    <DocPageShell href="/docs/themes">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Browse All Themes
        </h2>
        <p className="font-mono text-base leading-relaxed text-[var(--color-muted)]">
          Themes define the visual foundation of your project — layout, typography,
          color palette, and spacing. Each Theme is a complete design system that
          your agent applies consistently across every session. Mix one Theme with
          multiple Add-ons and Rules for a complete stack.
        </p>
      </Section>
    </DocPageShell>
  );
}
