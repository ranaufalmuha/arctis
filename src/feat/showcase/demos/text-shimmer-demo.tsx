import { TextShimmer } from "@/shared/components/registry/text-shimmer";

export default function TextShimmerDemo(props: Record<string, unknown>) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <TextShimmer
        duration={typeof props.duration === "number" ? props.duration : 4}
        highlight={
          typeof props.highlight === "string"
            ? props.highlight
            : "var(--accent)"
        }
        baseColor={
          typeof props.baseColor === "string" ? props.baseColor : undefined
        }
        className="type-display"
      >
        Shipping in the dark.
      </TextShimmer>
      <TextShimmer duration={6} highlight="#22d3ee" className="type-eyebrow">
        Prismatic architecture
      </TextShimmer>
    </div>
  );
}
