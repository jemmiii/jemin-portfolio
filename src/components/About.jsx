
import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";

const highlights = [
  {
    icon: FaLayerGroup,
    value: "10+",
    label: "Projects Built",
    detail: "Hands-on development",
    color: "purple",
  },
  {
    icon: FaGraduationCap,
    value: "2026",
    label: "B.Tech IT",
    detail: "Graduate",
    color: "cyan",
  },
  {
    icon: FaCode,
    value: "Full Stack",
    label: "Development",
    detail: "Frontend & backend",
    color: "blue",
  },
  {
    icon: FaRocket,
    value: "AI + Data",
    label: "Exploration",
    detail: "Building new solutions",
    color: "pink",
  },
];

const colors = {
  purple: "text-purple-300 bg-purple-500/10 border-purple-400/20",
  cyan: "text-cyan-300 bg-cyan-500/10 border-cyan-400/20",
  blue: "text-blue-300 bg-blue-500/10 border-blue-400/20",
  pink: "text-pink-300 bg-pink-500/10 border-pink-400/20",
};

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#08080d] px-6 py-24 text-white sm:py-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-cyan-600/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >
        {/* Section heading */}
        <div className="mb-14 text-center sm:mb-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-400" />
            Get to know me
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
            About <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">Me.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            A little about my journey, what I build, and what drives me
            as a developer.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* Introduction */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
              WHO AM I?
            </p>

            <h3 className="max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              I turn ideas into{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h3>

            <p className="mt-7 text-base leading-8 text-gray-400 sm:text-lg">
              I'm a B.Tech Information Technology graduate from
              Manipal University Jaipur, interested in building
              practical software applications and solving problems
              through code.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
              My experience with personal projects spans frontend
              interfaces, backend APIs, database-driven platforms,
              and AI-powered applications. I'm also exploring Python
              and data engineering to expand the kinds of systems
              I can build.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Problem Solving", "Full-Stack Development", "Continuous Learning"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-gray-300 sm:text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                <FaCode />
              </span>

              <div>
                <p className="text-sm font-semibold text-white">
                  Focused on building and learning
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Software · Backend · Data
                </p>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-purple-400/30 sm:p-7"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="relative">
                    <div
                      className={`mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border ${colors[item.color]}`}
                    >
                      <Icon size={21} />
                    </div>

                    <h4 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                      {item.value}
                    </h4>

                    <p className="mt-2 text-sm font-semibold text-gray-300">
                      {item.label}
                    </p>

                    <p className="mt-2 text-xs text-gray-500">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
