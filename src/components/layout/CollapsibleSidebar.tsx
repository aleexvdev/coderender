"use client";

import {
  EditorModule,
  FontModule,
  FramerModule,
  WindowModule,
} from "@/modules";
import {
  Code,
  Layers3,
  PanelsTopLeft,
  RemoveFormatting,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSubItem,
  SidebarProvider,
} from "../ui/sidebar";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const modules = [
  { name: "Framer", icon: Layers3, content: <FramerModule /> },
  { name: "Editor", icon: Code, content: <EditorModule /> },
  { name: "Window", icon: PanelsTopLeft, content: <WindowModule /> },
  { name: "Font", icon: RemoveFormatting, content: <FontModule /> },
];

export const CollapsibleSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const filteredModules = modules.filter((module) =>
    module.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SidebarProvider>
      <Sidebar
        className={cn(
          "hidden lg:flex h-[calc(100vh-64px)] transition-all duration-300 ease-in-out absolute bottom-0",
          isCollapsed ? "w-16" : "w-80"
        )}
        style={{
          borderRadius: "16px",
        }}
      >
        <SidebarHeader className="px-2 pt-16">
          <Input
            type="text"
            placeholder="Search modules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={cn("w-full focus:outline-none outline-none", isCollapsed && "hidden")}
          />
          {isCollapsed && (
            <Button variant="ghost" size="icon" className="w-full hidden">
              <Search className="h-4 w-4" />
            </Button>
          )}
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {filteredModules.map((module) => (
              <div key={module.name}>
                <SidebarMenuItem key={module.name} className="w-full px-4 py-2">
                  <SidebarMenuSubItem
                    className={cn(
                      "flex items-center gap-2 w-full hover:bg-transparent text-sm",
                      isCollapsed && "justify-center"
                    )}
                  >
                    <module.icon className="h-5 w-5" />
                    {!isCollapsed && <span>{module.name}</span>}
                  </SidebarMenuSubItem>
                </SidebarMenuItem>
                {!isCollapsed && (
                  <div className="mt-1 mb-2 pl-4 pr-2">
                    {module.content}
                  </div>
                )}
              </div>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <Button
          variant="export"
          size="icon"
          className="absolute top-4 -right-4"
          onClick={toggleSidebar}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </Sidebar>
    </SidebarProvider>
  );
};
