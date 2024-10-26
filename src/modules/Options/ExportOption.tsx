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
import { Download, ImageDown } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTabSwitcher } from "@/components/custom/AnimatedTabSwitcher";
import * as htmlToImage from "html-to-image";

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

  const handleExport = async () => {
    const node = document.getElementById("code-editor");
    if (!node) return;

    try {
      let dataUrl;
      switch (format) {
        case "png":
          dataUrl = await htmlToImage.toPng(node, {
            pixelRatio: parseInt(scale),
          });
          break;
        case "jpeg":
          dataUrl = await htmlToImage.toJpeg(node, {
            pixelRatio: parseInt(scale),
          });
          break;
        case "svg":
          dataUrl = await htmlToImage.toSvg(node, {
            pixelRatio: parseInt(scale),
          });
          break;
        default:
          throw new Error("Unsupported format");
      }

      const link = document.createElement("a");
      link.download = `snapcode-export.${format}`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Export failed:", error);
    }
  };

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
            className="mt-4 h-max p-1 bg-[#EEEEEE] dark:bg-[#272727]"
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
            className="mt-4 h-max p-1 bg-[#EEEEEE] dark:bg-[#272727]"
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <button
            className="w-full flex items-center justify-center gap-x-2 text-white bg-blue-800 hover:bg-blue-700 transition-colors rounded-lg py-2"
            onClick={handleExport}
          >
            <Download className="w-5 h-5" />
            <span className="text-base font-medium">Descargar</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
