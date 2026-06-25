import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
          About <span className="text-purple-400">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <div className="text-purple-400 text-lg mb-4">
              WHO AM I?
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
              I don't just write code.
              <br />
              I build digital experiences.
            </h3>

            <p className="text-gray-400 text-base sm:text-lg mt-8 leading-8">
              From AI-powered applications to full-stack web platforms,
              I enjoy transforming ideas into products that people can
              actually use.
            </p>

            <p className="text-gray-400 text-base sm:text-lg mt-6 leading-8">
              My journey started with curiosity and turned into an
              obsession for creating fast, modern and scalable web
              applications using React, JavaScript, Node.js and modern
              development tools.
            </p>

          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 transition-all"
            >
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-400">
                10+
              </h3>

              <p className="mt-4 text-gray-400">
                Projects Built
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 transition-all"
            >
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-400">
                2026
              </h3>

              <p className="mt-4 text-gray-400">
                Graduate
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 transition-all"
            >
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-400">
                React
              </h3>

              <p className="mt-4 text-gray-400">
                Front-End Focus
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 transition-all"
            >
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-400">
                AI
              </h3>

              <p className="mt-4 text-gray-400">
                Innovation Driven
              </p>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}