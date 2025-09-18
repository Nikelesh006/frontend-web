import { useParams, useNavigate } from "react-router-dom";


const GPAY_URL =
  "https://pay.google.com/intl/en_in/about/";

const CONTENT = {
  basic: {
    title: "Basic • Sample Project",
    blurb:
      "Kick off with a simple portfolio or landing page project designed to ship in a day.",
    bullets: [
      "Single-page site with hero, features, and contact form",
      "Responsive layout and basic accessibility",
      "Email support and quick start guide",
    ],
    who: [
      "Solo developers or students validating an idea",
      "Small portfolio or brochure websites",
      "Tight timeline: same-day or next-day delivery",
    ],
    timeline: [
      "Setup & theme: 1–2 hours",
      "Content & imagery: 2–3 hours",
      "QA & deploy: 1 hour",
    ],
    stack: ["React + Vite", "Tailwind CSS", "GitHub Pages/Netlify deploy"],
    support: "Email support during business hours within 24h response.",
    grant: null,
  },
  pro: {
    title: "Pro • Team Project",
    blurb:
      "Scale to multi-page sites and collaboration with priority support.",
    bullets: [
      "Up to 5 projects with shared components",
      "Analytics setup and performance budget",
      "Priority support response",
    ],
    who: [
      "Small teams building a marketing site or internal tool",
      "Needs analytics and faster iteration",
      "Weekly releases with a shared component library",
    ],
    timeline: [
      "Discovery & plan: 1–2 days",
      "Build & integrate: 3–5 days",
      "Review & launch: 1 day",
    ],
    stack: ["React + Vite", "Tailwind CSS", "Routing + env config"],
    support: "Priority queue with <4h first response on business days.",
    grant: {
      heading: "Grant project details",
      items: [
        "Scope outline and phased milestones",
        "Success metrics and reporting cadence",
        "Review and approval checkpoints",
      ],
    },
  },
  business: {
    title: "Business • Organization Project",
    blurb:
      "Unlimited projects, SSO, and SLA-backed support for organizations.",
    bullets: [
      "Design system starter and deployment checklist",
      "Role-based access and security reviews",
      "SLA support with incident updates",
    ],
    who: [
      "Departments needing multiple coordinated sites/apps",
      "Compliance and access control requirements",
      "Executive reporting and uptime visibility",
    ],
    timeline: [
      "Stakeholder alignment: 2–3 days",
      "Implementation & migration: 1–2 weeks",
      "Hardening & rollout: 3–5 days",
    ],
    stack: [
      "React + Vite + Router",
      "Tailwind CSS + theming",
      "SSO-ready structure and CI/CD hooks",
    ],
    support:
      "SLA-backed support with incident comms and scheduled maintenance windows.",
    grant: {
      heading: "Grant project details",
      items: [
        "Budget allocation and governance",
        "Compliance and audit trail requirements",
        "Quarterly roadmap and stakeholder sign-off",
      ],
    },
  },
};

export default function PlanDetails() {
  const { planId } = useParams();
  const navigate = useNavigate();
  const planKey = (planId || "").toLowerCase();
  const data = CONTENT[planKey] || CONTENT.basic;

  return (
    <section className="px-4 sm:px-6 py-10">
      {/* centered container for consistent alignment */}
      <div className="mx-auto w-full max-w-3xl md:max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 rounded-lg border border-white/30 px-3 py-1 text-sm hover:bg-white/10"
        >
          ← Back
        </button>

        <div className="rounded-2xl bg-black/35 backdrop-blur p-6 sm:p-8 border border-white/15">
          {/* Header */}
          <h1 className="text-center text-2xl sm:text-3xl font-semibold">
            {data.title}
          </h1>
          <p className="mt-2 text-center text-white/80 max-w-prose mx-auto">
            {data.blurb}
          </p>

          {/* What you get */}
          <div className="mt-6 max-w-prose mx-auto">
            <h2 className="text-lg font-semibold">What’s included</h2>
            <ul className="mt-3 space-y-2 text-white/90">
              {data.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who it's for */}
          <div className="mt-8 max-w-prose mx-auto">
            <h2 className="text-lg font-semibold">Who it’s for</h2>
            <ul className="mt-3 space-y-2 text-white/90">
              {data.who.map((w) => (
                <li key={w} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery timeline */}
          <div className="mt-8 max-w-prose mx-auto">
            <h2 className="text-lg font-semibold">Delivery timeline</h2>
            <ol className="mt-3 list-decimal list-inside space-y-1 text-white/90">
              {data.timeline.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ol>
          </div>

          {/* Tech stack */}
          <div className="mt-8 max-w-prose mx-auto">
            <h2 className="text-lg font-semibold">Tech stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {data.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Grant details (Pro/Business only) */}
          {data.grant && (
            <div className="mt-8 border-t border-white/15 pt-6 max-w-prose mx-auto">
              <h2 className="text-lg font-semibold">{data.grant.heading}</h2>
              <ul className="mt-3 space-y-2 text-white/90">
                {data.grant.items.map((g) => (
                  <li key={g} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Support */}
          <div className="mt-8 max-w-prose mx-auto">
            <h2 className="text-lg font-semibold">Support & SLA</h2>
            <p className="mt-2 text-white/85">{data.support}</p>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
            <p className="text-white/75 text-sm text-center sm:text-left">
              Payment via UPI/Google Pay; use Continue to Payment to proceed.
            </p>
            <button
              onClick={() => window.open(GPAY_URL, "_blank")}
              className="w-full sm:w-auto rounded-lg bg-orange-600 px-5 py-2 text-white hover:bg-orange-700 transition"
            >
              Continue to Payment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
