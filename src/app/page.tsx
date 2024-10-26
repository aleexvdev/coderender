import { Header } from "@/components/layout/Header";
import { MenuLayout } from "@/components/layout/MenuLayout";

export default function Home() {
  return (
    <main className="w-screen h-screen px-2 md:px-4 overflow-hidden">
      <Header />
      {/* <MenuLayout /> */}
      {/* <CodeEditor /> */}
      <MenuLayout />
    </main>
  );
}
