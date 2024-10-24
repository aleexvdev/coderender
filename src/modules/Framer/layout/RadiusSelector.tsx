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
    <div className="w-full mb-2">
      <div className="w-full flex items-center justify-between">
        <p className="text-sm md:text-base text-muted-foreground w-1/2">
          Radius
        </p>
        <div className="w-1/2">
          <AnimatedTabSwitcher
            options={RADIUS}
            activeOption={radius.toString()}
            onChange={(value) => handleRadiusChange(typeof value === 'string' ? parseInt(value) : value)}
            className="h-8 p-1 bg-[#cdcbcb] dark:bg-[#272727]"
          />
        </div>
      </div>
    </div>
  );
};
