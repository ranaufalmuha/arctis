import fs from "fs";
import path from "path";

export function readSourceMarkdown(sourcePath: string): string {
  const fullPath = path.join(process.cwd(), sourcePath);
  return fs.readFileSync(fullPath, "utf-8");
}
