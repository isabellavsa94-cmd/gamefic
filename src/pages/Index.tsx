import { useState } from "react";
import Navbar from "@/components/proposal/Navbar";
import Hero from "@/components/proposal/Hero";
import PasswordGate from "@/components/proposal/PasswordGate";
import ContextSection from "@/components/proposal/ContextSection";
import OverviewGrid from "@/components/proposal/OverviewGrid";
import InvestmentSection from "@/components/proposal/InvestmentSection";
import TimelineSection from "@/components/proposal/TimelineSection";
import NextSteps from "@/components/proposal/NextSteps";

import Footer from "@/components/proposal/Footer";

export default function Index() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const handleSelectService = (id: string) => {
    const nextId = activeServiceId === id ? null : id;
    setActiveServiceId(nextId);

    if (nextId) {
      window.setTimeout(() => {
        const el = document.getElementById("services-detail");
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 108;
        window.scrollTo({ top, behavior: "smooth" });
      }, 80);
    }
  };

  return (
    <PasswordGate>
      <Navbar />
      <Hero />
      
      <ContextSection />
      <OverviewGrid activeId={activeServiceId} onSelect={handleSelectService} />
      <InvestmentSection />
      <TimelineSection />
      <NextSteps />
      
      <Footer />
    </PasswordGate>
  );
}
