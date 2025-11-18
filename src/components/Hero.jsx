import { ArrowRight, Sparkles } from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-xs text-blue-200/80 mb-5">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            New: AI suggestions for long‑tail keywords
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Rank faster with an all‑in‑one SEO toolkit
          </h1>
          <p className="mt-6 text-lg text-blue-200/80 max-w-xl">
            Keyword research, AI content search, and NAP backlink management in a clean, unified workspace designed for growth.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition">
              Get started free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/10 text-white/90 hover:bg-white/10 transition">
              See features
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-blue-200/70 text-sm">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-7 w-7 rounded-full border border-white/20 bg-white/10" />
              ))}
            </div>
            <p>Trusted by growth teams and local agencies</p>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl">
            <div className="rounded-xl overflow-hidden bg-slate-900">
              <div className="flex items-center gap-1 px-3 py-2 border-b border-white/10">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <p className="ml-3 text-xs text-blue-200/70">seo-toolkit.app</p>
              </div>
              <div className="p-4 grid gap-3 sm:grid-cols-2">
                {[
                  { title: 'Keyword Explorer', desc: 'Find high-intent terms with difficulty & volume.', color: 'from-blue-500/20 to-cyan-400/10' },
                  { title: 'AI Search', desc: 'Semantic answers from your niche.', color: 'from-purple-500/20 to-pink-400/10' },
                  { title: 'NAP & Backlinks', desc: 'Track citations and authority growth.', color: 'from-emerald-500/20 to-teal-400/10' },
                  { title: 'Site Auditor', desc: 'Fix issues that block rankings.', color: 'from-amber-500/20 to-rose-400/10' },
                ].map((card, idx) => (
                  <div key={idx} className={`rounded-lg border border-white/10 bg-gradient-to-br ${card.color} p-4`}> 
                    <p className="font-medium text-white">{card.title}</p>
                    <p className="text-sm text-blue-200/80 mt-1">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-2xl bg-cyan-400/20 blur-2xl" />
          <div className="absolute -top-6 -right-6 h-28 w-28 rounded-2xl bg-blue-500/20 blur-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
