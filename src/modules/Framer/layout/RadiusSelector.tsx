"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setRadius } from "@/redux/features/framerSlice";
import { RADIUS } from "../constants/constans";
import { AnimatedTabSwitcher } from "@/components/custom/AnimatedTabSwitcher";

export const RadiusSelector = () => {
  const { radius } = useSelector((state: RootState) => state.framer);
  const dispatch = useDispatch();

  const handleRadiusChange = (value: number) => {
    dispatch(setRadius(value));
  };

  return (
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="radiusLabel"
        className="h-8 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-base md:text-base"
        style={{
          width: "60%",
          paddingLeft: "18px",
        }}
      >
        Radius
      </label>
      <div className="w-full flex items-center justify-center">
        <div
          role="group"
          id="radiusLabel"
          className="flex flex-col gap-1 flex-1 h-full"
        >
          <AnimatedTabSwitcher
            options={RADIUS}
            activeOption={radius.toString()}
            onChange={(value) =>
              handleRadiusChange(
                typeof value === "string" ? parseInt(value) : value
              )
            }
            className="h-9 p-1 bg-[#cdcbcb] dark:bg-[#272727]"
          />
        </div>
      </div>
    </div>
  );
};
