import { AuroraBackground } from "@/shared/components/registry/aurora-background";

export default function AuroraBackgroundDemo(props: Record<string, unknown>) {
  return (
    <AuroraBackground
      speed={typeof props.speed === "number" ? props.speed : undefined}
      className="absolute inset-0"
    />
  );
}
