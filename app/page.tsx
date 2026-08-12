import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SolutionsSection from "./components/SolutionsSection";
import VisionSection from "./components/VisionSection";
import TechnologySection from "./components/TechnologySection";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SolutionsSection />
        <VisionSection />
        <TechnologySection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
