export default function Steps() {
  const items = [
    { title: "Link accounts", desc: "Securely connect with Plaid. Instant budget & spend map." },
    { title: "Train Lumi", desc: "A 60-sec quiz sets goals, risk and vibe." },
    { title: "Play to progress", desc: "Complete tiny tasks → XP → cosmetics. Habits stick." },
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">Get started in 3 simple steps</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it,i)=>(
          <div key={i} className="glass p-6">
            <div className="pill-ghost mb-3">{String(i+1).padStart(2,"0")}</div>
            <div className="text-xl font-medium">{it.title}</div>
            <p className="mt-2 text-leaf-text-1">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
