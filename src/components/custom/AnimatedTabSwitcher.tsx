"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TabOption {
  id: number | string;
  name: string;
  value: string | number | boolean;
}

interface AnimatedTabSwitcherProps {
  options: TabOption[];
  activeOption: string | number | boolean;
  onChange: (value: string | number | boolean) => void;
  className?: string;
}

export const AnimatedTabSwitcher = ({
  options,
  activeOption,
  onChange,
  className = ''
}: AnimatedTabSwitcherProps) => {
  const selectedIndex = options.findIndex(
    (option) => option.value === activeOption
  );

  const sliderVariants = {
    slide: (index: number) => ({
      x: `${index * 100}%`,
    }),
  };

  const width = `${100 / options.length}%`;

  return (
    <div className={`w-full rounded-lg ${className}`}>
      <div className="relative w-full flex flex-1 h-full overflow-hidden">
        {options.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center"
            style={{ width }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#d6d6d6] dark:bg-[#404040] rounded-lg py-1"
              style={{ width }}
              custom={selectedIndex}
              initial="slide"
              animate="slide"
              variants={sliderVariants}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
            <button
              className="relative z-10 w-full h-full flex items-center justify-center py-2 cursor-pointer"
              onClick={() => onChange(item.value)}
            >
              <span 
                className={`w-full text-sm md:text-base text-center transition-colors 
                  ${activeOption === item.value 
                    ? 'text-gray-900 dark:text-gray-100 font-semibold' 
                    : 'text-gray-600 dark:text-gray-400 font-medium'
                  }`}
              >
                {item.name}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};