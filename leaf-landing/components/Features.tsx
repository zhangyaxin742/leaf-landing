export default function Features() {
  const features = [
    ["Smart Budgeting","Autocategorization + goals with helpful nudges."],
    ["Investing Simulator","Learn fractionals, risk, and diversification safely."],
    ["Daily Quests","1–3 min micro-wins power Lumi’s growth."],
    ["Lumi Chat","Plain-English insights: “why did I overspend on food?”"],
  ];
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">Advanced, friendly, human</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map(([t,d])=>(
          <div key={t} className="glass p-6">
            <div className="text-xl font-medium">{t}</div>
            <p className="mt-2 text-leaf-text-1">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
