import Image from "next/image";
import Footer from "./components/homepage/Footer";
import ShaderBackground from "./components/homepage/ShaderBackground";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Sponsors from "./components/homepage/Sponsors";
import Faqs from "./components/homepage/Faqs";
import NavBar from "./components/globals/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <ShaderBackground />

      <main className="relative z-10">
        <Hero />
        <div className="px-3">
          <About />
        </div>
        <Sponsors />
        <Faqs />
      </main>

      <Footer />
    </>
  );
}
