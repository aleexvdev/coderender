import { CodeEditor } from "@/components/layout/CodeEditor";
import { MenuLayout } from "@/components/layout/MenuLayout";

export default function Home() {
  return (
    <main className="w-screen h-screen px-2 md:px-4">
      <MenuLayout />
      <div className="w-full h-[calc(100vh-180px)] mt-3 lg:mt-6 grid place-items-center z-10 bg-[#E6E6E6] dark:bg-[#151515] rounded-2xl overflow-auto">
        <CodeEditor />
      </div>
    </main>
  );
}
