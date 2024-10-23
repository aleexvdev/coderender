"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RootState } from "@/redux/store";
import {
  ExportFormat,
  ExportScale,
  setExportFormat,
  setExportScale,
} from "@/redux/features/exportSlice";
import { useDispatch, useSelector } from "react-redux";
import { ImageDown } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTabSwitcher } from "@/components/custom/AnimatedTabSwitcher";

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const formatsOptions = [
  { id: 1, name: "png", value: "png" },
  { id: 2, name: "svg", value: "svg" },
  { id: 3, name: "jpeg", value: "jpeg" },
];

const scalesOptions = [
  { id: 1, name: "1x", value: "1" },
  { id: 2, name: "2x", value: "2" },
  { id: 3, name: "3x", value: "3" },
];

export const ExportOption = () => {
  const { format, scale } = useSelector((state: RootState) => state.export);
  const dispatch = useDispatch();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div variants={buttonVariants}>
          <Button variant={"export"}>
            <ImageDown className="mr-1 h-5 w-5" />
            Exportar
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent aria-describedby="export-options-description">
        <DialogHeader>
          <DialogTitle className="text-xl lg:text-2xl font-semibold text-black dark:text-white">
            Exportar
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <p className="font-medium text-lg md:text-xl text-muted-foreground">
            Formato
          </p>
          <AnimatedTabSwitcher
            options={formatsOptions}
            activeOption={format}
            onChange={(value) => {
              dispatch(setExportFormat(value as ExportFormat));
            }}
            className="mt-4"
          />
          <p className="font-medium text-lg md:text-xl text-muted-foreground w-full text-left mt-4">
            Escala
          </p>
          <AnimatedTabSwitcher
            options={scalesOptions}
            activeOption={scale}
            onChange={(value) => {
              dispatch(setExportScale(value as ExportScale));
            }}
            className="mt-4"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
