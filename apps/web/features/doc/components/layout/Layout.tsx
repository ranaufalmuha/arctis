import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "../../../../app/(marketing)/_components/layout/Footer";
import { Sidebar } from "./Sidebar";
import { DocItem } from "../../interfaces/doc";

type Props = {
  children: ReactNode;
  routes: DocItem[];
};

export function Layout({ children, routes }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <div className="flex flex-1">
        <Sidebar routes={routes} />
        <main className="flex-1 px-4 py-6 md:px-8">
          <div className="mx-auto w-full max-w-3xl">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
