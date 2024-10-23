"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { AnimatedTabSwitcher } from "@/components/custom/AnimatedTabSwitcher";
import { DialogDescription } from "@radix-ui/react-dialog";

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const themesOptions = [
  { id: 1, name: "Oscuro", value: "dark" },
  { id: 2, name: "Claro", value: "light" },
  { id: 3, name: "Sistema", value: "system" },
];

export const SettingsOption = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div variants={buttonVariants}>
          <Button variant="ghost">
            <Menu className="w-5 h-5 text-foreground" />
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent aria-describedby="settings-options-description">
        <DialogHeader>
          <DialogTitle className="text-xl lg:text-2xl font-semibold text-black dark:text-white">
            Configuraciones
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <p className="font-medium text-lg md:text-xl text-muted-foreground">Tema</p>
          <AnimatedTabSwitcher
            options={themesOptions}
            activeOption={theme as string}
            onChange={setTheme}
            className="mt-4"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
