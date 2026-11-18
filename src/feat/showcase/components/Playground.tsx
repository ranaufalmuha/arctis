import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/shared/components/ui/input";
import type { PropDoc, ShowcaseItem } from "../data/components";
import { DemoFrame } from "./DemoFrame";

type Control =
  | {
      kind: "color" | "select";
      name: string;
      value: string;
      options?: string[];
    }
  | { kind: "number"; name: string; value: number };

const quoted = /^"(.*)"$/;

// Controls are derived from the documented defaults so props data stays the single source.
export function propControl(prop: PropDoc): Control | null {
  const fallback = prop.default?.match(quoted)?.[1] ?? prop.default;

  if (!fallback || prop.name.startsWith("...") || prop.type.startsWith("[")) {
    return null;
  }
  if (prop.type.includes("ReactNode")) return null;
  if (prop.type.includes("|")) {
    return {
      kind: "select",
      name: prop.name,
      value: fallback,
      options: prop.type
        .split("|")
        .map((option) => option.trim().replaceAll('"', "")),
    };
  }
  if (prop.type === "number") {
    const value = Number(fallback);
    return Number.isFinite(value)
      ? { kind: "number", name: prop.name, value }
      : null;
  }
  if (fallback.startsWith("#")) {
    return { kind: "color", name: prop.name, value: fallback };
  }
  return null;
}

export function Playground({ item }: { item: ShowcaseItem }) {
  const controls = item.props
    .map(propControl)
    .filter((control): control is Control => control !== null);
  const [values, setValues] = useState<Record<string, string | number>>(() =>
    Object.fromEntries(
      controls.map((control) => [control.name, control.value]),
    ),
  );

  const setValue = (name: string, value: string | number) =>
    setValues((current) => ({ ...current, [name]: value }));

  return (
    <>
      <section aria-labelledby="preview-heading">
        <h2
          id="preview-heading"
          className="text-title-sm font-semibold tracking-tight"
        >
          Preview
        </h2>
        <div className="mt-5">
          <DemoFrame name={item.name} props={values} />
        </div>
      </section>

      <section aria-labelledby="customize-heading">
        <h2
          id="customize-heading"
          className="text-title-sm font-semibold tracking-tight"
        >
          Customize
        </h2>
        {controls.length > 0 ? (
          <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {controls.map((control) => {
              const id = `control-${control.name}`;
              return (
                <div key={control.name} className="min-w-0">
                  <label
                    htmlFor={id}
                    className="type-eyebrow text-muted-strong"
                  >
                    {control.name}
                  </label>
                  {control.kind === "color" ? (
                    <div className="mt-2 flex items-center gap-3">
                      <input
                        id={id}
                        type="color"
                        value={String(values[control.name])}
                        onChange={(event) =>
                          setValue(control.name, event.target.value)
                        }
                        className="h-9 w-9 cursor-pointer rounded-control border border-border bg-background p-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      />
                      <span className="font-mono text-caption text-muted-foreground">
                        {String(values[control.name])}
                      </span>
                    </div>
                  ) : control.kind === "number" ? (
                    <Input
                      id={id}
                      type="number"
                      value={Number(values[control.name])}
                      onChange={(event) =>
                        setValue(control.name, Number(event.target.value))
                      }
                      className="mt-2 max-w-40"
                    />
                  ) : (
                    <div
                      className="mt-2 flex flex-wrap items-center gap-1"
                      role="group"
                      aria-label={control.name}
                    >
                      {control.options?.map((option) => (
                        <button
                          key={option}
                          type="button"
                          aria-pressed={values[control.name] === option}
                          onClick={() => setValue(control.name, option)}
                          className={cn(
                            "cursor-pointer rounded-control px-2.5 py-1.5 text-caption transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                            values[control.name] === option
                              ? "bg-panel-strong text-foreground"
                              : "text-muted-foreground hover:bg-panel hover:text-foreground",
                          )}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="mt-5 text-caption text-muted-foreground">
            This component has no props to customize.
          </p>
        )}
      </section>
    </>
  );
}
