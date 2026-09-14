import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesOverview from "@/components/home/ServicesOverview";
import MaterialsPreview from "@/components/home/MaterialsPreview";
import CalculatorsTeaser from "@/components/home/CalculatorsTeaser";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import FAQPreview from "@/components/home/FAQPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesOverview />
      <MaterialsPreview />
      <CalculatorsTeaser />
      <FeaturedProjects />
      <Testimonials />
      <CTABanner />
      <FAQPreview />
    </>
  );
}
