import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";

export default function Page() {
  return (
    <DocPageShell href="/docs/rules">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Browse All Rules
        </h2>
        <p className="font-mono text-base leading-relaxed text-[var(--color-muted)]">
          Rules define design constraints and conventions that keep your output
          consistent. They act as guardrails for your agent — enforce a specific
          radius, lock typography, or mandate accessible contrast ratios. Combine
          Rules with any Theme and Add-on to fine-tune every detail.
        </p>
      </Section>
    </DocPageShell>
  );
}
