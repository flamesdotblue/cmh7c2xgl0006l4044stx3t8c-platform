import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/0" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="pt-28 md:pt-36 max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 text-white backdrop-blur px-3 py-1 text-xs md:text-sm shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-[#05CE78]"></span>
            Crowdfunding Growth Partner
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Launch. Scale. Go Global.
          </h1>
          <p className="mt-4 md:mt-6 max-w-2xl text-base md:text-lg text-white/90">
            We help crowdfunding projects reach their funding goal and beyond.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-[#05CE78] px-6 py-3 text-sm md:text-base font-semibold text-black shadow-[0_10px_30px_-10px_rgba(5,206,120,0.7)] hover:brightness-95 transition">Get Started</a>
            <a href="#cases" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-semibold text-white/90 border border-white/20 hover:border-white/40 transition">See Case Studies</a>
          </div>
        </div>

        <div className="mt-14 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto px-6">
          {[{label:'Campaigns Managed',value:'120+'},{label:'Total Raised',value:'$18M+'},{label:'Avg. ROAS',value:'4.8x'},{label:'Global Backers',value:'350k+'}].map((s,idx)=> (
            <div key={idx} className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 p-4 md:p-5 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)]">
              <div className="text-xl md:text-2xl font-extrabold text-slate-900">{s.value}</div>
              <div className="text-xs md:text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
