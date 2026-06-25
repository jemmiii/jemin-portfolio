import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -150, 120, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px]
        bg-purple-600/20 rounded-full blur-[140px]"
      />

      {/* Blue Blob */}
      <motion.div
        animate={{
          x: [0, -250, 120, 0],
          y: [0, 180, -80, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[550px] h-[550px]
        bg-cyan-500/20 rounded-full blur-[160px]"
      />

      {/* Pink Blob */}
      <motion.div
        animate={{
          x: [0, 120, -180, 0],
          y: [0, 100, -150, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[420px] h-[420px]
        bg-fuchsia-500/10 rounded-full blur-[140px]"
      />

    </div>
  );
}