"use client";

import { toggleBorder } from "@/redux/features/windowSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { AnimatedTabSwitcher } from "@/components/custom/AnimatedTabSwitcher";

const bordersOptions = [
  { id: 1, name: "None", value: false },
  { id: 2, name: "Glass", value: true },
];

export const BorderSelector = () => {
  const { border } = useSelector((state: RootState) => state.window);
  const dispatch = useDispatch();

  const handleBorderChange = () => {
    dispatch(toggleBorder());
  };

  return (
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="borderLabel"
        className="h-8 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-sm md:text-sm"
        style={{
          width: "60%",
          paddingLeft: "18px",
        }}
      >
        Border
      </label>
      <AnimatedTabSwitcher
        options={bordersOptions}
        activeOption={border}
        onChange={handleBorderChange}
        className="h-9 p-1 bg-[#EEEEEE] dark:bg-[#272727]"
      />
    </div>
  );
};
