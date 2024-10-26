"use client";

import { languageNames } from "@/lib/languages/language-names";
import { setLanguage } from "@/redux/features/editorSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { LanguageName } from "@uiw/codemirror-extensions-langs";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CaretSortIcon } from "@radix-ui/react-icons";

export const LanguageSelector = () => {

  const [open, setOpen] = useState<boolean>(false);
  const { language } = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();

  const frameworkNames: { value: string; label: string }[] = (
    Object.keys(languageNames) as LanguageName[]
  ).map((key) => ({
    value: key,
    label: languageNames[key],
  }));

  const handleLanguageChange = (value: string) => {
    dispatch(setLanguage(value));
    setOpen(false);
  };

  return (
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="languageLabel"
        className="h-8 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-base md:text-base"
        style={{
          width: "60%",
          paddingLeft: "18px",
        }}
      >
        Language
      </label>
      <div className="w-full flex items-center justify-center">
        <div
          role="group"
          id="languageLabel"
          className="flex flex-col gap-1 flex-1 h-full"
        >
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button className="w-full h-9 flex items-center justify-between px-2 py-1.5 bg-[#cdcbcb] dark:bg-[#272727] rounded-lg">
                <span className="font-medium text-sm md:text-base px-2" style={{ textTransform: "capitalize" }}>{language}</span>
                <CaretSortIcon className="h-4 w-4 opacity-50" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput
                  placeholder="Search framework..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworkNames.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={handleLanguageChange}
                      >
                        {framework.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            language === framework.value
                              ? "block"
                              : "hidden"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};
