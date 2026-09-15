import React, { useEffect } from 'react';
import { X, BookOpen, Laptop, Briefcase, Users, CheckCircle, ArrowRight, UserPlus } from 'lucide-react';

const iconMap = {
  BookOpen: BookOpen,
  Laptop: Laptop,
  Briefcase: Briefcase,
  Users: Users,
};

export const ProgramModal = ({ program, isOpen, onClose, onSelectForVolunteer }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !program) return null;

  const IconComponent = iconMap[program.icon] || BookOpen;

  const handleVolunteerAction = () => {
    onClose();
    if (onSelectForVolunteer) {
      onSelectForVolunteer(program.category === 'Technology' ? 'Digital Skills' : program.category === 'Education' ? 'Education' : program.category === 'Professional Growth' ? 'Career Mentoring' : 'Community Development');
    }
    const el = document.getElementById('volunteer');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      {/* Backdrop click close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 z-10 my-8 overflow-hidden animate-slide-up">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 shrink-0">
            <IconComponent className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              {program.category}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 text-slate-700">
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">Program Overview</h4>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {program.fullDetails.overview}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">Key Learning Modules & Initiatives</h4>
            <div className="space-y-2.5">
              {program.fullDetails.curriculum.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100">
              <span className="text-xs font-bold text-emerald-800 uppercase block mb-1">Target Audience</span>
              <span className="text-xs text-slate-700">{program.fullDetails.targetAudience}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100">
              <span className="text-xs font-bold text-blue-800 uppercase block mb-1">Delivery Model</span>
              <span className="text-xs text-slate-700">{program.fullDetails.deliveryFormat}</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-semibold transition-colors text-center"
          >
            Close Details
          </button>

          <button
            type="button"
            onClick={handleVolunteerAction}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-emerald-600/25 transition-all text-center"
          >
            <UserPlus className="w-4 h-4" />
            <span>Volunteer For This Program</span>
          </button>
        </div>

      </div>
    </div>
  );
};
