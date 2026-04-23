import { useState } from "react";
import Navbar from "@/components/proposal/Navbar";
import Hero from "@/components/proposal/Hero";
import PasswordGate from "@/components/proposal/PasswordGate";
import ContextSection from "@/components/proposal/ContextSection";
import OverviewGrid from "@/components/proposal/OverviewGrid";
import InvestmentSection from "@/components/proposal/InvestmentSection";
import NextSteps from "@/components/proposal/NextSteps";

import Footer from "@/components/proposal/Footer";

export default function Index() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const handleSelectService = (id: string) => {
    setActiveServiceId((current) => (current === id ? null : id));
  };

  return (
    <PasswordGate>
      <Navbar />
      <Hero />
      
      <ContextSection />
      <OverviewGrid activeId={activeServiceId} onSelect={handleSelectService} />
      <InvestmentSection />
      <NextSteps />
      
      <Footer />
    </PasswordGate>
  );
}
