import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-control border border-border bg-card/60 text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
    >
      {dark ? (
        <Sun className="h-3.5 w-3.5" />
      ) : (
        <Moon className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
