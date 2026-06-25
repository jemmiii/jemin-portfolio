import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          <div className="text-center">

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-8"
            >
              <span className="text-white">Jemin</span>{" "}
              <span className="text-purple-400">Patidar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .3 }}
              className="font-mono text-green-400 mb-8"
            >
              Initializing Portfolio...
            </motion.p>

            <div className="w-72 h-2 bg-white/10 rounded-full overflow-hidden mx-auto">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
              />

            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="mt-8 text-gray-400"
            >
              Welcome Recruiter 👋
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}