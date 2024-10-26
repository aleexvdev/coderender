"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { customThemes } from "@/lib/themes";
import { setTheme } from "@/redux/features/editorSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export const ThemeSelector = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { theme } = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();

  const THEMES = Object.keys(customThemes);
  const themeOptions: { value: string; label: string }[] = THEMES.map(
    (theme) => ({
      value: theme,
      label: theme,
    })
  );

  const handleThemeChange = (value: string) => {
    dispatch(setTheme(value));
    setOpen(false);
  };

  return (
    <div className="relative w-full pt-2 pb-2 gap-x-2 flex items-center justify-between mb-2">
      <label
        htmlFor="themeLabel"
        className="h-8 inline-flex relative pl-4 items-center select-none hyphens-auto break-words text-muted-foreground text-base md:text-base"
        style={{
          width: "60%",
          paddingLeft: "18px",
        }}
      >
        Theme
      </label>
      <div className="w-full flex items-center justify-center">
        <div
          role="group"
          id="themeLabel"
          className="flex flex-col gap-1 flex-1 h-full"
        >
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button className="w-full h-9 flex items-center justify-between px-2 py-1.5 bg-[#cdcbcb] dark:bg-[#272727] rounded-lg">
                <span
                  className="font-medium text-sm md:text-base px-2"
                  style={{ textTransform: "capitalize" }}
                >
                  {theme}
                </span>
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
                    {themeOptions.map((item) => (
                      <CommandItem
                        key={item.value}
                        value={item.value}
                        onSelect={handleThemeChange}
                      >
                        {item.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            theme === item.value ? "block" : "hidden"
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
