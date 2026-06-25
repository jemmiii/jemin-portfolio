import LoadingScreen from "./components/LoadingScreen";
import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      <LoadingScreen />
      <AuroraBackground />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Certificates />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;