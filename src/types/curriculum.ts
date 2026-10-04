export type Grade = 'Grade 9' | 'Grade 10' | 'Grade 11' | 'Grade 12';

export type Subject = 'Physics' | 'Mathematics' | 'Biology' | 'Chemistry';

export type QuestionType = 'choice' | 'review' | 'exercise';

export interface Question {
  id: string;
  grade: Grade;
  subject: Subject;
  unitNumber: number;
  unitTitle: string;
  topic?: string;
  type: QuestionType; // 'choice' = Multiple choice, 'review' = Conceptual review, 'exercise' = Computational/analytical exercise
  question: string;
  options?: string[]; // for choice questions: ["A. ...", "B. ...", "C. ...", "D. ..."]
  correctAnswer?: number; // index 0..3 for choice questions
  correctAnswerText?: string; // for review/exercise questions
  explanation: string;
  stepByStepSolution?: string[];
  keyConcept: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  formulaUsed?: string;
  sourceNote?: string; // e.g. "Ethiopian New Curriculum Textbook Review Question" or "National Model Exam Style"
}

export interface UnitInfo {
  unitNumber: number;
  title: string;
  description: string;
  keyTopics: string[];
  formulas?: { name: string; formula: string; note: string }[];
  keyDefinitions?: { term: string; definition: string }[];
}

export interface SubjectCurriculum {
  subject: Subject;
  grade: Grade;
  overview: string;
  units: UnitInfo[];
}

export interface UserStats {
  totalAnswered: number;
  totalCorrect: number;
  streak: number;
  bestStreak: number;
  answeredQuestionIds: Record<string, boolean>; // id -> correct or not
  bookmarkedQuestionIds: string[];
  unitMastery: Record<string, { attempted: number; correct: number }>;
}

export type StudyMode = 'units' | 'quiz' | 'exercises' | 'exam' | 'formulas' | 'ai-tutor';
