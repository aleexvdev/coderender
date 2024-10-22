import React from "react";
import { Theme } from "../Theme";

export const Header = () => {
  return (
    <header className="w-full py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800">
        Cod
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
          eRe
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
          der
        </span>
      </div>
      <Theme />
    </header>
  );
};
