"use client";

import { setTabName } from "@/redux/features/editorSlice";
import { RootState } from "@/redux/store";
import { AppWindow } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

export const TabNameSelector = () => {
  const { tabName } = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();

  const handleTabNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTabName(e.target.value));
  };

  return (
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="tabnameLabel"
        className="h-8 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-base md:text-base"
        style={{
          width: "60%",
          paddingLeft: "18px",
        }}
      >
        Tab name
      </label>
      <div
        role="group"
        id="tabnameLabel"
        className="w-full h-9 flex items-center justify-center"
      >
        <div className="w-full h-9 flex items-center justify-start px-2 py-0.5 bg-[#f0f0f0] dark:bg-[#272727] rounded-lg text-black dark:text-white">
          <AppWindow className="w-5 h-5 mr-2" />
          <input
            type="text"
            name="tabname"
            id="tabname"
            placeholder={tabName}
            className="w-full h-full text-xs py-1 bg-transparent rounded-sm outline-none placeholder:dark:text-white/80 placeholder:text-black/80 font-medium"
            autoComplete="off"
            value={tabName}
            onChange={handleTabNameChange}
          />
        </div>
      </div>
    </div>
  );
};
