import React, { useState } from 'react';
import { SITE_CONFIG, Course } from '../config/siteConfig';
import { CheckCircle2, ArrowRight, BookOpen, Layers, X } from 'lucide-react';

interface CoursesSectionProps {
  onSelectCourse: (courseId: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse }) => {
  const [activeSyllabusModal, setActiveSyllabusModal] = useState<Course | null>(null);

  return (
    <section id="courses" className="py-20 lg:py-28 bg-[#F8F6EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1E4B7A] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
            <span>Structured Learning Options</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102D4F] tracking-tight mb-4">
            Find the Right Learning Path for You
          </h2>

          <p className="text-base sm:text-lg text-[#102D4F]/80 leading-relaxed font-normal">
            Whether you&apos;re improving your academic English or developing everyday speaking confidence, find a learning experience that fits your goals.
          </p>
        </div>

        {/* 3 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SITE_CONFIG.courses.map((course) => (
            <div
              key={course.id}
              className="group bg-[#FFFDF8] rounded-2xl border border-[#1E4B7A]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative"
            >
              {/* Badge if present */}
              {course.badge && (
                <div className="absolute top-4 right-4 z-10 bg-[#102D4F] text-[#FFFDF8] border border-[#D4AF37]/50 text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
                  {course.badge}
                </div>
              )}

              {/* Course Visual Asset */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1E4B7A]/5 border-b border-[#1E4B7A]/10">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102D4F]/30 to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#102D4F] mb-1 group-hover:text-[#1E4B7A] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#D4AF37] mb-3">
                    {course.tagline}
                  </p>
                  <p className="text-sm text-[#102D4F]/80 leading-relaxed mb-5">
                    {course.description}
                  </p>

                  {/* Curriculum tags for School Tuition */}
                  {course.curriculumHighlight && (
                    <div className="mb-5 pb-4 border-b border-[#1E4B7A]/10">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1E4B7A] block mb-2">
                        Supported Curricula
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.curriculumHighlight.map((curr) => (
                          <span
                            key={curr}
                            className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#EDF3F8] text-[#1E4B7A] border border-[#A7C4E0]/40"
                          >
                            {curr}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Features List */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1E4B7A] block">
                      What You Will Practice
                    </span>
                    {course.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#102D4F]/85">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#1E4B7A]/10 space-y-2.5 mt-auto">
                  <button
                    onClick={() => onSelectCourse(course.id)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-[#FFFDF8] bg-[#1E4B7A] hover:bg-[#102D4F] active:scale-[0.98] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                  >
                    <span>{course.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>

                  <button
                    onClick={() => setActiveSyllabusModal(course)}
                    className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-[#1E4B7A] hover:text-[#102D4F] hover:bg-[#F8F6EE] rounded-lg transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Syllabus Outline</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Syllabus Modal */}
      {activeSyllabusModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102D4F]/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FFFDF8] rounded-2xl max-w-lg w-full border border-[#1E4B7A]/20 shadow-2xl p-6 sm:p-7 relative overflow-hidden">
            <button
              onClick={() => setActiveSyllabusModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F8F6EE] text-[#102D4F]/70 hover:text-[#102D4F] transition-colors"
              aria-label="Close syllabus preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1">
              <Layers className="w-4 h-4" />
              <span>Syllabus Breakdown</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-[#102D4F] mb-1">
              {activeSyllabusModal.title}
            </h3>
            <p className="text-xs text-[#1E4B7A] mb-4">{activeSyllabusModal.tagline}</p>

            <p className="text-xs sm:text-sm text-[#102D4F]/80 mb-5">
              Designed around active learner participation and progressive conversational confidence.
            </p>

            <div className="space-y-3 mb-6 max-h-64 overflow-y-auto pr-1">
              {activeSyllabusModal.syllabusOverview.map((item, idx) => (
                <div key={idx} className="bg-[#F8F6EE] p-3.5 rounded-xl border border-[#1E4B7A]/10">
                  <div className="text-xs font-bold text-[#1E4B7A] mb-0.5">{item.module}</div>
                  <div className="text-xs text-[#102D4F]/85">{item.focus}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const courseId = activeSyllabusModal.id;
                  setActiveSyllabusModal(null);
                  onSelectCourse(courseId);
                }}
                className="flex-1 py-3 px-4 rounded-xl text-sm font-semibold text-[#FFFDF8] bg-[#1E4B7A] hover:bg-[#102D4F] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enquire About This Course</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
