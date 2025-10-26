import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$2,500',
    cadence: 'pre-launch sprint',
    highlight: 'Best for first-time creators',
    features: [
      'Landing page + waitlist setup',
      'Email capture funnels',
      'Audience research + messaging',
      'Ad account + pixel setup',
    ],
    cta: 'Start Starter',
  },
  {
    name: 'Growth',
    price: '$6,500',
    cadence: 'full launch',
    highlight: 'Most popular',
    featured: true,
    features: [
      'Creative strategy + production',
      'Meta/Google/TikTok ads',
      'Daily optimization + reporting',
      'PR seeding + creator outreach',
    ],
    cta: 'Start Growth',
  },
  {
    name: 'Scale',
    price: 'Custom',
    cadence: 'post-campaign',
    highlight: 'For high-volume scale',
    features: [
      'D2C store setup or migration',
      'Always-on performance media',
      'Email/SMS lifecycle flows',
      'Global expansion playbooks',
    ],
    cta: 'Talk to Sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Simple pricing, real partnership</h2>
          <p className="mt-3 text-slate-600">Choose the plan that matches your stage. No hidden fees. Clear outcomes.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-3xl border p-6 md:p-7 bg-white shadow-[0_12px_40px_-20px_rgba(0,0,0,0.35)] ${t.featured ? 'border-[#05CE78]/50 ring-2 ring-[#05CE78]/40' : 'border-black/5'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                {t.highlight && (
                  <span className={`text-xs px-2 py-1 rounded-full ${t.featured ? 'bg-[#05CE78]/15 text-[#05CE78]' : 'bg-slate-100 text-slate-700'}`}>{t.highlight}</span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <div className="text-3xl font-extrabold">{t.price}</div>
                <div className="text-sm text-slate-500">/{t.cadence}</div>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#05CE78]/15 text-[#05CE78]"><Check size={14} /></span>
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#get-started" className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${t.featured ? 'bg-[#05CE78] text-black hover:brightness-95' : 'border border-black/10 text-slate-900 hover:bg-slate-50'}`}>{t.cta}</a>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-xs text-slate-500">All plans include weekly check-ins and a dedicated strategist.</div>
      </div>
    </section>
  );
}
