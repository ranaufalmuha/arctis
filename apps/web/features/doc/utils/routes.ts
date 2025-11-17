import { globby } from "globby";
import { DocItem } from "../interfaces/doc";

const labelFromPath = (href: string) => {
    const last = href.split("/").filter(Boolean).pop() || "";
    if (last === "docs") return "Introduction";

    return last
        .replace(/-/g, " ")
        .replace(/^\w/, (c) => c);
};

const groupFromPath = (href: string): string => {
    const parts = href.split("/").filter(Boolean);
    const folder = parts[1]; // "components", "backgrounds", etc.
    if (!folder) return "Welcome";
    return folder.replace(/^\w/, (c) => c);
};

export async function getDocsRoutes(): Promise<DocItem[]> {
    const files = await globby("app/docs/**/page.{ts,tsx,md,mdx}");

    const items: DocItem[] = [];

    for (const file of files) {
        const href = file
            .replace(/^app/, "")
            .replace(/\/page\.(ts|tsx|md|mdx)$/, "");

        if (!href.startsWith("/docs")) continue;

        // Load file untuk check meta
        const modulePath = "../" + file; // relative import
        let meta: any = null;

        try {
            const mod = await import(modulePath);
            meta = mod.meta || null;
        } catch (err) {
            // Ignore (server can't import sometimes)
        }

        const label = meta?.label || labelFromPath(href);
        const group = meta?.group || groupFromPath(href);

        items.push({ href, label, group });
    }

    return items.sort((a, b) => a.href.localeCompare(b.href));
}
