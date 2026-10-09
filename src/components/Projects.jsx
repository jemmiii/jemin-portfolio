
import { useState } from "react";
import {
  FaRobot,
  FaShieldAlt,
  FaCar,
  FaDumbbell,
  FaEnvelopeOpenText,
  FaHeartbeat,
  FaHardHat,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const projects = [
  {
    icon: FaHeartbeat,
    title: "WatchPlus / PulseWatch",
    subtitle: "API Health Monitoring Platform",
    desc: "Monitor website and API health with scheduled checks, response-time tracking, uptime history, status codes, and error records.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT"],
    color: "purple",
  },
  {
    icon: FaHardHat,
    title: "Construction Management System",
    subtitle: "Full-Stack Management Platform",
    desc: "Manage workers, construction sites, assignments, attendance, and dashboard statistics with authenticated admin access.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    color: "cyan",
  },
  {
    icon: FaDatabase,
    title: "E-commerce Data Engineering",
    subtitle: "ETL & Analytics Pipeline",
    desc: "Ingest, clean, validate, and transform e-commerce data into structured datasets for analytical queries.",
    tech: ["Python", "SQL", "PySpark", "SparkSQL", "ETL"],
    color: "blue",
  },
  {
    icon: FaCloud,
    title: "AWS Data Engineering Pipeline",
    subtitle: "Cloud Data Processing",
    desc: "A cloud-oriented data pipeline featuring AWS storage, structured Parquet data, and automated processing workflows.",
    tech: ["Python", "AWS S3", "PySpark", "Parquet", "Airflow"],
    color: "orange",
  },
  {
    icon: FaShieldAlt,
    title: "IoT Intrusion Detection System",
    subtitle: "Machine Learning · Major Project",
    desc: "Built an intrusion detection system using the MU-IoT dataset, achieving 99.3% detection accuracy with LightGBM and Random Forest.",
    tech: ["Python", "LightGBM", "Random Forest", "Machine Learning"],
    color: "purple",
  },
  {
    icon: FaRobot,
    title: "Multi-Model AI Assistant",
    subtitle: "AI-Powered Web Application",
    desc: "An AI assistant with model switching, conversations, authentication, and chat-history management.",
    tech: ["React", "Node.js", "MongoDB", "Groq API"],
    color: "cyan",
  },
  {
    icon: FaCar,
    title: "Car Rental Management System",
    subtitle: "Booking & Reservation Platform",
    desc: "A booking platform with vehicle management, user registration, and reservation workflows.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    color: "blue",
  },
  {
    icon: FaDumbbell,
    title: "Gym Management System",
    subtitle: "Membership Administration",
    desc: "A gym administration platform for member management and subscription tracking.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    color: "orange",
  },
  {
    icon: FaEnvelopeOpenText,
    title: "Spam Mail Detection",
    subtitle: "NLP Classification Model",
    desc: "A machine-learning application that classifies emails as spam or legitimate messages using text features.",
    tech: ["Python", "Scikit-learn", "TF-IDF", "Naive Bayes"],
    color: "purple",
  },
];

const themes = {
  purple: {
    icon: "text-purple-300 bg-purple-500/10 border-purple-400/20",
    glow: "group-hover:border-purple-400/40",
    pill: "border-purple-400/20 bg-purple-500/10 text-purple-200",
    light: "text-purple-300",
  },
  cyan: {
    icon: "text-cyan-300 bg-cyan-500/10 border-cyan-400/20",
    glow: "group-hover:border-cyan-400/40",
    pill: "border-cyan-400/20 bg-cyan-500/10 text-cyan-200",
    light: "text-cyan-300",
  },
  blue: {
    icon: "text-blue-300 bg-blue-500/10 border-blue-400/20",
    glow: "group-hover:border-blue-400/40",
    pill: "border-blue-400/20 bg-blue-500/10 text-blue-200",
    light: "text-blue-300",
  },
  orange: {
    icon: "text-orange-300 bg-orange-500/10 border-orange-400/20",
    glow: "group-hover:border-orange-400/40",
    pill: "border-orange-400/20 bg-orange-500/10 text-orange-200",
    light: "text-orange-300",
  },
};

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  const theme = themes[project.color];

  return (
    <article
      className={`group relative flex h-[390px] w-[290px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#101019] p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-[#151522] sm:h-[410px] sm:w-[340px] sm:p-7 ${theme.glow}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

      <div className="relative z-10 flex items-start justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${theme.icon}`}
        >
          <Icon size={26} />
        </div>

        <span className="font-mono text-xs tracking-widest text-white/30">
          {String(index + 1).padStart(2, "0")} / 09
        </span>
      </div>

      <div className="relative z-10 mt-7">
        <p className={`mb-3 text-[10px] font-bold uppercase tracking-[0.18em] ${theme.light}`}>
          {project.subtitle}
        </p>

        <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
          {project.title}
        </h3>
      </div>

      <p className="relative z-10 mt-4 flex-1 overflow-hidden text-sm leading-6 text-gray-400">
        {project.desc}
      </p>

      <div className="relative z-10 mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className={`rounded-lg border px-2.5 py-1.5 text-[10px] font-medium sm:text-xs ${theme.pill}`}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-5 flex items-center gap-2 border-t border-white/[0.08] pt-4">
        <span className={`h-1.5 w-1.5 rounded-full ${theme.light.replace("text-", "bg-")}`} />
        <span className="text-xs text-white/40">Selected Project</span>
      </div>
    </article>
  );
}

export default function Projects() {
  const [paused, setPaused] = useState(false);

  // Duplicate cards create a seamless continuous carousel.
  const carouselProjects = [...projects, ...projects];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#08080d] py-24 text-white sm:py-28"
    >
      <style>{`
@keyframes projects-move-right {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

        .projects-track {
          width: max-content;
          animation: projects-move-right 65s linear infinite;
          will-change: transform;
        }

        .projects-track.is-paused {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .projects-track {
            animation: none;
            transform: none;
          }
        }
      `}</style>

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-700/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-700/10 blur-[120px]" />

      <div className="relative mx-auto mb-14 max-w-7xl px-5 text-center sm:mb-16 sm:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
          <span className="h-2 w-2 rounded-full bg-purple-400" />
          My Work
        </div>

        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Applications, backend systems, AI experiments, and data pipelines
          built through hands-on development.
        </p>

        <div className="mt-7 flex items-center justify-center gap-3 text-xs text-white/40">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            09 Projects
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            Full Stack · AI · Data
          </span>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setPaused(false);
          }
        }}
      >
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-gradient-to-r from-[#08080d] to-transparent sm:w-20 lg:w-32" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-[#08080d] to-transparent sm:w-20 lg:w-32" />

        <div
          className={`projects-track flex gap-5 px-3 sm:gap-6 sm:px-5 ${paused ? "is-paused" : ""}`}
        >
          {carouselProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index % projects.length}
            />
          ))}
        </div>
      </div>

      <div className="mt-9 flex items-center justify-center gap-3 text-xs tracking-wide text-white/35">
        <span>←</span>
        
        <span>→</span>
      </div>
    </section>
  );
}
