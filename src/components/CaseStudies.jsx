import React from 'react';

const studies = [
  {
    title: 'Nebula Smart Lamp',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1600&auto=format&fit=crop',
    raised: '$1,240,000',
    platform: 'Kickstarter',
  },
  {
    title: 'AeroPack Travel System',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop',
    raised: '$680,500',
    platform: 'Indiegogo',
  },
  {
    title: 'PulseBuds Pro',
    image: 'https://images.unsplash.com/photo-1518443871636-9abca63aef36?q=80&w=1600&auto=format&fit=crop',
    raised: '$905,200',
    platform: 'Kickstarter',
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Proven launches, real results</h2>
            <p className="mt-3 text-slate-600">A snapshot of campaigns we’ve helped fund and scale.</p>
          </div>
          <a href="#get-started" className="hidden md:inline-flex items-center rounded-full bg-[#05CE78] px-5 py-2.5 text-sm font-semibold text-black shadow-sm hover:brightness-95 transition">Work with us</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {studies.map((s) => (
            <article key={s.title} className="group rounded-3xl overflow-hidden border border-black/5 bg-white shadow-[0_12px_40px_-20px_rgba(0,0,0,0.35)]">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover transform transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{s.title}</h3>
                  <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{s.platform}</span>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-sm text-slate-500">Raised</span>
                  <span className="text-lg font-extrabold text-slate-900">{s.raised}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
