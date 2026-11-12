import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102D4F]/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FFFDF8] rounded-3xl max-w-2xl w-full border border-[#1E4B7A]/20 shadow-2xl p-6 sm:p-8 relative max-h-[85vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F8F6EE] text-[#102D4F]/60 hover:text-[#102D4F] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#1E4B7A]/10 text-[#1E4B7A] flex items-center justify-center">
            {type === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-[#102D4F]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
            <p className="text-xs text-[#1E4B7A]">Last updated: November 2026</p>
          </div>
        </div>

        <div className="overflow-y-auto pr-2 space-y-4 text-xs sm:text-sm text-[#102D4F]/85 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                At <strong>{SITE_CONFIG.brand.name}</strong>, we respect your personal privacy. This policy outlines how information submitted through our contact and consultation booking forms is handled.
              </p>
              <h4 className="font-display text-base font-bold text-[#102D4F] pt-2">
                1. Information We Collect
              </h4>
              <p>
                When inquiring about online classes or scheduling a consultation, you may provide your full name, email address, phone/WhatsApp number, educational background (e.g. CBSE/Cambridge), and specific learning goals.
              </p>
              <h4 className="font-display text-base font-bold text-[#102D4F] pt-2">
                2. How We Use Your Details
              </h4>
              <p>
                Your contact details are solely used to communicate regarding lesson schedules, discuss course syllabus alignments, send session links (Google Meet or Zoom), and respond to your direct queries. We never sell, rent, or distribute your information to any third parties or advertisers.
              </p>
              <h4 className="font-display text-base font-bold text-[#102D4F] pt-2">
                3. Direct Communication
              </h4>
              <p>
                All communications occur directly between the learner (or parent) and {SITE_CONFIG.brand.educatorName}. You may request removal or modification of your contact records at any time by emailing {SITE_CONFIG.contact.email}.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>{SITE_CONFIG.brand.name}</strong>. By scheduling a consultation or enrolling in personalized English tutoring sessions, you agree to the following basic terms:
              </p>
              <h4 className="font-display text-base font-bold text-[#102D4F] pt-2">
                1. Online Class Delivery
              </h4>
              <p>
                All tutoring and coaching sessions are conducted virtually via live interactive video software. Students require a stable internet connection, a functioning microphone, and a quiet learning environment.
              </p>
              <h4 className="font-display text-base font-bold text-[#102D4F] pt-2">
                2. Scheduling & Rescheduling
              </h4>
              <p>
                Timings for 1-on-1 classes are mutually agreed upon prior to batch commencement. In the event of a necessary rescheduling, learners are kindly requested to provide at least 12 hours advance notice so alternate slots can be arranged.
              </p>
              <h4 className="font-display text-base font-bold text-[#102D4F] pt-2">
                3. Academic Integrity & Supportive Environment
              </h4>
              <p>
                Sessions are designed to foster open, encouraging speaking practice. We maintain a zero-tolerance policy towards disruptive behavior to protect the comfortable learning atmosphere for all students.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-[#1E4B7A]/10 mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-6 rounded-full text-xs font-semibold text-[#102D4F] bg-[#D4AF37] hover:bg-[#DFBC4A] transition-colors cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
