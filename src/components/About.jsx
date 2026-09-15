import React from 'react';
import { Target, Compass, Users, Sparkles, ShieldCheck, HeartHandshake, Leaf, CheckCircle2 } from 'lucide-react';
import { valuesList } from '../data/siteData';

const valueIcons = {
  Users: Users,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  HeartHandshake: HeartHandshake,
  Leaf: Leaf,
};

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            About HopeBridge Foundation
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            HopeBridge Foundation is a fictional nonprofit organization created around the idea of improving access to education, digital skills, and community opportunities for underserved youth and local communities.
          </p>
        </div>

        {/* Two-Column Grid: Mission/Vision & Context Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual Card with Mission & Vision */}
          <div className="lg:col-span-6 space-y-6">
            {/* Mission Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-emerald-50/50 to-transparent border border-emerald-100 shadow-sm relative overflow-hidden group hover:border-emerald-200 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-5 shadow-md shadow-emerald-600/20">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-emerald-700 mb-2">
                Our Mission
              </h3>
              <p className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                "To create accessible pathways to education, skills, and opportunity for communities that need them most."
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-teal-500/10 via-teal-50/50 to-transparent border border-teal-100 shadow-sm relative overflow-hidden group hover:border-teal-200 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center mb-5 shadow-md shadow-teal-600/20">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-teal-700 mb-2">
                Our Vision
              </h3>
              <p className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                "A future where every individual has the opportunity to learn, grow, and contribute."
              </p>
            </div>
          </div>

          {/* Right Column: Key Tenets & Context */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5">
              Empowering Youth Through Targeted, Practical Pathways
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              We believe that quality education and practical digital skills should not be a privilege determined by geography or financial circumstances. By connecting passionate volunteers and educators with aspiring learners, HopeBridge aims to design accessible grassroots learning models.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Grassroots Accessibility</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Bringing learning materials and mentorship straight to neighborhood centers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Career-Oriented Skill Roadmaps</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Equipping youth with computer fluency, communication, and interview readiness.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Community-Driven Action</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Partnering with local stakeholders to ensure long-term engagement and sustainability.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Demonstration model designed for InAmigos Foundation Internship. Reflects realistic nonprofit organizational architecture without unverified claims.
              </span>
            </div>
          </div>

        </div>

        {/* Values Section */}
        <div className="mt-8 pt-12 border-t border-slate-100">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-emerald-700 mb-2">
              Guiding Principles
            </h3>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Core Values
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {valuesList.map((val) => {
              const Icon = valueIcons[val.icon] || Sparkles;
              return (
                <div
                  key={val.title}
                  className="bg-slate-50/70 hover:bg-white border border-slate-100 hover:border-emerald-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-emerald-600 group-hover:text-white text-emerald-700 shadow-sm flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h5 className="text-base font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {val.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
