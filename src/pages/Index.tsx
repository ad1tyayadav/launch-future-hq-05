
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import RotatingPhonesSection from "../components/RotatingPhonesSection";
import InvestorSection from "../components/InvestorSection";
import ServicesCarousel from "../components/ServicesCarousel";
import TestimonialSection from "../components/TestimonialSection";
import ProjectsSection from "../components/ProjectsSection";
import PricingSection from "../components/PricingSection";
import ContactSection from "../components/ContactSection";
import ThreeBackground from "../components/ThreeBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-space relative">
      <ThreeBackground />
      <Navigation />
      <div className="relative z-10">
        <HeroSection />
        <RotatingPhonesSection />
        <ServicesCarousel />
        <ProjectsSection />
        <TestimonialSection />
        <PricingSection />
        <div className="relative">
          <InvestorSection />
        </div>
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
