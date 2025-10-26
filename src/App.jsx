import React from 'react';
import { Rocket, Target, Shield } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';

const Nav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-[#05CE78]" />
          <span className="font-semibold tracking-tight text-slate-900">CrowdLaunch</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#about" className="hover:text-slate-900 transition">About</a>
          <a href="#cases" className="hover:text-slate-900 transition">Case Studies</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#get-started" className="hover:text-slate-900 transition">Get Started</a>
        </nav>
        <a href="#get-started" className="inline-flex items-center gap-2 rounded-full bg-[#05CE78] px-4 py-2 text-sm font-semibold text-black shadow-sm hover:brightness-95 transition">
          <Rocket size={16} /> Start a Campaign
        </a>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-[#05CE78]" />
          <span className="font-semibold text-slate-900">CrowdLaunch</span>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} CrowdLaunch. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#cases" className="hover:text-slate-900">Work</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-inter text-slate-900 bg-white">
      <Nav />
      <main id="home" className="min-h-screen">
        <Hero />
        <About />
        <CaseStudies />
        <Pricing />
        {/* Get Started CTA */}
        <section id="get-started" className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="rounded-3xl p-10 md:p-16 bg-gradient-to-br from-[#05CE78]/10 via-white to-white border border-[#05CE78]/30 shadow-[0_10px_40px_-15px_rgba(5,206,120,0.35)]">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready to launch?</h3>
                  <p className="mt-3 text-slate-600">Book a free 30-minute strategy call. We’ll map your path to funding success on Kickstarter or Indiegogo.</p>
                  <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                    <div className="inline-flex items-center gap-2"><Shield className="text-[#05CE78]" size={18}/>Transparent terms</div>
                    <div className="inline-flex items-center gap-2"><Target className="text-[#05CE78]" size={18}/>Goal-focused strategy</div>
                  </div>
                </div>
                <div className="flex md:justify-end items-center">
                  <a href="#" className="inline-flex items-center justify-center rounded-full bg-[#05CE78] px-6 py-3 text-base font-semibold text-black shadow-sm hover:brightness-95 transition w-full md:w-auto">Book Strategy Call</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
