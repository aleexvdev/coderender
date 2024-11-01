"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExportOption } from "@/modules/Options/ExportOption";
import { SettingsOption } from "@/modules/Options/SettingsOption";
import { Button } from "../ui/button";
import { Keyboard } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export const Header = () => {

  

  return (
    <motion.header
      className="w-full px-2 md:px-4 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full">
        <div className="w-full h-16 flex items-center justify-between">
          <motion.div
            className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 select-none"
            whileHover={{ scale: 1.02 }}
          >
            Cod
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
              eRen
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
              der
            </span>
          </motion.div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button className="px-4 py-2 rounded-md focus:outline-none hover:bg-[#2e2e2e] hidden md:flex" variant="outline">
              <Keyboard className="mr-1 h-5 w-5" /> Keywords
            </Button>
            <ExportOption />
            <SettingsOption />
          </div>
        </div>
      </div>
    </motion.header>
  );
};