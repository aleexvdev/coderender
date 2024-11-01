import { CodeEditor } from "@/components/layout/CodeEditor";
import { MenuLayout } from "@/components/layout/MenuLayout";

export default function Home() {
  return (
    <main className="w-screen h-screen px-2 md:px-4 relative">
      <MenuLayout />
      <div className="w-full h-[calc(100vh-30%)] mt-3 lg:mt-6 grid place-items-center bg-[#E6E6E6] dark:bg-[#151515] rounded-2xl overflow-auto">
        <CodeEditor />
      </div>
    </main>
  );
}
