import type { ReactNode } from "react";
import "@/shared/styles/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="flex min-h-screen flex-col">
      <body>
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
