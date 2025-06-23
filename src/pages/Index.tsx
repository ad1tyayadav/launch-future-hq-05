
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import InvestorSection from "../components/InvestorSection";
import ServicesSection from "../components/ServicesSection";
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
        <div className="relative">
          {/* Seamless transition overlay */}
          <InvestorSection />
        </div>
        <ServicesSection />
        <TestimonialSection />
        <ProjectsSection />
        <PricingSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
