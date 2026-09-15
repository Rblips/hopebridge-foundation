import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw, Heart, Sparkles, User, Mail, Phone, BookOpen, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

const interestOptions = [
  "Education",
  "Digital Skills",
  "Career Mentoring",
  "Community Development",
  "Event Support",
  "Other"
];

export const VolunteerForm = ({ preselectedInterest }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    areaOfInterest: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync preselected interest if passed from ProgramModal or elsewhere
  useEffect(() => {
    if (preselectedInterest) {
      setFormData(prev => ({ ...prev, areaOfInterest: preselectedInterest }));
      if (errors.areaOfInterest) {
        setErrors(prev => ({ ...prev, areaOfInterest: undefined }));
      }
    }
  }, [preselectedInterest]);

  const validate = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone
    const phoneClean = formData.phone.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (phoneClean.length < 7 || phoneClean.length > 15 || !/^\d+$/.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Area of Interest
    if (!formData.areaOfInterest) {
      newErrors.areaOfInterest = 'Please select an area of interest';
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief note or reason for volunteering';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on edit
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate realistic front-end process without fake network APIs
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // graceful fallback if canvas-confetti is not loaded
      }
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      areaOfInterest: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden">
      
      {/* Success State */}
      {isSuccess ? (
        <div className="text-center py-10 sm:py-14 animate-fade-in flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-md shadow-emerald-500/10">
            <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
            Application Received
          </span>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 max-w-lg">
            Thank you for your interest in volunteering with HopeBridge Foundation.
          </h3>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mb-8">
            We have recorded your volunteer application for the <strong>{formData.areaOfInterest}</strong> track. In an active deployment, our coordinators would reach out via <strong>{formData.email}</strong>.
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 max-w-md mb-8">
            <strong>Demonstration Mode:</strong> No external backend server or fake API endpoints were called. Your input was securely validated directly in the browser client.
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Submit Another Application</span>
          </button>
        </div>
      ) : (
        /* Form State */
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Volunteer Application</h3>
              <p className="text-xs sm:text-sm text-slate-500">Join our mentor and volunteer community</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Heart className="w-5 h-5 fill-emerald-100 text-emerald-600" />
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Maya Sharma"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? 'border-rose-300 bg-rose-50/30 focus:ring-rose-400 text-slate-900'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-emerald-500 focus:ring-emerald-400'
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-rose-300 bg-rose-50/30 focus:ring-rose-400 text-slate-900'
                      : 'border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-emerald-500 focus:ring-emerald-400'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? 'border-rose-300 bg-rose-50/30 focus:ring-rose-400 text-slate-900'
                      : 'border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-emerald-500 focus:ring-emerald-400'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          {/* Area of Interest */}
          <div>
            <label htmlFor="areaOfInterest" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
              Area of Interest <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <select
                id="areaOfInterest"
                name="areaOfInterest"
                value={formData.areaOfInterest}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all appearance-none bg-no-repeat focus:outline-none focus:ring-2 ${
                  errors.areaOfInterest
                    ? 'border-rose-300 bg-rose-50/30 focus:ring-rose-400 text-slate-900'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-emerald-500 focus:ring-emerald-400 text-slate-800'
                }`}
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.25em 1.25em'
                }}
              >
                <option value="">-- Select an Area of Interest --</option>
                {interestOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            {errors.areaOfInterest && (
              <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.areaOfInterest}</span>
              </p>
            )}
          </div>

          {/* Message / Motivation */}
          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
              Message / Motivation <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us a little about your background, skills, or why you'd like to get involved..."
                className={`w-full p-4 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 resize-y min-h-[100px] ${
                  errors.message
                    ? 'border-rose-300 bg-rose-50/30 focus:ring-rose-400 text-slate-900'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-emerald-500 focus:ring-emerald-400'
                }`}
              />
            </div>
            {errors.message && (
              <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-[0.99] disabled:opacity-75 text-white py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Processing Application...</span>
                </>
              ) : (
                <>
                  <span>Submit Application</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          <p className="text-center text-[11px] text-slate-400">
            Frontend demonstration form. No personal data is transmitted or stored externally.
          </p>
        </form>
      )}

    </div>
  );
};
