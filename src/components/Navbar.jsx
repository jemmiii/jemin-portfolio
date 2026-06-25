import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
        >
          JP
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

          <li>
            <a
              href="#about"
              className="hover:text-purple-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-purple-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-purple-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-purple-400 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">

          <div className="flex flex-col items-center py-8 gap-8 text-lg">

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-purple-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-purple-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-purple-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-purple-400 transition"
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}