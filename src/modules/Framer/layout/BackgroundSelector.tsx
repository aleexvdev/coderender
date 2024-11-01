"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { setBackground } from "@/redux/features/framerSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { BACKGROUNDS, COLORS } from "../constants/constans";
import { useState } from "react";

const tabs = [
  {
    id: 1,
    name: "Gradients",
    value: "gradients",
  },
  {
    id: 2,
    name: "Colors",
    value: "colors",
  },
];

export const BackgroundSelector = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string | null>("gradients");
  const { background } = useSelector((state: RootState) => state.framer);
  const dispatch = useDispatch();

  const handleBackgroundChange = (value: string) => {
    dispatch(setBackground(value));
    setIsOpen(false);
  };

  const handleTabChange = (value: string) => {
    setActiveTab((prevTab) => (prevTab === value ? null : value));
  };

  return (
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="backgroundLabel"
        className="h-9 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-base md:text-base"
        style={{
          width: "60%",
          paddingLeft: "18px",
        }}
      >
        Background
      </label>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button className="w-full h-9 flex items-center px-2 py-1.5 bg-[#cdcbcb] dark:bg-[#272727] rounded-lg">
            <span
              className="rounded-sm w-full h-full"
              style={{ background: background }}
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full p-4 rounded-lg bg-[#cdcbcb] dark:bg-[#272727]">
          <Tabs
            value={activeTab || ""}
            onValueChange={handleTabChange}
            defaultValue="gradients"
            className="w-full"
          >
            <TabsList className="h-12 flex w-full items-center bg-[#d6d6d6] dark:bg-[#404040]">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.value}
                  className={`py-2 w-full font-medium text-sm text-white ${
                    activeTab === tab.value
                      ? "bg-[#5b5b5b] dark:bg-[#181818]"
                      : ""
                  }`}
                >
                  {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="gradients" className="w-full" style={{ minWidth: "250px" }}>
              <div className="w-full grid grid-cols-4 place-items-center gap-4 p-4 bg-[#cdcbcb] dark:bg-[#272727]">
                {BACKGROUNDS.map((background, index) => (
                  <div
                    key={index}
                    className="cursor-pointer rounded-full w-full"
                    onClick={() => handleBackgroundChange(background)}
                  >
                    <span
                      className="block w-10 h-10 rounded-full"
                      style={{ background: background }}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="colors" className="w-full" style={{ minWidth: "250px" }}>
              <div className="w-full grid grid-cols-4 place-items-center gap-4 p-4">
                {COLORS.map((color, index) => (
                  <div
                    key={index}
                    className="cursor-pointer rounded-full w-full"
                    onClick={() => handleBackgroundChange(color)}
                  >
                    <span
                      className="block w-10 h-10 rounded-full"
                      style={{ background: color }}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
