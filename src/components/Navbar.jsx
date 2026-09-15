import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { navLinks, siteConfig } from '../data/siteData';

export const Navbar = ({ onGetInvolvedClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'programs', 'impact', 'how-we-work', 'volunteer', 'contact'];
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-md border-b border-slate-200/80 py-3'
            : 'bg-white/95 md:bg-white/80 backdrop-blur-md border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
              aria-label="HopeBridge Foundation Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
                <Heart className="w-5 h-5 fill-white/20 stroke-white stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-tight group-hover:text-emerald-700 transition-colors">
                  HopeBridge
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-emerald-600">
                  Foundation
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 font-semibold shadow-sm shadow-emerald-100'
                        : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#volunteer"
                onClick={(e) => {
                  handleNavClick(e, '#volunteer');
                  if (onGetInvolvedClick) onGetInvolvedClick();
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-emerald-600/25 hover:shadow-lg hover:shadow-emerald-600/30 active:scale-95 transition-all duration-200"
              >
                <span>Get Involved</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-emerald-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden animate-fade-in bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 mt-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-emerald-600'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-emerald-600"></div>}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100">
              <a
                href="#volunteer"
                onClick={(e) => {
                  handleNavClick(e, '#volunteer');
                  if (onGetInvolvedClick) onGetInvolvedClick();
                }}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl text-center font-semibold shadow-md shadow-emerald-600/25 active:scale-[0.98] transition-transform"
              >
                <span>Get Involved</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
