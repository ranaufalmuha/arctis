type FileNode = {
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
  highlight?: boolean;
};

type FileTreeProps = {
  nodes: FileNode[];
  className?: string;
};

function TreeNode({ node, depth = 0 }: { node: FileNode; depth: number }) {
  const indent = depth * 1.5;

  return (
    <div>
      <div
        className={`flex items-center gap-2 py-1 font-mono text-sm leading-relaxed ${
           node.highlight ? "text-[var(--color-foreground)]" : "text-[var(--color-muted)]"
        }`}
        style={{ paddingLeft: `${indent}rem` }}
      >
        <span className="text-overline text-[var(--color-muted-strong)]">
          {node.type === "folder" ? "📁" : "📄"}
        </span>
        <span>{node.name}</span>
      </div>
      {node.children?.map((child, i) => (
        <TreeNode key={i} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export function FileTree({ nodes, className }: FileTreeProps) {
  return (
    <div
      className={`border border-[var(--color-border)] bg-[var(--color-panel)] p-6 ${className}`}
    >
      <div className="mb-4 flex items-center gap-2 border-b border-[var(--color-border)] pb-3">
        <span className="font-mono text-overline uppercase tracking-[0.2em] text-[var(--color-muted-strong)]">
          PACKAGE STRUCTURE
        </span>
      </div>
      {nodes.map((node, i) => (
        <TreeNode key={i} node={node} depth={0} />
      ))}
    </div>
  );
}
