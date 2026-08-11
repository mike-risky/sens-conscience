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
import SectionDivider from "@/components/site/SectionDivider";

const CREAM = "#F2EEE4";
const SAND = "#E4DED2";
const WHITE = "#FFFFFF";
const OLIVE = "#87856C";

export default function Home() {
  return (
    <div className="bg-[#F2EEE4] min-h-screen">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <SituationsSection />
      <SectionDivider fromColor={CREAM} toColor={SAND} variant={0} />
      <MissionSection />
      <SectionDivider fromColor={SAND} toColor={WHITE} variant={1} />
      <ApproachSection />
      <SectionDivider fromColor={WHITE} toColor={OLIVE} variant={2} />
      <AccompagnementsSection />
      <ImageBand />
      <AboutSection />
      <QuoteSection />
      <BookSection />
      <SectionDivider fromColor={SAND} toColor={CREAM} variant={0} />
      <ContactSection />
      <SectionDivider fromColor={CREAM} toColor={OLIVE} variant={1} />
      <Footer />
    </div>
  );
}