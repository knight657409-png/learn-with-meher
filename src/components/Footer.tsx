import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Feather, Mail, Phone, ArrowUp, Instagram, Youtube, Linkedin, Heart, Download, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A1E35] text-[#FFFDF8] pt-16 pb-12 border-t border-[#D4AF37]/30 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1E4B7A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#D4AF37] flex items-center justify-center text-[#102D4F]">
                <Feather className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-white leading-tight">
                  {SITE_CONFIG.brand.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold -mt-0.5">
                  Online English Education
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A7C4E0] leading-relaxed mb-6 max-w-sm">
              Empowering school students and adult learners with practical spoken English skills, natural conversation fluency, and personalized tuition.
            </p>

            <div className="inline-block px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
              {SITE_CONFIG.brand.tagline}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A7C4E0]">
              {SITE_CONFIG.navLinks.slice(0, 5).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Programs */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Courses
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A7C4E0]">
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, '#courses')}
                  className="hover:text-white transition-colors block"
                >
                  Spoken English Coaching
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, '#courses')}
                  className="hover:text-white transition-colors block"
                >
                  School English (SSC / CBSE / Cambridge)
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  onClick={(e) => handleNavClick(e, '#courses')}
                  className="hover:text-white transition-colors block"
                >
                  English for Everyday Life
                </a>
              </li>
              <li>
                <a
                  href="#quiz"
                  onClick={(e) => handleNavClick(e, '#quiz')}
                  className="hover:text-white transition-colors block"
                >
                  Interactive Expression Quiz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Enquiry Details
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#A7C4E0]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.whatsappNumber}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.contact.displayPhone}
                </a>
              </div>
              <p className="text-[11px] text-[#A7C4E0]/80 pt-1">
                {SITE_CONFIG.contact.hours}
              </p>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={SITE_CONFIG.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-[#A7C4E0] hover:text-[#D4AF37] flex items-center justify-center transition-colors"
                  aria-label="YouTube channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-[#A7C4E0] hover:text-[#D4AF37] flex items-center justify-center transition-colors"
                  aria-label="Instagram profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-[#A7C4E0] hover:text-[#D4AF37] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Netlify Free Deployment Box */}
        <div className="my-8 p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-white flex items-center gap-2">
                <span>Netlify Free Deployment Package</span>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                  Ready to Deploy
                </span>
              </p>
              <p className="text-xs text-[#A7C4E0]">
                Pre-configured with <code className="text-white">_redirects</code> and <code className="text-white">netlify.toml</code> for zero-error SPA hosting.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href="/learn-with-meher-netlify-deploy.zip"
              download="learn-with-meher-netlify-deploy.zip"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#102D4F] bg-[#D4AF37] hover:bg-[#DFBC4A] transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Netlify Zip (Production)</span>
            </a>

            <a
              href="/learn-with-meher-source-code.zip"
              download="learn-with-meher-source-code.zip"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Full Source Code (.zip)</span>
            </a>

            <a
              href="https://app.netlify.com/drop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-xs font-medium text-[#A7C4E0] hover:text-white transition-colors whitespace-nowrap"
            >
              <span>Netlify Drop</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7C4E0]">
          <div>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.brand.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#D4AF37] hover:text-[#DFBC4A] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
