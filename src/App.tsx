import React, { useState, useEffect } from 'react';
import { Grade, Subject, StudyMode, Question, UnitInfo, UserStats } from './types/curriculum';
import { getStoredStats } from './utils/storage';
import { ALL_QUESTIONS } from './data/allCurriculumQuestions';
import { Header } from './components/Header';
import { UnitExplorer } from './components/UnitExplorer';
import { QuizView } from './components/QuizView';
import { ReviewExerciseView } from './components/ReviewExerciseView';
import { ModelExamSimulator } from './components/ModelExamSimulator';
import { AiTutorModal } from './components/AiTutorModal';
import { FormulaSheetModal } from './components/FormulaSheetModal';
import { SavedAndMistakesModal } from './components/SavedAndMistakesModal';
import { Sparkles, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentGrade, setCurrentGrade] = useState<Grade>('Grade 9');
  const [currentSubject, setCurrentSubject] = useState<Subject>('Physics');
  const [currentMode, setCurrentMode] = useState<StudyMode>('units');
  const [selectedUnitNumber, setSelectedUnitNumber] = useState<number | null>(null);

  // Stats state
  const [stats, setStats] = useState<UserStats>(getStoredStats);

  // Modals state
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [isFormulaModalOpen, setIsFormulaModalOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiTargetQuestion, setAiTargetQuestion] = useState<Question | null>(null);
  const [aiTargetChoice, setAiTargetChoice] = useState<number | undefined>(undefined);

  // Sync stats if changed
  useEffect(() => {
    setStats(getStoredStats());
  }, []);

  // Handlers for switching modes from UnitExplorer
  const handleStartUnitQuiz = (unitNumber: number) => {
    setSelectedUnitNumber(unitNumber);
    setCurrentMode('quiz');
  };

  const handleStartUnitExercises = (unitNumber: number) => {
    setSelectedUnitNumber(unitNumber);
    setCurrentMode('exercises');
  };

  const handleTriggerAiForUnit = (unit: UnitInfo) => {
    setAiTargetQuestion({
      id: `unit-${unit.unitNumber}-context`,
      grade: currentGrade,
      subject: currentSubject,
      unitNumber: unit.unitNumber,
      unitTitle: unit.title,
      type: 'review',
      question: `Review core concepts and problem-solving strategies for ${currentSubject} ${currentGrade} Unit ${unit.unitNumber}: ${unit.title}.`,
      explanation: '',
      keyConcept: unit.keyTopics.join(', '),
      difficulty: 'Medium'
    });
    setAiTargetChoice(undefined);
    setIsAiModalOpen(true);
  };

  const handleRequestAiExplanation = (question: Question, selectedIndex?: number) => {
    setAiTargetQuestion(question);
    setAiTargetChoice(selectedIndex);
    setIsAiModalOpen(true);
  };

  const handleSelectQuestionToPractice = (question: Question) => {
    setCurrentGrade(question.grade);
    setCurrentSubject(question.subject);
    setSelectedUnitNumber(question.unitNumber);
    if (question.type === 'choice') {
      setCurrentMode('quiz');
    } else {
      setCurrentMode('exercises');
    }
  };

  const handleAddGeneratedQuestions = (newQuestions: Question[]) => {
    ALL_QUESTIONS.unshift(...newQuestions);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navigation */}
      <Header
        currentGrade={currentGrade}
        currentSubject={currentSubject}
        currentMode={currentMode}
        stats={stats}
        onSelectGrade={(g) => {
          setCurrentGrade(g);
          setSelectedUnitNumber(null);
        }}
        onSelectSubject={(s) => {
          setCurrentSubject(s);
          setSelectedUnitNumber(null);
        }}
        onSelectMode={(m) => {
          setCurrentMode(m);
        }}
        onOpenSavedModal={() => setIsSavedModalOpen(true)}
        onOpenAiModal={() => {
          setAiTargetQuestion(null);
          setAiTargetChoice(undefined);
          setIsAiModalOpen(true);
        }}
        onOpenFormulaModal={() => setIsFormulaModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 md:py-8">
        {currentMode === 'units' && (
          <UnitExplorer
            currentGrade={currentGrade}
            currentSubject={currentSubject}
            onStartUnitQuiz={handleStartUnitQuiz}
            onStartUnitExercises={handleStartUnitExercises}
            onTriggerAiForUnit={handleTriggerAiForUnit}
          />
        )}

        {currentMode === 'quiz' && (
          <QuizView
            currentGrade={currentGrade}
            currentSubject={currentSubject}
            initialUnitNumber={selectedUnitNumber}
            stats={stats}
            onUpdateStats={setStats}
            onRequestAiExplanation={handleRequestAiExplanation}
          />
        )}

        {currentMode === 'exercises' && (
          <ReviewExerciseView
            currentGrade={currentGrade}
            currentSubject={currentSubject}
            initialUnitNumber={selectedUnitNumber}
            stats={stats}
            onUpdateStats={setStats}
            onRequestAiExplanation={(q) => handleRequestAiExplanation(q)}
          />
        )}

        {currentMode === 'exam' && (
          <ModelExamSimulator
            currentGrade={currentGrade}
            currentSubject={currentSubject}
            stats={stats}
            onUpdateStats={setStats}
            onRequestAiExplanation={handleRequestAiExplanation}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400">EthioSTEM Learning Platform</span>
            <span>·</span>
            <span>Aligned with the Ethiopian New Curriculum</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Physics · Mathematics · Biology · Chemistry</span>
            <span>·</span>
            <span>Grade 9–12</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <AiTutorModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        defaultGrade={currentGrade}
        defaultSubject={currentSubject}
        initialQuestion={aiTargetQuestion}
        initialSelectedChoice={aiTargetChoice}
        onAddGeneratedQuestions={handleAddGeneratedQuestions}
      />

      <FormulaSheetModal
        isOpen={isFormulaModalOpen}
        onClose={() => setIsFormulaModalOpen(false)}
        currentSubject={currentSubject}
        currentGrade={currentGrade}
      />

      <SavedAndMistakesModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        stats={stats}
        onUpdateStats={setStats}
        onSelectQuestionToPractice={handleSelectQuestionToPractice}
      />
    </div>
  );
}
