import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TeachingApproach } from './components/TeachingApproach';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal } from './components/LegalModals';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenConsultation = (courseId?: string) => {
    setPreselectedCourse(courseId);
    setIsConsultationOpen(true);
  };

  const handleExploreCourses = () => {
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnApproach = () => {
    const el = document.getElementById('approach');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnquireNow = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCourse = (courseId: string) => {
    setPreselectedCourse(courseId);
    // Scroll to contact form with the pre-selected course
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6EE] text-[#102D4F] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#102D4F]">
      {/* Top Header Navigation */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreCourses={handleExploreCourses}
        />

        {/* 2. About / Introduction Section */}
        <AboutSection onLearnApproach={handleLearnApproach} />

        {/* 3. Courses & Services Section */}
        <CoursesSection onSelectCourse={handleSelectCourse} />

        {/* 4. Why Choose This Learning Experience? */}
        <WhyChooseUs />

        {/* 5. Teaching Approach Section (4-Step Timeline) */}
        <TeachingApproach />

        {/* 6. Interactive English Learning Preview (Working Quiz) */}
        <InteractiveQuiz />

        {/* 7. Student Experience / Testimonials */}
        <TestimonialsSection />

        {/* 8. FAQ Accordion Section (8 required questions) */}
        <FaqSection />

        {/* 9. High-Conversion Banner */}
        <CtaBanner
          onOpenConsultation={() => handleOpenConsultation()}
          onEnquireNow={handleEnquireNow}
        />

        {/* 10. Contact Section with Form Validation */}
        <ContactSection selectedCourseId={preselectedCourse} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Free Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedCourse={preselectedCourse}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
