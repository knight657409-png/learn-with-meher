import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FFFDF8] border-b border-[#1E4B7A]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1E4B7A] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102D4F] tracking-tight mb-4">
            Common Inquiries
          </h2>

          <p className="text-base text-[#102D4F]/80 leading-relaxed font-normal">
            Everything you need to know about our teaching format, batch sizes, school curricula, and how to get started.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {SITE_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#F8F6EE] border-[#D4AF37] shadow-sm'
                    : 'bg-white border-[#1E4B7A]/15 hover:border-[#1E4B7A]/30'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display font-semibold text-xs sm:text-sm text-[#D4AF37] w-6 shrink-0">
                      0{idx + 1}.
                    </span>
                    <span className="font-display text-base sm:text-lg font-bold text-[#102D4F]">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#102D4F] text-[#D4AF37]' : 'bg-[#1E4B7A]/10 text-[#1E4B7A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#102D4F]/85 leading-relaxed border-t border-[#1E4B7A]/10 animate-fade-in pl-14 sm:pl-15">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions hint */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F8F6EE] border border-[#1E4B7A]/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-[#1E4B7A]/10 flex items-center justify-center text-[#1E4B7A] shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-[#102D4F]">
                Have a question that is not listed here?
              </p>
              <p className="text-xs text-[#1E4B7A]">
                Reach out directly via WhatsApp or our contact form for quick answers.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
              SITE_CONFIG.contact.whatsappDefaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#102D4F] bg-[#D4AF37] hover:bg-[#DFBC4A] rounded-full shadow-sm transition-colors whitespace-nowrap"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
