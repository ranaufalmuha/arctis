import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="w-full max-w-lg rounded-panel border border-border bg-card/60 p-10 text-center">
        <title>404 — ARCTIS</title>
        <p className="type-eyebrow text-accent">Error 404</p>
        <h1 className="type-page-title mt-4">This route does not exist.</h1>
        <p className="text-body-sm mt-3 text-muted-foreground">
          The component or page may have moved.
        </p>
        <Link
          to="/docs/components"
          className="btn btn-primary btn-md mt-6 px-5"
        >
          Browse components
        </Link>
      </div>
    </div>
  );
}
