import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// tailwind-merge only knows the default text sizes. Without this, `text-caption`
// and friends are treated as colors and dropped by later `text-*` classes.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "overline",
            "caption",
            "body-sm",
            "body",
            "lead",
            "title-sm",
            "title",
            "page-title",
            "display",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
