import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ArrowRight, Quote, Heart, Target, Compass } from 'lucide-react';

interface AboutSectionProps {
  onLearnApproach: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnApproach }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFDF8] border-y border-[#1E4B7A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Decorative Pull Quote */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Subtle gold accent frame behind portrait */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-[#D4AF37]/40 -rotate-1 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#1E4B7A]/15 bg-white aspect-[3/4]">
                <img
                  src="/images/educator_portrait_1794029579711.jpg"
                  alt={`${SITE_CONFIG.brand.educatorName}, English Educator and Language Coach in library study setting`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#102D4F]/90 via-[#102D4F]/50 to-transparent p-5 text-white">
                  <p className="font-display text-lg font-bold">{SITE_CONFIG.brand.educatorName}</p>
                  <p className="text-xs text-[#A7C4E0] font-medium">{SITE_CONFIG.brand.educatorRole}</p>
                </div>
              </div>

              {/* Decorative Pull Quote Card */}
              <div className="mt-6 bg-[#F8F6EE] border border-[#D4AF37]/50 rounded-xl p-5 shadow-sm relative">
                <Quote className="w-6 h-6 text-[#D4AF37] mb-2 opacity-80" />
                <p className="font-display italic text-base sm:text-lg text-[#102D4F] leading-snug">
                  “{SITE_CONFIG.brand.educatorQuote}”
                </p>
                <p className="font-script text-sm text-[#1E4B7A] mt-2 font-semibold">
                  — {SITE_CONFIG.brand.educatorName}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction & Teaching Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1E4B7A] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
              <span>Teaching Philosophy</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102D4F] tracking-tight mb-5 leading-tight">
              {SITE_CONFIG.about.heading}
            </h2>

            <p className="text-lg text-[#1E4B7A] font-medium leading-relaxed mb-6">
              {SITE_CONFIG.about.lead}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#102D4F]/85 leading-relaxed mb-8">
              {SITE_CONFIG.about.storyParagraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Three Foundational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#F8F6EE] p-4 rounded-xl border border-[#1E4B7A]/10">
                <div className="w-8 h-8 rounded-lg bg-[#1E4B7A]/10 flex items-center justify-center text-[#1E4B7A] mb-2.5">
                  <Heart className="w-4 h-4 text-[#1E4B7A]" />
                </div>
                <h4 className="font-display text-sm font-bold text-[#102D4F] mb-1">
                  Safe & Encouraging
                </h4>
                <p className="text-xs text-[#102D4F]/75 leading-normal">
                  Practice without judgment. Every mistake is a stepping stone.
                </p>
              </div>

              <div className="bg-[#F8F6EE] p-4 rounded-xl border border-[#1E4B7A]/10">
                <div className="w-8 h-8 rounded-lg bg-[#1E4B7A]/10 flex items-center justify-center text-[#1E4B7A] mb-2.5">
                  <Target className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <h4 className="font-display text-sm font-bold text-[#102D4F] mb-1">
                  Real Contexts
                </h4>
                <p className="text-xs text-[#102D4F]/75 leading-normal">
                  Expressions you actually use in meetings, school, and conversations.
                </p>
              </div>

              <div className="bg-[#F8F6EE] p-4 rounded-xl border border-[#1E4B7A]/10">
                <div className="w-8 h-8 rounded-lg bg-[#1E4B7A]/10 flex items-center justify-center text-[#1E4B7A] mb-2.5">
                  <Compass className="w-4 h-4 text-[#1E4B7A]" />
                </div>
                <h4 className="font-display text-sm font-bold text-[#102D4F] mb-1">
                  Custom Pacing
                </h4>
                <p className="text-xs text-[#102D4F]/75 leading-normal">
                  Personalized attention adapting to your comfort and learning speed.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onLearnApproach}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-[#102D4F] bg-transparent border-2 border-[#1E4B7A] hover:bg-[#1E4B7A] hover:text-white rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>Know More About the Teaching Approach</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
