export const svgVariants = {
  initial: {
    rotate: -360,
  },
  animate: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    rotate: -180,
  },
};

export const pathOneVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const pathTwoVariants = {
  initial: {
    opacity: 1,
    pathLength: 1,
  },
  animate: {
    opacity: 0,
    pathLength: 0,
    transition: {
      duration: 2,
      delay: 2,
      ease: "easeInOut",
    },
  },
};
