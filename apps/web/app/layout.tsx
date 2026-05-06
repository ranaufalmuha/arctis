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
    default: "ARCTIS — Open Skill Registry for AI Coding Agents",
    template: "%s | ARCTIS",
  },
  description:
    "Give your coding agent better taste. ARCTIS is an open-source skill registry — install reusable design systems, workflows, and tools for Claude Code, OpenCode, and Codex.",
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
    "developer tools",
  ],
  authors: [{ name: "ARCTIS" }],
  creator: "ARCTIS",
  publisher: "ARCTIS",
  metadataBase: new URL("https://arctis.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arctis.dev",
    siteName: "ARCTIS",
    title: "ARCTIS — Open Skill Registry for AI Coding Agents",
    description:
      "Give your coding agent better taste. Install reusable design systems, workflows, and tools for Claude Code, OpenCode, and Codex.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARCTIS — Open Skill Registry for AI Coding Agents",
    description:
      "Give your coding agent better taste. Install reusable design systems, workflows, and tools for AI coding agents.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/logo/logo-icon.svg",
    shortcut: "/logo/logo-icon.svg",
    apple: "/logo/logo-icon.svg",
  },
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
