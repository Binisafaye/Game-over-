import React, { useState } from 'react';
import { Grade, Subject, UnitInfo, Question } from '../types/curriculum';
import { ETHIOPIAN_CURRICULUM_UNITS } from '../data/curriculumUnits';
import { ALL_QUESTIONS } from '../data/allCurriculumQuestions';
import { BookOpen, CheckCircle, ChevronDown, ChevronUp, Play, Sparkles, HelpCircle, FileText } from 'lucide-react';

interface UnitExplorerProps {
  currentGrade: Grade;
  currentSubject: Subject;
  onStartUnitQuiz: (unitNumber: number) => void;
  onStartUnitExercises: (unitNumber: number) => void;
  onTriggerAiForUnit: (unit: UnitInfo) => void;
}

export const UnitExplorer: React.FC<UnitExplorerProps> = ({
  currentGrade,
  currentSubject,
  onStartUnitQuiz,
  onStartUnitExercises,
  onTriggerAiForUnit
}) => {
  const [expandedUnit, setExpandedUnit] = useState<number | null>(null);

  const curriculum = ETHIOPIAN_CURRICULUM_UNITS.find(
    c => c.grade === currentGrade && c.subject === currentSubject
  );

  if (!curriculum) {
    return (
      <div className="p-8 text-center text-slate-400">
        No curriculum data found for {currentSubject} {currentGrade}.
      </div>
    );
  }

  const getUnitQuestionStats = (unitNumber: number) => {
    const questions = ALL_QUESTIONS.filter(
      q => q.subject === currentSubject && q.grade === currentGrade && q.unitNumber === unitNumber
    );
    const choiceCount = questions.filter(q => q.type === 'choice').length;
    const exerciseCount = questions.filter(q => q.type !== 'choice').length;
    return { total: questions.length, choiceCount, exerciseCount, questions };
  };

  return (
    <div className="space-y-6">
      {/* Subject & Grade Overview Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800/80 border border-slate-700/60 rounded-xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wide uppercase mb-1">
              <span>Ethiopian Ministry of Education Syllabus</span>
              <span>·</span>
              <span>New Curriculum</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {currentSubject} — {currentGrade}
            </h1>
            <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
              {curriculum.overview}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
            <button
              onClick={() => onStartUnitQuiz(1)}
              className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Full Subject Quiz</span>
            </button>
          </div>
        </div>

        {/* Quick Curriculum Unit Count & Stats */}
        <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-slate-200">{curriculum.units.length}</span>
            <span>Total Units</span>
          </div>
          <span className="text-slate-600">·</span>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-emerald-400">Grade 9–12 Standard</span>
          </div>
          <span className="text-slate-600">·</span>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-amber-400">Entrance & Model Exam Aligned</span>
          </div>
        </div>
      </div>

      {/* Unit Cards List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-200 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <span>Official Units & Review Topics</span>
          </h2>
          <span className="text-xs text-slate-400">
            Select a unit to start quiz or view review problems
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {curriculum.units.map(unit => {
            const isExpanded = expandedUnit === unit.unitNumber;
            const stats = getUnitQuestionStats(unit.unitNumber);

            return (
              <div
                key={unit.unitNumber}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition"
              >
                {/* Header portion */}
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="font-bold text-amber-400">Unit {unit.unitNumber}</span>
                        <span>·</span>
                        <span>{unit.keyTopics.length} Core Topics</span>
                        {stats.total > 0 && (
                          <>
                            <span>·</span>
                            <span className="text-emerald-400 font-medium">
                              {stats.total} Questions Banked
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-white">
                        {unit.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {unit.description}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex sm:flex-col items-center gap-2 shrink-0">
                      <button
                        onClick={() => onStartUnitQuiz(unit.unitNumber)}
                        className="w-full px-3.5 py-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition shadow-sm"
                        title="Practice Multiple Choice Questions for this unit"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Unit Quiz</span>
                      </button>

                      <button
                        onClick={() => onStartUnitExercises(unit.unitNumber)}
                        className="w-full px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium flex items-center justify-center gap-1.5 transition"
                        title="View review questions and step-by-step problems"
                      >
                        <FileText className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Review Exercises</span>
                      </button>
                    </div>
                  </div>

                  {/* Syllabus Key Topics Preview */}
                  <div className="mt-3 pt-3 border-t border-slate-800/80">
                    <div className="text-xs text-slate-400 mb-1.5 font-medium">Core Syllabus Competencies:</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-300">
                      {unit.keyTopics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-500 font-bold shrink-0">›</span>
                          <span className="truncate">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Toggle details: formulas and AI generator */}
                  <div className="mt-3 pt-2 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setExpandedUnit(isExpanded ? null : unit.unitNumber)}
                      className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium transition"
                    >
                      <span>{isExpanded ? 'Hide Key Formulas & Notes' : 'View Formulas & Detailed Notes'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => onTriggerAiForUnit(unit)}
                      className="text-slate-400 hover:text-amber-300 flex items-center gap-1 transition"
                    >
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Generate More Unit Questions with AI</span>
                    </button>
                  </div>
                </div>

                {/* Expanded Section: Formulas & In-Depth Notes */}
                {isExpanded && (
                  <div className="bg-slate-950/60 p-4 sm:p-5 border-t border-slate-800 space-y-4">
                    {unit.formulas && unit.formulas.length > 0 ? (
                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                          <span>Essential Formulas for Unit {unit.unitNumber}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {unit.formulas.map((f, idx) => (
                            <div
                              key={idx}
                              className="bg-slate-900 border border-slate-800 rounded-lg p-2.5 space-y-1"
                            >
                              <div className="text-xs font-bold text-amber-400">{f.name}</div>
                              <div className="font-mono text-xs text-white bg-slate-950 px-2 py-1 rounded border border-slate-800">
                                {f.formula}
                              </div>
                              <div className="text-[11px] text-slate-400">{f.note}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs text-slate-400 italic">
                        Conceptual unit emphasizing biological, chemical, or physical mechanisms, principles, and models.
                      </div>
                    )}

                    {/* Pre-banked question preview */}
                    {stats.questions.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-slate-800/80">
                        <div className="text-xs font-semibold text-slate-300">
                          Sample Review Questions in Bank:
                        </div>
                        <div className="space-y-1.5">
                          {stats.questions.slice(0, 2).map((q) => (
                            <div key={q.id} className="text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80">
                              <span className="text-amber-400 font-semibold mr-1.5">[{q.type.toUpperCase()}]</span>
                              <span>{q.question}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
