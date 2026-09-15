import React from 'react';
import { Search, LayoutGrid, UserCheck, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { howWeWorkSteps } from '../data/siteData';

const iconMap = {
  Search: Search,
  LayoutGrid: LayoutGrid,
  UserCheck: UserCheck,
  TrendingUp: TrendingUp,
};

export const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Our Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A structured, human-centric 4-step framework designed to identify grassroots needs, build actionable curriculum, and deliver measurable social impact.
          </p>
        </div>

        {/* 4 Connected Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howWeWorkSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Search;
            return (
              <div
                key={step.number}
                className="relative bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/60 p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:bg-slate-800 shadow-xl"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-display">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-700 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="pt-4 border-t border-slate-700/60 flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            Every step is co-designed alongside community members and volunteer mentors to ensure relevance and long-term sustainability.
          </p>
        </div>

      </div>
    </section>
  );
};
