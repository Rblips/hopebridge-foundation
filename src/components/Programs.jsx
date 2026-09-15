import React, { useState } from 'react';
import { BookOpen, Laptop, Briefcase, Users, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { programsData } from '../data/siteData';
import { ProgramModal } from './ProgramModal';

const iconComponents = {
  BookOpen: BookOpen,
  Laptop: Laptop,
  Briefcase: Briefcase,
  Users: Users,
};

export const Programs = ({ onSelectProgramForVolunteer }) => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleOpenModal = (program) => {
    setSelectedProgram(program);
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
  };

  return (
    <section id="programs" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            Core Initiatives
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Our Programs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Targeted community frameworks designed to bridge learning divides, cultivate technology fluency, and prepare young minds for rewarding career paths.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {programsData.map((program) => {
            const Icon = iconComponents[program.icon] || BookOpen;
            return (
              <div
                key={program.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Category Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {program.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {program.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {program.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                    {program.keyHighlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(program)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-emerald-600 text-slate-700 hover:text-white font-semibold text-xs sm:text-sm border border-slate-200 hover:border-emerald-600 transition-all duration-200 group-hover:shadow-sm"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Modal */}
        <ProgramModal
          program={selectedProgram}
          isOpen={!!selectedProgram}
          onClose={handleCloseModal}
          onSelectForVolunteer={onSelectProgramForVolunteer}
        />

      </div>
    </section>
  );
};
