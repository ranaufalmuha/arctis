import { FlairCursorFollower } from "@/app/component/cursor/flair-cursor-follower/FlairCursorFollower";
import { Button } from "@/shared/components/ui/Button";
import { LINK_TO_DOCS } from "@/shared/constants/links";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center overflow-hidden relative">
      <div className="px-4 flex-col flex items-center text-center max-w-4xl gap-2 md:gap-4 lg:gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl duration-300">
          The Foundation for your Design System
        </h1>
        <p className="max-md:text-sm lg:text-lg duration-300 ">
          A set of beautifully designed components that you can customize,
          extend, and build on. Start here then make it your own. Open Source.
          Open Code.
        </p>

        {/* actions  */}
        <div className="mt-3 hover:scale-110 duration-300">
          <Link href={LINK_TO_DOCS}>
            <Button>View Components</Button>
          </Link>
        </div>
      </div>

      <FlairCursorFollower />
    </div>
  );
}
