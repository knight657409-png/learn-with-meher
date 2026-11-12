import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { Sparkles, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export const TeachingApproach: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section id="approach" className="py-20 lg:py-28 bg-[#FFFDF8] border-b border-[#1E4B7A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1E4B7A] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
            <span>The 4-Step Methodology</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102D4F] tracking-tight mb-4">
            Learn. Practise. Improve. Grow.
          </h2>

          <p className="text-base sm:text-lg text-[#102D4F]/80 leading-relaxed font-normal">
            A structured, confidence-first learning sequence designed to move you from passive understanding to natural, spontaneous spoken English.
          </p>
        </div>

        {/* Timeline Steps Grid (Desktop Horizontal, Mobile Vertical) */}
        <div className="relative mb-14">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#1E4B7A]/20 via-[#D4AF37] to-[#1E4B7A]/20 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {SITE_CONFIG.approachSteps.map((step, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setSelectedStep(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative border ${
                    isSelected
                      ? 'bg-[#F8F6EE] border-[#D4AF37] shadow-md ring-2 ring-[#D4AF37]/30'
                      : 'bg-white border-[#1E4B7A]/10 hover:border-[#1E4B7A]/30 hover:bg-[#F8F6EE]/50 shadow-sm'
                  }`}
                >
                  {/* Step Marker */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg transition-colors ${
                        isSelected
                          ? 'bg-[#102D4F] text-[#D4AF37] shadow-sm'
                          : 'bg-[#1E4B7A]/10 text-[#1E4B7A]'
                      }`}
                    >
                      {step.step}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#102D4F] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#1E4B7A] mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#102D4F]/80 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#1E4B7A]/10 flex items-center justify-between text-xs font-medium">
                    <span className={isSelected ? 'text-[#1E4B7A] font-semibold' : 'text-[#102D4F]/60'}>
                      {isSelected ? 'Currently Viewing' : 'Click to inspect'}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'text-[#D4AF37] translate-x-1' : 'text-[#1E4B7A]/40'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Deep-Dive Card */}
        <div className="bg-[#102D4F] text-[#FFFDF8] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#D4AF37] uppercase block mb-1">
                Interactive Lesson Experience • Step {SITE_CONFIG.approachSteps[selectedStep].step}
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                How We Execute: {SITE_CONFIG.approachSteps[selectedStep].title}
              </h3>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium text-[#A7C4E0] border border-white/10">
              Personalized Guidance
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#F8F6EE]/90 leading-relaxed mb-6">
            {SITE_CONFIG.approachSteps[selectedStep].description}
          </p>

          <div className="bg-white/5 rounded-xl p-4 sm:p-5 border border-white/10 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-1">
                  In-Session Activity Example
                </p>
                <p className="text-sm text-white font-medium">
                  {SITE_CONFIG.approachSteps[selectedStep].exampleSnippet}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#A7C4E0]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Real-time constructive feedback</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Zero memorization of rigid rulebooks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
