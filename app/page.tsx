
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Roles from "@/components/Roles";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Roles />
      <Experience />
      <Skills />
      <Education />
      <Gallery />
      <Contact />
      <Footer />

    </div>
  );
}
