// apps/web/app/(marketing)/layout.tsx
import type { ReactNode } from "react";

export default function MarketingSegmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="">
        <span className="border py-2 px-5 rounded-xl border-label text-label">
          Hover Here
        </span>
      </div>
      {children}
    </div>
  );
}
