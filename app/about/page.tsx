export const metadata = {
  title: 'About — MNTR4',
  description: 'MNTR4 is a minimal aesthetic apparel brand built for curated designs, premium essentials, and on-demand production.',
}

const VALUES = [
  {
    title: 'Curated Design',
    description:
      'Every product and collection is selected for visual coherence. We prioritize quality over quantity — fewer pieces, executed with intention.',
  },
  {
    title: 'Zero Overproduction',
    description:
      'Nothing is made until it is ordered. MNTR4 operates a true on-demand model, eliminating dead stock and reducing waste across the supply chain.',
  },
  {
    title: 'Original Only',
    description:
      'Every design in the MNTR4 catalog is an original. Clean aesthetics, meaningful graphics, and timeless silhouettes — nothing generic.',
  },
]

const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Design',
    description: 'The MNTR4 team designs original pieces rooted in clean aesthetics, minimal branding, and quality materials.',
  },
  {
    number: '02',
    title: 'Order',
    description: 'A customer places an order. Production is triggered only when a purchase is made — not before.',
  },
  {
    number: '03',
    title: 'Deliver',
    description: 'Each piece is manufactured and shipped directly to you within 5–7 business days. Fresh, made just for you.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/25 font-semibold mb-4">Our story</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">About MNTR4</h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-6">Mission</p>
          <p className="text-xl md:text-2xl font-light text-black leading-relaxed tracking-tight font-body">
            MNTR4 is a minimal aesthetic apparel brand built for curated designs, premium essentials, and on-demand production.
            Every piece is created only when ordered — reducing excess inventory while keeping the focus on clean design and individual expression.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[#f7f6f3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-2">What we stand for</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={v.title} className="bg-white p-8 border border-black/8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/30 font-semibold mb-4">0{i + 1}</p>
                <h3 className="text-base font-bold tracking-tight text-black mb-3">{v.title}</h3>
                <p className="text-[12px] text-black/45 leading-relaxed font-body">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-[#e8e4dc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-2">The process</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">How MNTR4 Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.number}>
                <div className="w-11 h-11 bg-black flex items-center justify-center mb-6">
                  <span className="text-[10px] font-bold text-white tracking-widest">{step.number}</span>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-black mb-3">{step.title}</h3>
                <p className="text-[12px] text-black/50 leading-relaxed font-body">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand statement */}
      <section className="relative bg-[#0a0a0a] py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-8">
            &ldquo;Fewer things, made better — only when they&apos;re needed.&rdquo;
          </p>
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/25 font-semibold mb-10">— MNTR4 Design Principle</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/shop" className="inline-block bg-white text-black text-[11px] uppercase tracking-[0.18em] font-bold px-8 py-4 hover:bg-[#f7f6f3] transition-colors">
              Shop Now
            </a>
            <a href="/collections" className="inline-block border border-white/25 text-white text-[11px] uppercase tracking-[0.18em] font-bold px-8 py-4 hover:border-white transition-colors">
              View Collections
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
