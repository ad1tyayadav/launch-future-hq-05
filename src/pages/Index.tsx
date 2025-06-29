
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import InvestorSection from "../components/InvestorSection";
import ServicesCarousel from "../components/ServicesCarousel";
import TestimonialSection from "../components/TestimonialSection";
import ProjectsSection from "../components/ProjectsSection";
import PricingSection from "../components/PricingSection";
import ContactSection from "../components/ContactSection";
import ThreeBackground from "../components/ThreeBackground";
import TempBooking from "@/components/TempBooking";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TimeLine from "@/components/Timeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-space relative">
      <ThreeBackground />
      <Navigation />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <TimeLine />
        <ServicesCarousel />
        <ProjectsSection />
        <TestimonialSection />
        <PricingSection />
        <div className="relative">
          <InvestorSection />
        </div>
        {/* <ContactSection /> */}
        <TempBooking />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
