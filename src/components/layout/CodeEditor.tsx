"use client";

import { CodeEditorModule } from "@/modules";
import { CodeEditorSkeleton } from "@/modules/CodeEditor/CodeEditorSkeleton";
import { useEffect, useState } from "react";

export const CodeEditor = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="w-full h-full flex items-center justify-center bg-[#E6E6E6] dark:bg-[#151515]">
      {isLoading ? <CodeEditorSkeleton /> : <CodeEditorModule />}
    </main>
  );
};
