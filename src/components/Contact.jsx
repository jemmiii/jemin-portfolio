import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 flex items-center justify-center relative overflow-hidden"
    >
      {/* Glow Effects */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-[140px] opacity-20"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full blur-[140px] opacity-10"></div>

      <div className="max-w-5xl w-full relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-extrabold text-center mb-6"
        >
          Let's Build Something{" "}
          <span className="text-purple-400">Amazing 🚀</span>
        </motion.h2>

        <p className="text-center text-gray-400 text-xl mb-16">
          Available for Front-End, Full Stack & Software Development Roles
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{
            rotateX: 3,
            rotateY: 3,
          }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02]
          border border-purple-500/20
          backdrop-blur-xl
          rounded-[40px]
          p-10 md:p-14
          shadow-[0_0_60px_rgba(168,85,247,0.15)]"
        >

          <div className="font-mono text-green-400 text-lg mb-8">
            <p>$ whoami</p>
            <p className="text-white mt-2">Jemin Patidar</p>

            <p className="mt-6">$ current_status</p>
            <p className="text-white mt-2">
              Open To Work | Full Stack Developer
            </p>

            <p className="mt-6">$ location</p>
            <p className="text-white mt-2">
              Jaipur, Rajasthan, India
            </p>

            <p className="mt-6">$ email</p>
            <a
              href="mailto:patidarjemin21@gmail.com"
              className="text-purple-400 block mt-2 break-all"
            >
              patidarjemin21@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="mailto:patidarjemin21@gmail.com"
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Hire Me
            </a>

            <a
              href="https://www.linkedin.com/in/jemin-patidar/"
              target="_blank"
              rel="noreferrer"
              className="border border-purple-500 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 transition"
            >
              Let's Connect
            </a>

          </div>

          <div className="flex justify-center gap-10 mt-12 text-4xl">

            <a
              href="https://github.com/jemmiii"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-purple-400 hover:scale-125 transition duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/jemin-patidar/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-purple-400 hover:scale-125 transition duration-300" />
            </a>

            <a href="mailto:patidarjemin21@gmail.com">
              <FaEnvelope className="hover:text-purple-400 hover:scale-125 transition duration-300" />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}