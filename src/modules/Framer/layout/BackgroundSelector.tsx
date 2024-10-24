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

export const BackgroundSelector = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { background } = useSelector((state: RootState) => state.framer);
  const dispatch = useDispatch();

  const handleBackgroundChange = (value: string) => {
    dispatch(setBackground(value));
    setIsOpen(false);
  };

  return (
    <div className="w-full mb-2">
      <div className="w-full flex items-center justify-between">
        <p className="text-sm md:text-base text-muted-foreground w-1/2">
          Background
        </p>
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <button className="w-1/2 h-8 flex items-center px-2 py-0.5 bg-[#cdcbcb] dark:bg-[#272727] rounded-lg">
              <span
                className="rounded-md w-full h-5"
                style={{ background: background }}
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-screen p-4 bg-[#cdcbcb] dark:bg-[#272727] rounded-lg">
            <Tabs defaultValue="gradients" className="w-full">
              <TabsList className="flex w-full">
                <TabsTrigger value="gradients" className="w-1/2">
                  Gradientes
                </TabsTrigger>
                <TabsTrigger value="colors" className="w-1/2">
                  Colores
                </TabsTrigger>
              </TabsList>
              <TabsContent value="gradients">
                <div className="w-full grid grid-cols-4 place-items-center gap-4 p-4">
                  {BACKGROUNDS.map((background, index) => (
                    <div
                      key={index}
                      className="cursor-pointer rounded-full w-auto"
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
              <TabsContent value="colors">
                <div className="w-full grid grid-cols-4 place-items-center gap-4 p-4">
                  {COLORS.map((color, index) => (
                    <div
                      key={index}
                      className="cursor-pointer rounded-full w-10"
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
    </div>
  );
};
