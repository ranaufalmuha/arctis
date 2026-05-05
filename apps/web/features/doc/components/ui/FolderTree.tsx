type FolderNode = {
  name: string;
  type: "file" | "folder";
  children?: FolderNode[];
};

type FolderTreeProps = {
  structure: FolderNode[];
};

function Node({ node, depth = 0 }: { node: FolderNode; depth: number }) {
  return (
    <div>
      <div
        className="flex items-center gap-1.5 py-0.5 font-mono text-xs"
        style={{ paddingLeft: `${depth * 1.25}rem` }}
      >
        <span className="text-[10px] text-[var(--color-muted-strong)]">
          {node.type === "folder" ? "▸" : " "}
        </span>
        <span
          className={
            node.type === "folder"
              ? "text-[var(--color-foreground)]"
              : "text-[var(--color-muted)]"
          }
        >
          {node.name}
        </span>
      </div>
      {node.children?.map((child, i) => (
        <Node key={i} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export function FolderTree({ structure }: FolderTreeProps) {
  return (
    <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-4">
      {structure.map((node, i) => (
        <Node key={i} node={node} depth={0} />
      ))}
    </div>
  );
}
