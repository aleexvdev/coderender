"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleLineNumbers } from "@/redux/features/editorSlice";
import { RootState } from "@/redux/store";
import { AnimatedTabSwitcher } from "@/components/custom/AnimatedTabSwitcher";

const lineNumbersOptions = [
  { id: 1, name: "Show", value: true },
  { id: 2, name: "Hide", value: false },
];

export const LineNumberSelector = () => {

  const { lineNumbers } = useSelector(
    (state: RootState) => state.editor
  );
  const dispatch = useDispatch();

  return (
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="lineNumberLabel"
        className="h-8 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-sm md:text-sm"
        style={{
          width: "60%",
          paddingLeft: "18px",
        }}
      >
        Line number
      </label>
      <AnimatedTabSwitcher
        options={lineNumbersOptions}
        activeOption={lineNumbers}
        onChange={() => dispatch(toggleLineNumbers())}
        className="h-9 p-1 bg-[#EEEEEE] dark:bg-[#272727]"
      />
    </div>
  );
};
