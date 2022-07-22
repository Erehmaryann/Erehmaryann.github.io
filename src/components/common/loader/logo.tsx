import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { svgVariants, pathOneVariants, pathTwoVariants } from "./variants";

const Logo = () => {
  return (
    <AnimatePresence>
      <motion.div className="bg-[rgba(255,255,255,0.1)] fixed top-0 left-0 flex items-center justify-center w-full h-full">
        <motion.svg
          width="138"
          height="149"
          viewBox="0 0 138 149"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.path
            d="M64.5003 1.01265V39.0126C60.5006 39.0126 43.5 42.5127 41 58.5127C38.6 76.1127 50 83.846 56 85.5127C53.8334 89.6794 45.3003 97.6127 28.5003 96.0127C7.5003 94.0127 -7.4997 68.0126 9.5003 34.0126C23.1003 6.81264 51.8336 0.679314 64.5003 1.01265Z"
            fill="black"
            variants={pathOneVariants}
          />
          <motion.path
            d="M75.5 48.5127V10.5127C88 10.5127 100.5 14.0127 108 19.0127C134 35.0127 137.5 60.0127 137.5 68.0127C136 50.5127 121.5 40.5127 108 39.5127C94.5 38.5127 84.5 50.5127 84 50.5127C80 48.1127 76.6667 48.1794 75.5 48.5127Z"
            fill="black"
            variants={pathTwoVariants}
          />
          <motion.path
            d="M24 110.513C5.6 106.113 1 87.0127 1 78.0127C1 88.0127 4 104.513 15 118.513C30.6 138.913 53.5 142.346 63 141.513V103.013C59.5 104.013 56.5 102.346 54.5 101.013C45.5 110.513 38 113.513 24 110.513Z"
            fill="black"
            variants={pathOneVariants}
          />
          <motion.path
            d="M74.5 147.513V109.513C77 110.513 94 109.513 98 90.5127C100.8 73.7127 89.1667 65.5127 83 63.5127C86.6667 58.1794 98.2 48.7127 115 53.5127C131.8 58.3127 136.667 75.1794 137 83.0127V147.513H74.5Z"
            fill="black"
            variants={pathTwoVariants}
          />
          <motion.path
            d="M64.5003 1.01265V39.0126C60.5006 39.0126 43.5 42.5127 41 58.5127C38.6 76.1127 50 83.846 56 85.5127C53.8334 89.6794 45.3003 97.6127 28.5003 96.0127C7.5003 94.0127 -7.4997 68.0126 9.5003 34.0126C23.1003 6.81264 51.8336 0.679314 64.5003 1.01265Z"
            stroke="black"
            variants={pathOneVariants}
          />
          <motion.path
            d="M75.5 48.5127V10.5127C88 10.5127 100.5 14.0127 108 19.0127C134 35.0127 137.5 60.0127 137.5 68.0127C136 50.5127 121.5 40.5127 108 39.5127C94.5 38.5127 84.5 50.5127 84 50.5127C80 48.1127 76.6667 48.1794 75.5 48.5127Z"
            stroke="black"
            variants={pathTwoVariants}
          />
          <motion.path
            d="M24 110.513C5.6 106.113 1 87.0127 1 78.0127C1 88.0127 4 104.513 15 118.513C30.6 138.913 53.5 142.346 63 141.513V103.013C59.5 104.013 56.5 102.346 54.5 101.013C45.5 110.513 38 113.513 24 110.513Z"
            stroke="black"
            variants={pathOneVariants}
          />
          <motion.path
            d="M74.5 147.513V109.513C77 110.513 94 109.513 98 90.5127C100.8 73.7127 89.1667 65.5127 83 63.5127C86.6667 58.1794 98.2 48.7127 115 53.5127C131.8 58.3127 136.667 75.1794 137 83.0127V147.513H74.5Z"
            stroke="black"
            variants={pathTwoVariants}
          />
        </motion.svg>
      </motion.div>
    </AnimatePresence>
  );
};

export default Logo;
