
import React from "react";
import {
  FaGoogle,
  FaAws,
  FaCertificate,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";

const certifications = [
  {
    title: "Google Data Analytics",
    provider: "Google Professional Certificate",
    category: "Data Analytics",
    Icon: FaGoogle,
  },
  {
    title: "IBM Front-End Developer",
    provider: "IBM",
    category: "Frontend Development",
    Icon: FaCertificate,
  },
  {
    title: "AWS Cloud Technical Essentials",
    provider: "Amazon Web Services",
    category: "Cloud Computing",
    Icon: FaAws,
  },
  {
    title: "Machine Learning Foundations",
    provider: "ML Program",
    category: "Machine Learning",
    Icon: FaChartLine,
  },
  {
    title: "API Design & Web Services",
    provider: "Web Services",
    category: "Backend Development",
    Icon: FaBriefcase,
  },
];

const simulations = [
  {
    title: "Business Analytics Simulation",
    provider: "Tata Group",
    category: "Business Analytics",
    Icon: FaChartLine,
  },
  {
    title: "Data Visualization Experience",
    provider: "JP Morgan Chase",
    category: "Data Visualization",
    Icon: FaBriefcase,
  },
];

function CertificateCard({ item, index, simulation = false }) {
  const Icon = item.Icon;

  return (
    <article className="cert-card">
      <div className="cert-card-top">
        <div className="cert-icon">
          <Icon size={25} />
        </div>

        <span className="cert-number">
          {simulation ? "SIM" : "CERT"}_{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <span className="cert-category">{item.category}</span>

      <h3>{item.title}</h3>

      <p className="cert-provider">{item.provider}</p>

      <div className="cert-card-footer">
        <span>{simulation ? "Industry Simulation" : "Certification"}</span>
        <FaCertificate size={14} />
      </div>
    </article>
  );
}

function InfiniteRow({ items, simulation = false }) {
  return (
    <div className="cert-marquee">
      <div
        className={
          simulation
            ? "cert-track cert-track-sim"
            : "cert-track cert-track-main"
        }
      >
        {[0, 1].map((copy) => (
          <div
            className="cert-group"
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {items.map((item, index) => (
              <CertificateCard
                key={`${copy}-${item.title}`}
                item={item}
                index={index}
                simulation={simulation}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="cert-section">
      <style>{`
        .cert-section {
          position: relative;
          overflow: hidden;
          padding: 90px 0;
          background: #08080d;
          color: #fff;
          isolation: isolate;
        }

        .cert-section::before,
        .cert-section::after {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.16;
          pointer-events: none;
          z-index: -1;
        }

        .cert-section::before {
          background: #8b5cf6;
          top: 80px;
          left: -180px;
        }

        .cert-section::after {
          background: #06b6d4;
          right: -180px;
          bottom: 60px;
        }

        .cert-container {
          width: 100%;
          max-width: 1250px;
          margin: 0 auto;
        }

        .cert-heading {
          text-align: center;
          padding: 0 20px;
          margin-bottom: 48px;
        }

        .cert-eyebrow {
          display: inline-block;
          color: #c4b5fd;
          border: 1px solid rgba(167, 139, 250, 0.3);
          background: rgba(139, 92, 246, 0.1);
          border-radius: 999px;
          padding: 8px 15px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .cert-heading h2 {
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1.15;
          font-weight: 800;
          margin: 20px 0 12px;
          letter-spacing: -1.5px;
        }

        .cert-gradient-text {
          background: linear-gradient(90deg, #c4b5fd, #67e8f9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cert-heading p {
          max-width: 620px;
          margin: 0 auto;
          color: #a1a1aa;
          font-size: 15px;
          line-height: 1.8;
        }

        .cert-stats {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .cert-stat {
          padding: 9px 14px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.035);
          color: #d4d4d8;
          font-size: 12px;
        }

        .cert-subheading {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 24px;
          margin: 40px 0 22px;
          font-size: 19px;
          font-weight: 700;
        }

        .cert-subheading span {
          color: #a78bfa;
        }

        .cert-subheading small {
          color: #71717a;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .cert-marquee {
          overflow: hidden;
          width: 100%;
          padding: 12px 0 24px;
        }

        .cert-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: cert-scroll-left 38s linear infinite;
        }

        .cert-track-sim {
          animation-duration: 25s;
        }

        .cert-marquee:hover .cert-track {
          animation-play-state: paused;
        }

        .cert-group {
          display: flex;
          flex-shrink: 0;
          gap: 20px;
          padding-right: 20px;
        }

        .cert-card {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          width: 285px;
          min-height: 235px;
          padding: 22px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: linear-gradient(
            145deg,
            rgba(24, 24, 35, 0.98),
            rgba(12, 12, 20, 0.98)
          );
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.16);
          transition: border-color 0.25s ease,
                      transform 0.25s ease,
                      box-shadow 0.25s ease;
        }

        .cert-card:hover {
          transform: translateY(-5px);
          border-color: rgba(167, 139, 250, 0.55);
          box-shadow: 0 15px 40px rgba(139, 92, 246, 0.1);
        }

        .cert-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .cert-icon {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          color: #c4b5fd;
          background: rgba(139, 92, 246, 0.14);
          border: 1px solid rgba(167, 139, 250, 0.18);
          border-radius: 14px;
        }

        .cert-number {
          color: #71717a;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .cert-category {
          align-self: flex-start;
          padding: 6px 9px;
          color: #a5f3fc;
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.15);
          border-radius: 7px;
          font-size: 10px;
          margin-bottom: 13px;
        }

        .cert-card h3 {
          margin: 0 0 8px;
          color: #f4f4f5;
          font-size: 17px;
          line-height: 1.5;
          font-weight: 700;
        }

        .cert-provider {
          margin: 0 0 20px;
          color: #a1a1aa;
          font-size: 12px;
          line-height: 1.6;
        }

        .cert-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: auto;
          padding-top: 13px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          color: #a78bfa;
          font-size: 11px;
        }

        @keyframes cert-scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 600px) {
          .cert-section {
            padding: 65px 0;
          }

          .cert-heading {
            margin-bottom: 30px;
          }

          .cert-card {
            width: 250px;
            min-height: 225px;
            padding: 18px;
          }

          .cert-group {
            gap: 14px;
            padding-right: 14px;
          }

          .cert-subheading {
            padding: 0 18px;
            font-size: 17px;
          }

          .cert-track {
            animation-duration: 32s;
          }

          .cert-track-sim {
            animation-duration: 23s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cert-track {
            animation-duration: 100s;
          }
        }
      `}</style>

      <div className="cert-container">
        <header className="cert-heading">
          <span className="cert-eyebrow">Learning & Growth</span>

          <h2>
            My <span className="cert-gradient-text">Achievement Vault</span>
          </h2>

          <p>
            Certifications and industry simulations that reflect my learning
            journey across software development, cloud, analytics, and AI.
          </p>

          <div className="cert-stats">
            <span className="cert-stat">05 Certifications</span>
            <span className="cert-stat">02 Industry Simulations</span>
            <span className="cert-stat">Always Learning</span>
          </div>
        </header>

        <div className="cert-subheading">
          <span>01</span>
          Certifications
          <small>CONTINUOUS LEARNING</small>
        </div>

        <InfiniteRow items={certifications} />

        <div className="cert-subheading">
          <span>02</span>
          Industry Simulations
          <small>PRACTICAL EXPOSURE</small>
        </div>

        <InfiniteRow items={simulations} simulation />
      </div>
    </section>
  );
}
