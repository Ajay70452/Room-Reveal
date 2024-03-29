import { Metadata } from "next";
import Hero from "@/components/Hero";
import FuturisticShopping from "@/components/Futuristic/FuturisticShopping";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import UploadGuideComponent from "@/components/Explanation/UploadGuideComponent";
import Lines from "@/components/Lines";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Room Reveal- The Wallpaper and Wall Tiles Visualizer App",
  description: "Room Reveal",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Lines />
      <Header />
      <Hero />
      <FuturisticShopping />
      <UploadGuideComponent />
      <Feature />

      <CTA />
      <Pricing />
      <FAQ />

      <Contact />
      {/* <Blog />  temperorily removed*/} 
      <Footer />
      <ScrollToTop />
    </main>
  );
}
