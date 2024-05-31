import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden ">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.09] bg-grid-black/[0.2]">
        <div className="max-w-7xl mx-auto p-5  ">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
