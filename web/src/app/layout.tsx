import type { ReactNode } from "react";
import "@/shared/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="flex min-h-screen flex-col">
      <body>
        <div className="flex-1">{children}</div>
        <GoogleAnalytics gaId="G-527ML7R60L" />
      </body>
    </html>
  );
}
