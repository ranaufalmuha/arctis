import { CodeBlock } from "@arctis/ui";
import React from "react";

export default function page() {
  const code = `<button>Button</button>`;
  return (
    <div>
      <CodeBlock code={code} />
    </div>
  );
}
