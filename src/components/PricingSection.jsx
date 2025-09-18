import PricingToggle from "./PricingToggle.jsx";
import PricingCard from "./PricingCard.jsx";

export default function PricingSection({ id, billing, onChangeBilling, plans }) {
  const priceOf = (p) => (billing === "annual" ? p.annual : p.monthly);
  const period = billing === "annual" ? "mo (billed yearly)" : "mo";

  return (
    <section
      id={id}
      className="px-6 pb-16 max-w-6xl mx-auto"
      aria-labelledby="pricing-heading"
    >
      <div className="text-center">
        <PricingToggle value={billing} onChange={onChangeBilling} />
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <PricingCard
            key={p.id}
            name={p.name}
            price={priceOf(p)}
            period={period}
            features={p.features}
            popular={p.popular}
            badge={billing === "annual" ? "Save ~20%" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
