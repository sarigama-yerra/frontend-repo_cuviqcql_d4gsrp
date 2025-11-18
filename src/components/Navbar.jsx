import { Menu, Search } from "lucide-react"

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-slate-900/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-white/20 shadow shadow-blue-500/30 group-hover:scale-105 transition" />
          <div className="leading-tight">
            <p className="font-semibold text-white tracking-tight">SEO Toolkits</p>
            <p className="text-xs text-blue-200/70">Keywords • AI • NAP & Backlinks</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-blue-200/80 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-blue-200/80 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-blue-200/80 hover:text-white transition">FAQ</a>
          <a href="/test" className="text-blue-200/80 hover:text-white transition">Backend Test</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 text-sm text-white/90 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 transition">
            <Search className="h-4 w-4" />
            <span>Try Demo</span>
          </button>
          <button className="inline-flex md:hidden items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white/90 hover:bg-white/10">
            <Menu className="h-5 w-5" />
          </button>
          <a href="#pricing" className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition">
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
