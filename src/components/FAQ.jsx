function FAQ() {
  const faqs = [
    {
      q: "What data sources do you use?",
      a: "We aggregate from major search engines, clickstream providers and our own crawler.",
    },
    {
      q: "Is the AI content unique?",
      a: "AI Search summarizes insights and always links to sources so you can verify.",
    },
    {
      q: "Do you support local SEO?",
      a: "Yes. NAP checks ensure your business name, address and phone are consistent across directories.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. Plans are month‑to‑month with simple billing.",
    },
  ]

  return (
    <section id="faq" className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white tracking-tight text-center">FAQs</h2>
        <p className="mt-3 text-center text-blue-200/80">Quick answers to common questions.</p>

        <div className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer list-none text-white font-medium">
                <div className="flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-blue-200/70 group-open:hidden">+</span>
                  <span className="text-blue-200/70 hidden group-open:inline">−</span>
                </div>
              </summary>
              <p className="mt-3 text-blue-200/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
