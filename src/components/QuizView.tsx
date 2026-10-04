import React, { useState, useEffect } from 'react';
import { Question, Grade, Subject, UserStats } from '../types/curriculum';
import { ALL_QUESTIONS } from '../data/allCurriculumQuestions';
import { ETHIOPIAN_CURRICULUM_UNITS } from '../data/curriculumUnits';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Bookmark, 
  Sparkles, 
  HelpCircle, 
  Lightbulb, 
  Shuffle, 
  Check, 
  Filter 
} from 'lucide-react';
import { recordQuestionAttempt, toggleBookmark } from '../utils/storage';

interface QuizViewProps {
  currentGrade: Grade;
  currentSubject: Subject;
  initialUnitNumber?: number | null;
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onRequestAiExplanation: (question: Question, selectedIndex?: number) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  currentGrade,
  currentSubject,
  initialUnitNumber = null,
  stats,
  onUpdateStats,
  onRequestAiExplanation
}) => {
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>(
    initialUnitNumber !== null && initialUnitNumber !== undefined ? initialUnitNumber : 'all'
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // Filter available choice questions
  const curriculum = ETHIOPIAN_CURRICULUM_UNITS.find(
    c => c.grade === currentGrade && c.subject === currentSubject
  );

  const getFilteredQuestions = () => {
    return ALL_QUESTIONS.filter(q => {
      if (q.subject !== currentSubject || q.grade !== currentGrade) return false;
      if (q.type !== 'choice') return false;
      if (selectedUnit !== 'all' && q.unitNumber !== selectedUnit) return false;
      return true;
    });
  };

  const [questions, setQuestions] = useState<Question[]>(getFilteredQuestions);

  useEffect(() => {
    const filtered = getFilteredQuestions();
    setQuestions(filtered);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);
  }, [currentGrade, currentSubject, selectedUnit]);

  const currentQuestion = questions[currentIndex];
  const isBookmarked = currentQuestion ? stats.bookmarkedQuestionIds.includes(currentQuestion.id) : false;

  const handleSelectOption = (index: number) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedOption(index);
    setIsAnswered(true);
    setShowExplanation(true);

    const isCorrect = index === currentQuestion.correctAnswer;
    const unitKey = `${currentSubject}-${currentGrade}-U${currentQuestion.unitNumber}`;
    const updatedStats = recordQuestionAttempt(currentQuestion.id, unitKey, isCorrect);
    onUpdateStats(updatedStats);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowExplanation(false);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowExplanation(false);
  };

  const handleBookmarkToggle = () => {
    if (!currentQuestion) return;
    const { stats: updatedStats } = toggleBookmark(currentQuestion.id);
    onUpdateStats(updatedStats);
  };

  if (!currentQuestion || questions.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center space-y-4">
        <HelpCircle className="w-12 h-12 text-slate-500 mx-auto" />
        <h3 className="text-lg font-bold text-slate-200">
          No choice questions found for the selected unit.
        </h3>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          Try selecting "All Units" to practice questions from other units, or use our AI Generator to generate instant questions!
        </p>
        <button
          onClick={() => setSelectedUnit('all')}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition"
        >
          View All Units Questions
        </button>
      </div>
    );
  }

  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  return (
    <div className="space-y-6">
      {/* Filter and Navigation Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0">Unit Filter:</span>
          <select
            value={selectedUnit}
            onChange={(e) => {
              const val = e.target.value === 'all' ? 'all' : Number(e.target.value);
              setSelectedUnit(val);
            }}
            aria-label="Unit Filter"
            className="bg-slate-950 border border-slate-700 text-xs text-slate-200 rounded-md px-2.5 py-1.5 focus:outline-none focus:border-amber-400"
          >
            <option value="all">All Units ({questions.length} Questions)</option>
            {curriculum?.units.map(u => (
              <option key={u.unitNumber} value={u.unitNumber}>
                Unit {u.unitNumber}: {u.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShuffle}
            className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            title="Randomize question sequence"
          >
            <Shuffle className="w-3.5 h-3.5 text-amber-400" />
            <span>Shuffle</span>
          </button>

          <button
            onClick={handleBookmarkToggle}
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md border transition ${
              isBookmarked
                ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
            <span>{isBookmarked ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* Progress & Question Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-5 shadow-sm">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-400">Question {currentIndex + 1} of {questions.length}</span>
            <span>·</span>
            <span>Unit {currentQuestion.unitNumber}: {currentQuestion.unitTitle}</span>
            {currentQuestion.topic && (
              <>
                <span>·</span>
                <span className="text-slate-300">{currentQuestion.topic}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-400">Difficulty:</span>
            <span className={`font-semibold ${
              currentQuestion.difficulty === 'Easy' ? 'text-emerald-400' :
              currentQuestion.difficulty === 'Medium' ? 'text-amber-400' : 'text-rose-400'
            }`}>
              {currentQuestion.difficulty}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-amber-400 h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question Stem */}
        <div className="py-2">
          <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed whitespace-pre-line">
            {currentQuestion.question}
          </p>
          {currentQuestion.sourceNote && (
            <div className="mt-2 text-xs text-slate-500 italic">
              Source: {currentQuestion.sourceNote}
            </div>
          )}
        </div>

        {/* Options List */}
        <div className="space-y-2.5">
          {currentQuestion.options?.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrectOption = idx === currentQuestion.correctAnswer;

            let optionStyle = 'border-slate-800 bg-slate-950/70 hover:bg-slate-800/80 hover:border-slate-700 text-slate-200';

            if (isAnswered) {
              if (isCorrectOption) {
                optionStyle = 'border-emerald-500 bg-emerald-950/50 text-emerald-100 ring-1 ring-emerald-500/50';
              } else if (isSelected && !isCorrect) {
                optionStyle = 'border-rose-500 bg-rose-950/50 text-rose-100 ring-1 ring-rose-500/50';
              } else {
                optionStyle = 'border-slate-800/60 bg-slate-950/40 text-slate-500';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-sm sm:text-base font-normal transition-all flex items-start justify-between gap-3 ${optionStyle}`}
              >
                <span className="flex-1 leading-relaxed">{option}</span>
                {isAnswered && (
                  <span className="shrink-0 pt-0.5">
                    {isCorrectOption ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : isSelected ? (
                      <XCircle className="w-5 h-5 text-rose-400" />
                    ) : null}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Card upon Answering */}
        {showExplanation && (
          <div className="mt-5 p-4 sm:p-5 rounded-xl border bg-slate-950/80 space-y-3 border-slate-700/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-sm">
                    <Check className="w-4 h-4" />
                    <span>Correct Answer!</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-rose-400 font-bold text-sm">
                    <XCircle className="w-4 h-4" />
                    <span>Incorrect. The correct choice is: {currentQuestion.options?.[currentQuestion.correctAnswer ?? 0]}</span>
                  </div>
                )}
              </div>

              <button
                onClick={() => onRequestAiExplanation(currentQuestion, selectedOption ?? undefined)}
                className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-medium transition"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ask AI Tutor to Explain Further</span>
              </button>
            </div>

            <div className="text-sm text-slate-300 leading-relaxed space-y-2">
              <p>{currentQuestion.explanation}</p>
            </div>

            {/* Formula / Key Concept callouts */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div>
                <span className="font-semibold text-amber-400">Key Concept: </span>
                <span>{currentQuestion.keyConcept}</span>
              </div>
              {currentQuestion.formulaUsed && (
                <div>
                  <span className="font-semibold text-cyan-400">Formula: </span>
                  <span className="font-mono text-cyan-200">{currentQuestion.formulaUsed}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-xs text-slate-200 font-medium transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="text-xs text-slate-400">
            {currentIndex + 1} / {questions.length}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:pointer-events-none text-xs text-slate-950 font-bold transition shadow-sm"
          >
            <span>Next Question</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
