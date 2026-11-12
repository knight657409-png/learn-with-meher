import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Quote, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1E4B7A] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
            <span>Learner Experiences</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102D4F] tracking-tight mb-4">
            Learning Should Feel Encouraging
          </h2>

          <p className="text-base sm:text-lg text-[#102D4F]/80 leading-relaxed font-normal">
            Real progress happens when learners feel safe to practice without fear of criticism. Here is how structured speaking guidance creates lasting confidence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-8">
          {SITE_CONFIG.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFDF8] rounded-2xl p-7 sm:p-8 border border-[#1E4B7A]/15 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Decorative Quotation Mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1E4B7A]/10 text-[#D4AF37] flex items-center justify-center">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EDF3F8] text-[#1E4B7A] border border-[#A7C4E0]/40">
                    {item.highlightTag}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#102D4F]/85 italic leading-relaxed mb-6 font-display">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#1E4B7A]/10">
                <p className="font-display text-sm font-bold text-[#102D4F]">
                  {item.learnerRole}
                </p>
                <div className="flex items-center justify-between text-xs text-[#1E4B7A] mt-0.5">
                  <span>{item.learnerContext}</span>
                  <span className="text-[#D4AF37] font-medium font-script text-sm">
                    ✦ {item.focusArea}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Editorial Transparency Note */}
        <p className="text-center text-xs text-[#1E4B7A]/70 max-w-xl mx-auto">
          Representative learner case reflections illustrating learning paths across Spoken English, Cambridge/CBSE tuition, and everyday conversations.
        </p>
      </div>
    </section>
  );
};
