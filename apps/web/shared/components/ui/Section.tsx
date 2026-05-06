import { type ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  glowAccent?: boolean;
  glowIndigo?: boolean;
};

export function Section({ children, className, id, glowAccent, glowIndigo, ...rest }: SectionProps) {
  void glowAccent;
  void glowIndigo;
  void rest;
  return (
    <section id={id} className={clsx("relative", className)}>
      {children}
    </section>
  );
}
