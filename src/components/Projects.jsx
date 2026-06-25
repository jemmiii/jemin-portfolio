import { motion } from "framer-motion";
import {
  FaRobot,
  FaShieldAlt,
  FaCar,
  FaDumbbell,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaShieldAlt size={40} />,
    title: "IoT Intrusion Detection System",
    desc: "Built an ML-powered intrusion detection system using the MU-IoT dataset. Achieved 99.3% detection accuracy using LightGBM and Random Forest models.",
    tech: ["Python", "Machine Learning", "LightGBM", "Random Forest"],
    featured: true,
  },
  {
    icon: <FaRobot size={35} />,
    title: "Multi-Model AI Assistant",
    desc: "Modern AI assistant with real-time conversations, model switching, authentication and chat history management.",
    tech: ["React", "Node.js", "MongoDB", "Groq API"],
  },
  {
    icon: <FaCar size={35} />,
    title: "Car Rental Management System",
    desc: "Full-stack booking platform with vehicle management, user registration and reservation workflow.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    icon: <FaDumbbell size={35} />,
    title: "Gym Management System",
    desc: "Complete gym administration platform with member management and subscription tracking.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    icon: <FaEnvelopeOpenText size={35} />,
    title: "Spam Mail Detection",
    desc: "Machine learning application that classifies emails as spam or ham using NLP techniques.",
    tech: ["Python", "Scikit-Learn", "TF-IDF", "Naive Bayes"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full">

        <h2 className="text-6xl font-bold text-center mb-20">
          Featured <span className="text-purple-400">Projects</span>
        </h2>

        {/* Hero Project */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-[35px] border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-black mb-10 p-10 group"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl group-hover:bg-purple-500/30 transition-all"></div>

          <div className="relative z-10">

            <div className="flex items-center gap-4 text-purple-400 mb-5">
              {projects[0].icon}
              <span className="uppercase tracking-widest text-sm">
                Featured Project
              </span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-5">
              {projects[0].title}
            </h3>

            <p className="text-gray-400 text-lg leading-8 max-w-4xl">
              {projects[0].desc}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {projects[0].tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </motion.div>

        {/* Grid Projects */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.slice(1).map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 transition-all duration-500"></div>

              <div className="relative z-10">

                <div className="text-purple-400 mb-5">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}