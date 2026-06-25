import { motion } from "framer-motion";
import {
  FaGoogle,
  FaAws,
  FaCertificate,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";

const certs = [
  {
    icon: <FaGoogle size={32} />,
    title: "Google Data Analytics",
    provider: "Google Professional Certificate",
  },
  {
    icon: <FaCertificate size={32} />,
    title: "IBM Front-End Developer",
    provider: "IBM",
  },
  {
    icon: <FaAws size={32} />,
    title: "AWS Cloud Technical Essentials",
    provider: "Amazon Web Services",
  },
  {
    icon: <FaCertificate size={32} />,
    title: "Machine Learning Foundations",
    provider: "ML Program",
  },
  {
    icon: <FaCertificate size={32} />,
    title: "API Design & Web Services",
    provider: "Web Services",
  },
];

const simulations = [
  {
    icon: <FaChartLine size={28} />,
    title: "Tata Group",
    desc: "Business Analytics Simulation",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "JP Morgan Chase",
    desc: "Data Visualization Experience",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight break-words px-2">
  Achievement <span className="text-purple-400">Vault</span>
</h2>

        <p className="text-center text-gray-500 mb-20">
          Certifications • Industry Simulations • Continuous Learning
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {certs.slice(0, 3).map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.04,
              }}
              className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-900/10 to-black p-8 group"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-purple-500/10 transition duration-500" />

              <div className="relative z-10">
                <div className="text-purple-400 mb-5">
                  {cert.icon}
                </div>

                <span className="text-xs uppercase tracking-widest text-green-400">
                  VERIFIED
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {cert.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {cert.provider}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {certs.slice(3).map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="text-purple-400 mb-4">
                {cert.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {cert.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {cert.provider}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-4xl font-bold mb-10 text-center">
            Industry <span className="text-purple-400">Experience</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {simulations.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                }}
                className="rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-900/10 to-transparent p-8"
              >
                <div className="flex items-center gap-4 mb-5 text-purple-400">
                  {item.icon}
                  <FaBriefcase />
                </div>

                <h4 className="text-2xl font-bold">
                  {item.title}
                </h4>

                <p className="text-gray-400 mt-3">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}