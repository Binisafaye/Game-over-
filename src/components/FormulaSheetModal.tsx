import React, { useState } from 'react';
import { Grade, Subject } from '../types/curriculum';
import { ETHIOPIAN_CURRICULUM_UNITS } from '../data/curriculumUnits';
import { X, Search, Copy, Check, Calculator, BookOpen } from 'lucide-react';

interface FormulaSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSubject: Subject;
  currentGrade: Grade;
}

interface CommonConstant {
  name: string;
  symbol: string;
  value: string;
  subject: Subject;
}

const COMMON_CONSTANTS: CommonConstant[] = [
  { name: 'Acceleration due to gravity (standard)', symbol: 'g', value: '9.80 m/s² (often 10 m/s² in Ethiopian exams)', subject: 'Physics' },
  { name: 'Universal Gravitational Constant', symbol: 'G', value: '6.674 × 10⁻¹¹ N·m²/kg²', subject: 'Physics' },
  { name: 'Speed of Light in Vacuum', symbol: 'c', value: '3.00 × 10⁸ m/s', subject: 'Physics' },
  { name: 'Planck Constant', symbol: 'h', value: '6.626 × 10⁻³⁴ J·s  (4.136 × 10⁻¹⁵ eV·s)', subject: 'Physics' },
  { name: 'Electrostatic Coulomb Constant', symbol: 'k', value: '8.99 × 10⁹ N·m²/C²', subject: 'Physics' },
  { name: 'Avogadro Constant', symbol: 'N_A', value: '6.022 × 10²³ particles/mol', subject: 'Chemistry' },
  { name: 'Ideal Gas Constant', symbol: 'R', value: '0.0821 L·atm/(mol·K) = 8.314 J/(mol·K)', subject: 'Chemistry' },
  { name: 'Faraday Constant', symbol: 'F', value: '96,485 C/mol e⁻ (≈ 96,500 C/mol)', subject: 'Chemistry' },
  { name: 'Water Autoionization Product (25°C)', symbol: 'K_w', value: '1.0 × 10⁻¹⁴', subject: 'Chemistry' },
  { name: 'Molar Gas Volume at STP', symbol: 'V_m', value: '22.4 L/mol (at 0°C, 1 atm)', subject: 'Chemistry' }
];

export const FormulaSheetModal: React.FC<FormulaSheetModalProps> = ({
  isOpen,
  onClose,
  currentSubject,
  currentGrade
}) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject>(currentSubject);
  const [selectedGrade, setSelectedGrade] = useState<Grade | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  if (!isOpen) return null;

  // Collect all formulas from ETHIOPIAN_CURRICULUM_UNITS
  const allFormulas: Array<{
    grade: Grade;
    subject: Subject;
    unitNumber: number;
    unitTitle: string;
    name: string;
    formula: string;
    note: string;
  }> = [];

  ETHIOPIAN_CURRICULUM_UNITS.forEach(c => {
    c.units.forEach(u => {
      if (u.formulas) {
        u.formulas.forEach(f => {
          allFormulas.push({
            grade: c.grade,
            subject: c.subject,
            unitNumber: u.unitNumber,
            unitTitle: u.title,
            name: f.name,
            formula: f.formula,
            note: f.note
          });
        });
      }
    });
  });

  const filteredFormulas = allFormulas.filter(f => {
    if (f.subject !== selectedSubject) return false;
    if (selectedGrade !== 'all' && f.grade !== selectedGrade) return false;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        f.name.toLowerCase().includes(term) ||
        f.formula.toLowerCase().includes(term) ||
        f.unitTitle.toLowerCase().includes(term) ||
        f.note.toLowerCase().includes(term)
      );
    }
    return true;
  });

  const filteredConstants = COMMON_CONSTANTS.filter(
    c => c.subject === selectedSubject && (
      !searchTerm || c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleCopy = (formula: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedFormula(formula);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl my-6 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Formula Sheet & Physical Constants
              </h2>
              <p className="text-xs text-slate-400">
                Ethiopian Secondary Curriculum Quick Reference (Grade 9–12)
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

        {/* Filter Controls */}
        <div className="p-4 border-b border-slate-800 bg-slate-950/40 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Subject Selector */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
              {['Physics', 'Mathematics', 'Biology', 'Chemistry'].map(s => (
                <button
                  key={s}
                  onClick={() => setSelectedSubject(s as Subject)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition ${
                    selectedSubject === s
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Grade Selector */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
              {['all', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].map(g => (
                <button
                  key={g}
                  onClick={() => setSelectedGrade(g as any)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition ${
                    selectedGrade === g
                      ? 'bg-slate-800 text-white font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {g === 'all' ? 'All Grades' : g.replace('Grade ', 'G')}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search formula, theorem, or constant (e.g. Bernoulli, Log, Molarity, Gravitation)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Content list */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1">
          {/* Constants (if applicable) */}
          {filteredConstants.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Standard Physical & Chemical Constants
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredConstants.map((c, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="text-slate-200 font-medium">{c.name} ({c.symbol})</div>
                      <div className="font-mono text-cyan-300 text-[11px]">{c.value}</div>
                    </div>
                    <button
                      onClick={() => handleCopy(c.value)}
                      className="p-1 text-slate-500 hover:text-amber-400 transition"
                      title="Copy constant"
                    >
                      {copiedFormula === c.value ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Formulas */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Curriculum Formulas ({filteredFormulas.length})
            </h3>

            {filteredFormulas.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-500">
                No matching formulas found.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredFormulas.map((f, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2 hover:border-slate-700 transition"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-400">{f.name}</span>
                      <span className="text-[10px] text-slate-500">{f.grade} · U{f.unitNumber}</span>
                    </div>

                    <div className="p-2 rounded bg-slate-900 border border-slate-800/80 font-mono text-xs text-cyan-200 flex items-center justify-between gap-2">
                      <span className="truncate">{f.formula}</span>
                      <button
                        onClick={() => handleCopy(f.formula)}
                        className="text-slate-500 hover:text-cyan-400 shrink-0"
                        title="Copy formula"
                      >
                        {copiedFormula === f.formula ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-normal">
                      {f.note}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
