import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Sparkles, CheckCircle2, ArrowRight, MessageSquare, BookOpen, Coffee } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreCourses }) => {
  return (
    <section id="hero" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle background ambient accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#A7C4E0]/20 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Content & Action) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Introductory Label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1E4B7A] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
              <span>{SITE_CONFIG.hero.label}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#102D4F] leading-[1.15] text-balance mb-6">
              Speak English <span className="text-[#1E4B7A] italic">Naturally.</span>{' '}
              <br className="hidden sm:inline" />
              Learn with <span className="relative inline-block text-[#102D4F]">
                Confidence.
                <span className="absolute left-0 bottom-1 w-full h-2.5 bg-[#D4AF37]/35 -z-10 rounded-sm" />
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#102D4F]/85 leading-relaxed max-w-2xl mb-8 font-normal">
              {SITE_CONFIG.hero.paragraph}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onExploreCourses}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#1E4B7A] hover:bg-[#102D4F] active:scale-[0.98] rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>{SITE_CONFIG.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#102D4F] bg-[#FFFDF8] hover:bg-white border-1.5 border-[#D4AF37] hover:border-[#1E4B7A] active:scale-[0.98] rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4B7A]"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>{SITE_CONFIG.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Trust-Building Points */}
            <div className="pt-6 border-t border-[#1E4B7A]/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SITE_CONFIG.hero.trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-sm font-medium text-[#102D4F]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 stroke-[2.5]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Hero Visual + Editorial Floating Cards) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Gold Border Ring */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#1E4B7A]/20 via-[#D4AF37]/30 to-[#A7C4E0]/30 -z-10 blur-[1px]" />

              {/* Main Lifestyle Study Photograph */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFFDF8] bg-[#FFFDF8] aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/images/hero_study_ambiance_1794029579545.jpg"
                  alt="Warm and elegant study setting with literature books, laptop, handwritten notes and morning sunlight"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle scrim overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102D4F]/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                  <span className="flex items-center gap-1.5 drop-shadow">
                    <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Interactive Online Class
                  </span>
                  <span className="font-script text-base text-[#F9EFC5] drop-shadow">
                    Learn • Practise • Grow
                  </span>
                </div>
              </div>

              {/* Floating Card 1: Natural Phrasing speech bubble */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-[#FFFDF8] border border-[#1E4B7A]/15 rounded-xl p-3 shadow-lg max-w-[210px] hidden sm:block animate-fade-in">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#1E4B7A]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#1E4B7A]">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-[#1E4B7A]">
                      Real-Life Speaking
                    </p>
                    <p className="text-xs font-medium text-[#102D4F] leading-snug mt-0.5">
                      “Could you please clarify that?”
                    </p>
                    <p className="font-script text-xs text-[#D4AF37] font-semibold">
                      Polite & 100% natural
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Daily Vocabulary Card */}
              <div className="absolute -bottom-6 -right-3 sm:-right-5 bg-[#102D4F] text-[#FFFDF8] border border-[#D4AF37]/40 rounded-xl p-3.5 shadow-xl max-w-[230px]">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Practical Idiom</span>
                </div>
                <div className="font-display text-sm font-bold text-white">
                  “Cut corners”
                </div>
                <div className="text-[11px] text-[#A7C4E0] mt-0.5 leading-tight">
                  To do something the easiest or cheapest way.
                </div>
                <div className="font-script text-xs text-[#F9EFC5] mt-1">
                  “We never cut corners in speaking practice!”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
