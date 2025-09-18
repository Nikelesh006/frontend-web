// src/components/Disclosure.jsx
import { useId, useState } from "react";

/**
 * Accessible disclosure pattern:
 * - <button> toggles aria-expanded
 * - aria-controls references the panel by id
 * - panel visibility uses hidden, preserving keyboard flow
 */
export default function Disclosure({ title, children }) {
  const id = useId();
  const [open, setOpen] = useState(false);

  return (
    <div className="py-4 sm:py-5">
      <button
        className="flex w-full items-center justify-between gap-4 text-left text-white"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-base sm:text-lg font-medium">{title}</span>
        <span
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ⌄
        </span>
      </button>
      <div id={id} hidden={!open} className="mt-2 sm:mt-3 pr-1">
        {children}
      </div>
    </div>
  );
}
