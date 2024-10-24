"use client";

import React from "react";
import { OpacitySelector, PaddingSelector, BackgroundSelector, RadiusSelector } from "./layout";

export const FramerModule = () => {
  return (
    <>
      <PaddingSelector />
      <RadiusSelector />
      <BackgroundSelector />
      <OpacitySelector />
    </>
  );
};
