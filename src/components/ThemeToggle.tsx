"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    // Read saved preference at the moment state is initialized
    // This runs once, no useEffect needed
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      return true;
    }
    return false;
  });

  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  }

  return (
    <button
      onClick={toggle}
      className="text-xl transition-transform hover:scale-110"
      aria-label="Toggle dark mode"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
