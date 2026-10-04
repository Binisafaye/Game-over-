import { UserStats } from '../types/curriculum';

const STATS_KEY = 'ethio_stem_stats_v1';

export function getStoredStats(): UserStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load stats', e);
  }
  return {
    totalAnswered: 0,
    totalCorrect: 0,
    streak: 0,
    bestStreak: 0,
    answeredQuestionIds: {},
    bookmarkedQuestionIds: [],
    unitMastery: {}
  };
}

export function saveStoredStats(stats: UserStats): void {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save stats', e);
  }
}

export function recordQuestionAttempt(
  questionId: string,
  unitKey: string,
  isCorrect: boolean
): UserStats {
  const stats = getStoredStats();
  stats.totalAnswered += 1;
  stats.answeredQuestionIds[questionId] = isCorrect;

  if (isCorrect) {
    stats.totalCorrect += 1;
    stats.streak += 1;
    if (stats.streak > stats.bestStreak) {
      stats.bestStreak = stats.streak;
    }
  } else {
    stats.streak = 0;
  }

  if (!stats.unitMastery[unitKey]) {
    stats.unitMastery[unitKey] = { attempted: 0, correct: 0 };
  }
  stats.unitMastery[unitKey].attempted += 1;
  if (isCorrect) {
    stats.unitMastery[unitKey].correct += 1;
  }

  saveStoredStats(stats);
  return stats;
}

export function toggleBookmark(questionId: string): { bookmarked: boolean; stats: UserStats } {
  const stats = getStoredStats();
  const index = stats.bookmarkedQuestionIds.indexOf(questionId);
  let bookmarked = false;
  if (index >= 0) {
    stats.bookmarkedQuestionIds.splice(index, 1);
    bookmarked = false;
  } else {
    stats.bookmarkedQuestionIds.push(questionId);
    bookmarked = true;
  }
  saveStoredStats(stats);
  return { bookmarked, stats };
}
