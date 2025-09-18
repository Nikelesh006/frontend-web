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
        <a href="#" className="font-semibold text-white text-lg">
          Price page 
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
    </header>
  );
}
