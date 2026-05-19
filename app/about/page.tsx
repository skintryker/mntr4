export const metadata = {
  title: 'About — MNTR4',
  description: 'Learn about MNTR4 — a minimal streetwear platform built for curated designs, premium basics, and on-demand production.',
}

const VALUES = [
  {
    title: 'Curated Design',
    description:
      'Every product and collection is selected for visual coherence. We prioritize quality over quantity — fewer pieces, done well.',
  },
  {
    title: 'Zero Overproduction',
    description:
      'Nothing is made until it is ordered. We operate a true on-demand model, eliminating dead stock and reducing waste across the supply chain.',
  },
  {
    title: 'Creator First',
    description:
      'Independent designers earn on every sale. MNTR4 is a platform built to support creators, not just sell products.',
  },
]

const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Design',
    description:
      'Creators and the MNTR4 team design products rooted in clean aesthetics, minimal branding, and quality materials.',
  },
  {
    number: '02',
    title: 'Order',
    description:
      'A customer places an order. Production is triggered only when a purchase is made — not before.',
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'Each piece is manufactured and shipped directly to the customer within 5–7 business days. Fresh, made just for you.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen bg-brand-off-white">
      {/* Hero */}
      <section className="relative bg-brand-near-black py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-4">
            Our story
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
            About MNTR4
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-6">
            Mission
          </p>
          <p className="text-xl md:text-2xl font-light text-brand-black leading-relaxed tracking-tight">
            MNTR4 is a minimal streetwear platform built for curated designs, premium basics, and
            on-demand production. Every piece is created only when ordered, helping reduce excess
            inventory while keeping the focus on clean design and individual expression.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-brand-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-2">
              What we stand for
            </p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-brand-black">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <div key={value.title} className="bg-white p-8 border border-brand-light-gray">
                <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-4">
                  0{i + 1}
                </p>
                <h3 className="text-lg font-black tracking-tight text-brand-black mb-3">
                  {value.title}
                </h3>
                <p className="text-xs text-brand-mid-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How MNTR4 Works */}
      <section className="py-20 px-6 bg-brand-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-2">
              The process
            </p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-brand-black">
              How MNTR4 Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.number} className="relative">
                <div className="w-12 h-12 bg-brand-black flex items-center justify-center mb-6">
                  <span className="text-xs font-bold text-white tracking-widest">{step.number}</span>
                </div>
                <h3 className="text-base font-black uppercase tracking-widest text-brand-black mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-brand-mid-gray leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand statement */}
      <section className="relative bg-brand-near-black py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight mb-8">
            &ldquo;Fewer things, made better — only when they&apos;re needed.&rdquo;
          </p>
          <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-10">
            — MNTR4 Design Principle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="inline-block bg-white text-brand-black text-xs uppercase tracking-widest font-bold px-8 py-4 hover:bg-brand-off-white transition-colors"
            >
              Shop Now
            </a>
            <a
              href="/creators"
              className="inline-block border border-white/30 text-white text-xs uppercase tracking-widest font-bold px-8 py-4 hover:border-white hover:bg-white/5 transition-colors"
            >
              Join as Creator
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
