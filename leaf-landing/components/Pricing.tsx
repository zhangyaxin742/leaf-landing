export default function Pricing() {
  const tiers = [
    {name:"Free", price:"$0", bullets:["Budgets","Quests","Sim portfolio"]},
    {name:"Leaf+", price:"$6/mo", bullets:["Advanced analytics","Multi-goals","Premium cosmetics"]},
    {name:"Family", price:"$10/mo", bullets:["Guardian controls","Shared goals"]},
  ];
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">Choose your plan</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map(t=>(
          <div key={t.name} className="glass p-6 flex flex-col">
            <div className="text-xl font-medium">{t.name}</div>
            <div className="mt-2 text-3xl font-semibold">{t.price}</div>
            <ul className="mt-4 text-leaf-text-1 space-y-2">
              {t.bullets.map(b=><li key={b}>• {b}</li>)}
            </ul>
            <a href="#waitlist" className="mt-6 pill-solid text-center">Get started</a>
          </div>
        ))}
      </div>
    </section>
  );
}
