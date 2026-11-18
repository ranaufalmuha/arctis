import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export function RouteError() {
  const error = useRouteError();
  const title = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : "Something broke";

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="w-full max-w-lg rounded-panel border border-border bg-card/60 p-10 text-center">
        <p className="type-eyebrow text-accent">Route error</p>
        <h1 className="type-page-title mt-4">{title}</h1>
        <p className="text-body-sm mt-3 text-muted-foreground">
          The page could not be rendered. Try the catalog again.
        </p>
        <Link
          to="/docs/components"
          className="btn btn-primary btn-md mt-6 px-5"
        >
          Back to components
        </Link>
      </div>
    </div>
  );
}
