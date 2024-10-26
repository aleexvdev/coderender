"use client";

import { LanguageSelector, ThemeSelector, LineNumberSelector, TabNameSelector } from "./layout";


export const EditorModule = () => {
  return (
    <>
      <LanguageSelector />
      <ThemeSelector />
      <LineNumberSelector />
      <TabNameSelector />
    </>
  )
}
