import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl w-full">

        <h2 className="text-6xl font-bold text-center mb-16">
          Tech <span className="text-purple-400">Terminal</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0d1117] border border-purple-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)]"
        >

          {/* Terminal Header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-[#161b22]">

            <div className="w-3 h-3 rounded-full bg-red-500"></div>

            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span className="ml-4 text-gray-400 text-sm">
              jemin@portfolio:~/skills
            </span>

          </div>

          {/* Terminal Body */}
          <div className="p-8 md:p-12 font-mono text-lg">

            <p className="text-green-400">
              $ whoami
            </p>

            <p className="text-white mt-2">
              Front-End & Full Stack Developer
            </p>

            <br />

            <p className="text-green-400">
              $ stack --frontend
            </p>

            <div className="mt-3 text-gray-300 leading-10">
              ├── React.js <br />
              ├── JavaScript (ES6+) <br />
              ├── Tailwind CSS <br />
              ├── HTML5 <br />
              └── CSS3
            </div>

            <br />

            <p className="text-green-400">
              $ stack --backend
            </p>

            <div className="mt-3 text-gray-300 leading-10">
              ├── Node.js <br />
              ├── Express.js <br />
              └── REST APIs
            </div>

            <br />

            <p className="text-green-400">
              $ stack --database
            </p>

            <div className="mt-3 text-gray-300 leading-10">
              ├── MongoDB <br />
              ├── MySQL <br />
              └── SQL
            </div>

            <br />

            <p className="text-green-400">
              $ stack --tools
            </p>

            <div className="mt-3 text-gray-300 leading-10">
              ├── Git <br />
              ├── GitHub <br />
              ├── Postman <br />
              └── VS Code
            </div>

            <br />

            <p className="text-green-400">
              $ current_focus
            </p>

            <p className="text-purple-400 mt-2">
              Building AI-powered web applications with React & Node.js
            </p>

            <br />

            <div className="flex items-center">

              <span className="text-green-400">
                jemin@portfolio:~$
              </span>

              <span className="ml-2 w-3 h-6 bg-purple-400 animate-pulse"></span>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}