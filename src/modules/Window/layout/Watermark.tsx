"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleWatermark } from "@/redux/features/windowSlice";
import { RootState } from "@/redux/store";
import { AnimatedTabSwitcher } from "@/components/custom/AnimatedTabSwitcher";

const wathermarksOptions = [
  { id: 1, name: "Show", value: true },
  { id: 2, name: "Hide", value: false },
];

export const Watermark = () => {
  const { watermark } = useSelector((state: RootState) => state.window);
  const dispatch = useDispatch();

  const handleWatermarkChange = () => {
    dispatch(toggleWatermark());
  };

  return (
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="watermarkLabel"
        className="h-8 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-sm md:text-sm"
        style={{
          width: "60%",
          paddingLeft: "18px",
        }}
      >
        Watermark
      </label>
      <AnimatedTabSwitcher
        options={wathermarksOptions}
        activeOption={watermark}
        onChange={handleWatermarkChange}
        className="h-9 p-1 bg-[#EEEEEE] dark:bg-[#272727]"
      />
    </div>
  );
}
