import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, RefreshCw, ChevronDown, MessageSquare, Clock, ShieldAlert, Sparkles } from 'lucide-react';
import { siteConfig, faqs } from '../data/siteData';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject should be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Let's Build Better Opportunities Together
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about our initiatives, volunteer opportunities, or educational workshops? Reach out to our community team.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information / FAQs & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Demo Contact Details Cards & FAQ */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-slate-50 p-7 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>Contact Channels (Demonstration)</span>
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Email Address</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors">
                    {siteConfig.contact.email}
                  </a>
                  <span className="block text-[11px] text-amber-700 font-medium mt-0.5">Demo email address</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Phone Number</span>
                  <a href={`tel:${siteConfig.contact.phone}`} className="text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                  <span className="block text-[11px] text-amber-700 font-medium mt-0.5">Demo placeholder number</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Headquarters / Region</span>
                  <span className="text-sm font-bold text-slate-900">{siteConfig.contact.location}</span>
                  <span className="block text-[11px] text-amber-700 font-medium mt-0.5">Concept operational focus</span>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                <div className="w-11 h-11 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Support Hours</span>
                  <span className="text-xs text-slate-700 font-medium">{siteConfig.contact.hours}</span>
                </div>
              </div>

              {/* Notice */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                <span>These details are illustrative and strictly for this internship demonstration project.</span>
              </div>
            </div>

            {/* Quick Interactive FAQ Accordion */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200/80 rounded-2xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100/70 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
              {isSuccess ? (
                <div className="text-center py-10 sm:py-14 animate-fade-in flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
                    Message Sent
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                    Thank you for contacting HopeBridge Foundation.
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed max-w-md mb-8">
                    Your message regarding "<strong>{formData.subject}</strong>" has been received. Our community desk will review your inquiry.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-sm transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="pb-4 border-b border-slate-200">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Send Us a Message</h3>
                    <p className="text-xs sm:text-sm text-slate-500">We appreciate inquiries, community partnerships, and suggestions</p>
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="contactName" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contactName"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Verma"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-white focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-rose-300 bg-rose-50/40 focus:ring-rose-400'
                          : 'border-slate-200 hover:border-slate-300 focus:border-emerald-500 focus:ring-emerald-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contactEmail" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contactEmail"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-white focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-rose-300 bg-rose-50/40 focus:ring-rose-400'
                          : 'border-slate-200 hover:border-slate-300 focus:border-emerald-500 focus:ring-emerald-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contactSubject" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contactSubject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Inquiring about Youth Digital Workshops"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-white focus:outline-none focus:ring-2 ${
                        errors.subject
                          ? 'border-rose-300 bg-rose-50/40 focus:ring-rose-400'
                          : 'border-slate-200 hover:border-slate-300 focus:border-emerald-500 focus:ring-emerald-400'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contactMessage" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contactMessage"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message or inquiry here..."
                      className={`w-full p-4 rounded-xl border text-sm font-medium bg-white focus:outline-none focus:ring-2 resize-y min-h-[100px] ${
                        errors.message
                          ? 'border-rose-300 bg-rose-50/40 focus:ring-rose-400'
                          : 'border-slate-200 hover:border-slate-300 focus:border-emerald-500 focus:ring-emerald-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Send Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-[0.99] disabled:opacity-75 text-white py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/25 transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
