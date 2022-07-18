import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Logo = () => {
  return (
    <AnimatePresence>
      <motion.div className="fixed top-0 left-0 flex items-center justify-center w-full h-full">
        <motion.img
          src="/logo-light.png"
          initial={{ rotate: -360 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 2, delay: 2, ease: "easeInOut" }}
          exit={{ rotate: -180 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Logo;
