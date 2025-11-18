import { Search, Bot, Link, LineChart, Stars } from "lucide-react"

function Features() {
  const items = [
    {
      icon: <Search className="h-5 w-5 text-cyan-400" />,
      title: "Keyword Search",
      desc: "Discover opportunities with real search volume, difficulty and SERP intent.",
      bullets: ["Topic clustering", "Long-tail discovery", "Competitor gaps"],
    },
    {
      icon: <Bot className="h-5 w-5 text-purple-400" />,
      title: "AI Search",
      desc: "Semantic answers powered by your niche and recent trends.",
      bullets: ["Vector search", "Answer engine", "Source links"],
    },
    {
      icon: <Link className="h-5 w-5 text-emerald-400" />,
      title: "NAP & Backlinks",
      desc: "Track citations, fix inconsistencies and monitor authority growth.",
      bullets: ["Directory coverage", "Backlink health", "Spam alerts"],
    },
  ]

  return (
    <section id="features" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs text-blue-200/70 border border-white/10 px-2.5 py-1 rounded-full">
            <Stars className="h-3.5 w-3.5 text-amber-300" /> Core capabilities
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Everything you need to plan, optimize and grow
          </h2>
          <p className="mt-3 text-blue-200/80">
            A streamlined workflow from research to execution. Built for speed and clarity.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  {f.icon}
                </div>
                <p className="font-medium text-white">{f.title}</p>
              </div>
              <p className="mt-3 text-sm text-blue-200/80">{f.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-blue-200/80">
                {f.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-current text-cyan-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-medium">Live insights & reporting</p>
              <p className="text-sm text-blue-200/80">Track rankings, traffic, and conversions in one place.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <LineChart className="h-4 w-4" />
              Custom dashboards included
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
