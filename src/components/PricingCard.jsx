import { useNavigate } from "react-router-dom";

export default function PricingCard({
  name,
  price,   
  period,
  features,
  popular,
  badge,
}) {
  const navigate = useNavigate();


  const pricesInINR = {
    Basic: 699,
    Pro: 1599,      
    Business: 3999, 
  };

  const displayINR = pricesInINR[name] ?? price;

  return (
    <div
      className={`flex flex-col h-full rounded-2xl border border-white/40 p-6 bg-white/10 shadow-md ${
        popular ? "ring-2 ring-orange-400" : ""
      }`}
    >
      <div>
        {popular && (
          <div className="mb-2 inline-block rounded-full bg-orange-600 px-3 py-1 text-xs text-white font-semibold">
            Most popular
          </div>
        )}
        {badge && (
          <div className="mb-2 inline-block rounded-full bg-emerald-600/20 px-3 py-1 text-xs text-emerald-200 font-semibold">
            {badge}
          </div>
        )}
        <h3 className="text-xl font-semibold text-white">{name}</h3>

        <div className="mt-4 flex items-end gap-1">
          <span className="text-4xl font-bold text-white">₹{displayINR}</span>
          <span className="text-sm text-white/80">/ {period}</span>
        </div>

        <ul className="mt-6 space-y-2 text-white text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" /> {f}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => navigate(`/start/${name.toLowerCase()}`)}
        className="mt-auto w-full rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-700 transition"
      >
        Get started
      </button>
    </div>
  );
}
