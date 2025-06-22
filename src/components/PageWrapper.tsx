// src/components/PageWrapper.tsx
import { motion } from 'framer-motion';

const variants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: { x: -100, opacity: 0, transition: { duration: 0.3 } },
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
