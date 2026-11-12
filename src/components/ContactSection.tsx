import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

interface ContactSectionProps {
  selectedCourseId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedCourseId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: selectedCourseId || 'spoken-english',
    curriculum: 'cbse',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if selectedCourseId prop changes
  React.useEffect(() => {
    if (selectedCourseId) {
      setFormData((prev) => ({ ...prev, course: selectedCourseId }));
    }
  }, [selectedCourseId]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone or WhatsApp number';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits)';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief note about your goals or questions';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API integration (ready for form backend or mailer)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      course: 'spoken-english',
      curriculum: 'cbse',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Channels & Trust */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1E4B7A] uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
                <span>Get In Touch</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#102D4F] tracking-tight mb-4 leading-tight">
                Let&apos;s Discuss Your Learning Goals
              </h2>

              <p className="text-sm sm:text-base text-[#102D4F]/80 leading-relaxed mb-8">
                Have questions regarding class timings, syllabus customization, or fee options? Send a message below or connect directly on WhatsApp.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4 mb-8">
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                    SITE_CONFIG.contact.whatsappDefaultMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFFDF8] border border-[#1E4B7A]/15 hover:border-[#D4AF37] shadow-sm hover:shadow transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-display text-sm font-bold text-[#102D4F] group-hover:text-[#1E4B7A]">
                        Chat on WhatsApp
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#1E4B7A]" />
                    </div>
                    <span className="text-xs text-[#1E4B7A] font-medium">
                      Fastest response · {SITE_CONFIG.contact.displayPhone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFFDF8] border border-[#1E4B7A]/15 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#1E4B7A]/10 text-[#1E4B7A] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display text-sm font-bold text-[#102D4F] block">
                      Email Enquiry
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-xs text-[#1E4B7A] hover:underline font-medium"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFFDF8] border border-[#1E4B7A]/15 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display text-sm font-bold text-[#102D4F] block">
                      Consultation Hours & Reply Time
                    </span>
                    <span className="text-xs text-[#102D4F]/80">
                      {SITE_CONFIG.contact.hours} · {SITE_CONFIG.contact.responseTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#EDF3F8] border border-[#A7C4E0]/40 text-xs text-[#1E4B7A]">
              <span className="font-semibold block mb-0.5">Note on Privacy:</span>
              Your contact details are strictly kept confidential and used solely to coordinate your learning plan.
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFDF8] rounded-3xl p-7 sm:p-10 border border-[#1E4B7A]/15 shadow-xl relative">
              {isSubmitted ? (
                <div className="text-center py-10 px-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#102D4F] mb-3">
                    Enquiry Received!
                  </h3>

                  <p className="text-sm sm:text-base text-[#102D4F]/80 max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <strong className="text-[#102D4F]">{formData.fullName}</strong>. We have saved your enquiry details for the{' '}
                    <strong className="text-[#1E4B7A]">
                      {SITE_CONFIG.courses.find((c) => c.id === formData.course)?.title || formData.course}
                    </strong>{' '}
                    program. {SITE_CONFIG.brand.educatorName} will review your message and reply via WhatsApp or email within 24 hours.
                  </p>

                  <div className="bg-[#F8F6EE] p-4 rounded-xl max-w-sm mx-auto text-xs text-left mb-6 border border-[#1E4B7A]/10 space-y-1">
                    <p className="text-[#1E4B7A] font-semibold">Summary of your enquiry:</p>
                    <p className="text-[#102D4F]">Email: {formData.email}</p>
                    <p className="text-[#102D4F]">Phone: {formData.phone}</p>
                    <p className="text-[#102D4F]">Goal / Note: &ldquo;{formData.message}&rdquo;</p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold text-[#102D4F] bg-[#D4AF37] hover:bg-[#DFBC4A] rounded-full transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-[#1E4B7A]/10 pb-4 mb-2">
                    <h3 className="font-display text-2xl font-bold text-[#102D4F]">
                      Send an Enquiry
                    </h3>
                    <p className="text-xs text-[#102D4F]/70 mt-1">
                      Fill out this quick form and we will get back to you with syllabus details and available batch times.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#102D4F] mb-1.5"
                    >
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rahul Sharma / Meera Patel"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F8F6EE] border text-sm text-[#102D4F] placeholder:text-[#102D4F]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-[#1E4B7A]/20'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#102D4F] mb-1.5"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#F8F6EE] border text-sm text-[#102D4F] placeholder:text-[#102D4F]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all ${
                          errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-[#1E4B7A]/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#102D4F] mb-1.5"
                      >
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 76759 59312"
                        className={`w-full px-4 py-3 rounded-xl bg-[#F8F6EE] border text-sm text-[#102D4F] placeholder:text-[#102D4F]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all ${
                          errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-[#1E4B7A]/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Course Interested In */}
                  <div>
                    <label
                      htmlFor="course"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#102D4F] mb-1.5"
                    >
                      Course of Interest <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F6EE] border border-[#1E4B7A]/20 text-sm text-[#102D4F] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all cursor-pointer"
                    >
                      <option value="spoken-english">Spoken English & Conversation Fluency</option>
                      <option value="school-tuition">School English Tuition (SSC / CBSE / Cambridge)</option>
                      <option value="everyday-life">English for Everyday Life & Social Situations</option>
                      <option value="free-consultation">General Enquiry / 15-Min Free Consultation</option>
                    </select>
                  </div>

                  {/* If School Tuition selected, ask for Board / Grade */}
                  {formData.course === 'school-tuition' && (
                    <div className="bg-[#EDF3F8] p-3.5 rounded-xl border border-[#A7C4E0]/40 animate-fade-in">
                      <label className="block text-xs font-semibold text-[#1E4B7A] mb-1.5">
                        Student Curriculum Background:
                      </label>
                      <div className="flex flex-wrap gap-4 text-xs text-[#102D4F]">
                        <label className="inline-flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="curriculum"
                            value="cbse"
                            checked={formData.curriculum === 'cbse'}
                            onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                            className="text-[#1E4B7A] focus:ring-[#D4AF37]"
                          />
                          <span>CBSE Board</span>
                        </label>
                        <label className="inline-flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="curriculum"
                            value="cambridge"
                            checked={formData.curriculum === 'cambridge'}
                            onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                            className="text-[#1E4B7A] focus:ring-[#D4AF37]"
                          />
                          <span>Cambridge (IGCSE/O-Level)</span>
                        </label>
                        <label className="inline-flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="curriculum"
                            value="ssc"
                            checked={formData.curriculum === 'ssc'}
                            onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                            className="text-[#1E4B7A] focus:ring-[#D4AF37]"
                          />
                          <span>SSC / State Board</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Message / Goal */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#102D4F] mb-1.5"
                    >
                      Your Learning Goal or Questions <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you would like to achieve (e.g. speak confidently in meetings, improve board exam essay writing, practice everyday English)..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#F8F6EE] border text-sm text-[#102D4F] placeholder:text-[#102D4F]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all resize-none ${
                        errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-[#1E4B7A]/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full text-sm font-semibold text-white bg-[#1E4B7A] hover:bg-[#102D4F] active:scale-[0.99] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Enquiry...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4 text-[#D4AF37]" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#102D4F]/60 text-center">
                    Integration ready. No hidden fees. We will contact you directly to arrange an introductory consultation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
