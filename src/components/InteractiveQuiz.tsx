import React, { useState } from 'react';
import { SITE_CONFIG, QuizQuestion } from '../config/siteConfig';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Sparkles, Lightbulb, MessageCircle } from 'lucide-react';

export const InteractiveQuiz: React.FC = () => {
  const questions = SITE_CONFIG.quizQuestions;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);

  const currentQuestion: QuizQuestion = questions[currentIndex];

  const handleSelectOption = (optionId: 'A' | 'B') => {
    if (hasAnswered) return;
    setSelectedOption(optionId);
    setHasAnswered(true);
    if (optionId === currentQuestion.naturalAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  const handleResetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
  };

  const isCorrect = selectedOption === currentQuestion.naturalAnswer;

  return (
    <section id="quiz" className="py-20 lg:py-28 bg-[#FFFDF8] border-b border-[#1E4B7A]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1E4B7A] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" aria-hidden="true" />
            <span>Interactive Learning Preview</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102D4F] tracking-tight mb-4">
            A Little English Practice, Anyone?
          </h2>

          <p className="text-base text-[#102D4F]/80 leading-relaxed font-normal">
            Test your conversational instincts. See how small tweaks in word choice transform stiff or awkward sentences into warm, natural English.
          </p>
        </div>

        {/* Quiz Master Card */}
        <div className="bg-[#102D4F] text-[#FFFDF8] rounded-3xl p-6 sm:p-10 border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#1E4B7A]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Top Bar: Category & Progress Counter */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                {currentQuestion.category}
              </span>
              <span className="text-xs text-[#A7C4E0] hidden sm:inline">
                Question {currentIndex + 1} of {questions.length}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-[#A7C4E0]">
              <span>Score: <strong className="text-white font-bold">{score}</strong></span>
              <button
                onClick={handleResetQuiz}
                className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                title="Reset Quiz"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Context Scenario */}
          <div className="mb-3 text-xs sm:text-sm text-[#A7C4E0] flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span><strong>Context:</strong> {currentQuestion.context}</span>
          </div>

          {/* The Question */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6 leading-snug">
            {currentQuestion.question}
          </h3>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const isNatural = option.id === currentQuestion.naturalAnswer;

              let cardStyle =
                'bg-white/5 border-white/15 hover:bg-white/10 hover:border-[#D4AF37]/50 text-white cursor-pointer';

              if (hasAnswered) {
                if (isNatural) {
                  cardStyle =
                    'bg-emerald-950/60 border-emerald-400 text-white ring-2 ring-emerald-400/50 shadow-md';
                } else if (isSelected && !isNatural) {
                  cardStyle =
                    'bg-rose-950/60 border-rose-400 text-white ring-2 ring-rose-400/50';
                } else {
                  cardStyle = 'bg-white/5 border-white/10 opacity-60 cursor-default';
                }
              }

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  disabled={hasAnswered}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 flex items-start justify-between gap-3 ${cardStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-display font-bold text-sm text-[#D4AF37] shrink-0">
                      {option.id}
                    </span>
                    <div>
                      <p className="font-display text-base sm:text-lg font-semibold text-white">
                        “{option.text}”
                      </p>
                      <p className="text-[11px] text-[#A7C4E0] mt-1 font-sans">
                        {option.id === 'A' ? 'Option A' : 'Option B'}
                      </p>
                    </div>
                  </div>

                  {hasAnswered && (
                    <div className="shrink-0 mt-1">
                      {isNatural ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-400" />
                      ) : null}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Explanation Card (Reveals after selection) */}
          {hasAnswered && (
            <div className="bg-[#FFFDF8] text-[#102D4F] rounded-2xl p-6 sm:p-7 border border-[#D4AF37] shadow-lg animate-fade-in mb-6">
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {isCorrect ? (
                    <Sparkles className="w-4 h-4" />
                  ) : (
                    <Lightbulb className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-[#102D4F]">
                    {isCorrect
                      ? currentQuestion.feedbackHeading
                      : `Almost! The natural phrasing is Option ${currentQuestion.naturalAnswer}.`}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#102D4F]/85 mt-2 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>

              {/* Practical Tip */}
              <div className="mt-4 pt-3 border-t border-[#1E4B7A]/10 bg-[#F8F6EE] p-3 rounded-xl flex items-start gap-2.5">
                <span className="font-script text-lg text-[#D4AF37] font-bold shrink-0">
                  Tip:
                </span>
                <p className="text-xs text-[#102D4F]/80 leading-normal">
                  {currentQuestion.practicalTip}
                </p>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs text-[#A7C4E0] text-center sm:text-left">
              {hasAnswered
                ? 'Ready for another real-world phrase?'
                : 'Click Option A or B above to check your conversational instinct.'}
            </p>

            <button
              onClick={handleNextQuestion}
              disabled={!hasAnswered}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                hasAnswered
                  ? 'bg-[#D4AF37] text-[#102D4F] hover:bg-[#DFBC4A] shadow-md cursor-pointer active:scale-95'
                  : 'bg-white/10 text-white/40 cursor-not-allowed'
              }`}
            >
              <span>Try Another Question</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
