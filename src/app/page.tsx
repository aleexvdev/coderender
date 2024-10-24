import { Header } from "@/components/layout/Header";
import { Main } from "@/components/layout/Main";

export default function Home() {
  return (
    <main className="w-screen h-screen px-2 md:px-4 overflow-hidden">
      <Header />
      <Main />
    </main>
  );
}
