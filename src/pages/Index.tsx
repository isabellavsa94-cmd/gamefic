import Navbar from "@/components/proposal/Navbar";
import Hero from "@/components/proposal/Hero";
import PasswordGate from "@/components/proposal/PasswordGate";
import ContextSection from "@/components/proposal/ContextSection";
import OverviewGrid from "@/components/proposal/OverviewGrid";
import ServicesDetail from "@/components/proposal/ServicesDetail";
import ExpertSuggestion from "@/components/proposal/ExpertSuggestion";
import InvestmentSection from "@/components/proposal/InvestmentSection";
import TimelineSection from "@/components/proposal/TimelineSection";
import NextSteps from "@/components/proposal/NextSteps";

import Footer from "@/components/proposal/Footer";

export default function Index() {
  return (
    <PasswordGate>
      <Navbar />
      <Hero />
      
      <ContextSection />
      <OverviewGrid />
      <ServicesDetail />
      <ExpertSuggestion />
      <InvestmentSection />
      <TimelineSection />
      <NextSteps />
      
      <Footer />
    </PasswordGate>
  );
}
