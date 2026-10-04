import React, { useState, useEffect } from 'react';
import { Question, Grade, Subject, UserStats } from '../types/curriculum';
import { ALL_QUESTIONS } from '../data/allCurriculumQuestions';
import { 
  Award, 
  Timer, 
  Flag, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  RotateCcw, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { recordQuestionAttempt } from '../utils/storage';

interface ModelExamSimulatorProps {
  currentGrade: Grade;
  currentSubject: Subject;
  stats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onRequestAiExplanation: (question: Question, selectedIndex?: number) => void;
}

export const ModelExamSimulator: React.FC<ModelExamSimulatorProps> = ({
  currentGrade,
  currentSubject,
  stats,
  onUpdateStats,
  onRequestAiExplanation
}) => {
  const [examStatus, setExamStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [timeRemaining, setTimeRemaining] = useState<number>(15 * 60); // 15 mins
  const [timedMode, setTimedMode] = useState<boolean>(true);

  // Timer countdown
  useEffect(() => {
    let interval: any = null;
    if (examStatus === 'running' && timedMode && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [examStatus, timedMode, timeRemaining]);

  const startExam = () => {
    // Collect choice questions for this subject & grade
    const available = ALL_QUESTIONS.filter(
      q => q.subject === currentSubject && q.grade === currentGrade && q.type === 'choice'
    );

    const shuffled = [...available].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));

    setExamQuestions(selected);
    setCurrentIdx(0);
    setAnswers({});
    setFlagged({});
    setTimeRemaining(questionCount * 90); // 1.5 min per question
    setExamStatus('running');
  };

  const finishExam = () => {
    // Record stats
    examQuestions.forEach((q, idx) => {
      const selected = answers[idx];
      const isCorrect = selected === q.correctAnswer;
      const unitKey = `${currentSubject}-${currentGrade}-U${q.unitNumber}`;
      recordQuestionAttempt(q.id, unitKey, isCorrect);
    });

    setExamStatus('completed');
  };

  const handleSelectOption = (optionIdx: number) => {
    if (examStatus !== 'running') return;
    setAnswers(prev => ({
      ...prev,
      [currentIdx]: optionIdx
    }));
  };

  const toggleFlag = (idx: number) => {
    setFlagged(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Score calculation
  const totalQuestions = examQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const correctCount = examQuestions.filter(
    (q, idx) => answers[idx] === q.correctAnswer
  ).length;
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // 1. Idle Setup Screen
  if (examStatus === 'idle') {
    const availableCount = ALL_QUESTIONS.filter(
      q => q.subject === currentSubject && q.grade === currentGrade && q.type === 'choice'
    ).length;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-center shadow-lg">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500/20 to-amber-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Ethiopian Ministry of Education Standard
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {currentSubject} {currentGrade} Model Examination
            </h1>
            <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Test your mastery with a timed simulated model exam covering all units of {currentGrade} {currentSubject}.
            </p>
          </div>

          {/* Exam Parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase">Number of Questions</label>
              <div className="flex gap-2">
                {[5, 10, 15].map(n => (
                  <button
                    key={n}
                    onClick={() => setQuestionCount(n)}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition ${
                      questionCount === n
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {n} Qs
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase">Timing Mode</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setTimedMode(true)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition ${
                    timedMode
                      ? 'bg-rose-600 text-white border-rose-500'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  Timed (90s / Q)
                </button>
                <button
                  onClick={() => setTimedMode(false)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition ${
                    !timedMode
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  Untimed
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{availableCount} Ethiopian Exam Questions in Pool</span>
            </div>
            <button
              onClick={startExam}
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-sm shadow-md transition"
            >
              Start Exam Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. Running Exam Screen
  if (examStatus === 'running') {
    const currentQ = examQuestions[currentIdx];
    const isCurrentFlagged = flagged[currentIdx] || false;
    const selectedOpt = answers[currentIdx];

    return (
      <div className="max-w-4xl mx-auto space-y-5">
        {/* Top Floating Control Bar */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between gap-4 shadow-md sticky top-28 z-30 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-amber-400">
              Q {currentIdx + 1} of {totalQuestions}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-300">
              Answered: {answeredCount}/{totalQuestions}
            </span>
          </div>

          {timedMode && (
            <div className={`flex items-center gap-1.5 text-sm font-mono font-bold px-3 py-1 rounded-lg border ${
              timeRemaining < 120 
                ? 'bg-rose-950/80 text-rose-400 border-rose-700 animate-pulse' 
                : 'bg-slate-950 text-slate-200 border-slate-800'
            }`}>
              <Timer className="w-4 h-4 text-rose-400" />
              <span>{formatTime(timeRemaining)}</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleFlag(currentIdx)}
              className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition ${
                isCurrentFlagged
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
              }`}
              title="Flag question to review later"
            >
              <Flag className={`w-3.5 h-3.5 ${isCurrentFlagged ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span className="hidden sm:inline">{isCurrentFlagged ? 'Flagged' : 'Flag'}</span>
            </button>

            <button
              onClick={finishExam}
              className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs transition shadow-sm"
            >
              Submit Exam
            </button>
          </div>
        </div>

        {/* Question Palette Grid */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center gap-1.5 overflow-x-auto">
          {examQuestions.map((_, i) => {
            const isAns = answers[i] !== undefined;
            const isFlg = flagged[i];
            const isCurr = currentIdx === i;

            let btnClass = 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700';
            if (isAns) btnClass = 'bg-emerald-950 text-emerald-300 border-emerald-700 font-semibold';
            if (isFlg) btnClass = 'bg-amber-950 text-amber-300 border-amber-600 font-semibold';
            if (isCurr) btnClass += ' ring-2 ring-amber-400';

            return (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                className={`w-8 h-8 rounded-lg border text-xs shrink-0 flex items-center justify-center transition ${btnClass}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        {/* Question Card */}
        {currentQ && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-7 space-y-6 shadow-sm">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span className="font-bold text-amber-400">Unit {currentQ.unitNumber}: {currentQ.unitTitle}</span>
              {currentQ.topic && (
                <>
                  <span>·</span>
                  <span>{currentQ.topic}</span>
                </>
              )}
            </div>

            <div className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed whitespace-pre-line">
              {currentQ.question}
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options?.map((opt, optIdx) => {
                const isSelected = selectedOpt === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-xl border text-sm sm:text-base transition flex items-start gap-3 ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500/10 text-white font-medium ring-1 ring-amber-500'
                        : 'border-slate-800 bg-slate-950/70 hover:bg-slate-800/80 text-slate-300'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs shrink-0 mt-0.5 ${
                      isSelected
                        ? 'border-amber-400 bg-amber-400 text-slate-950 font-bold'
                        : 'border-slate-700 text-slate-500'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="leading-relaxed flex-1">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Footer Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
                disabled={currentIdx === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs text-slate-200 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="text-xs text-slate-500">
                {answeredCount} of {totalQuestions} Answered
              </div>

              {currentIdx < totalQuestions - 1 ? (
                <button
                  onClick={() => setCurrentIdx(currentIdx + 1)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={finishExam}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-sm"
                >
                  <span>Finish & Grade</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 3. Completed Screen: Comprehensive Audit & Results
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Score Header Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-lg">
        <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center text-3xl font-extrabold border-4 ${
          scorePercent >= 75
            ? 'border-emerald-500 text-emerald-400 bg-emerald-950/40'
            : scorePercent >= 50
            ? 'border-amber-500 text-amber-400 bg-amber-950/40'
            : 'border-rose-500 text-rose-400 bg-rose-950/40'
        }`}>
          {scorePercent}%
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white">
            {scorePercent >= 75 ? 'Distinction Standard! 🏆' :
             scorePercent >= 50 ? 'Exam Passed! 👍' : 'Needs Further Revision 💡'}
          </h2>
          <p className="text-sm text-slate-300">
            You answered <span className="font-bold text-emerald-400">{correctCount}</span> out of{' '}
            <span className="font-bold text-white">{totalQuestions}</span> questions correctly on the {currentSubject} {currentGrade} Model.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={startExam}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Another Model Exam</span>
          </button>
          <button
            onClick={() => setExamStatus('idle')}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
          >
            Back to Exam Config
          </button>
        </div>
      </div>

      {/* Complete Audit of Answers */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-200">
          Detailed Question-by-Question Review:
        </h3>

        {examQuestions.map((q, idx) => {
          const userChoice = answers[idx];
          const isCorrect = userChoice === q.correctAnswer;

          return (
            <div
              key={q.id}
              className={`p-5 rounded-xl border space-y-3 ${
                isCorrect
                  ? 'bg-slate-900/90 border-slate-800'
                  : 'bg-rose-950/20 border-rose-900/50'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">Question {idx + 1}</span>
                  <span>·</span>
                  <span className="text-slate-400">Unit {q.unitNumber}: {q.unitTitle}</span>
                </div>

                <div className="flex items-center gap-1.5 font-bold">
                  {isCorrect ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Correct
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1">
                      <XCircle className="w-4 h-4" /> Incorrect
                    </span>
                  )}
                </div>
              </div>

              <div className="text-sm text-slate-100 font-medium whitespace-pre-line">
                {q.question}
              </div>

              {/* Options breakdown */}
              <div className="space-y-1.5 pt-1 text-xs">
                {q.options?.map((opt, optIdx) => {
                  const wasChosen = userChoice === optIdx;
                  const isRight = optIdx === q.correctAnswer;

                  let optClass = 'text-slate-400 bg-slate-950/40 border border-slate-800/60';
                  if (isRight) optClass = 'text-emerald-200 bg-emerald-950/40 border border-emerald-700 font-semibold';
                  if (wasChosen && !isRight) optClass = 'text-rose-200 bg-rose-950/40 border border-rose-700 line-through';

                  return (
                    <div key={optIdx} className={`p-2.5 rounded-lg flex items-center justify-between ${optClass}`}>
                      <span>{opt}</span>
                      {isRight && <span className="text-[11px] text-emerald-400 font-bold uppercase">Correct Answer</span>}
                      {wasChosen && !isRight && <span className="text-[11px] text-rose-400 font-bold uppercase">Your Choice</span>}
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800/80 text-xs text-slate-300 space-y-1.5">
                <div className="font-bold text-amber-400">Explanation:</div>
                <p>{q.explanation}</p>
                {q.formulaUsed && (
                  <div className="pt-1 text-slate-400 font-mono text-[11px]">
                    Formula: {q.formulaUsed}
                  </div>
                )}
              </div>

              <div className="pt-1 flex justify-end">
                <button
                  onClick={() => onRequestAiExplanation(q, userChoice)}
                  className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 transition"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask AI Ethiopian Tutor for this Question</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
