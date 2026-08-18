import React from "react";
import Header from "@/components/site/Header";
import ScrollProgress from "@/components/site/ScrollProgress";
import HeroSection from "@/components/site/HeroSection";
import NarrativeSection from "@/components/site/NarrativeSection";
import SituationsSection from "@/components/site/SituationsSection";
import MissionSection from "@/components/site/MissionSection";
import ApproachSection from "@/components/site/ApproachSection";
import AccompagnementsSection from "@/components/site/AccompagnementsSection";
import MarcheSection from "@/components/site/MarcheSection";
import OutilsSection from "@/components/site/OutilsSection";
import AboutSection from "@/components/site/AboutSection";
import QuoteSection from "@/components/site/QuoteSection";
import BookSection from "@/components/site/BookSection";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";
import ImageBand from "@/components/site/ImageBand";

export default function Home() {
  return (
    <div className="bg-[#F2EEE4] min-h-screen">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <NarrativeSection />
      <SituationsSection />
      <MissionSection />
      <ApproachSection />
      <AccompagnementsSection />
      <MarcheSection />
      <OutilsSection />
      <ImageBand />
      <AboutSection />
      <QuoteSection />
      <BookSection />
      <ContactSection />
      <Footer />
    </div>
  );
}