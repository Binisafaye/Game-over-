import React from 'react';
import { Grade, Subject, StudyMode, UserStats } from '../types/curriculum';
import { BookOpen, CheckCircle2, Bookmark, Sparkles, Calculator, Award, GraduationCap, Flame } from 'lucide-react';

interface HeaderProps {
  currentGrade: Grade;
  currentSubject: Subject;
  currentMode: StudyMode;
  stats: UserStats;
  onSelectGrade: (grade: Grade) => void;
  onSelectSubject: (subject: Subject) => void;
  onSelectMode: (mode: StudyMode) => void;
  onOpenSavedModal: () => void;
  onOpenAiModal: () => void;
  onOpenFormulaModal: () => void;
}

const GRADES: Grade[] = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
const SUBJECTS: Subject[] = ['Physics', 'Mathematics', 'Biology', 'Chemistry'];

export const Header: React.FC<HeaderProps> = ({
  currentGrade,
  currentSubject,
  currentMode,
  stats,
  onSelectGrade,
  onSelectSubject,
  onSelectMode,
  onOpenSavedModal,
  onOpenAiModal,
  onOpenFormulaModal
}) => {
  const accuracy = stats.totalAnswered > 0 
    ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) 
    : 0;

  return (
    <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-40">
      {/* Top Banner with Ethiopian Flag Subtle Accent */}
      <div className="h-1 w-full flex">
        <div className="h-full w-1/3 bg-emerald-500" />
        <div className="h-full w-1/3 bg-amber-400" />
        <div className="h-full w-1/3 bg-rose-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        {/* Row 1: Brand & Top Utilities */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-emerald-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white">EthioSTEM</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/50 font-medium">
                  New Curriculum
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Grade 9–12 Review Questions, Choice Quizzes & Exercises
              </p>
            </div>
          </div>

          {/* Quick Metrics & Modals */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Streak & Score Counter */}
            <div className="flex items-center gap-3 text-xs bg-slate-800/60 border border-slate-700/60 rounded-lg px-3 py-1.5 text-slate-300">
              <div className="flex items-center gap-1 text-amber-400 font-semibold" title="Current Correct Streak">
                <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500/40" />
                <span>{stats.streak} Streak</span>
              </div>
              <span className="text-slate-600">|</span>
              <div className="flex items-center gap-1" title="Solved / Total attempted">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{stats.totalCorrect}/{stats.totalAnswered} ({accuracy}%)</span>
              </div>
            </div>

            {/* Bookmarks & Mistakes */}
            <button
              onClick={onOpenSavedModal}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              title="Saved Questions & Mistake Notebook"
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-400" />
              <span>Saved ({stats.bookmarkedQuestionIds.length})</span>
            </button>

            {/* Formula Reference */}
            <button
              onClick={onOpenFormulaModal}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition"
              title="Key Formulas & Constants"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Formulas</span>
            </button>

            {/* AI Generator & Tutor */}
            <button
              onClick={onOpenAiModal}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-semibold shadow-sm transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Tutor & Generator</span>
            </button>
          </div>
        </div>

        {/* Row 2: Selectors for Grade, Subject & Mode */}
        <div className="pt-3 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          {/* Grade Selector */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 lg:pb-0">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1.5 shrink-0">Grade:</span>
            <div className="flex items-center gap-1 bg-slate-950/70 p-1 rounded-lg border border-slate-800">
              {GRADES.map(grade => {
                const isActive = currentGrade === grade;
                return (
                  <button
                    key={grade}
                    onClick={() => onSelectGrade(grade)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    {grade}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subject Selector */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 lg:pb-0">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1.5 shrink-0">Subject:</span>
            <div className="flex items-center gap-1 bg-slate-950/70 p-1 rounded-lg border border-slate-800">
              {SUBJECTS.map(subject => {
                const isActive = currentSubject === subject;
                let colorClass = 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60';
                if (isActive) {
                  if (subject === 'Physics') colorClass = 'bg-cyan-600 text-white shadow-sm';
                  if (subject === 'Mathematics') colorClass = 'bg-indigo-600 text-white shadow-sm';
                  if (subject === 'Biology') colorClass = 'bg-emerald-600 text-white shadow-sm';
                  if (subject === 'Chemistry') colorClass = 'bg-amber-600 text-white shadow-sm';
                }
                return (
                  <button
                    key={subject}
                    onClick={() => onSelectSubject(subject)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${colorClass}`}
                  >
                    {subject}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Row 3: Study Modes Tabs */}
        <div className="mt-3 pt-2.5 border-t border-slate-800/70 flex items-center gap-1 overflow-x-auto">
          <button
            onClick={() => onSelectMode('units')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentMode === 'units'
                ? 'bg-slate-800 text-amber-400 border border-amber-500/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Units & Review Notes</span>
          </button>

          <button
            onClick={() => onSelectMode('quiz')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentMode === 'quiz'
                ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Choice Quiz</span>
          </button>

          <button
            onClick={() => onSelectMode('exercises')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentMode === 'exercises'
                ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Step-by-Step Exercises</span>
          </button>

          <button
            onClick={() => onSelectMode('exam')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentMode === 'exam'
                ? 'bg-slate-800 text-rose-400 border border-rose-500/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>National Model Exam</span>
          </button>
        </div>
      </div>
    </header>
  );
};
