import React from 'react';
import { Target, TrendingUp, Users, Shield } from 'lucide-react';

export default function About() {
  const items = [
    { icon: Target, title: 'Strategy First', desc: 'Positioning, messaging, and a clear path to your funding goal.' },
    { icon: TrendingUp, title: 'Performance Media', desc: 'Meta, Google, and TikTok ads designed for backer acquisition.' },
    { icon: Users, title: 'Community Building', desc: 'Build hype with lead magnets, waitlists, and engaged superfans.' },
    { icon: Shield, title: 'Trusted Delivery', desc: 'Transparent reporting, weekly sprints, and fixed outcomes.' },
  ];

  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Built for Kickstarter and Indiegogo success</h2>
          <p className="mt-4 text-slate-600">We’re a digital marketing agency focused exclusively on crowdfunding launches. From pre-launch to post-campaign scale, we turn bold ideas into funded products.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl border border-black/5 p-6 bg-gradient-to-b from-white to-slate-50 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.3)]">
              <div className="h-11 w-11 rounded-2xl bg-[#05CE78]/15 text-[#05CE78] flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
