import React, { useState } from 'react';
import { Question, UserStats } from '../types/curriculum';
import { ALL_QUESTIONS } from '../data/allCurriculumQuestions';
import { X, Bookmark, AlertTriangle, CheckCircle2, ChevronRight, Trash2 } from 'lucide-react';
import { toggleBookmark } from '../utils/storage';

interface SavedAndMistakesModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onSelectQuestionToPractice: (question: Question) => void;
}

export const SavedAndMistakesModal: React.FC<SavedAndMistakesModalProps> = ({
  isOpen,
  onClose,
  stats,
  onUpdateStats,
  onSelectQuestionToPractice
}) => {
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'mistakes'>('bookmarks');

  if (!isOpen) return null;

  // Bookmarked questions
  const bookmarkedQuestions = ALL_QUESTIONS.filter(q =>
    stats.bookmarkedQuestionIds.includes(q.id)
  );

  // Mistake questions (answered false)
  const mistakeQuestionIds = Object.keys(stats.answeredQuestionIds).filter(
    id => stats.answeredQuestionIds[id] === false
  );
  const mistakeQuestions = ALL_QUESTIONS.filter(q =>
    mistakeQuestionIds.includes(q.id)
  );

  const handleRemoveBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const { stats: updated } = toggleBookmark(id);
    onUpdateStats(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl my-6 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Bookmark className="w-4 h-4 fill-amber-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Saved & Mistake Revision Hub
              </h2>
              <p className="text-xs text-slate-400">
                Review tricky problems and practice your past mistakes
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`flex-1 py-3 text-center border-b-2 transition flex items-center justify-center gap-2 ${
              activeTab === 'bookmarks'
                ? 'border-amber-400 text-amber-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Bookmarked Questions ({bookmarkedQuestions.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('mistakes')}
            className={`flex-1 py-3 text-center border-b-2 transition flex items-center justify-center gap-2 ${
              activeTab === 'mistakes'
                ? 'border-rose-400 text-rose-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Mistake Notebook ({mistakeQuestions.length})</span>
          </button>
        </div>

        {/* Content list */}
        <div className="p-5 overflow-y-auto space-y-3 flex-1">
          {activeTab === 'bookmarks' ? (
            bookmarkedQuestions.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-xs space-y-2">
                <Bookmark className="w-8 h-8 text-slate-600 mx-auto" />
                <p>No questions bookmarked yet.</p>
                <p className="text-slate-500">Click the bookmark icon while solving quizzes or exercises to save them here!</p>
              </div>
            ) : (
              bookmarkedQuestions.map(q => (
                <div
                  key={q.id}
                  onClick={() => {
                    onSelectQuestionToPractice(q);
                    onClose();
                  }}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 cursor-pointer transition space-y-2 group"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-amber-400">
                      {q.subject} · {q.grade} · Unit {q.unitNumber}
                    </span>
                    <button
                      onClick={(e) => handleRemoveBookmark(q.id, e)}
                      className="text-slate-500 hover:text-rose-400 transition p-1"
                      title="Remove bookmark"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                    {q.question}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span>{q.keyConcept}</span>
                    <span className="text-amber-400 group-hover:translate-x-0.5 transition flex items-center gap-0.5">
                      Practice Now <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))
            )
          ) : (
            mistakeQuestions.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-xs space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                <p className="text-slate-200 font-semibold">Your Mistake Notebook is empty!</p>
                <p className="text-slate-500">Every time you answer a question incorrectly, it will appear here so you can review it.</p>
              </div>
            ) : (
              mistakeQuestions.map(q => (
                <div
                  key={q.id}
                  onClick={() => {
                    onSelectQuestionToPractice(q);
                    onClose();
                  }}
                  className="p-4 rounded-xl bg-slate-950 border border-rose-900/40 hover:border-rose-500 cursor-pointer transition space-y-2 group"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-rose-400">
                      {q.subject} · {q.grade} · Unit {q.unitNumber}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800 font-semibold">
                      To Master
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                    {q.question}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>Topic: {q.keyConcept}</span>
                    <span className="text-amber-400 group-hover:translate-x-0.5 transition flex items-center gap-0.5">
                      Retry Question <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))
            )
          )}
        </div>
      </div>
    </div>
  );
};
