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
import { PADDINGS } from "../constants/constans";

export const PaddingSelector = () => {
  const { padding } = useSelector((state: RootState) => state.framer);
  const dispatch = useDispatch();

  const handlePaddingChange = (value: string) => {
    dispatch(setPadding(value));
  };

  return (
    <div className="w-full mb-2">
      <div className="w-full flex items-center justify-between">
        <p className="text-sm md:text-base text-muted-foreground w-1/2">Padding</p>
        <Select defaultValue={padding.toString()} onValueChange={handlePaddingChange}>
          <SelectTrigger className="w-1/2 bg-[#cdcbcb]">
            <SelectValue placeholder={padding} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {PADDINGS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
