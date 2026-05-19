'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="bg-brand-off-white border-t border-black/8 py-24 px-6">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-[10px] uppercase tracking-[0.22em] text-black/40 font-semibold mb-4">
          Stay in the loop
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-3 leading-tight">
          Join the MNTR4 List
        </h2>
        <p className="text-[13px] text-black/50 leading-relaxed mb-10 font-body">
          New drops, creator releases, and limited editions — direct to your inbox.
        </p>

        {submitted ? (
          <div className="border border-black/20 px-6 py-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-black font-semibold">
              You&apos;re on the list.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="flex-1 bg-white border border-black/15 text-black placeholder:text-black/30 text-[12px] px-4 py-3.5 focus:outline-none focus:border-black transition-colors min-w-0 font-body"
            />
            <button
              type="submit"
              className="bg-black text-white text-[11px] uppercase tracking-[0.14em] font-semibold px-6 py-3.5 hover:bg-brand-charcoal transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[10px] text-black/30 mt-5 tracking-wide font-body">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
