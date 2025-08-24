"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[var(--bg0)]/70 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Replace with your SVG mark */}
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-leaf-mint via-leaf-teal to-leaf-blue" />
          <span className="font-semibold">Leaf.io</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-leaf-text-1">
          <a href="#features" className="hover:text-white">Product</a>
          <a href="#learn" className="hover:text-white">Learn</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#security" className="hover:text-white">Security</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="pill-ghost">Sign in</button>
          <a href="#waitlist" className="pill-solid">Get early access</a>
          <button
            aria-label="Toggle theme"
            onClick={() => mounted && setTheme(theme === "light" ? "dark" : "light")}
            className="pill-ghost"
          >
            {mounted && theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}
