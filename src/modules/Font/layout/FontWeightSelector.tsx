"use client";

import { setFontWeight } from "@/redux/features/fontSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const fontWeights = [
  { value: "normal", label: "Normal" },
  { value: "bold", label: "Bold" },
  { value: "bolder", label: "Bolder" },
  { value: "lighter", label: "Lighter" },
];

export const FontWeightSelector = () => {
  const { fontWeight } = useSelector((state: RootState) => state.font);
  const dispatch = useDispatch();

  const handleFontWeightChange = (value: string) => {
    dispatch(setFontWeight(value));
  };

  return (
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="fontWeightLabel"
        className="h-8 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-sm md:text-sm"
        style={{
          width: "60%",
          paddingLeft: "18px",
        }}
      >
        Font size
      </label>
      <div className="w-full flex items-center justify-center">
        <div
          role="group"
          id="fontWeightLabel"
          className="flex flex-col gap-1 flex-1 h-full"
        >
          <Select
            value={fontWeight.toString()}
            onValueChange={handleFontWeightChange}
            defaultValue={fontWeight.toString()}
          >
            <SelectTrigger className="w-full bg-[#cdcbcb] dark:bg-[#272727]">
              <SelectValue placeholder={fontWeight} defaultValue={fontWeight} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {fontWeights.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
