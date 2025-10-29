import Image from "next/image";
import Footer from "./components/homepage/Footer";
import ShaderBackground from "./components/homepage/ShaderBackground";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Sponsors from "./components/homepage/Sponsors";
import Faqs from "./components/homepage/Faqs";
import NavBar from "./components/globals/NavBar";
import PPTTemplate from "./components/homepage/PPTTemplate";
import EventsMarquee from "./components/homepage/EventsMarquee";

export default function Home() {
  return (
    <>
      <NavBar />
      <ShaderBackground />

      <main className="relative z-10">
        <Hero />
        <EventsMarquee/>
        <div className="px-3">
          <About />
        </div>
        <PPTTemplate />
        {/* <Sponsors /> */}
        <Faqs />
      </main>

      <Footer />
    </>
  );
}
