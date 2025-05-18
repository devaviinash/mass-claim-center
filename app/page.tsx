import HeroSection from "@/components/sections/hero-section";
import FeaturesCarousel from "@/components/sections/features-carousel";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import WhyChooseUs from "@/components/sections/why-choose-us";
import StatsSection from "@/components/sections/stats-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FAQSection from "@/components/sections/faq-section";
import Script from "next/script";

export default function Home() {
   return (
      <>
         <HeroSection />
         <FeaturesCarousel />
         <AboutSection />
         <ServicesSection />
         <WhyChooseUs />
         <StatsSection />
         <TestimonialsSection />
         <FAQSection />
      </>
   );
}
