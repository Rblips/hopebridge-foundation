import React from 'react';
import { Heart, ArrowUp, Sparkles, ShieldCheck } from 'lucide-react';
import { navLinks, siteConfig } from '../data/siteData';

// Clean, standard SVGs for social platforms
const SocialIcons = {
  LinkedIn: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66a1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66Z" />
    </svg>
  ),
  Instagram: () => (
    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Facebook: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Twitter: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
                <Heart className="w-5 h-5 fill-white/20 stroke-white stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl text-white tracking-tight">
                  HopeBridge
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-emerald-400">
                  Foundation
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Creating opportunities through education, skills, and community action.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>InAmigos Internship Project • Task 3</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-emerald-400 transition-colors inline-block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social Links & Concept Notice */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-400">
              Follow our illustrative social handles for updates on future education & community drives.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {siteConfig.socials.map((social) => {
                const Icon = SocialIcons[social.icon] || SocialIcons.Twitter;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={`Visit HopeBridge on ${social.name} (Demonstration)`}
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/60 hover:bg-emerald-600 hover:text-white text-slate-400 flex items-center justify-center transition-all duration-200"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-bold">
                Demo / Concept Website
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left leading-relaxed">
            © 2026 HopeBridge Foundation. Demonstration website created for an AI website generation project.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 font-semibold transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
