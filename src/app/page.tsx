import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TechStrip from "@/components/sections/TechStrip";
import Services from "@/components/sections/Services";
import Verticals from "@/components/sections/Verticals";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <Services />
        <Verticals />
        <Projects />
        <Stats />
        <Process />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
