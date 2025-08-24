export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20">
      <div className="mx-auto max-w-6xl px-5 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-leaf-mint via-leaf-teal to-leaf-blue mb-3" />
          <p className="text-leaf-text-1">Finance that feels like a game—without treating your money like one.</p>
        </div>
        <div className="flex gap-16">
          <div>
            <div className="font-medium mb-3">Product</div>
            <ul className="space-y-2 text-leaf-text-1">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#security">Security</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Company</div>
            <ul className="space-y-2 text-leaf-text-1">
              <li><a href="#learn">Learn</a></li>
              <li><a href="#waitlist">Waitlist</a></li>
              <li><a href="#legal">Privacy</a></li>
            </ul>
          </div>
        </div>
        <form id="waitlist" className="glass p-4">
          <div className="font-medium mb-2">Join the squad</div>
          <div className="flex gap-2">
            <input type="email" placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none" />
            <button className="pill-solid">Sign up</button>
          </div>
        </form>
      </div>
      <div className="text-center text-sm text-leaf-text-1 pb-8">© {new Date().getFullYear()} Leaf.io</div>
    </footer>
  );
}
