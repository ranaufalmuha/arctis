import { GlowButton } from "@/shared/components/registry/glow-button";

export default function GlowButtonDemo(props: Record<string, unknown>) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <GlowButton
        glowColor={
          typeof props.glowColor === "string" ? props.glowColor : undefined
        }
        intensity={props.intensity === "strong" ? "strong" : "soft"}
      >
        Glow button
      </GlowButton>
      <GlowButton glowColor="#22d3ee" intensity="strong">
        Cyan / strong
      </GlowButton>
      <GlowButton glowColor="#f59e0b">Amber</GlowButton>
    </div>
  );
}
