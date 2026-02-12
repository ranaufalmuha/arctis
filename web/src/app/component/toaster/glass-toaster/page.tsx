"use client";

import { useRef } from "react";
import SweepButton from "../../button/sweep-button/SweepButton";
import { glassToaster, GlassToaster } from "./GlassToaster";

export default function SweepButtonPage() {
  const loadingIdRef = useRef<string | number | null>(null);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <SweepButton
          variant="transparent"
          size="sm"
          onClick={() => {
            glassToaster.success("Testing Toast", {
              desc: "this is description, you can add anything for your toast 💚",
            });
          }}
        >
          Succes
        </SweepButton>
        <SweepButton
          variant="transparent"
          size="sm"
          onClick={() => {
            glassToaster.error("Testing Toast", {
              desc: "this is description, you can add anything for your toast ❤️",
            });
          }}
        >
          Error
        </SweepButton>
        <SweepButton
          variant="transparent"
          size="sm"
          onClick={() => {
            loadingIdRef.current = glassToaster.loading(
              "Testing Toast",
              "this is description, you can add anything for your toast 🤍",
            );
          }}
        >
          Loading
        </SweepButton>
        <SweepButton
          variant="transparent"
          size="sm"
          onClick={() => {
            if (!loadingIdRef.current) return;

            glassToaster.success("Loading Toast Done", {
              id: loadingIdRef.current,
              desc: "Finished ✅",
            });

            loadingIdRef.current = null; // optional cleanup
          }}
        >
          Loading Done
        </SweepButton>
      </div>
      <GlassToaster />
    </div>
  );
}
