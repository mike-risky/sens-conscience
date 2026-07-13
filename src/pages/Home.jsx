import React from "react";
import Header from "@/components/site/Header";
import ScrollProgress from "@/components/site/ScrollProgress";
import HeroSection from "@/components/site/HeroSection";
import SituationsSection from "@/components/site/SituationsSection";
import MissionSection from "@/components/site/MissionSection";
import ApproachSection from "@/components/site/ApproachSection";
import AccompagnementsSection from "@/components/site/AccompagnementsSection";
import AboutSection from "@/components/site/AboutSection";
import QuoteSection from "@/components/site/QuoteSection";
import BookSection from "@/components/site/BookSection";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";
import ImageBand from "@/components/site/ImageBand";

export default function Home() {
  return (
    <div className="bg-[#F8F6F1] min-h-screen">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <SituationsSection />
      <MissionSection />
      <ApproachSection />
      <AccompagnementsSection />
      <ImageBand />
      <AboutSection />
      <QuoteSection />
      <BookSection />
      <ContactSection />
      <Footer />
    </div>
  );
}