import { SpotlightCard } from "@/shared/components/registry/spotlight-card";

export default function SpotlightCardDemo(props: Record<string, unknown>) {
  return (
    <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
      <SpotlightCard
        spotlightColor={
          typeof props.spotlightColor === "string"
            ? props.spotlightColor
            : undefined
        }
        radius={typeof props.radius === "number" ? props.radius : undefined}
      >
        <p className="type-eyebrow text-muted-foreground">Signal 01</p>
        <p className="text-title-sm font-semibold tracking-tight mt-4">
          Pointer-aware surfaces.
        </p>
        <p className="text-body-sm mt-2 text-muted-foreground">
          Move the cursor across this card.
        </p>
      </SpotlightCard>
      <SpotlightCard spotlightColor="rgba(34, 211, 238, 0.18)">
        <p className="type-eyebrow text-muted-foreground">Signal 02</p>
        <p className="text-title-sm font-semibold tracking-tight mt-4">
          A different accent.
        </p>
        <p className="text-body-sm mt-2 text-muted-foreground">
          The spotlight color is a single prop.
        </p>
      </SpotlightCard>
    </div>
  );
}
