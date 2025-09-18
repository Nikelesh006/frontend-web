import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import PricingSection from "./components/PricingSection.jsx";
import FAQAccordion from "./components/FAQAccordion.jsx";
import Footer from "./components/Footer.jsx";
import PlanDetails from "./pages/PlanDetails.jsx";
import { PLANS, FAQS } from "./data.js";

export default function App() {
  const [billing, setBilling] = useState("monthly");

  return (
    <main
      className="relative min-h-screen bg-black bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/it.avif')" }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
      <div className="relative z-10">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero
                  onGetStarted={() =>
                    window.open(
                      "https://pay.google.com/gp/payments/getpaymentdata?transaction=projectCodeCraft",
                      "_blank"
                    )
                  }
                />
                <PricingSection
                  id="pricing"
                  billing={billing}
                  onChangeBilling={setBilling}
                  plans={PLANS}
                />
                <section className="px-4 sm:px-6 pb-24">
                  <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
                    FAQ
                  </h2>
                  <p className="text-center text-white/80 mb-4 sm:mb-6">
                    Quick answers to the most common questions.
                  </p>
                  <FAQAccordion items={FAQS} />
                </section>
              </>
            }
          />
          <Route path="/start/:planId" element={<PlanDetails />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}
