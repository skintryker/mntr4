import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  cta1Label?: string
  cta1Href?: string
  cta2Label?: string
  cta2Href?: string
  dark?: boolean
}

export default function Hero({
  title,
  subtitle,
  cta1Label,
  cta1Href,
  cta2Label,
  cta2Href,
  dark = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex flex-col items-center justify-center text-center px-6 py-32 ${
        dark ? 'bg-brand-near-black text-white' : 'bg-brand-off-white text-brand-black'
      }`}
    >
      {/* Texture overlay */}
      {dark && (
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      )}

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1
          className={`text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 ${
            dark ? 'text-white' : 'text-brand-black'
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-sm md:text-base tracking-widest uppercase mb-10 ${
            dark ? 'text-brand-mid-gray' : 'text-brand-mid-gray'
          }`}
        >
          {subtitle}
        </p>
        {(cta1Label || cta2Label) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta1Label && cta1Href && (
              <Link
                href={cta1Href}
                className={`px-8 py-3 text-xs uppercase tracking-widest font-semibold transition-colors ${
                  dark
                    ? 'bg-white text-brand-black hover:bg-brand-off-white'
                    : 'bg-brand-black text-white hover:bg-brand-charcoal'
                }`}
              >
                {cta1Label}
              </Link>
            )}
            {cta2Label && cta2Href && (
              <Link
                href={cta2Href}
                className={`px-8 py-3 text-xs uppercase tracking-widest font-semibold border transition-colors ${
                  dark
                    ? 'border-white/30 text-white hover:border-white hover:bg-white/5'
                    : 'border-brand-black text-brand-black hover:bg-brand-black hover:text-white'
                }`}
              >
                {cta2Label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
