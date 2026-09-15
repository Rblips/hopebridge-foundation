import React from 'react';
import { ArrowRight, BookOpen, Sparkles, Users, Award, ShieldCheck, Heart, Laptop, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export const Hero = ({ onExploreClick, onGetInvolvedClick }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/70 via-slate-50/50 to-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-emerald-200/40 via-teal-200/30 to-amber-100/40 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-0 w-80 h-80 bg-emerald-300/20 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Internship Concept Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>InAmigos Internship Project • AI Website Generation</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.12] mb-6">
              Creating <span className="text-gradient">Opportunities.</span>
              <br />
              Building Stronger <span className="text-emerald-700">Communities.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
              {siteConfig.subtext}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => {
                  scrollTo('programs');
                  if (onExploreClick) onExploreClick();
                }}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 transition-all duration-200"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  scrollTo('volunteer');
                  if (onGetInvolvedClick) onGetInvolvedClick();
                }}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-95 text-slate-800 border border-slate-200/90 hover:border-slate-300 px-7 py-3.5 rounded-xl font-semibold text-base shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Get Involved</span>
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500/20" />
              </button>
            </div>

            {/* Micro Highlights Pill */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-slate-200/80 w-full max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium">Focus</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">Education</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                  <Laptop className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium">Empowerment</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">Digital Skills</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium">Outreach</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">Community</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with Rich Social-Impact Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white p-6 sm:p-8">
                
                {/* Header of Visual */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/30">
                      <Heart className="w-6 h-6 fill-white/20" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-slate-900">HopeBridge Impact Hub</h2>
                      <p className="text-xs text-emerald-600 font-semibold">Community Empowerment Model</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    Concept NGO
                  </span>
                </div>

                {/* Core Pillars Graphic Blocks */}
                <div className="py-6 space-y-4">
                  {/* Block 1: Education */}
                  <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100/90 flex items-center justify-between group hover:bg-emerald-100/60 transition-colors">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-700">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Education Support Hubs</h3>
                        <p className="text-xs text-slate-600">Literacy circles & volunteer tutoring</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-white/80 px-2.5 py-1 rounded-lg border border-emerald-200">
                      Active Target
                    </span>
                  </div>

                  {/* Block 2: Digital Skills */}
                  <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100/90 flex items-center justify-between group hover:bg-blue-100/60 transition-colors">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-700">
                        <Laptop className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Digital Skills Bootcamp</h3>
                        <p className="text-xs text-slate-600">Tech literacy & career readiness</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-700 bg-white/80 px-2.5 py-1 rounded-lg border border-blue-200">
                      Planned
                    </span>
                  </div>

                  {/* Block 3: Youth Mentorship */}
                  <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-100/90 flex items-center justify-between group hover:bg-amber-100/60 transition-colors">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-amber-700">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Community Outreach</h3>
                        <p className="text-xs text-slate-600">Grassroots engagement & youth circles</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-700 bg-white/80 px-2.5 py-1 rounded-lg border border-amber-200">
                      Collaborative
                    </span>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Ethical, transparent frameworks</span>
                  </div>
                  <span className="font-semibold text-emerald-700">100% Social Impact</span>
                </div>
              </div>

              {/* Floating Floating Metric Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[240px] animate-pulse-subtle">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center text-white shadow-md">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Illustrative Goal</div>
                  <div className="text-sm font-extrabold text-slate-900">1,000+ Learners</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
