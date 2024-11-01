"use client";

import { RootState } from "@/redux/store";
import { Minus, Square, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { changeHeaderStyle, HeaderStyle } from "@/redux/features/windowSlice";

export const HeaderStyleSelector = () => {
  const { HeaderStyle } = useSelector((state: RootState) => state.window);
  const { tabName } = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();

  const renderHeaderStyle = (style: HeaderStyle) => {
    const circleStyle = {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      display: "inline-block",
      marginRight: "8px",
    };

    switch (style) {
      case 1:
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ ...circleStyle, backgroundColor: "red" }}></div>
            <div style={{ ...circleStyle, backgroundColor: "yellow" }}></div>
            <div style={{ ...circleStyle, backgroundColor: "green" }}></div>
          </div>
        );
      case 2:
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                ...circleStyle,
                backgroundColor: "transparent",
                border: "2px solid red",
              }}
            ></span>
            <span
              style={{
                ...circleStyle,
                backgroundColor: "transparent",
                border: "2px solid yellow",
              }}
            ></span>
            <span
              style={{
                ...circleStyle,
                backgroundColor: "transparent",
                border: "2px solid green",
              }}
            ></span>
          </div>
        );
      case 3:
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ ...circleStyle, backgroundColor: "gray" }}></span>
            <span style={{ ...circleStyle, backgroundColor: "gray" }}></span>
            <span style={{ ...circleStyle, backgroundColor: "gray" }}></span>
          </div>
        );
      case 4:
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                ...circleStyle,
                backgroundColor: "transparent",
                border: "2px solid gray",
              }}
            ></span>
            <span
              style={{
                ...circleStyle,
                backgroundColor: "transparent",
                border: "2px solid gray",
              }}
            ></span>
            <span
              style={{
                ...circleStyle,
                backgroundColor: "transparent",
                border: "2px solid gray",
              }}
            ></span>
          </div>
        );
      case 5:
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Minus style={{ width: "14px", height: "14px", color: "gray" }} />
            <Square style={{ width: "14px", height: "14px", color: "gray" }} />
            <X style={{ width: "14px", height: "14px", color: "gray" }} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="wcontrolsLabel"
        className="h-8 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-sm"
        style={{
          width: "60%",
          paddingLeft: "18px",
        }}
      >
        Window Controls
      </label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="w-full h-9 flex items-center px-2 py-1.5 bg-[#cdcbcb] dark:bg-[#272727] rounded-lg">
            <div className="rounded-sm w-full h-full flex items-center pl-1 justify-start">
              {renderHeaderStyle(HeaderStyle)}
              <div className="w-full bg-[#d6d6d6] dark:bg-[#404040] rounded-sm px-2 text-sm h-full flex items-center" style={{ marginLeft: "1rem"}}>
                <div className="flex items-center justify-start">{tabName}</div>
              </div>
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full py-4 px-2 rounded-lg bg-[#cdcbcb] dark:bg-[#272727]">
          {[1, 2, 3, 4, 5].map((style) => (
            <DropdownMenuItem
              key={style}
              onSelect={() => dispatch(changeHeaderStyle(style as HeaderStyle))}
              className={`focus:outline-none py-2 cursor-pointer px-4 w-full`}
              style={{
                border: `${
                  HeaderStyle === Number(style) ? "1px #3b82f6 solid" : "none"
                }`,
              }}
            >
              <div className="w-full flex flex-col space-y-2 p-2 rounded-md hover:bg-[#cdcbcb] hover:dark:bg-[#272727] transition-colors">
                <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-t-sm">
                  <div className="flex items-center space-x-1">
                    {renderHeaderStyle(style as HeaderStyle)}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Style {style}
                  </span>
                </div>
                <div
                  className="h-8 bg-white dark:bg-gray-500 rounded-b-sm"
                  style={{ height: "16px" }}
                ></div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
