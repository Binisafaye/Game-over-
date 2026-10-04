import React, { useState } from 'react';
import { Grade, Subject, UnitInfo, Question } from '../types/curriculum';
import { ETHIOPIAN_CURRICULUM_UNITS } from '../data/curriculumUnits';
import { 
  X, 
  Sparkles, 
  Send, 
  BookOpen, 
  CheckCircle2, 
  Loader2, 
  Brain, 
  MessageSquare, 
  PlusCircle, 
  Check, 
  AlertCircle 
} from 'lucide-react';

interface AiTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGrade: Grade;
  defaultSubject: Subject;
  initialQuestion?: Question | null;
  initialSelectedChoice?: number;
  onAddGeneratedQuestions?: (questions: Question[]) => void;
}

export const AiTutorModal: React.FC<AiTutorModalProps> = ({
  isOpen,
  onClose,
  defaultGrade,
  defaultSubject,
  initialQuestion = null,
  initialSelectedChoice,
  onAddGeneratedQuestions
}) => {
  const [activeTab, setActiveTab] = useState<'tutor' | 'generator'>(
    initialQuestion ? 'tutor' : 'generator'
  );

  // Tutor state
  const [customQuestionText, setCustomQuestionText] = useState(
    initialQuestion ? initialQuestion.question : ''
  );
  const [tutorSubject, setTutorSubject] = useState<Subject>(
    initialQuestion ? initialQuestion.subject : defaultSubject
  );
  const [tutorGrade, setTutorGrade] = useState<Grade>(
    initialQuestion ? initialQuestion.grade : defaultGrade
  );
  const [tutorUnitTitle, setTutorUnitTitle] = useState(
    initialQuestion ? initialQuestion.unitTitle : ''
  );
  const [tutorExplanation, setTutorExplanation] = useState<string>('');
  const [isTutorLoading, setIsTutorLoading] = useState(false);
  const [tutorError, setTutorError] = useState<string | null>(null);

  // Generator state
  const [genSubject, setGenSubject] = useState<Subject>(defaultSubject);
  const [genGrade, setGenGrade] = useState<Grade>(defaultGrade);
  const [genUnitNumber, setGenUnitNumber] = useState<number>(1);
  const [genTopic, setGenTopic] = useState<string>('');
  const [genType, setGenType] = useState<'choice' | 'exercise'>('choice');
  const [genDifficulty, setGenDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [genCount, setGenCount] = useState<number>(3);
  const [isGenLoading, setIsGenLoading] = useState(false);
  const [genError, setGenError] = useState<string | null>(null);
  const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([]);
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Get current units for selected grade/subject
  const currentCurriculum = ETHIOPIAN_CURRICULUM_UNITS.find(
    c => c.grade === genGrade && c.subject === genSubject
  );
  const currentUnit = currentCurriculum?.units.find(u => u.unitNumber === genUnitNumber);

  // Handle Tutor Request
  const handleAskTutor = async () => {
    if (!customQuestionText.trim()) return;

    setIsTutorLoading(true);
    setTutorError(null);
    setTutorExplanation('');

    try {
      const payload: any = {
        question: customQuestionText,
        subject: tutorSubject,
        grade: tutorGrade,
        unitTitle: tutorUnitTitle || 'Ethiopian New Curriculum Standard',
      };

      if (initialQuestion && initialQuestion.options) {
        payload.options = initialQuestion.options;
        payload.correctAnswer = initialQuestion.correctAnswer;
        if (initialSelectedChoice !== undefined) {
          payload.selectedAnswer = initialSelectedChoice;
        }
      }

      const res = await fetch('/api/explain-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to connect to AI Tutor');
      }

      setTutorExplanation(data.explanation);
    } catch (err: any) {
      setTutorError(err.message || 'AI service is temporarily unavailable. Please try again.');
    } finally {
      setIsTutorLoading(false);
    }
  };

  // Handle Generate Questions
  const handleGenerate = async () => {
    setIsGenLoading(true);
    setGenError(null);
    setAddedSuccess(false);

    try {
      const res = await fetch('/api/generate-questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: genSubject,
          grade: genGrade,
          unitNumber: genUnitNumber,
          unitTitle: currentUnit?.title || `Unit ${genUnitNumber}`,
          topic: genTopic,
          questionType: genType,
          difficulty: genDifficulty,
          count: genCount
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to generate questions');
      }

      // Format questions
      const formatted: Question[] = (data.questions || []).map((q: any, i: number) => ({
        id: `ai-gen-${Date.now()}-${i}`,
        grade: genGrade,
        subject: genSubject,
        unitNumber: genUnitNumber,
        unitTitle: currentUnit?.title || `Unit ${genUnitNumber}`,
        topic: genTopic || currentUnit?.title,
        type: genType,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer ?? 0,
        explanation: q.explanation || 'Verified Ethiopian Curriculum logic.',
        keyConcept: q.keyConcept || 'Core Curriculum Principle',
        difficulty: genDifficulty,
        sourceNote: 'Generated by EthioSTEM AI Tutor (Ethiopian New Curriculum standard)'
      }));

      setGeneratedQuestions(formatted);
    } catch (err: any) {
      setGenError(err.message || 'Could not generate questions right now.');
    } finally {
      setIsGenLoading(false);
    }
  };

  const handleAddAllToBank = () => {
    if (onAddGeneratedQuestions && generatedQuestions.length > 0) {
      onAddGeneratedQuestions(generatedQuestions);
      setAddedSuccess(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl my-6 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Ethiopian Curriculum AI Tutor & Generator</span>
              </h2>
              <p className="text-xs text-slate-400">
                Powered by Gemini AI · Ethiopian New Curriculum Standard (Grade 9–12)
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

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('generator')}
            className={`flex-1 py-3 text-center border-b-2 transition flex items-center justify-center gap-2 ${
              activeTab === 'generator'
                ? 'border-amber-400 text-amber-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>Generate New Practice Questions</span>
          </button>
          <button
            onClick={() => setActiveTab('tutor')}
            className={`flex-1 py-3 text-center border-b-2 transition flex items-center justify-center gap-2 ${
              activeTab === 'tutor'
                ? 'border-amber-400 text-amber-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Explain Any Question / Problem</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm text-slate-200">
          {/* TAB 1: QUESTION GENERATOR */}
          {activeTab === 'generator' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Subject */}
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase">Subject</label>
                  <select
                    value={genSubject}
                    onChange={(e) => setGenSubject(e.target.value as Subject)}
                    aria-label="Select subject for generation"
                    className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                  >
                    {['Physics', 'Mathematics', 'Biology', 'Chemistry'].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Grade */}
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase">Grade</label>
                  <select
                    value={genGrade}
                    onChange={(e) => setGenGrade(e.target.value as Grade)}
                    aria-label="Select grade for generation"
                    className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                  >
                    {['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                {/* Unit */}
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase">Target Unit</label>
                  <select
                    value={genUnitNumber}
                    onChange={(e) => setGenUnitNumber(Number(e.target.value))}
                    aria-label="Select target unit for generation"
                    className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                  >
                    {currentCurriculum?.units.map(u => (
                      <option key={u.unitNumber} value={u.unitNumber}>
                        Unit {u.unitNumber}: {u.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Topic & Format */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase">Focus Topic (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Free fall, Remainder Theorem, DNA replication..."
                    value={genTopic}
                    onChange={(e) => setGenTopic(e.target.value)}
                    className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase">Difficulty</label>
                  <select
                    value={genDifficulty}
                    onChange={(e) => setGenDifficulty(e.target.value as any)}
                    aria-label="Select difficulty"
                    className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Easy">Easy (Conceptual / Base)</option>
                    <option value="Medium">Medium (Textbook Review)</option>
                    <option value="Hard">Hard (Entrance / Model Exam)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>Question Type:</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setGenType('choice')}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium transition ${
                        genType === 'choice'
                          ? 'bg-amber-500 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      Multiple Choice
                    </button>
                    <button
                      onClick={() => setGenType('exercise')}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium transition ${
                        genType === 'exercise'
                          ? 'bg-amber-500 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      Review Exercise
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isGenLoading}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md transition"
                >
                  {isGenLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating Curriculum Problems...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Generate 3 Questions</span>
                    </>
                  )}
                </button>
              </div>

              {genError && (
                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs text-rose-300 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{genError}</span>
                </div>
              )}

              {/* Display Generated Questions */}
              {generatedQuestions.length > 0 && (
                <div className="pt-4 border-t border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-200 text-xs uppercase tracking-wider">
                      Generated Questions ({generatedQuestions.length}):
                    </h3>
                    {onAddGeneratedQuestions && (
                      <button
                        onClick={handleAddAllToBank}
                        disabled={addedSuccess}
                        className={`text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition ${
                          addedSuccess
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                            : 'bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700'
                        }`}
                      >
                        {addedSuccess ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added to Active Practice Bank!</span>
                          </>
                        ) : (
                          <>
                            <PlusCircle className="w-3.5 h-3.5" />
                            <span>Add to Main Quiz Session</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <div className="space-y-3">
                    {generatedQuestions.map((q, idx) => (
                      <div key={q.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="font-bold text-amber-400">Q{idx + 1}</span>
                          <span>{q.difficulty}</span>
                        </div>
                        <p className="text-xs text-slate-200 font-medium whitespace-pre-line">{q.question}</p>
                        {q.options && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-xs text-slate-400">
                            {q.options.map((opt, oIdx) => (
                              <div
                                key={oIdx}
                                className={`p-2 rounded border ${
                                  oIdx === q.correctAnswer
                                    ? 'border-emerald-700 bg-emerald-950/40 text-emerald-200 font-semibold'
                                    : 'border-slate-800 bg-slate-900/60'
                                }`}
                              >
                                {opt}
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="pt-2 text-[11px] text-slate-400 bg-slate-900/60 p-2 rounded border border-slate-800/80">
                          <span className="font-semibold text-amber-400">Explanation: </span>
                          <span>{q.explanation}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: AI TUTOR / EXPLAIN ANY QUESTION */}
          {activeTab === 'tutor' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                Paste any problem or question from your Ethiopian textbook or exams to receive step-by-step working, conceptual proofs, and exam tips.
              </p>

              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase">Question Text</label>
                <textarea
                  rows={4}
                  value={customQuestionText}
                  onChange={(e) => setCustomQuestionText(e.target.value)}
                  placeholder="Paste or type question here..."
                  className="w-full mt-1 bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs sm:text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-400 leading-relaxed font-sans"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Target: {tutorSubject} ({tutorGrade})
                </span>

                <button
                  onClick={handleAskTutor}
                  disabled={isTutorLoading || !customQuestionText.trim()}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md transition"
                >
                  {isTutorLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Analyzing with AI Tutor...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Get Step-by-Step Explanation</span>
                    </>
                  )}
                </button>
              </div>

              {tutorError && (
                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/60 text-xs text-rose-300">
                  {tutorError}
                </div>
              )}

              {tutorExplanation && (
                <div className="mt-4 p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Ethiopian Curriculum Tutor Breakdown</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-2">
                    {tutorExplanation}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
