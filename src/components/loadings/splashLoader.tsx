import { motion } from "framer-motion";

export const SplashLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        className="text-4xl font-bold text-indigo-600 flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", repeat: Infinity, repeatType: "mirror" }}
      >
        <motion.span
          className="text-[#D94690]"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0 }}
        >
          R
        </motion.span>
        <motion.span
          className="text-[#F0CA44]"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
        >
          P
        </motion.span>
        <motion.span
          className="text-[#5BC6E0]"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
        >
          S
        </motion.span>
      </motion.div>
    </div>
  );
};
