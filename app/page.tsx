import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import WhyUs from "../components/WhyUs";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <WhyUs />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsappButton />
    </>
  );
}