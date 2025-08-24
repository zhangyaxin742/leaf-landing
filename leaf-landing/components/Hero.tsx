"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft gradient spotlight */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
           style={{ background: "radial-gradient(40% 60% at 50% 50%, rgba(49,242,138,0.15), transparent 70%)" }} />
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="pill-ghost mb-4">AI pet companion • Lumi</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Money habits you’ll <span className="gradient-text">actually keep</span>.
          </h1>
          <p className="mt-4 text-leaf-text-1 max-w-lg">
            Lumi turns budgeting and investing into tiny daily wins—feed your pet, level up,
            and watch your net worth follow.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#waitlist" className="pill-solid">Try Lumi free</a>
            <a href="#demo" className="pill-ghost">Watch 30-sec demo ▶</a>
          </div>
        </div>

        {/* Right: glass dashboard mock + Lumi chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-5 md:p-6"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Budget this week</h3>
            <span className="pill-ghost text-xs">On track</span>
          </div>
          <div className="mt-4 h-36 rounded-xl bg-white/5" />
          <div className="mt-6 grid grid-cols-3 gap-4">
            {["Food","Fun","Savings"].map((k)=>(
              <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-leaf-text-1">{k}</div>
                <div className="mt-2 text-lg font-semibold">$•••</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3">
            {/* Replace with Lumi PNG */}
            <div className="h-10 w-10 rounded-full bg-leaf-gradient" />
            <div className="text-sm">
              <div className="font-medium">Lumi</div>
              <div className="text-leaf-text-1">“Feed me a micro-win!”</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
