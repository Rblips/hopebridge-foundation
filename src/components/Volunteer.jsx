import React, { useRef } from 'react';
import { Heart, Sparkles, CheckCircle2, Users, ArrowDown, Gift, Award, HelpCircle } from 'lucide-react';
import { VolunteerForm } from './VolunteerForm';

export const Volunteer = ({ preselectedInterest }) => {
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    if (formRef.current) {
      const navOffset = 80;
      const elementPosition = formRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="volunteer" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-emerald-50/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & CTA Box */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Join Our Mission</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Your Time Can Create an Impact
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you can mentor, organize, contribute your skills, or support community initiatives, there are meaningful ways to get involved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleScrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/25 transition-all duration-200"
            >
              <span>Become a Volunteer</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 active:scale-95 text-slate-700 border border-slate-300/80 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-sm transition-all duration-200"
            >
              <span>Support Our Mission</span>
              <Gift className="w-4 h-4 text-emerald-600" />
            </a>
          </div>
        </div>

        {/* Two-Column Grid: Volunteer Perks / Testimonials / Roles & Volunteer Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" ref={formRef}>
          
          {/* Left Column: Why Volunteer & Roles Overview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span>How Volunteers Make a Difference</span>
              </h3>

              <div className="space-y-4 text-slate-600 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-800">Academic & Tech Mentorship:</strong> Teach coding basics, English communication, or assist students with studies.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-800">Career Guidance:</strong> Conduct mock interviews, review resumes, or speak on vocational pathways.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-800">Community Outreach:</strong> Organize neighborhood health drives, book distributions, and cleanliness events.
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer Experience Commitment Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-7 rounded-3xl shadow-lg shadow-emerald-700/20">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-emerald-200" />
                <h4 className="text-lg font-bold text-white">Flexible Engagement</h4>
              </div>
              <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed mb-4">
                Volunteer opportunities are planned as weekend circles (2-4 hours weekly), both in-person at local community hubs and virtually for digital mentors.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/15 px-3 py-1.5 rounded-lg text-white">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span>Certificate of Volunteer Appreciation Issued</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Volunteer Form */}
          <div className="lg:col-span-7">
            <VolunteerForm preselectedInterest={preselectedInterest} />
          </div>

        </div>

      </div>
    </section>
  );
};
