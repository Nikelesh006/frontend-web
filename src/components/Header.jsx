import { useEffect, useState } from "react";

export default function Header() {
  const KEY = "theme";
  const [dark, setDark] = useState(() => localStorage.getItem(KEY) === "dark");
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem(KEY, "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem(KEY, "light");
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-10 bg-white/70 dark:bg-gray-950/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="logo-text">
          Code Craft
        </a>
        <nav className="flex items-center gap-4">
          <a
            href="#pricing"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          >
            FAQ
          </a>
        </nav>
      </div>

      <style jsx>{`
        .logo-text {
          font-size: 1.875rem; /* 30px */
          font-weight: 800;
          color:#00FFFF.
          background-clip: text;
          -webkit-background-clip: text;#00FFFF.
          color: transparent;
          text-shadow: 0 2px 6px rgba(107, 33, 168, 0.5);
          transition: transform 0.3s ease;
        }
        .logo-text:hover {
          transform: scale(1.05);
          cursor: pointer;
          text-shadow: 0 4px 10px rgba(107, 33, 168, 0.75);
        }
      `}</style>
    </header>
  );
}
