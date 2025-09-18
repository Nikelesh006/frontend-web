// src/components/FAQAccordion.jsx
import Disclosure from "./Disclosure.jsx";

/**
 * Centered, aligned FAQ section using an accessible accordion.
 * Keeps headings outside optional; can be rendered as a section in App.
 */
export default function FAQAccordion({ items = [] }) {
  return (
    <div
      id="faq"
      className="mx-auto w-full max-w-3xl md:max-w-4xl lg:max-w-5xl rounded-2xl bg-black/30 backdrop-blur px-4 sm:px-6 py-6 sm:py-8"
      role="region"
      aria-label="Frequently asked questions"
    >
      <div className="divide-y divide-white/20">
        {items.map((it, idx) => (
          <Disclosure key={idx} title={it.q}>
            <p className="text-white/85 leading-relaxed">{it.a}</p>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
