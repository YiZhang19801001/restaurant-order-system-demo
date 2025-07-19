// src/pages/Home/Home.tsx
import { Home as HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center p-8"
    >
      <h1 className="text-3xl font-bold text-blue-600"><HomeIcon className="inline-block mr-2" /> Home Page</h1>
      <p className="mt-4 text-gray-600">
        Welcome to the Restaurant Order System
      </p>
    </motion.div>
  );
};

export default Home;
