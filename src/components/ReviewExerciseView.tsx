import React, { useState } from 'react';
import { Question, Grade, Subject, UserStats } from '../types/curriculum';
import { ALL_QUESTIONS } from '../data/allCurriculumQuestions';
import { ETHIOPIAN_CURRICULUM_UNITS } from '../data/curriculumUnits';
import { 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Bookmark, 
  Sparkles, 
  Filter, 
  Lightbulb,
  Calculator,
  HelpCircle
} from 'lucide-react';
import { toggleBookmark } from '../utils/storage';

interface ReviewExerciseViewProps {
  currentGrade: Grade;
  currentSubject: Subject;
  initialUnitNumber?: number | null;
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onRequestAiExplanation: (question: Question) => void;
}

export const ReviewExerciseView: React.FC<ReviewExerciseViewProps> = ({
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
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<'all' | 'exercise' | 'review'>('all');

  const curriculum = ETHIOPIAN_CURRICULUM_UNITS.find(
    c => c.grade === currentGrade && c.subject === currentSubject
  );

  // Get exercises and review questions
  const exerciseQuestions = ALL_QUESTIONS.filter(q => {
    if (q.subject !== currentSubject || q.grade !== currentGrade) return false;
    if (q.type === 'choice') return false; // Non-choice: review and exercises
    if (selectedUnit !== 'all' && q.unitNumber !== selectedUnit) return false;
    if (activeTab !== 'all' && q.type !== activeTab) return false;
    return true;
  });

  const toggleReveal = (id: string) => {
    setRevealedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleBookmarkToggle = (id: string) => {
    const { stats: updatedStats } = toggleBookmark(id);
    onUpdateStats(updatedStats);
  };

  return (
    <div className="space-y-6">
      {/* Header and Filter Controls */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-cyan-400" />
            <span>Unit Review Questions & Exercises</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Work through these multi-step textbook exercises, then reveal the step-by-step solution to verify your working.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Unit selector */}
          <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedUnit}
              onChange={(e) => {
                const val = e.target.value === 'all' ? 'all' : Number(e.target.value);
                setSelectedUnit(val);
              }}
              aria-label="Filter exercises by unit"
              className="bg-transparent text-xs text-slate-200 focus:outline-none"
            >
              <option value="all">All Units ({exerciseQuestions.length})</option>
              {curriculum?.units.map(u => (
                <option key={u.unitNumber} value={u.unitNumber}>
                  Unit {u.unitNumber}: {u.title}
                </option>
              ))}
            </select>
          </div>

          {/* Type tabs */}
          <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-1 rounded-md transition ${activeTab === 'all' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-slate-200'}`}
            >
              All Types
            </button>
            <button
              onClick={() => setActiveTab('exercise')}
              className={`px-2.5 py-1 rounded-md transition ${activeTab === 'exercise' ? 'bg-cyan-900/60 text-cyan-300 font-medium' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Calculations
            </button>
            <button
              onClick={() => setActiveTab('review')}
              className={`px-2.5 py-1 rounded-md transition ${activeTab === 'review' ? 'bg-amber-900/60 text-amber-300 font-medium' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Conceptual
            </button>
          </div>
        </div>
      </div>

      {/* Exercises List */}
      {exerciseQuestions.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center space-y-3">
          <HelpCircle className="w-10 h-10 text-slate-500 mx-auto" />
          <p className="text-sm text-slate-300 font-medium">
            No structured exercises found for this specific filter.
          </p>
          <p className="text-xs text-slate-400">
            Switch unit filter to "All Units" or use the AI Generator button to create custom textbook review exercises!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {exerciseQuestions.map((q, idx) => {
            const isRevealed = revealedIds[q.id] || false;
            const isBookmarked = stats.bookmarkedQuestionIds.includes(q.id);

            return (
              <div
                key={q.id}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700/80 transition shadow-sm"
              >
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-cyan-400">Exercise #{idx + 1}</span>
                      <span>·</span>
                      <span>Unit {q.unitNumber}: {q.unitTitle}</span>
                      {q.topic && (
                        <>
                          <span>·</span>
                          <span className="text-slate-300">{q.topic}</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${
                        q.type === 'exercise' ? 'text-cyan-400' : 'text-amber-400'
                      }`}>
                        {q.type === 'exercise' ? 'Analytical Exercise' : 'Review Concept'}
                      </span>
                      <span>·</span>
                      <button
                        onClick={() => handleBookmarkToggle(q.id)}
                        className="p-1 hover:text-amber-400 transition"
                        title="Bookmark question"
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : 'text-slate-500'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Question Stem */}
                  <div className="text-base text-slate-100 font-normal leading-relaxed whitespace-pre-line">
                    {q.question}
                  </div>

                  {/* Source Note */}
                  {q.sourceNote && (
                    <div className="text-xs text-slate-500 italic">
                      {q.sourceNote}
                    </div>
                  )}

                  {/* Action row: reveal button & AI help */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80">
                    <button
                      onClick={() => toggleReveal(q.id)}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition"
                    >
                      <span>{isRevealed ? 'Hide Solution' : 'Reveal Step-by-Step Solution'}</span>
                      {isRevealed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => onRequestAiExplanation(q)}
                      className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium transition"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Ask AI Ethiopian Tutor for Hints & Derivation</span>
                    </button>
                  </div>
                </div>

                {/* Solution Reveal Section */}
                {isRevealed && (
                  <div className="bg-slate-950/80 border-t border-slate-800 p-5 sm:p-6 space-y-4">
                    {/* Final Answer Banner */}
                    {q.correctAnswerText && (
                      <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-xs text-emerald-200 space-y-1">
                        <div className="font-bold text-emerald-400 uppercase tracking-wider text-[11px]">
                          Final Verified Result:
                        </div>
                        <div className="font-mono text-sm text-emerald-100">
                          {q.correctAnswerText}
                        </div>
                      </div>
                    )}

                    {/* Step-by-step working */}
                    {q.stepByStepSolution && q.stepByStepSolution.length > 0 && (
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                          Step-by-Step Derivation & Working:
                        </div>
                        <div className="space-y-2">
                          {q.stepByStepSolution.map((step, stepIdx) => (
                            <div
                              key={stepIdx}
                              className="text-xs text-slate-200 bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 flex items-start gap-2.5"
                            >
                              <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                                {stepIdx + 1}
                              </span>
                              <div className="leading-relaxed flex-1">{step}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Conceptual Explanation */}
                    <div className="text-xs text-slate-300 leading-relaxed space-y-1.5 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                      <div className="font-bold text-amber-400">Detailed Conceptual Reasoning:</div>
                      <p className="whitespace-pre-line">{q.explanation}</p>
                    </div>

                    {/* Key concept and formula */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                      <div>
                        <span className="font-semibold text-amber-400">Core Principle: </span>
                        <span>{q.keyConcept}</span>
                      </div>
                      {q.formulaUsed && (
                        <div>
                          <span className="font-semibold text-cyan-400">Formula: </span>
                          <span className="font-mono text-cyan-200">{q.formulaUsed}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
