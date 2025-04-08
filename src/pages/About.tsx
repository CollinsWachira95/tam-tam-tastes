
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import OurPhilosophy from "@/components/OurPhilosophy";
import SustainabilityCarousel from "@/components/SustainabilityCarousel";
import TeamSection from "@/components/TeamSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <OurStory />
        <OurPhilosophy />
        <SustainabilityCarousel />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
