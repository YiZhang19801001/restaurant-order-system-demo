import PageWrapper from '../../components/PageWrapper';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Success = () => {
  const variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <PageWrapper>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-10"
      >
        <h1 className="text-blue-600 text-3xl font-bold text-center">
            <CheckCircle className="inline-block mr-2" /> Order Success Page
          </h1>
      </motion.div>
    </PageWrapper>
  );
};

export default Success;
