import { Navigate, useParams } from "react-router";
import { ComponentDetail } from "@/feat/showcase/components/ComponentDetail";
import { getShowcaseItem } from "@/feat/showcase/data/components";

export default function ComponentPage() {
  const { name } = useParams();
  const item = getShowcaseItem(name);

  if (!item) return <Navigate to="/docs/components" replace />;

  return <ComponentDetail key={item.name} item={item} />;
}
