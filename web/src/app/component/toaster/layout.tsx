// apps/web/app/(marketing)/layout.tsx
import type { ReactNode } from "react";

export default function MarketingSegmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      {children}
    </div>
  );
}
