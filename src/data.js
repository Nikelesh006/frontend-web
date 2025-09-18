// src/data.js
export const PLANS = [
  { id: "basic", name: "Basic", monthly: 9, annual: 7, features: ["1 project", "Email support"] },
  { id: "pro", name: "Pro", monthly: 19, annual: 15, features: ["5 projects", "Priority support", "Analytics"], popular: true },
  { id: "business", name: "Business", monthly: 49, annual: 39, features: ["Unlimited projects", "SLA support", "SSO"] }
];

// Expanded FAQ content
export const FAQS = [
  { q: "Can I change plans later?", a: "Yes. Upgrades or downgrades are immediate and prorated on your next invoice." },
  { q: "Is there a free trial?", a: "A 14‑day trial is available for Pro and Business with full features—no credit card required." },
  { q: "What payment methods are supported?", a: "We support cards and UPI; for UPI, use the 'Get Started' flow to pay via GPay securely." },
  { q: "Do you offer refunds?", a: "Yes. We have a 30‑day money‑back guarantee for new subscriptions." },
  { q: "How is annual billing calculated?", a: "Annual plans are discounted vs monthly; you are billed once for 12 months upfront." },
  { q: "Can I cancel anytime?", a: "Yes. Cancel from Billing; access remains until the end of the current period." },
  { q: "Do you provide invoices and GST details?", a: "Invoices are emailed and downloadable; you can add GST/Tax details in Billing." },
  { q: "Is my data secure?", a: "We use encryption in transit and at rest, with role‑based access controls and audit logging." },
  { q: "What support is included?", a: "Basic email support for Basic; priority queue for Pro; SLA response times for Business." },
  { q: "Can I request a feature?", a: "Absolutely—submit requests via Help → Feature Request; we review them monthly." }
];
