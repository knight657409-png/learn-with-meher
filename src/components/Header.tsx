import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Feather, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: (preselectedCourse?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F6EE]/95 backdrop-blur-md shadow-sm border-b border-[#1E4B7A]/10 py-3.5'
          : 'bg-[#F8F6EE]/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Display serif + subtle gold feather accent) */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 text-[#102D4F] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md"
            aria-label={`${SITE_CONFIG.brand.name} - Back to top`}
          >
            <div className="w-9 h-9 rounded-lg bg-[#102D4F] flex items-center justify-center text-[#D4AF37] shadow-sm group-hover:bg-[#1E4B7A] transition-colors">
              <Feather className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-[#102D4F] group-hover:text-[#1E4B7A] transition-colors leading-tight">
                {SITE_CONFIG.brand.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#1E4B7A]/75 font-semibold -mt-0.5">
                English Education
              </span>
            </div>
          </a>

          {/* Zone 2: Concise Single-Line Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#1E4B7A]"
            aria-label="Main Navigation"
          >
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#102D4F] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#D4AF37] decoration-2 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA Button & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#102D4F] bg-[#D4AF37] hover:bg-[#DFBC4A] active:scale-[0.98] rounded-full shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4B7A]"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#102D4F]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#102D4F] hover:bg-[#1E4B7A]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF8] border-b border-[#1E4B7A]/15 shadow-xl transition-all">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-2">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-[#102D4F] hover:bg-[#F8F6EE] hover:text-[#1E4B7A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#1E4B7A]/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#102D4F] bg-[#D4AF37] hover:bg-[#DFBC4A] rounded-full shadow-sm transition-all"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
