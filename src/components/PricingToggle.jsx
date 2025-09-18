export default function PricingToggle({ value, onChange }) {
  const isAnnual = value === "annual";
  return (
    <div
      className="mt-8 inline-flex rounded-full bg-white p-1 text-orange-600"
      role="group"
      aria-label="Billing cycle"
    >
      <button
        type="button"
        aria-pressed={!isAnnual}
        onClick={() => onChange("monthly")}
        className={`px-4 py-2 text-sm rounded-full font-semibold ${
          !isAnnual ? "bg-orange-600 text-white shadow" : "opacity-70"
        }`}
      >
        Monthly
      </button>
      <button
        type="button"
        aria-pressed={isAnnual}
        onClick={() => onChange("annual")}
        className={`px-4 py-2 text-sm rounded-full font-semibold ${
          isAnnual ? "bg-orange-600 text-white shadow" : "opacity-70"
        }`}
      >
        Annual
      </button>
    </div>
  );
}
