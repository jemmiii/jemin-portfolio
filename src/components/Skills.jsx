
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaPython,
  FaCloud,
  FaLaptopCode,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive user interfaces",
    icon: FaCode,
    accent: "purple",
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & APIs",
    description: "Server-side logic and application services",
    icon: FaServer,
    accent: "cyan",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "API Integration",
    ],
  },
  {
    title: "Databases",
    description: "Data storage, querying and modeling",
    icon: FaDatabase,
    accent: "blue",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "SQL",
      "Data Modeling",
    ],
  },
  {
    title: "Python & Data Engineering",
    description: "Data processing and analytical pipelines",
    icon: FaPython,
    accent: "orange",
    skills: [
      "Python",
      "ETL",
      "Data Cleaning",
      "Data Transformation",
      "PySpark",
      "SparkSQL",
    ],
  },
  {
    title: "Tools & Cloud",
    description: "Development workflow and infrastructure",
    icon: FaCloud,
    accent: "purple",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "VS Code",
      "AWS S3",
    ],
  },
  {
    title: "Computer Science",
    description: "Core concepts for reliable software",
    icon: FaLaptopCode,
    accent: "cyan",
    skills: [
      "OOP",
      "Data Structures & Algorithms",
      "DBMS",
      "SDLC",
      "Testing",
      "Debugging",
    ],
  },
];

const accentStyles = {
  purple: {
    icon: "bg-purple-500/10 text-purple-300 border-purple-400/20",
    glow: "group-hover:border-purple-400/30",
    line: "from-purple-400 to-fuchsia-400",
    chip: "border-purple-400/15 bg-purple-500/[0.07] text-purple-200",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-300 border-cyan-400/20",
    glow: "group-hover:border-cyan-400/30",
    line: "from-cyan-400 to-blue-400",
    chip: "border-cyan-400/15 bg-cyan-500/[0.07] text-cyan-200",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-300 border-blue-400/20",
    glow: "group-hover:border-blue-400/30",
    line: "from-blue-400 to-indigo-400",
    chip: "border-blue-400/15 bg-blue-500/[0.07] text-blue-200",
  },
  orange: {
    icon: "bg-orange-500/10 text-orange-300 border-orange-400/20",
    glow: "group-hover:border-orange-400/30",
    line: "from-orange-400 to-amber-300",
    chip: "border-orange-400/15 bg-orange-500/[0.07] text-orange-200",
  },
};

function SkillCard({ group, index }) {
  const Icon = group.icon;
  const style = accentStyles[group.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0c12] p-6 transition-colors duration-300 sm:p-7 ${style.glow}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${style.line} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div className="mb-6 flex items-start justify-between gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${style.icon}`}
        >
          <Icon size={21} />
        </div>

        <span className="font-mono text-xs text-white/25">
          0{index + 1}
        </span>
      </div>

      <h3 className="text-xl font-bold tracking-tight text-white">
        {group.title}
      </h3>

      <p className="mt-2 min-h-10 text-sm leading-6 text-gray-500">
        {group.description}
      </p>

      <div className="my-6 h-px bg-white/[0.07]" />

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${style.chip}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#08080d] px-5 py-24 text-white sm:px-8 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-80 w-80 rounded-full bg-purple-700/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-cyan-700/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-2 sm:justify-start">
            <span className="h-px w-8 bg-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
              Technical Expertise
            </span>
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-center text-4xl font-black tracking-tight sm:text-left sm:text-6xl">
                My Tech{" "}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                  Stack.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-gray-400 sm:mx-0 sm:text-left sm:text-base">
                Technologies and engineering concepts I use to build
                applications, backend systems, and data solutions.
              </p>
            </div>

            <div className="mx-auto inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 md:mx-0">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-sm text-gray-300">
                Core technologies
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard
              key={group.title}
              group={group}
              index={index}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-gray-600">
          Continuously learning. Building through practice.
        </p>
      </div>
    </section>
  );
}
