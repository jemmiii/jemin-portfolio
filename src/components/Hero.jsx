import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-[140px] opacity-30"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full blur-[140px] opacity-20"></div>

      <div className="relative z-10 text-center max-w-5xl">

        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-8"
        >
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          <span className="text-green-400 font-medium">
            Available For Work
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-purple-400 text-lg mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-tight"
        >
          Jemin Patidar
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-4xl text-gray-300 mt-6"
        >
          Front-End & Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto"
        >
          Building modern web applications, AI-powered solutions,
          scalable digital experiences and beautiful user interfaces.
        </motion.p>

        <div className="flex justify-center gap-5 mt-10 flex-wrap">

          <a href="#projects">
            <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition shadow-[0_0_25px_rgba(168,85,247,0.6)]">
              View Projects
            </button>
          </a>

          <a
            href="https://drive.google.com/file/d/11Bl6k6NV6xK2MPxrgPR0ghoSy96I5xfe/view?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
          >
            <button className="border border-purple-500 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 transition">
              Download Resume
            </button>
          </a>

        </div>

        {/* Social Icons */}

        <div className="flex justify-center gap-8 mt-12 text-3xl">

          <a
            href="https://github.com/jemmiii"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="cursor-pointer hover:text-purple-400 transition hover:scale-125" />
          </a>

          <a
            href="https://www.linkedin.com/in/jemin-patidar/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="cursor-pointer hover:text-purple-400 transition hover:scale-125" />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=patidarjemin21@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope className="cursor-pointer hover:text-purple-400 transition hover:scale-125" />
          </a>

        </div>

      </div>
    </section>
  );
}