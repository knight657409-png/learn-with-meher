import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import { X, Calendar, Clock, Sparkles, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedCourse,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(preselectedCourse || 'spoken-english');
  const [preferredSlot, setPreferredSlot] = useState('Morning (10:00 AM – 1:00 PM IST)');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (preselectedCourse) {
      setCourse(preselectedCourse);
    }
  }, [preselectedCourse]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please enter your name';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Valid email required';
    if (!phone.trim() || phone.replace(/[^0-9]/g, '').length < 8) errs.phone = 'Valid phone required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102D4F]/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FFFDF8] rounded-3xl max-w-lg w-full border border-[#1E4B7A]/20 shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F8F6EE] text-[#102D4F]/60 hover:text-[#102D4F] transition-colors"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
            </div>

            <h3 className="font-display text-2xl font-bold text-[#102D4F] mb-2">
              Consultation Requested!
            </h3>

            <p className="text-sm text-[#102D4F]/85 leading-relaxed mb-6">
              Thank you, <strong className="text-[#102D4F]">{name}</strong>. {SITE_CONFIG.brand.educatorName} has received your consultation booking request for the{' '}
              <strong className="text-[#1E4B7A]">
                {SITE_CONFIG.courses.find((c) => c.id === course)?.title || course}
              </strong>{' '}
              program. We will message you on WhatsApp ({phone}) with Google Meet / call links.
            </p>

            <div className="bg-[#F8F6EE] p-3.5 rounded-xl text-xs text-left mb-6 border border-[#1E4B7A]/10 space-y-1">
              <p className="font-semibold text-[#1E4B7A]">Preferred Window:</p>
              <p className="text-[#102D4F]">{preferredSlot}</p>
            </div>

            <button
              onClick={handleClose}
              className="py-3 px-8 rounded-full text-sm font-semibold text-[#FFFDF8] bg-[#1E4B7A] hover:bg-[#102D4F] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} noValidate className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              <Sparkles className="w-4 h-4" />
              <span>Complimentary 15-Minute Session</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-[#102D4F] leading-tight">
              Book a Free Consultation
            </h3>

            <p className="text-xs sm:text-sm text-[#102D4F]/75 leading-relaxed">
              Meet {SITE_CONFIG.brand.educatorName} online to discuss your background, identify key speaking goals, and explore whether 1-on-1 coaching or tuition is the best fit.
            </p>

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#102D4F] mb-1">
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8F6EE] border text-sm text-[#102D4F] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
                  errors.name ? 'border-rose-400' : 'border-[#1E4B7A]/20'
                }`}
              />
              {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#102D4F] mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8F6EE] border text-sm text-[#102D4F] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
                    errors.email ? 'border-rose-400' : 'border-[#1E4B7A]/20'
                  }`}
                />
                {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#102D4F] mb-1">
                  WhatsApp / Phone <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F8F6EE] border text-sm text-[#102D4F] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] ${
                    errors.phone ? 'border-rose-400' : 'border-[#1E4B7A]/20'
                  }`}
                />
                {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Target Program */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#102D4F] mb-1">
                Target Program
              </label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F6EE] border border-[#1E4B7A]/20 text-sm text-[#102D4F] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <option value="spoken-english">Spoken English & Fluency</option>
                <option value="school-tuition">School English Tuition (SSC, CBSE, Cambridge)</option>
                <option value="everyday-life">English for Everyday Life</option>
                <option value="general-inquiry">Not sure yet / General Guidance</option>
              </select>
            </div>

            {/* Preferred Time Window */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#102D4F] mb-1">
                Preferred Consultation Time
              </label>
              <select
                value={preferredSlot}
                onChange={(e) => setPreferredSlot(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F6EE] border border-[#1E4B7A]/20 text-sm text-[#102D4F] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <option value="Morning (10:00 AM – 1:00 PM IST)">Morning (10:00 AM – 1:00 PM IST)</option>
                <option value="Afternoon (2:00 PM – 5:00 PM IST)">Afternoon (2:00 PM – 5:00 PM IST)</option>
                <option value="Evening (5:00 PM – 8:00 PM IST)">Evening (5:00 PM – 8:00 PM IST)</option>
                <option value="Weekend Slot">Weekend Slot (Saturday / Sunday)</option>
              </select>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-full text-sm font-semibold text-[#102D4F] bg-[#D4AF37] hover:bg-[#DFBC4A] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {isSubmitting ? (
                  <span>Reserving Slot...</span>
                ) : (
                  <>
                    <span>Confirm Free Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-[#102D4F]/60 text-center">
              100% free · 15 minutes · No commitment required
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
