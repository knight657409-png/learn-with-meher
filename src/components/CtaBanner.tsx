import React from 'react';
import { ArrowRight, Sparkles, Calendar, MessageSquare } from 'lucide-react';

interface CtaBannerProps {
  onOpenConsultation: () => void;
  onEnquireNow: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onOpenConsultation,
  onEnquireNow,
}) => {
  return (
    <section className="bg-[#102D4F] text-[#FFFDF8] py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative Golden Geometry and Ambient Lighting */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-[#1E4B7A]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase mb-4 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Begin With Clarity</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 leading-tight text-balance">
          Your English Journey Can Start Today.
        </h2>

        <p className="text-base sm:text-lg text-[#F8F6EE]/85 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Whether you want to improve your everyday English, speak more naturally, or strengthen your academic skills, take the first step towards better communication.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-semibold text-[#102D4F] bg-[#D4AF37] hover:bg-[#DFBC4A] active:scale-[0.98] rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Free Consultation</span>
          </button>

          <button
            onClick={onEnquireNow}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 active:scale-[0.98] rounded-full shadow-sm transition-all duration-200 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
            <span>Enquire Now</span>
          </button>
        </div>

        {/* Quiet Reassurance */}
        <p className="text-xs text-[#A7C4E0] tracking-wide">
          No obligation · Friendly 15-minute diagnostic call · Personalized learning recommendations
        </p>
      </div>
    </section>
  );
};
