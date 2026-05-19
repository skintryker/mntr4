'use client'

import { useState } from 'react'
import CreatorCard from '@/components/CreatorCard'
import { creators } from '@/data/creators'

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Create',
    description:
      'Design your pieces using our product templates and upload your artwork to the MNTR4 platform.',
  },
  {
    step: '02',
    title: 'Upload',
    description:
      'Submit your designs for review. Our team ensures quality standards and brand alignment.',
  },
  {
    step: '03',
    title: 'Sell',
    description:
      'Your products go live in your creator store. We handle production, fulfillment, and customer service.',
  },
  {
    step: '04',
    title: 'Earn',
    description:
      'Receive 15–20% of every sale, paid monthly. No upfront costs, no inventory risk.',
  },
]

export default function CreatorsPage() {
  const [form, setForm] = useState({ name: '', email: '', portfolio: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-16 min-h-screen bg-brand-off-white">
      {/* Hero */}
      <section className="relative bg-brand-near-black py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-4">
            The MNTR4 Creator Program
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Create with MNTR4
          </h1>
          <p className="text-sm text-brand-mid-gray leading-relaxed max-w-lg mx-auto mb-10">
            Join independent designers, illustrators, and art directors who sell their work on the
            MNTR4 platform. No inventory. No risk. Just your designs — made on demand.
          </p>
          <a
            href="#apply"
            className="inline-block bg-white text-brand-black text-xs uppercase tracking-widest font-bold px-8 py-4 hover:bg-brand-off-white transition-colors"
          >
            Apply to Sell
          </a>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-1">
              On the platform
            </p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-brand-black">
              Featured Creators
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creators.slice(0, 3).map((creator) => (
              <CreatorCard
                key={creator.id}
                name={creator.name}
                handle={creator.handle}
                itemCount={creator.itemCount}
                bio={creator.bio}
                avatarColor={creator.avatarColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-brand-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-2">
              Simple process
            </p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-brand-black">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="relative">
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-brand-light-gray z-0" style={{ width: 'calc(100% - 3rem)', left: '80%' }} />
                )}
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-brand-black flex items-center justify-center mb-5">
                    <span className="text-xs font-bold text-white tracking-widest">{step.step}</span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-brand-mid-gray leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings */}
      <section className="py-20 px-6 bg-brand-beige">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-2">
              Transparent payouts
            </p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-brand-black">
              Earnings Breakdown
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: '15–20%',
                label: 'Per Sale',
                desc: 'Earn 15–20% of every product sold through your creator store. Higher volume unlocks better rates.',
              },
              {
                stat: 'Monthly',
                label: 'Payouts',
                desc: 'Earnings are paid out on the 1st of each month via bank transfer or PayPal. No minimum threshold.',
              },
              {
                stat: '$0',
                label: 'Upfront Cost',
                desc: 'No setup fees, no inventory costs, no risk. You only earn — we handle everything else.',
              },
            ].map((item) => (
              <div key={item.label} className="bg-white p-8 border border-brand-light-gray">
                <p className="text-4xl font-black tracking-tighter text-brand-black mb-1">
                  {item.stat}
                </p>
                <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-3">
                  {item.label}
                </p>
                <p className="text-xs text-brand-mid-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply to Sell */}
      <section id="apply" className="py-20 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-2">
              Get started
            </p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-brand-black mb-3">
              Apply to Sell on MNTR4
            </h2>
            <p className="text-sm text-brand-mid-gray leading-relaxed">
              Tell us about yourself and share your portfolio. We&apos;ll review your application
              within 3–5 business days.
            </p>
          </div>

          {submitted ? (
            <div className="border border-brand-black/20 bg-brand-off-white p-8 text-center">
              <p className="text-xs uppercase tracking-widest text-brand-black font-bold mb-2">
                Application Received
              </p>
              <p className="text-xs text-brand-mid-gray leading-relaxed">
                We&apos;ll be in touch within 3–5 business days. Thank you for your interest in
                MNTR4.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full border border-brand-light-gray text-sm px-4 py-3 text-brand-black placeholder:text-brand-mid-gray focus:outline-none focus:border-brand-black transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full border border-brand-light-gray text-sm px-4 py-3 text-brand-black placeholder:text-brand-mid-gray focus:outline-none focus:border-brand-black transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium block mb-1.5">
                  Portfolio URL
                </label>
                <input
                  type="url"
                  required
                  value={form.portfolio}
                  onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                  placeholder="https://yourportfolio.com"
                  className="w-full border border-brand-light-gray text-sm px-4 py-3 text-brand-black placeholder:text-brand-mid-gray focus:outline-none focus:border-brand-black transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-black text-white text-xs uppercase tracking-widest font-bold py-4 hover:bg-brand-charcoal transition-colors mt-2"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
