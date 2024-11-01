import { CodeEditor } from "@/components/layout/CodeEditor";
import { CollapsibleSidebar } from "@/components/layout/CollapsibleSidebar";
import { MenuLayout } from "@/components/layout/MenuLayout";

export default function Home() {
  return (
    <main className="w-screen h-screen px-2 md:px-4 relative flex">
      <div className="hidden lg:block">
        <CollapsibleSidebar />
      </div>
      <div className="lg:hidden">
        <MenuLayout />
      </div>
      <div className="w-full h-[calc(100vh-30%)] md:h-full mt-3 lg:ml-20 lg:mt-6 grid place-items-center bg-[#E6E6E6] dark:bg-[#151515] rounded-2xl overflow-auto flex-1">
        <CodeEditor />
      </div>
    </main>
  );
}
