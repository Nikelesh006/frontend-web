// src/components/Testimonials.jsx
export default function Testimonials({ testimonials }) {
  return (
    <section className="bg-indigo-50 dark:bg-indigo-900 py-12 px-6 max-w-6xl mx-auto rounded-xl mt-12">
      <h2 className="text-3xl font-semibold text-center text-indigo-900 dark:text-indigo-200 mb-8">What our users say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map(({ id, name, quote }) => (
          <blockquote key={id} className="bg-white dark:bg-indigo-800 rounded-lg p-6 shadow-md">
            <p className="text-gray-700 dark:text-gray-300 italic">"{quote}"</p>
            <footer className="mt-4 text-right text-indigo-700 dark:text-indigo-300 font-semibold">{name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
