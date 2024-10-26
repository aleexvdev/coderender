"use client";

import { setBoder } from "@/redux/features/windowSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const bordersOptions = [
  { value: "none", label: "None" },
  { value: "glass", label: "Glass" },
];

export const BorderSelector = () => {
  const { border } = useSelector((state: RootState) => state.window);
  const dispatch = useDispatch();

  const handleBorderChange = (value: string) => {
    dispatch(setBoder(value));
  };

  return (
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="borderLabel"
        className="h-8 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-base md:text-base"
        style={{
          width: "60%",
          paddingLeft: "18px",
        }}
      >
        Border
      </label>
      <div className="w-full flex items-center justify-center">
        <div
          role="group"
          id="borderLabel"
          className="flex flex-col gap-1 flex-1 h-full"
        >
          <Select
            value={border.toString()}
            onValueChange={handleBorderChange}
            defaultValue={border.toString()}
          >
            <SelectTrigger className="w-full bg-[#cdcbcb] dark:bg-[#272727]">
              <SelectValue
                placeholder={border}
                defaultValue={border}
                className="capitalize"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {bordersOptions.map((item) => (
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
