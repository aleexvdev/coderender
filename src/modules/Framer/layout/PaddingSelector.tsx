"use client";

import { setPadding } from "@/redux/features/framerSlice";
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

const paddingOptions = [
  { value: "0", label: "0px" },
  { value: "4", label: "4px" },
  { value: "8", label: "8px" },
  { value: "16", label: "16px" },
  { value: "24", label: "24px" },
];

export const PaddingSelector = () => {
  const { padding } = useSelector((state: RootState) => state.framer);
  const dispatch = useDispatch();

  const handlePaddingChange = (value: string) => {
    dispatch(setPadding(value));
  };

  return (
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="paddingLabel"
        className="h-8 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-sm"
        style={{
          width: "60%",
          paddingLeft: "18px"
        }}
      >
        Padding
      </label>
      <div className="w-full flex items-center justify-center">
        <div
          role="group"
          id="paddingLabel"
          className="flex flex-col gap-1 flex-1 h-full"
        >
          <Select
            value={padding.toString()}
            onValueChange={handlePaddingChange}
            defaultValue={padding.toString()}
          >
            <SelectTrigger className="w-full bg-[#cdcbcb] dark:bg-[#272727]">
              <SelectValue placeholder={padding + "px"} defaultValue={padding} className="text-sm" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {paddingOptions.map((item) => (
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
