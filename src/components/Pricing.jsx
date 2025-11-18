import { Check, Zap } from "lucide-react"

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      period: "/mo",
      features: ["500 keyword lookups", "AI search 1k queries", "50 NAP checks", "Basic reports"],
      cta: "Start free",
      highlight: false,
    },
    {
      name: "Growth",
      price: "$49",
      period: "/mo",
      features: ["5k keyword lookups", "AI search 10k queries", "500 NAP checks", "Backlink monitor"],
      cta: "Get Growth",
      highlight: true,
    },
    {
      name: "Agency",
      price: "$149",
      period: "/mo",
      features: ["Unlimited projects", "Team seats", "Bulk audits", "API access"],
      cta: "Talk to sales",
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple pricing</h2>
        <p className="mt-3 text-blue-200/80">Choose a plan that fits your stage. Upgrade anytime.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div key={i} className={`relative rounded-2xl border ${p.highlight ? 'border-cyan-400/40' : 'border-white/10'} bg-white/5 p-6 text-left`}>
              {p.highlight && (
                <div className="absolute -top-3 right-4 inline-flex items-center gap-1 text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-400/30 px-2 py-0.5 rounded-full">
                  <Zap className="h-3 w-3" /> Popular
                </div>
              )}
              <p className="text-white font-medium">{p.name}</p>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">{p.price}</span>
                <span className="text-blue-200/70 mb-1">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-blue-200/85">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium transition ${p.highlight ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'border border-white/10 text-white/90 hover:bg-white/10'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
