import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import {
  Sparkles,
  UserCheck,
  MessagesSquare,
  ShieldCheck,
  Globe2,
  HeartHandshake,
} from 'lucide-react';

const icons = [
  Sparkles,
  UserCheck,
  MessagesSquare,
  ShieldCheck,
  Globe2,
  HeartHandshake,
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F8F6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1E4B7A] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102D4F] tracking-tight mb-4">
            English That Goes Beyond Textbooks
          </h2>

          <p className="text-base sm:text-lg text-[#102D4F]/80 leading-relaxed font-normal">
            Traditional classes focus on rote grammar formulas. We focus on real people, real conversations, and the emotional confidence to express your ideas freely.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITE_CONFIG.whyChooseUs.map((feature, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={feature.number}
                className="bg-[#FFFDF8] rounded-2xl p-7 sm:p-8 border border-[#1E4B7A]/15 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#1E4B7A]/10 group-hover:bg-[#102D4F] text-[#1E4B7A] group-hover:text-[#D4AF37] flex items-center justify-center transition-colors duration-200">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="font-display text-sm font-bold text-[#D4AF37] tracking-wider">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#102D4F] mb-2 group-hover:text-[#1E4B7A] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#102D4F]/80 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1E4B7A]/10">
                  <span className="font-script text-base text-[#1E4B7A] font-semibold">
                    ✦ {feature.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
