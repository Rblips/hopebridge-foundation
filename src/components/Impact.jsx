import React from 'react';
import { GraduationCap, Presentation, Compass, Clock, Info, Target, Sparkles, TrendingUp } from 'lucide-react';
import { impactMetrics } from '../data/siteData';

const iconMap = {
  GraduationCap: GraduationCap,
  Presentation: Presentation,
  Compass: Compass,
  Clock: Clock,
};

export const Impact = () => {
  return (
    <section id="impact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5 text-emerald-600" />
            <span>Target Benchmarks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Creating Meaningful Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            These illustrative goals represent the type of measurable outcomes HopeBridge aims to work toward through dedicated community programs and volunteer mentorship.
          </p>
        </div>

        {/* Illustrative Goals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {impactMetrics.map((item) => {
            const Icon = iconMap[item.icon] || GraduationCap;
            return (
              <div
                key={item.id}
                className="relative bg-slate-50/80 hover:bg-white border border-slate-200/90 hover:border-emerald-300 p-7 rounded-3xl shadow-sm hover:shadow-card transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Demo Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-emerald-600 group-hover:text-white text-emerald-700 shadow-sm flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full border border-emerald-200">
                    Illustrative Goal
                  </span>
                </div>

                {/* Target Number */}
                <div className="my-3">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                    {item.target}
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-1">
                    {item.label}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Progress Bar (Illustrative roadmap benchmark) */}
                <div className="pt-3 border-t border-slate-200/60">
                  <div className="flex justify-between items-center text-[11px] text-slate-500 font-semibold mb-1.5">
                    <span>Projected Milestone</span>
                    <span className="text-emerald-700 font-bold">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Transparency Note Banner */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 text-amber-900 flex items-start sm:items-center gap-3.5 shadow-sm">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm leading-relaxed text-amber-900/90">
            <strong>Transparency Notice:</strong> All figures above represent planned illustrative benchmarks for this concept organization and are not claimed as verified real-world achievements.
          </p>
        </div>

      </div>
    </section>
  );
};
