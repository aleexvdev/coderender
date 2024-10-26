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
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="opacityLabel"
        className="h-9 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-base md:text-base"
        style={{
          width: "60%",
          paddingLeft: "18px",
        }}
      >
        Opacity
      </label>
      <div className="w-full flex items-center justify-center">
        <div
          role="group"
          id="opacityLabel"
          className="w-full h-9 flex items-center px-2 py-0.5 bg-[#cdcbcb] dark:bg-[#272727] rounded-lg"
        >
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
