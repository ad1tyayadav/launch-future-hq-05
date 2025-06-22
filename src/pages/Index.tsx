
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import InvestorSection from "../components/InvestorSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import PricingSection from "../components/PricingSection";
import ContactSection from "../components/ContactSection";
import ThreeBackground from "../components/ThreeBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-space relative">
      <ThreeBackground />
      <Navigation />
      <HeroSection />
      <InvestorSection />
      <ServicesSection />
      <ProjectsSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
};

export default Index;
