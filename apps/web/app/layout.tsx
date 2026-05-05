import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/shared/styles/globals.css";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ARCTIS — Open-Source Skill Registry for AI Coding Agents",
    template: "%s | ARCTIS",
  },
  description:
    "ARCTIS is an open-source skill registry for AI coding agents. Browse and install reusable SKILL.md packages for Claude Code, OpenCode, and Codex.",
  keywords: [
    "AI coding agent",
    "skill registry",
    "SKILL.md",
    "Claude Code",
    "OpenCode",
    "Codex",
    "frontend skills",
    "design system",
    "open source",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
