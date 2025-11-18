import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-blue-100">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />

      <footer className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-200/70">© {new Date().getFullYear()} SEO Toolkits. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-blue-200/70">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
