"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setOpacity } from "@/redux/features/framerSlice";
import { Slider } from "@/components/ui/slider";

export const OpacitySelector = () => {
  const dispatch = useDispatch();
  const { opacity } = useSelector((state: RootState) => state.framer);

  const handleOpacityChange = (value: number[]) => {
    // Despacha el valor del slider al store (considerando que es un array con un valor)
    dispatch(setOpacity(value[0]));
  };

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <p className="text-sm md:text-base text-muted-foreground w-1/2">
          Opacity
        </p>
        <div className="w-1/2 h-8 flex items-center px-2 py-0.5 bg-[#cdcbcb] dark:bg-[#272727] rounded-lg">
          <Slider
            defaultValue={[opacity]}
            max={100}
            min={0}
            step={1}
            className="w-full"
            onValueChange={handleOpacityChange}
          />
        </div>
      </div>
    </div>
  );
};
