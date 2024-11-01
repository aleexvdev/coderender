"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleHeaderTerminal } from "@/redux/features/windowSlice";
import { RootState } from "@/redux/store";
import { AnimatedTabSwitcher } from "@/components/custom/AnimatedTabSwitcher";
import { HeaderStyleSelector } from "./HeaderStyleSelector";

const headerTerminalOptions = [
  { id: 1, name: "Show", value: true },
  { id: 2, name: "Hide", value: false },
];

export const HeaderTerminal = () => {
  const { headerTerminal } = useSelector((state: RootState) => state.window);
  const dispatch = useDispatch();

  const handleHeaderTerminalChange = () => {
    dispatch(toggleHeaderTerminal());
  };

  return (
    <>
      <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
        <label
          htmlFor="lineNumberLabel"
          className="h-8 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-sm"
          style={{
            width: "60%",
            paddingLeft: "18px",
          }}
        >
          Header
        </label>
        <AnimatedTabSwitcher
          options={headerTerminalOptions}
          activeOption={headerTerminal}
          onChange={handleHeaderTerminalChange}
          className="h-9 p-1 bg-[#EEEEEE] dark:bg-[#272727]"
        />
      </div>
      {
        headerTerminal && (
          <HeaderStyleSelector />
        )
      }
    </>
  );
};
