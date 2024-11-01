"use client";

import { setFontSize } from "@/redux/features/fontSlice";
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

const fontSizes = [
  { value: "12px", label: "12px" },
  { value: "14px", label: "14px" },
  { value: "16px", label: "16px" },
  { value: "18px", label: "18px" },
  { value: "20px", label: "20px" },
  { value: "22px", label: "22px" },
  { value: "24px", label: "24px" },
  { value: "26px", label: "26px" },
  { value: "28px", label: "28px" },
  { value: "30px", label: "30px" },
];

export const FontSizeSelector = () => {

  const { fontSize } = useSelector((state: RootState) => state.font);
  const dispatch = useDispatch();

  const handleFontSizeChange = (value: string) => {
    dispatch(setFontSize(value));
  };

  return (
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="fontsizeLabel"
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
          id="fontsizeLabel"
          className="flex flex-col gap-1 flex-1 h-full"
        >
          <Select
            value={fontSize.toString()}
            onValueChange={handleFontSizeChange}
            defaultValue={fontSize.toString()}
          >
            <SelectTrigger className="w-full bg-[#cdcbcb] dark:bg-[#272727]">
              <SelectValue placeholder={fontSize} defaultValue={fontSize} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {fontSizes.map((item) => (
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
