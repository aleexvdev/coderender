"use client";

import { setTabName } from "@/redux/features/editorSlice";
import { HeaderStyle } from "@/redux/features/windowSlice";
import { RootState } from "@/redux/store";
import { Minus, Square, X } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const HeaderCodeEditor = () => {
  const { HeaderStyle } = useSelector((state: RootState) => state.window);
  const { tabName } = useSelector((state: RootState) => state.editor);
  const { radius, background } = useSelector(
    (state: RootState) => state.framer
  );
  const dispatch = useDispatch();

  const renderHeaderStyle = (style: HeaderStyle) => {
    const circleStyle = {
      width: "16px",
      height: "16px",
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
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Minus
              style={{ width: "20px", height: "20px", color: "#c9c9c9" }}
            />
            <Square
              style={{ width: "16px", height: "20px", color: "#c9c9c9" }}
            />
            <X style={{ width: "20px", height: "20px", color: "#c9c9c9" }} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`w-full flex items-center ${
        HeaderStyle === 5 ? "justify-between" : "justify-start"
      }`}
      style={{
        borderTopLeftRadius: radius + "px",
        borderTopRightRadius: radius + "px",
        background: `${background ? "#181818" : background}`,
        padding: `${HeaderStyle === 5 ? "0px" : "8px 16px"}`,
      }}
    >
      {HeaderStyle === 5 ? (
        <>
          <div
            className="w-max min-w-20 bg-[#303030] dark:bg-[#303030] rounded-md px-2 py-0.5"
            style={{ marginLeft: "1rem" }}
          >
            <input
              type="text"
              className="outline-none w-full h-full text-sm py-1.5 text-[#CCCCCC] bg-[#303030] dark:bg-[#303030]"
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                background: "#303030",
                color: "#CCCCCC",
              }}
              value={tabName}
              onChange={() => dispatch(setTabName(tabName))}
            />
          </div>
          {renderHeaderStyle(HeaderStyle)}
        </>
      ) : (
        <>
          {renderHeaderStyle(HeaderStyle)}
          <div
            className="w-max min-w-20 bg-[#303030] dark:bg-[#303030] rounded-md px-2 py-0.5"
            style={{ marginLeft: "1rem" }}
          >
            <input
              type="text"
              className="outline-none w-full h-full text-sm py-1.5 text-[#CCCCCC] bg-[#303030] dark:bg-[#303030]"
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                background: "#303030",
                color: "#CCCCCC",
              }}
              value={tabName}
              onChange={() => dispatch(setTabName(tabName))}
            />
          </div>
        </>
      )}
    </div>
  );
};
