"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Layers3, PanelsTopLeft, RemoveFormatting } from "lucide-react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { EditorModule, FontModule, FramerModule, WindowModule } from "@/modules";

export const MenuLayout = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const tabs = [
    {
      id: 1,
      name: "Framer",
      icon: <Layers3 className="w-5 h-5 text-black dark:text-white" />,
      content: <FramerModule />,
    },
    {
      id: 2,
      name: "Editor",
      icon: <Code className="w-5 h-5 text-black dark:text-white" />,
      content: <EditorModule />,
    },
    {
      id: 3,
      name: "Window",
      icon: <PanelsTopLeft className="w-5 h-5 text-black dark:text-white" />,
      content: <WindowModule />,
    },
    {
      id: 4,
      name: "Font",
      icon: <RemoveFormatting className="w-5 h-5 text-black dark:text-white" />,
      content: <FontModule />,
    },
  ];

  const handleTabChange = (value: string) => {
    setActiveTab((prevTab) => (prevTab === value ? null : value));
  };

  const handleCloseTab = () => {
    setActiveTab(null);
  };

  return (
    <Tabs
      value={activeTab || ""}
      onValueChange={handleTabChange}
      className="fixed bottom-2 left-0 right-0 w-full block lg:hidden"
    >
      <TabsList className="grid h-12 grid-cols-4 bg-[#dfdfdf] dark:bg-[#272727] border-b mx-2 md:mx-4 lg:mx-8">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.name}
            className={`py-2 ${
              activeTab === tab.name ? "bg-[#5b5b5b] dark:bg-[#181818]" : ""
            }`}
          >
            {tab.icon}
          </TabsTrigger>
        ))}
      </TabsList>
      <motion.div
        className="absolute bottom-full left-0 right-0 bg-[#dfdfdf] dark:bg-[#1a1a1a] mb-2 rounded-xl mx-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.name} className="h-auto">
            {activeTab === tab.name && (
              <motion.div
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full flex items-center justify-between mb-6">
                  <h3 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">
                    {tab.name}
                  </h3>
                  <motion.button
                    className="bg-[#f1f1f1] dark:bg-[#252525] rounded-md p-1.5"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCloseTab}
                  >
                    <X className="w-5 h-5 text-black/80 dark:text-white/80" />
                  </motion.button>
                </div>
                {tab.content}
              </motion.div>
            )}
          </TabsContent>
        ))}
      </motion.div>
    </Tabs>
  );
}
