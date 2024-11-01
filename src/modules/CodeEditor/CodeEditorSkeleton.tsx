"use client";

import { motion } from 'framer-motion';

export const CodeEditorSkeleton = () => {

  const slideAnimation = {
    initial: { backgroundPosition: '200% 0' },
    animate: {
      backgroundPosition: '-200% 0',
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  const backgroundGradient = 'linear-gradient(90deg, #333333 25%, #444444 50%, #333333 75%)';

  return (
    <div className="h-max p-8 rounded-lg" style={{ width: "550px",  background: "#232323" }}>
      <motion.div 
        className="w-full h-full rounded-lg"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{  background: "#232323" }}
      >
        <div className="w-full h-16" />
        <motion.div 
          className="w-full h-max bg-[#0F0F10] rounded-b-lg"
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{  background: "#0F0F10", padding: "20px" }}
        >
          <motion.div 
            className="w-full h-4 rounded-md mb-3"
            style={{ backgroundImage: backgroundGradient, backgroundSize: '200% 100%', marginBottom: "12px" }}
            variants={slideAnimation}
            initial="initial"
            animate="animate"
          />
          <motion.div 
            className="w-full h-4 rounded-md mb-3"
            style={{ backgroundImage: backgroundGradient, backgroundSize: '200% 100%', marginBottom: "12px", width: "100%" }}
            variants={slideAnimation}
            initial="initial"
            animate="animate"
          />
          <motion.div 
            className="w-[85%] h-4 rounded-md mb-8"
            style={{ backgroundImage: backgroundGradient, backgroundSize: '200% 100%', marginBottom: "32px", width: "85%" }}
            variants={slideAnimation}
            initial="initial"
            animate="animate"
          />
          <motion.div 
            className="w-[85%] h-4 rounded-md mb-3"
            style={{ backgroundImage: backgroundGradient, backgroundSize: '200% 100%', marginBottom: "12px", width: "85%" }}
            variants={slideAnimation}
            initial="initial"
            animate="animate"
          />
          <motion.div 
            className="w-full h-4 rounded-md mb-8"
            style={{ backgroundImage: backgroundGradient, backgroundSize: '200% 100%', marginBottom: "32px", width: "100%" }}
            variants={slideAnimation}
            initial="initial"
            animate="animate"
          />
          <motion.div 
            className="w-[80%] h-4 rounded-md mb-3"
            style={{ backgroundImage: backgroundGradient, backgroundSize: '200% 100%', marginBottom: "12px", width: "80%" }}
            variants={slideAnimation}
            initial="initial"
            animate="animate"
          />
          <motion.div 
            className="w-[65%] h-4 rounded-md mb-3"
            style={{ backgroundImage: backgroundGradient, backgroundSize: '200% 100%', marginBottom: "12px", width: "65%" }}
            variants={slideAnimation}
            initial="initial"
            animate="animate"
          />
          <motion.div 
            className="w-[50%] h-4 rounded-md"
            style={{ backgroundImage: backgroundGradient, backgroundSize: '200% 100%', width: "50%" }}
            variants={slideAnimation}
            initial="initial"
            animate="animate"
          />
        </motion.div>       
      </motion.div>
    </div>
  )
}
