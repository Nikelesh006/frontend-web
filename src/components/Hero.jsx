export default function Hero({ onGetStarted }) {
  return (
    <section className="px-6 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-wide">Price Page</h1>
      <p className="mt-3 text-white/90">Pick a plan, switch anytime — no hidden fees.</p>
      <div className="mt-6 flex justify-center gap-3">
        <button
          onClick={onGetStarted}
          className="rounded-lg bg-white text-orange-600 px-5 py-2 font-semibold hover:bg-orange-100 transition"
        >
          Get Started
        </button>
        <a
          href="#faq"
          className="rounded-lg border border-white/70 text-white px-5 py-2 hover:bg-white/20 transition"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}
