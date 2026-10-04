import { Question } from '../types/curriculum';

export const COMPREHENSIVE_QUESTION_BANK: Question[] = [
  // =========================================================================
  // PHYSICS - GRADE 9
  // =========================================================================
  {
    id: 'phy-g9-u2-1',
    grade: 'Grade 9',
    subject: 'Physics',
    unitNumber: 2,
    unitTitle: 'Physical Quantities and Measurement',
    topic: 'SI Units & Significant Figures',
    type: 'choice',
    question: 'Which of the following sets consists solely of fundamental (base) SI quantities?',
    options: [
      'A. Mass, velocity, time, temperature',
      'B. Length, mass, time, electric current',
      'C. Force, work, electric charge, amount of substance',
      'D. Length, acceleration, luminous intensity, pressure'
    ],
    correctAnswer: 1,
    explanation: 'In the SI system, there are seven base physical quantities: length (m), mass (kg), time (s), electric current (A), thermodynamic temperature (K), amount of substance (mol), and luminous intensity (cd). Velocity, force, work, acceleration, and pressure are derived quantities.',
    keyConcept: 'SI Base Quantities vs Derived Quantities',
    difficulty: 'Easy',
    sourceNote: 'Ethiopian New Curriculum Grade 9 Physics Unit 2 Review'
  },
  {
    id: 'phy-g9-u3-1',
    grade: 'Grade 9',
    subject: 'Physics',
    unitNumber: 3,
    unitTitle: 'Motion in One Dimension',
    topic: 'Uniform Acceleration Kinematics',
    type: 'choice',
    question: 'A car initially at rest accelerates uniformly at 2.5 m/s² for 8 seconds along a straight Ethiopian highway. What distance does the car travel during this time?',
    options: [
      'A. 20 meters',
      'B. 40 meters',
      'C. 80 meters',
      'D. 160 meters'
    ],
    correctAnswer: 2,
    explanation: 'Using the kinematic equation s = ut + (1/2)at² where initial velocity u = 0, acceleration a = 2.5 m/s², and time t = 8 s:\ns = 0 × 8 + 0.5 × 2.5 × (8)² = 0.5 × 2.5 × 64 = 80 m.',
    stepByStepSolution: [
      'Identify given values: Initial velocity u = 0 m/s, Acceleration a = 2.5 m/s², Time t = 8 s',
      'Select equation: s = ut + 0.5 · a · t²',
      'Substitute values: s = (0)(8) + 0.5 · (2.5) · (64)',
      'Calculate: s = 0.5 · 160 = 80 m'
    ],
    formulaUsed: 's = ut + (1/2)at²',
    keyConcept: 'Equations of Uniformly Accelerated Motion',
    difficulty: 'Medium',
    sourceNote: 'Grade 9 Physics Unit 3 Exercise'
  },
  {
    id: 'phy-g9-u4-1',
    grade: 'Grade 9',
    subject: 'Physics',
    unitNumber: 4,
    unitTitle: 'Force, Work, Energy, and Power',
    topic: "Newton's Second Law & Friction",
    type: 'choice',
    question: 'A horizontal force of 50 N is applied to pull a 10 kg wooden crate across a horizontal floor. If the coefficient of kinetic friction between the crate and the floor is 0.3 (take g = 10 m/s²), what is the acceleration of the crate?',
    options: [
      'A. 5.0 m/s²',
      'B. 3.0 m/s²',
      'C. 2.0 m/s²',
      'D. 0.5 m/s²'
    ],
    correctAnswer: 2,
    explanation: 'Normal force N = mg = 10 kg × 10 m/s² = 100 N.\nFriction force f_k = μ_k × N = 0.3 × 100 N = 30 N.\nNet force F_net = F_applied - f_k = 50 N - 30 N = 20 N.\nFrom Newton\'s Second Law: a = F_net / m = 20 N / 10 kg = 2.0 m/s².',
    stepByStepSolution: [
      'Compute normal force: N = mg = 10 kg × 10 m/s² = 100 N',
      'Compute frictional resisting force: f_k = μ_k · N = 0.3 × 100 N = 30 N',
      'Calculate net horizontal force: F_net = 50 N - 30 N = 20 N',
      'Apply F = ma: a = F_net / m = 20 N / 10 kg = 2.0 m/s²'
    ],
    formulaUsed: 'F_net = ma; f_k = μ_k N',
    keyConcept: "Frictional Force & Newton's Second Law",
    difficulty: 'Medium',
    sourceNote: 'Grade 9 Physics Unit 4 Review Question'
  },
  {
    id: 'phy-g9-u5-1',
    grade: 'Grade 9',
    subject: 'Physics',
    unitNumber: 5,
    unitTitle: 'Simple Machines',
    topic: 'Efficiency and Mechanical Advantage',
    type: 'exercise',
    question: 'A pulley system has a velocity ratio (VR) of 5. It is used to raise a load of 1200 N by exerting an effort of 300 N. Calculate:\n(a) The mechanical advantage (MA) of the machine.\n(b) The efficiency (η) of the pulley system.',
    correctAnswerText: '(a) MA = 4.0; (b) Efficiency = 80%',
    explanation: 'Mechanical Advantage is Load divided by Effort: 1200 N / 300 N = 4.0. Efficiency is (MA / VR) × 100% = (4.0 / 5) × 100% = 80%.',
    stepByStepSolution: [
      'Step 1: Calculate Mechanical Advantage: MA = Load / Effort = 1200 N / 300 N = 4.0',
      'Step 2: Calculate Efficiency: Efficiency = (MA / VR) × 100%',
      'Step 3: Substitute values: Efficiency = (4.0 / 5) × 100% = 0.8 × 100% = 80%'
    ],
    formulaUsed: 'MA = Load/Effort; η = (MA / VR) × 100%',
    keyConcept: 'Efficiency of Simple Machines',
    difficulty: 'Medium',
    sourceNote: 'Grade 9 Physics Unit 5 Review Exercise'
  },
  {
    id: 'phy-g9-u6-1',
    grade: 'Grade 9',
    subject: 'Physics',
    unitNumber: 6,
    unitTitle: 'Fluid Statics',
    topic: "Pascal's Principle",
    type: 'choice',
    question: 'In a hydraulic lift used in an automotive workshop in Addis Ababa, a small piston of cross-sectional area 0.02 m² is pushed with a force of 400 N. What force is produced on the large piston if its area is 0.5 m²?',
    options: [
      'A. 1,000 N',
      'B. 8,000 N',
      'C. 10,000 N',
      'D. 20,000 N'
    ],
    correctAnswer: 2,
    explanation: "According to Pascal's Principle, pressure is transmitted undiminished: P₁ = P₂ ⟹ F₁ / A₁ = F₂ / A₂. Therefore, F₂ = F₁ × (A₂ / A₁) = 400 N × (0.5 m² / 0.02 m²) = 400 × 25 = 10,000 N.",
    formulaUsed: 'F₁ / A₁ = F₂ / A₂',
    keyConcept: "Pascal's Law of Fluid Transmission",
    difficulty: 'Easy',
    sourceNote: 'Grade 9 Physics Unit 6 Review'
  },

  // =========================================================================
  // PHYSICS - GRADE 10
  // =========================================================================
  {
    id: 'phy-g10-u1-1',
    grade: 'Grade 10',
    subject: 'Physics',
    unitNumber: 1,
    unitTitle: 'Vector Quantities',
    topic: 'Dot Product of Vectors',
    type: 'choice',
    question: 'Given two vectors A = 3î + 4ĵ and B = 4î - 3ĵ, what is the scalar (dot) product A · B, and what does it imply about the orientation of the two vectors?',
    options: [
      'A. 25, they are parallel in the same direction',
      'B. 0, they are mutually perpendicular (orthogonal)',
      'C. -7, they form an obtuse angle',
      'D. 12, they form an acute angle of 45°'
    ],
    correctAnswer: 1,
    explanation: 'The scalar product is A · B = (A_x × B_x) + (A_y × B_y) = (3)(4) + (4)(-3) = 12 - 12 = 0. Since A · B = |A||B| cos(θ) = 0 and both magnitudes are non-zero, cos(θ) = 0, meaning θ = 90°. The vectors are orthogonal.',
    formulaUsed: 'A · B = A_x B_x + A_y B_y = |A||B| cos(θ)',
    keyConcept: 'Orthogonal Vectors & Scalar Product',
    difficulty: 'Easy',
    sourceNote: 'Grade 10 Physics Unit 1 Review'
  },
  {
    id: 'phy-g10-u2-1',
    grade: 'Grade 10',
    subject: 'Physics',
    unitNumber: 2,
    unitTitle: 'Motion in Two Dimensions',
    topic: 'Projectile Motion',
    type: 'choice',
    question: 'A ball is launched from ground level with an initial speed of 20 m/s at an angle of 30° above the horizontal. Taking g = 10 m/s² and ignoring air resistance, what is the maximum height reached by the ball?',
    options: [
      'A. 2.5 meters',
      'B. 5.0 meters',
      'C. 10.0 meters',
      'D. 15.0 meters'
    ],
    correctAnswer: 1,
    explanation: 'Initial vertical velocity component: u_y = u sin(30°) = 20 × 0.5 = 10 m/s.\nMaximum height H = u_y² / (2g) = (10)² / (2 × 10) = 100 / 20 = 5.0 m.',
    stepByStepSolution: [
      'Find initial vertical velocity: u_y = u sin(θ) = 20 · sin(30°) = 20 · 0.5 = 10 m/s',
      'At peak height, vertical velocity v_y = 0',
      'Using v_y² = u_y² - 2gH: 0 = (10)² - 2(10)H',
      '20H = 100 ⟹ H = 5.0 m'
    ],
    formulaUsed: 'H_max = (u sin θ)² / (2g)',
    keyConcept: 'Maximum Height in Projectile Motion',
    difficulty: 'Medium',
    sourceNote: 'Grade 10 Physics Unit 2 Exercise'
  },
  {
    id: 'phy-g10-u3-1',
    grade: 'Grade 10',
    subject: 'Physics',
    unitNumber: 3,
    unitTitle: 'Electromagnetism',
    topic: "Faraday's Law & Transformers",
    type: 'choice',
    question: 'A step-down transformer connected to a 220 V AC line has 800 turns in its primary coil and 40 turns in its secondary coil. What is the secondary voltage?',
    options: [
      'A. 11 V',
      'B. 22 V',
      'C. 44 V',
      'D. 110 V'
    ],
    correctAnswer: 0,
    explanation: 'The transformer turns ratio equation states: V_s / V_p = N_s / N_p. Therefore, V_s = V_p × (N_s / N_p) = 220 V × (40 / 800) = 220 × (1 / 20) = 11 V.',
    formulaUsed: 'V_s / V_p = N_s / N_p',
    keyConcept: 'Transformer Voltage-Turns Ratio',
    difficulty: 'Easy',
    sourceNote: 'Ethiopian Grade 10 Physics Unit 3 Model Question'
  },

  // =========================================================================
  // PHYSICS - GRADE 11
  // =========================================================================
  {
    id: 'phy-g11-u3-1',
    grade: 'Grade 11',
    subject: 'Physics',
    unitNumber: 3,
    unitTitle: 'Dynamics and Newton’s Laws',
    topic: 'Circular Motion & Banking of Roads',
    type: 'choice',
    question: 'A highway curve of radius 80 m is banked so that cars can negotiate the turn safely at 20 m/s without relying on friction. What is the banking angle θ of the road? (Take g = 10 m/s²)',
    options: [
      'A. arctan(0.25)',
      'B. arctan(0.50)',
      'C. arctan(0.75)',
      'D. arctan(1.00)'
    ],
    correctAnswer: 1,
    explanation: 'For a frictionless banked turn, the horizontal component of the normal force supplies the centripetal force: N sin(θ) = mv² / r. The vertical component balances gravity: N cos(θ) = mg. Dividing equations yields tan(θ) = v² / (rg) = (20)² / (80 × 10) = 400 / 800 = 0.50. Hence θ = arctan(0.50) ≈ 26.6°.',
    formulaUsed: 'tan(θ) = v² / (rg)',
    keyConcept: 'Ideal Banking Angle for Frictionless Curves',
    difficulty: 'Medium',
    sourceNote: 'Grade 11 Physics Unit 3 Review'
  },
  {
    id: 'phy-g11-u5-1',
    grade: 'Grade 11',
    subject: 'Physics',
    unitNumber: 5,
    unitTitle: 'Rotational Motion and Equilibrium',
    topic: 'Moment of Inertia and Angular Momentum',
    type: 'choice',
    question: 'A solid disk of mass M = 4 kg and radius R = 0.5 m rotates about its central axis with an angular speed of 10 rad/s. Given that the moment of inertia of a solid disk is I = (1/2)MR², what is its rotational kinetic energy?',
    options: [
      'A. 10 Joules',
      'B. 25 Joules',
      'C. 50 Joules',
      'D. 100 Joules'
    ],
    correctAnswer: 1,
    explanation: 'First compute moment of inertia: I = 0.5 × M × R² = 0.5 × 4 kg × (0.5 m)² = 2 × 0.25 = 0.5 kg·m².\nRotational Kinetic Energy: KE_rot = (1/2) I ω² = 0.5 × 0.5 × (10 rad/s)² = 0.25 × 100 = 25 J.',
    formulaUsed: 'KE_rot = (1/2)Iω²; I = (1/2)MR²',
    keyConcept: 'Rotational Kinetic Energy',
    difficulty: 'Medium',
    sourceNote: 'Grade 11 Physics Unit 5 Review'
  },

  // =========================================================================
  // PHYSICS - GRADE 12
  // =========================================================================
  {
    id: 'phy-g12-u3-1',
    grade: 'Grade 12',
    subject: 'Physics',
    unitNumber: 3,
    unitTitle: 'Fluid Mechanics',
    topic: "Equation of Continuity & Bernoulli's Principle",
    type: 'choice',
    question: 'Water flows through a horizontal pipe. At section 1, the cross-sectional area is 20 cm² and the flow speed is 3.0 m/s. At section 2, the pipe constricts to an area of 5.0 cm². What is the water speed at section 2, and what happens to the fluid pressure?',
    options: [
      'A. 0.75 m/s, pressure increases',
      'B. 12 m/s, pressure decreases',
      'C. 12 m/s, pressure increases',
      'D. 6.0 m/s, pressure remains constant'
    ],
    correctAnswer: 1,
    explanation: "By the Equation of Continuity for incompressible fluids: A₁v₁ = A₂v₂ ⟹ v₂ = (A₁ / A₂) × v₁ = (20 cm² / 5 cm²) × 3.0 m/s = 4 × 3.0 = 12 m/s. According to Bernoulli's equation for horizontal flow (P + (1/2)ρv² = constant), as speed increases, static pressure decreases.",
    formulaUsed: 'A₁v₁ = A₂v₂; P + (1/2)ρv² = Constant',
    keyConcept: "Continuity Equation & Bernoulli's Effect",
    difficulty: 'Medium',
    sourceNote: 'Ethiopian University Entrance Examination (EUEE) Physics Style'
  },
  {
    id: 'phy-g12-u5-1',
    grade: 'Grade 12',
    subject: 'Physics',
    unitNumber: 5,
    unitTitle: 'Atomic and Nuclear Physics',
    topic: 'Photoelectric Effect & Work Function',
    type: 'choice',
    question: 'Light of frequency 8.0 × 10¹⁴ Hz shines on a metallic surface whose work function is 2.0 eV. What is the maximum kinetic energy of the emitted photoelectrons? (Take Planck constant h = 4.14 × 10⁻¹⁵ eV·s)',
    options: [
      'A. 0.69 eV',
      'B. 1.31 eV',
      'C. 3.31 eV',
      'D. 5.31 eV'
    ],
    correctAnswer: 1,
    explanation: "From Einstein's photoelectric equation: KE_max = hf - Φ. Energy of incident photon = hf = (4.14 × 10⁻¹⁵ eV·s) × (8.0 × 10¹⁴ s⁻¹) = 3.312 eV. Therefore, KE_max = 3.312 eV - 2.0 eV = 1.31 eV.",
    formulaUsed: 'KE_max = hf - Φ',
    keyConcept: 'Einstein Photoelectric Equation',
    difficulty: 'Hard',
    sourceNote: 'Grade 12 Physics Unit 5 National Exam Standard'
  },

  // =========================================================================
  // MATHEMATICS - GRADE 9
  // =========================================================================
  {
    id: 'math-g9-u1-1',
    grade: 'Grade 9',
    subject: 'Mathematics',
    unitNumber: 1,
    unitTitle: 'Further on Sets',
    topic: 'Venn Diagrams & Inclusion-Exclusion',
    type: 'choice',
    question: 'In a class of 50 Grade 9 students in Hawassa, 30 students study Physics, 25 study Chemistry, and 12 study both subjects. How many students study neither Physics nor Chemistry?',
    options: [
      'A. 5 students',
      'B. 7 students',
      'C. 12 students',
      'D. 18 students'
    ],
    correctAnswer: 1,
    explanation: 'By the principle of inclusion-exclusion: n(P ∪ C) = n(P) + n(C) - n(P ∩ C) = 30 + 25 - 12 = 43 students study at least one subject. Therefore, students studying neither = Total - n(P ∪ C) = 50 - 43 = 7 students.',
    formulaUsed: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B)',
    keyConcept: 'Principle of Inclusion-Exclusion',
    difficulty: 'Easy',
    sourceNote: 'Grade 9 Mathematics Unit 1 Review'
  },
  {
    id: 'math-g9-u3-1',
    grade: 'Grade 9',
    subject: 'Mathematics',
    unitNumber: 3,
    unitTitle: 'Solving Equations and Inequalities',
    topic: 'Absolute Value Equations',
    type: 'choice',
    question: 'What is the complete solution set for the absolute value equation |3x - 5| = 7?',
    options: [
      'A. {4}',
      'B. {-2/3, 4}',
      'C. {2/3, -4}',
      'D. {-4, 4}'
    ],
    correctAnswer: 1,
    explanation: 'Split into two linear equations: Case 1: 3x - 5 = 7 ⟹ 3x = 12 ⟹ x = 4. Case 2: 3x - 5 = -7 ⟹ 3x = -2 ⟹ x = -2/3. Thus the solution set is {-2/3, 4}.',
    formulaUsed: '|u| = c ⟺ u = c or u = -c',
    keyConcept: 'Absolute Value Linear Equations',
    difficulty: 'Easy',
    sourceNote: 'Grade 9 Mathematics Unit 3 Review'
  },

  // =========================================================================
  // MATHEMATICS - GRADE 10
  // =========================================================================
  {
    id: 'math-g10-u2-1',
    grade: 'Grade 10',
    subject: 'Mathematics',
    unitNumber: 2,
    unitTitle: 'Polynomial Functions',
    topic: 'Remainder Theorem & Factor Theorem',
    type: 'choice',
    question: 'When the polynomial P(x) = 2x³ - 5x² + kx - 6 is divided by (x - 2), the remainder is 8. What is the value of the constant k?',
    options: [
      'A. 3',
      'B. 6',
      'C. 9',
      'D. 12'
    ],
    correctAnswer: 2,
    explanation: 'By the Remainder Theorem, the remainder of P(x) ÷ (x - c) is equal to P(c). Here c = 2. So P(2) = 2(2)³ - 5(2)² + k(2) - 6 = 8.\n2(8) - 5(4) + 2k - 6 = 8 ⟹ 16 - 20 + 2k - 6 = 8 ⟹ 2k - 10 = 8 ⟹ 2k = 18 ⟹ k = 9.',
    formulaUsed: 'P(c) = Remainder',
    keyConcept: 'Polynomial Remainder Theorem',
    difficulty: 'Medium',
    sourceNote: 'Grade 10 Mathematics Unit 2 Review'
  },
  {
    id: 'math-g10-u3-1',
    grade: 'Grade 10',
    subject: 'Mathematics',
    unitNumber: 3,
    unitTitle: 'Exponential and Logarithmic Functions',
    topic: 'Logarithmic Laws & Equations',
    type: 'choice',
    question: 'Solve for x in the equation: log₂(x) + log₂(x - 2) = 3.',
    options: [
      'A. x = 4 only',
      'B. x = -2 only',
      'C. x = 4 and x = -2',
      'D. x = 3 only'
    ],
    correctAnswer: 0,
    explanation: 'Combine using log product rule: log₂[x(x - 2)] = 3.\nConvert to exponential form: x(x - 2) = 2³ = 8 ⟹ x² - 2x - 8 = 0.\nFactoring: (x - 4)(x + 2) = 0 ⟹ x = 4 or x = -2.\nCheck domains: For log₂(x) and log₂(x - 2) to be defined in real numbers, x > 2. Therefore x = -2 is extraneous. The only valid solution is x = 4.',
    formulaUsed: 'log_b(A) + log_b(B) = log_b(AB); b^y = x',
    keyConcept: 'Logarithmic Equations & Domain Restrictions',
    difficulty: 'Medium',
    sourceNote: 'Ethiopian Grade 10 National Model Exam'
  },
  {
    id: 'math-g10-u5-1',
    grade: 'Grade 10',
    subject: 'Mathematics',
    unitNumber: 5,
    unitTitle: 'Analytical Geometry',
    topic: 'Equations of Circles',
    type: 'choice',
    question: 'What is the center and radius of the circle defined by the equation x² + y² - 6x + 8y = 0?',
    options: [
      'A. Center (3, -4), Radius = 5',
      'B. Center (-3, 4), Radius = 5',
      'C. Center (6, -8), Radius = 25',
      'D. Center (3, -4), Radius = 25'
    ],
    correctAnswer: 0,
    explanation: 'Complete the squares for x and y:\n(x² - 6x + 9) + (y² + 8y + 16) = 9 + 16\n(x - 3)² + (y + 4)² = 25 = 5².\nThis matches standard circle form (x - h)² + (y - k)² = r², so center is (3, -4) and radius is r = 5.',
    formulaUsed: '(x - h)² + (y - k)² = r²',
    keyConcept: 'Completing the Square for Circles',
    difficulty: 'Medium',
    sourceNote: 'Grade 10 Mathematics Unit 5 Review'
  },

  // =========================================================================
  // MATHEMATICS - GRADE 11
  // =========================================================================
  {
    id: 'math-g11-u2-1',
    grade: 'Grade 11',
    subject: 'Mathematics',
    unitNumber: 2,
    unitTitle: 'Matrices and Determinants',
    topic: 'Matrix Determinants and Inverses',
    type: 'choice',
    question: 'Given the matrix M = [[3, 2], [5, 4]], what is the inverse matrix M⁻¹?',
    options: [
      'A. [[2, -1], [-2.5, 1.5]]',
      'B. [[4, -2], [-5, 3]]',
      'C. [[-2, 1], [2.5, -1.5]]',
      'D. [[3, -2], [-5, 4]]'
    ],
    correctAnswer: 0,
    explanation: 'For a 2×2 matrix [[a, b], [c, d]], det = ad - bc = (3)(4) - (2)(5) = 12 - 10 = 2.\nThe adjoint matrix is [[d, -b], [-c, a]] = [[4, -2], [-5, 3]].\nInverse M⁻¹ = (1/det) · adj(M) = (1/2) [[4, -2], [-5, 3]] = [[2, -1], [-2.5, 1.5]].',
    formulaUsed: 'A⁻¹ = (1 / det A) · adj(A)',
    keyConcept: 'Inverse of 2×2 Matrix',
    difficulty: 'Medium',
    sourceNote: 'Grade 11 Mathematics Unit 2 Review'
  },
  {
    id: 'math-g11-u4-1',
    grade: 'Grade 11',
    subject: 'Mathematics',
    unitNumber: 4,
    unitTitle: 'Further on Trigonometry',
    topic: 'Double Angle Formulas',
    type: 'choice',
    question: 'If sin(θ) = 3/5 and θ is in Quadrant II, what is the value of sin(2θ)?',
    options: [
      'A. 24/25',
      'B. -24/25',
      'C. 7/25',
      'D. -7/25'
    ],
    correctAnswer: 1,
    explanation: 'In Quadrant II, sine is positive and cosine is negative. cos²(θ) = 1 - sin²(θ) = 1 - 9/25 = 16/25 ⟹ cos(θ) = -4/5.\nUsing double angle formula: sin(2θ) = 2 sin(θ) cos(θ) = 2 × (3/5) × (-4/5) = -24/25.',
    formulaUsed: 'sin(2θ) = 2 sin(θ) cos(θ)',
    keyConcept: 'Trigonometric Double Angle Identities',
    difficulty: 'Hard',
    sourceNote: 'Grade 11 Mathematics Unit 4 Review'
  },

  // =========================================================================
  // MATHEMATICS - GRADE 12
  // =========================================================================
  {
    id: 'math-g12-u1-1',
    grade: 'Grade 12',
    subject: 'Mathematics',
    unitNumber: 1,
    unitTitle: 'Sequences and Series',
    topic: 'Infinite Geometric Series',
    type: 'choice',
    question: 'What is the sum of the infinite geometric series: 12 + 4 + 4/3 + 4/9 + ... ?',
    options: [
      'A. 16',
      'B. 18',
      'C. 24',
      'D. Diverges'
    ],
    correctAnswer: 1,
    explanation: 'First term a₁ = 12. Common ratio r = 4 / 12 = 1/3. Since |r| = 1/3 < 1, the infinite geometric series converges. Its sum is S_∞ = a₁ / (1 - r) = 12 / (1 - 1/3) = 12 / (2/3) = 12 × (3/2) = 18.',
    formulaUsed: 'S_∞ = a₁ / (1 - r) for |r| < 1',
    keyConcept: 'Convergence of Infinite Geometric Series',
    difficulty: 'Easy',
    sourceNote: 'EUEE Grade 12 Mathematics Model'
  },
  {
    id: 'math-g12-u2-1',
    grade: 'Grade 12',
    subject: 'Mathematics',
    unitNumber: 2,
    unitTitle: 'Introduction to Calculus: Limits and Continuity',
    topic: 'Evaluating Limits (0/0 Indeterminate Form)',
    type: 'choice',
    question: 'Evaluate the limit: lim_{x → 3} (x² - 9) / (2x² - 5x - 3).',
    options: [
      'A. 0',
      'B. 3/7',
      'C. 6/7',
      'D. Does not exist'
    ],
    correctAnswer: 2,
    explanation: 'Direct substitution yields 0/0. Factor numerator and denominator:\nNumerator: x² - 9 = (x - 3)(x + 3)\nDenominator: 2x² - 5x - 3 = (x - 3)(2x + 1)\nCancel the common factor (x - 3) for x ≠ 3:\nlim_{x → 3} (x + 3) / (2x + 1) = (3 + 3) / (2(3) + 1) = 6 / 7.',
    formulaUsed: 'Algebraic cancellation of indeterminate forms',
    keyConcept: 'Evaluation of Limits by Factoring',
    difficulty: 'Medium',
    sourceNote: 'Grade 12 Calculus Review Question'
  },
  {
    id: 'math-g12-u3-1',
    grade: 'Grade 12',
    subject: 'Mathematics',
    unitNumber: 3,
    unitTitle: 'Derivatives',
    topic: 'Derivative Rules & Product Rule',
    type: 'choice',
    question: 'If f(x) = (3x² + 1) · eˣ, what is the derivative f\'(x)?',
    options: [
      'A. 6x · eˣ',
      'B. (3x² + 6x + 1) · eˣ',
      'C. (6x² + 3x + 1) · eˣ',
      'D. (3x² - 6x + 1) · eˣ'
    ],
    correctAnswer: 1,
    explanation: 'Use Product Rule (uv)\' = u\'v + uv\'.\nLet u = 3x² + 1 ⟹ u\' = 6x.\nLet v = eˣ ⟹ v\' = eˣ.\nf\'(x) = (6x)eˣ + (3x² + 1)eˣ = (3x² + 6x + 1)eˣ.',
    formulaUsed: "d/dx(uv) = u'v + uv'",
    keyConcept: 'Calculus Product Rule',
    difficulty: 'Medium',
    sourceNote: 'Grade 12 Mathematics Calculus Unit'
  },
  {
    id: 'math-g12-u4-1',
    grade: 'Grade 12',
    subject: 'Mathematics',
    unitNumber: 4,
    unitTitle: 'Integrals',
    topic: 'Definite Integrals & Substitution',
    type: 'choice',
    question: 'Evaluate the definite integral: ∫₀¹ (2x · (x² + 1)³) dx.',
    options: [
      'A. 3.75',
      'B. 4.00',
      'C. 7.50',
      'D. 15.00'
    ],
    correctAnswer: 0,
    explanation: 'Use substitution: Let u = x² + 1 ⟹ du = 2x dx.\nWhen x = 0, u = 0 + 1 = 1.\nWhen x = 1, u = 1 + 1 = 2.\nThe integral becomes: ∫₁² u³ du = [ u⁴ / 4 ]₁² = (2⁴ / 4) - (1⁴ / 4) = (16 / 4) - (1 / 4) = 4 - 0.25 = 3.75 (or 15/4).',
    formulaUsed: '∫ uⁿ du = u^(n+1)/(n+1) + C',
    keyConcept: 'Definite Integration by Substitution',
    difficulty: 'Hard',
    sourceNote: 'EUEE Grade 12 Mathematics Past Model'
  },

  // =========================================================================
  // BIOLOGY - GRADE 9
  // =========================================================================
  {
    id: 'bio-g9-u2-1',
    grade: 'Grade 9',
    subject: 'Biology',
    unitNumber: 2,
    unitTitle: 'Cell Biology',
    topic: 'Cell Organelles & Functions',
    type: 'choice',
    question: 'Which of the following cellular organelles is responsible for the synthesis of adenosine triphosphate (ATP) via aerobic cellular respiration?',
    options: [
      'A. Golgi apparatus',
      'B. Ribosome',
      'C. Mitochondrion',
      'D. Lysosome'
    ],
    correctAnswer: 2,
    explanation: 'The mitochondrion is known as the powerhouse of the cell because it generates most of the chemical energy needed to power cellular biochemical reactions in the form of ATP through the Krebs cycle and oxidative phosphorylation.',
    keyConcept: 'Mitochondrial Function in Cellular Respiration',
    difficulty: 'Easy',
    sourceNote: 'Grade 9 Biology Unit 2 Review'
  },
  {
    id: 'bio-g9-u4-1',
    grade: 'Grade 9',
    subject: 'Biology',
    unitNumber: 4,
    unitTitle: 'Human Biology: Circulatory System and Excretion',
    topic: 'Nephron Physiology',
    type: 'choice',
    question: 'In the human kidney nephron, in which structure does the process of ultrafiltration under high hydrostatic pressure take place?',
    options: [
      'A. Loop of Henle',
      'B. Glomerulus inside Bowman\'s capsule',
      'C. Distal convoluted tubule',
      'D. Collecting duct'
    ],
    correctAnswer: 1,
    explanation: 'Ultrafiltration occurs at the glomerulus surrounded by Bowman\'s capsule. Blood enters under high pressure through the afferent arteriole, forcing water, glucose, urea, and salts across the glomerular capillary walls into the lumen of Bowman\'s capsule as glomerular filtrate.',
    keyConcept: 'Ultrafiltration in Human Nephron',
    difficulty: 'Medium',
    sourceNote: 'Grade 9 Biology Unit 4 Review'
  },
  {
    id: 'bio-g9-u6-1',
    grade: 'Grade 9',
    subject: 'Biology',
    unitNumber: 6,
    unitTitle: 'Ecology and Conservation',
    topic: 'Ethiopian Endemic Wildlife',
    type: 'choice',
    question: 'Which of the following mammals is strictly endemic to the afroalpine habitats of the Simien Mountains National Park in Ethiopia?',
    options: [
      'A. Grevy\'s zebra',
      'B. African elephant',
      'C. Walia ibex (Capra walie)',
      'D. Common warthog'
    ],
    correctAnswer: 2,
    explanation: 'The Walia ibex (Capra walie) is a critically endangered wild goat species found nowhere else on Earth except in the Simien Mountains National Park of northern Ethiopia.',
    keyConcept: 'Ethiopian Endemic Biodiversity & Conservation',
    difficulty: 'Easy',
    sourceNote: 'Grade 9 Biology Unit 6 Review'
  },

  // =========================================================================
  // BIOLOGY - GRADE 10
  // =========================================================================
  {
    id: 'bio-g10-u2-1',
    grade: 'Grade 10',
    subject: 'Biology',
    unitNumber: 2,
    unitTitle: 'Heredity and Genetics',
    topic: 'Mendelian Monohybrid Cross',
    type: 'choice',
    question: 'In pea plants, tall stem (T) is completely dominant over dwarf stem (t). When two heterozygous tall plants (Tt × Tt) are crossed, what is the expected phenotypic ratio among the offspring?',
    options: [
      'A. 1 Tall : 1 Dwarf',
      'B. 3 Tall : 1 Dwarf',
      'C. 9 Tall : 3 Dwarf : 1 Intermediate',
      'D. All Tall'
    ],
    correctAnswer: 1,
    explanation: 'In a monohybrid cross between two heterozygotes (Tt × Tt), the genotypic ratio is 1 TT : 2 Tt : 1 tt. Because T is dominant, both TT and Tt appear tall (3 out of 4), while tt is dwarf (1 out of 4). Thus, the phenotypic ratio is 3 Tall : 1 Dwarf.',
    keyConcept: "Mendel's Law of Segregation",
    difficulty: 'Easy',
    sourceNote: 'Grade 10 Biology Unit 2 Review'
  },
  {
    id: 'bio-g10-u3-1',
    grade: 'Grade 10',
    subject: 'Biology',
    unitNumber: 3,
    unitTitle: 'Human Biology: Nervous and Endocrine Coordination',
    topic: 'Hormonal Blood Glucose Regulation',
    type: 'choice',
    question: 'Following a heavy meal rich in carbohydrates, which pancreatic hormone is secreted by the beta cells of the Islets of Langerhans to lower blood glucose levels?',
    options: [
      'A. Glucagon',
      'B. Adrenaline',
      'C. Insulin',
      'D. Thyroxine'
    ],
    correctAnswer: 2,
    explanation: 'Insulin is synthesized and secreted by pancreatic beta cells in response to elevated blood glucose. It facilitates glucose uptake into liver and muscle cells, converting excess glucose into glycogen (glycogenesis).',
    keyConcept: 'Homeostatic Regulation of Blood Glucose',
    difficulty: 'Easy',
    sourceNote: 'Grade 10 Biology Unit 3 Review'
  },

  // =========================================================================
  // BIOLOGY - GRADE 11
  // =========================================================================
  {
    id: 'bio-g11-u3-1',
    grade: 'Grade 11',
    subject: 'Biology',
    unitNumber: 3,
    unitTitle: 'Enzymes',
    topic: 'Enzyme Inhibition Types',
    type: 'choice',
    question: 'A competitive inhibitor decreases the rate of an enzyme-catalyzed reaction by which of the following mechanisms?',
    options: [
      'A. Binding permanently to the allosteric site to denature the enzyme',
      'B. Reversibly occupying the active site because its structure resembles the substrate',
      'C. Decreasing the optimum temperature of the reaction',
      'D. Increasing the activation energy of the uncatalyzed reaction'
    ],
    correctAnswer: 1,
    explanation: 'Competitive inhibitors possess a three-dimensional structural similarity to the natural substrate. They compete directly for the active site of the enzyme. This inhibition can be overcome by increasing substrate concentration.',
    keyConcept: 'Competitive vs Non-competitive Inhibition',
    difficulty: 'Medium',
    sourceNote: 'Grade 11 Biology Unit 3 Review'
  },
  {
    id: 'bio-g11-u5-1',
    grade: 'Grade 11',
    subject: 'Biology',
    unitNumber: 5,
    unitTitle: 'Energy Transformation: Respiration and Photosynthesis',
    topic: 'Oxidative Phosphorylation & Chemiosmosis',
    type: 'choice',
    question: 'During cellular respiration, what directly drives the synthesis of ATP by ATP synthase during chemiosmosis in the mitochondrial inner membrane?',
    options: [
      'A. Flow of electrons directly through the ATP synthase molecule',
      'B. Flow of protons (H⁺ ions) down an electrochemical gradient from intermembrane space into the matrix',
      'C. Splitting of water molecules by photon energy',
      'D. Direct transfer of high-energy phosphate from acetyl-CoA'
    ],
    correctAnswer: 1,
    explanation: 'The electron transport chain pumps protons (H⁺) from the matrix into the intermembrane space, creating an electrochemical proton gradient (proton motive force). As protons flow back down this gradient into the matrix through ATP synthase, the rotational kinetic energy powers ATP phosphorylation from ADP and Pi.',
    keyConcept: 'Chemiosmotic Mechanism of ATP Synthesis',
    difficulty: 'Hard',
    sourceNote: 'Grade 11 Biology Unit 5 Review'
  },

  // =========================================================================
  // BIOLOGY - GRADE 12
  // =========================================================================
  {
    id: 'bio-g12-u1-1',
    grade: 'Grade 12',
    subject: 'Biology',
    unitNumber: 1,
    unitTitle: 'Molecular Biology and Recombinant DNA',
    topic: 'Semi-Conservative DNA Replication',
    type: 'choice',
    question: 'During DNA replication in eukaryotic cells, which enzyme is responsible for joining the Okazaki fragments on the lagging strand by forming phosphodiester bonds?',
    options: [
      'A. DNA Helicase',
      'B. RNA Primase',
      'C. DNA Ligase',
      'D. Topoisomerase'
    ],
    correctAnswer: 2,
    explanation: 'DNA Ligase seals single-stranded nicks in the sugar-phosphate backbone by catalyzing the formation of phosphodiester bonds between adjacent 3\'-hydroxyl and 5\'-phosphate groups, thereby joining Okazaki fragments on the lagging strand.',
    keyConcept: 'Lagging Strand Synthesis & DNA Ligase',
    difficulty: 'Medium',
    sourceNote: 'EUEE Grade 12 Biology Exam Question'
  },
  {
    id: 'bio-g12-u2-1',
    grade: 'Grade 12',
    subject: 'Biology',
    unitNumber: 2,
    unitTitle: 'Evolution',
    topic: 'Hardy-Weinberg Principle',
    type: 'choice',
    question: 'In a randomly mating population in genetic equilibrium, 16% of individuals express a recessive autosomal trait (q² = 0.16). What is the frequency of heterozygous carriers (2pq) in this population?',
    options: [
      'A. 0.48',
      'B. 0.36',
      'C. 0.24',
      'D. 0.84'
    ],
    correctAnswer: 0,
    explanation: 'From q² = 0.16, the frequency of the recessive allele is q = √0.16 = 0.4.\nSince p + q = 1, the frequency of the dominant allele is p = 1 - 0.4 = 0.6.\nThe frequency of heterozygous carriers is 2pq = 2 × (0.6) × (0.4) = 0.48 (or 48%).',
    formulaUsed: 'p² + 2pq + q² = 1; p + q = 1',
    keyConcept: 'Hardy-Weinberg Population Genetics Equilibrium',
    difficulty: 'Hard',
    sourceNote: 'Grade 12 Biology Unit 2 National Model'
  },

  // =========================================================================
  // CHEMISTRY - GRADE 9
  // =========================================================================
  {
    id: 'chem-g9-u3-1',
    grade: 'Grade 9',
    subject: 'Chemistry',
    unitNumber: 3,
    unitTitle: 'Structure of the Atom',
    topic: 'Subatomic Particles & Isotopic Notation',
    type: 'choice',
    question: 'An atom of chlorine is represented as ³⁵₁₇Cl. How many protons, neutrons, and electrons does a neutral atom of this isotope possess?',
    options: [
      'A. 17 protons, 17 neutrons, 18 electrons',
      'B. 17 protons, 18 neutrons, 17 electrons',
      'C. 18 protons, 17 neutrons, 17 electrons',
      'D. 35 protons, 17 neutrons, 18 electrons'
    ],
    correctAnswer: 1,
    explanation: 'In the notation ᴬ_Z X, atomic number Z = 17, which equals the number of protons and (in a neutral atom) the number of electrons. The mass number A = 35. The number of neutrons = A - Z = 35 - 17 = 18 neutrons.',
    keyConcept: 'Subatomic Particle Counting in Isotopes',
    difficulty: 'Easy',
    sourceNote: 'Grade 9 Chemistry Unit 3 Review'
  },
  {
    id: 'chem-g9-u4-1',
    grade: 'Grade 9',
    subject: 'Chemistry',
    unitNumber: 4,
    unitTitle: 'Periodic Classification of Elements',
    topic: 'Periodic Trends',
    type: 'choice',
    question: 'Moving from left to right across Period 3 of the periodic table (from Na to Cl), which of the following trends is correctly observed?',
    options: [
      'A. Atomic radius increases',
      'B. First ionization energy generally increases while atomic radius decreases',
      'C. Metallic character increases',
      'D. Electronegativity decreases'
    ],
    correctAnswer: 1,
    explanation: 'Across a period from left to right, effective nuclear charge (Z_eff) increases while electrons are added to the same principal energy level. This pulls valence electrons closer (decreasing atomic radius) and holds them more tightly, leading to an increase in first ionization energy and electronegativity.',
    keyConcept: 'Periodic Trends across a Period',
    difficulty: 'Medium',
    sourceNote: 'Grade 9 Chemistry Unit 4 Review'
  },

  // =========================================================================
  // CHEMISTRY - GRADE 10
  // =========================================================================
  {
    id: 'chem-g10-u1-1',
    grade: 'Grade 10',
    subject: 'Chemistry',
    unitNumber: 1,
    unitTitle: 'Chemical Reactions and Stoichiometry',
    topic: 'Limiting Reactants & Mass Calculations',
    type: 'choice',
    question: 'Consider the reaction: 2H₂ + O₂ → 2H₂O. If 4.0 g of hydrogen gas (molar mass = 2.0 g/mol) is mixed with 32.0 g of oxygen gas (molar mass = 32.0 g/mol), what mass of water (molar mass = 18.0 g/mol) is produced?',
    options: [
      'A. 18.0 grams',
      'B. 36.0 grams',
      'C. 72.0 grams',
      'D. 9.0 grams'
    ],
    correctAnswer: 1,
    explanation: 'Moles of H₂ = 4.0 g / 2.0 g/mol = 2.0 mol.\nMoles of O₂ = 32.0 g / 32.0 g/mol = 1.0 mol.\nStoichiometric ratio requires 2 mol H₂ for every 1 mol O₂. Both reactants are present in exact stoichiometric proportions with no excess.\nFrom 2 mol H₂, exactly 2 mol H₂O is produced.\nMass of H₂O = 2.0 mol × 18.0 g/mol = 36.0 g.',
    formulaUsed: 'n = m / M; Mass = n · M',
    keyConcept: 'Stoichiometry & Conservation of Mass',
    difficulty: 'Medium',
    sourceNote: 'Grade 10 Chemistry Unit 1 Review'
  },
  {
    id: 'chem-g10-u3-1',
    grade: 'Grade 10',
    subject: 'Chemistry',
    unitNumber: 3,
    unitTitle: 'Acids, Bases, and Salts',
    topic: 'pH and pOH Calculations',
    type: 'choice',
    question: 'What is the pH of a 0.001 M hydrochloric acid (HCl) aqueous solution at 25°C?',
    options: [
      'A. 1',
      'B. 2',
      'C. 3',
      'D. 11'
    ],
    correctAnswer: 2,
    explanation: 'HCl is a strong monoprotic acid that dissociates completely in water: HCl → H⁺ + Cl⁻.\nTherefore, [H⁺] = 0.001 M = 1.0 × 10⁻³ M.\npH = -log₁₀[H⁺] = -log₁₀(10⁻³) = 3.0.',
    formulaUsed: 'pH = -log₁₀[H⁺]',
    keyConcept: 'pH Calculation for Strong Acids',
    difficulty: 'Easy',
    sourceNote: 'Grade 10 Chemistry Unit 3 Review'
  },

  // =========================================================================
  // CHEMISTRY - GRADE 11
  // =========================================================================
  {
    id: 'chem-g11-u2-1',
    grade: 'Grade 11',
    subject: 'Chemistry',
    unitNumber: 2,
    unitTitle: 'Chemical Bonding and Structure',
    topic: 'VSEPR Theory & Molecular Geometry',
    type: 'choice',
    question: 'According to VSEPR theory, what is the electron-pair geometry and molecular shape of a water molecule (H₂O)?',
    options: [
      'A. Linear electron geometry, linear shape',
      'B. Trigonal planar electron geometry, bent shape',
      'C. Tetrahedral electron geometry, bent shape',
      'D. Tetrahedral electron geometry, trigonal pyramidal shape'
    ],
    correctAnswer: 2,
    explanation: 'The central oxygen atom in H₂O has 4 electron domains (2 bonding pairs with hydrogen and 2 non-bonding lone pairs). Four electron domains give a tetrahedral electron-pair geometry. Because the two lone pairs repel more strongly than bonding pairs, the bonded atoms form a bent (angular) molecular shape with a bond angle of approximately 104.5°.',
    keyConcept: 'VSEPR Geometry & Lone Pair Repulsion',
    difficulty: 'Medium',
    sourceNote: 'Grade 11 Chemistry Unit 2 Review'
  },
  {
    id: 'chem-g11-u5-1',
    grade: 'Grade 11',
    subject: 'Chemistry',
    unitNumber: 5,
    unitTitle: 'Chemical Equilibrium',
    topic: "Le Chatelier's Principle in Haber Process",
    type: 'choice',
    question: 'In the industrial Haber process: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + 92 kJ (exothermic), which of the following operational modifications will shift the equilibrium position to the right (increasing ammonia yield)?',
    options: [
      'A. Increasing the temperature',
      'B. Increasing the pressure by reducing system volume',
      'C. Removing nitrogen gas from the reactor',
      'D. Adding an inert catalyst'
    ],
    correctAnswer: 1,
    explanation: "According to Le Chatelier's Principle:\n1) Reactants have 1 + 3 = 4 moles of gas, while products have 2 moles of gas. Increasing pressure favors the side with fewer gas moles (shifts right toward NH₃).\n2) Since the reaction is exothermic, increasing temperature shifts left, decreasing yield.\n3) A catalyst speeds up forward and reverse rates equally without changing equilibrium position.",
    formulaUsed: "Le Chatelier's Principle on Gas Equilibrium",
    keyConcept: 'Factors Affecting Chemical Equilibrium Position',
    difficulty: 'Medium',
    sourceNote: 'Grade 11 Chemistry Unit 5 Review'
  },

  // =========================================================================
  // CHEMISTRY - GRADE 12
  // =========================================================================
  {
    id: 'chem-g12-u1-1',
    grade: 'Grade 12',
    subject: 'Chemistry',
    unitNumber: 1,
    unitTitle: 'Acid-Base Equilibria',
    topic: 'Buffer Solutions & Henderson-Hasselbalch',
    type: 'choice',
    question: 'A buffer solution contains 0.20 M acetic acid (CH₃COOH, K_a = 1.8 × 10⁻⁵) and 0.20 M sodium acetate (CH₃COONa). What is the pH of this buffer? (Given log₁₀(1.8) ≈ 0.26)',
    options: [
      'A. 3.74',
      'B. 4.74',
      'C. 5.74',
      'D. 7.00'
    ],
    correctAnswer: 1,
    explanation: 'From the Henderson-Hasselbalch equation: pH = pK_a + log₁₀([Conjugate Base] / [Weak Acid]).\npK_a = -log₁₀(1.8 × 10⁻⁵) = 5 - log₁₀(1.8) = 5 - 0.26 = 4.74.\nSince [Base] = [Acid] = 0.20 M, [Base]/[Acid] = 1, and log₁₀(1) = 0.\nTherefore, pH = 4.74 + 0 = 4.74.',
    formulaUsed: 'pH = pK_a + log([A⁻] / [HA])',
    keyConcept: 'Equimolar Buffer Solutions',
    difficulty: 'Medium',
    sourceNote: 'EUEE Grade 12 Chemistry Exam'
  },
  {
    id: 'chem-g12-u2-1',
    grade: 'Grade 12',
    subject: 'Chemistry',
    unitNumber: 2,
    unitTitle: 'Electrochemistry',
    topic: 'Standard Cell Potential & Spontaneity',
    type: 'choice',
    question: 'A standard galvanic cell is constructed with copper and zinc electrodes: Zn²⁺(aq) + 2e⁻ → Zn(s) (E° = -0.76 V) and Cu²⁺(aq) + 2e⁻ → Cu(s) (E° = +0.34 V). What is the standard cell potential (E°_cell)?',
    options: [
      'A. +0.42 V',
      'B. -0.42 V',
      'C. +1.10 V',
      'D. -1.10 V'
    ],
    correctAnswer: 2,
    explanation: 'The electrode with higher reduction potential acts as cathode (reduction occurs at copper, E°_cathode = +0.34 V). Zinc with lower reduction potential undergoes oxidation at the anode (E°_anode = -0.76 V).\nStandard cell potential: E°_cell = E°_cathode - E°_anode = (+0.34 V) - (-0.76 V) = +1.10 V.',
    formulaUsed: 'E°_cell = E°_cathode - E°_anode',
    keyConcept: 'Galvanic Daniell Cell Potential',
    difficulty: 'Easy',
    sourceNote: 'Grade 12 Chemistry Unit 2 Review'
  },

  // =========================================================================
  // ADDITIONAL REVIEW & EXERCISE QUESTIONS (SHOWING DETAILED STEPS)
  // =========================================================================
  {
    id: 'phy-g10-ex-1',
    grade: 'Grade 10',
    subject: 'Physics',
    unitNumber: 5,
    unitTitle: 'Wave Motion and Sound',
    topic: 'Speed of Sound & Echo',
    type: 'exercise',
    question: 'A student standing 510 meters away from a high cliff in the Ethiopian Rift Valley claps her hands. She hears the reflected echo 3.0 seconds later. What is the speed of sound in the air at that location?',
    correctAnswerText: 'Speed of sound = 340 m/s',
    explanation: 'Sound travels to the cliff and back, covering double the distance: total distance d_total = 2 × 510 m = 1020 m. Speed = Distance / Time = 1020 m / 3.0 s = 340 m/s.',
    stepByStepSolution: [
      'Step 1: Understand that an echo involves round-trip sound travel (to reflector and back).',
      'Step 2: Total distance traveled = 2 × one-way distance = 2 × 510 m = 1020 m.',
      'Step 3: Apply v = total distance / total time.',
      'Step 4: v = 1020 m / 3.0 s = 340 m/s.'
    ],
    formulaUsed: 'v = 2d / t',
    keyConcept: 'Echo and Sound Wave Propagation',
    difficulty: 'Easy',
    sourceNote: 'Grade 10 Physics Unit 5 Review Question'
  },
  {
    id: 'math-g12-ex-1',
    grade: 'Grade 12',
    subject: 'Mathematics',
    unitNumber: 3,
    unitTitle: 'Derivatives',
    topic: 'Optimization & Extreme Values',
    type: 'exercise',
    question: 'A farmer in Oromia region wants to fence a rectangular vegetable garden using 120 meters of fencing wire, where one side of the garden is already protected by an existing river wall and requires no fencing. Find the dimensions that maximize the area of the garden.',
    correctAnswerText: 'Width = 30 meters, Length = 60 meters (Maximum Area = 1800 m²)',
    explanation: 'Let x be the width perpendicular to the river wall (2 sides of length x) and y be the length parallel to the river wall (1 side of length y). Total wire: 2x + y = 120 ⟹ y = 120 - 2x. Area A(x) = x · y = x(120 - 2x) = 120x - 2x². To maximize, take derivative A\'(x) = 120 - 4x = 0 ⟹ 4x = 120 ⟹ x = 30 m. Then y = 120 - 2(30) = 60 m. Max area = 30 × 60 = 1800 m².',
    stepByStepSolution: [
      'Define variables: Let x = width (two sides), y = length along river wall (one side).',
      'Constraint equation: 2x + y = 120 ⟹ y = 120 - 2x.',
      'Formulate objective function: Area A(x) = x · (120 - 2x) = 120x - 2x².',
      'Differentiate with respect to x: A\'(x) = 120 - 4x.',
      'Set derivative to zero for critical point: 120 - 4x = 0 ⟹ x = 30 m.',
      'Verify with second derivative: A\'\'(x) = -4 < 0, confirming a maximum.',
      'Calculate length: y = 120 - 2(30) = 60 m. Dimensions: 30 m × 60 m.'
    ],
    formulaUsed: "A'(x) = 0 for local maximum",
    keyConcept: 'Applied Calculus Optimization',
    difficulty: 'Hard',
    sourceNote: 'Grade 12 Mathematics Unit 3 Review'
  },
  {
    id: 'bio-g12-ex-1',
    grade: 'Grade 12',
    subject: 'Biology',
    unitNumber: 3,
    unitTitle: 'Homeostasis and Kidney Function',
    topic: 'Osmoregulation and ADH Action',
    type: 'review',
    question: 'Describe the physiological feedback mechanism that occurs when a person is dehydrated on a hot sunny day in Afar, Ethiopia. How do the hypothalamus, pituitary gland, and nephrons restore water balance?',
    correctAnswerText: 'Hypothalamic osmoreceptors detect increased blood osmolarity -> Posterior pituitary releases ADH (vasopressin) -> ADH increases water permeability in collecting ducts -> Water is reabsorbed -> Concentrated urine produced.',
    explanation: '1. Dehydration decreases blood volume and increases blood solute osmolarity.\n2. Osmoreceptors in the hypothalamus detect this change and stimulate thirst.\n3. The hypothalamus signals the posterior pituitary gland to release Antidiuretic Hormone (ADH / vasopressin) into the blood.\n4. ADH binds to receptors on the epithelial cells of collecting ducts in nephrons, inserting aquaporin water channels.\n5. Water is reabsorbed into hypertonic renal medulla and blood vessels by osmosis.\n6. The result is conservation of water, production of a low volume of concentrated hypertonic urine, and restoration of blood osmolarity.',
    stepByStepSolution: [
      '1. Stimulus: Loss of water increases blood osmotic pressure (hypertonicity).',
      '2. Receptor: Hypothalamic osmoreceptors fire action potentials.',
      '3. Endocrine response: Posterior pituitary releases Antidiuretic Hormone (ADH).',
      '4. Target organ: Collecting ducts and distal convoluted tubules in kidney nephrons.',
      '5. Cellular action: Insertion of aquaporin-2 water channels into luminal membranes.',
      '6. Outcome: Maximum water reabsorption into medullary capillaries; concentrated urine excreted.'
    ],
    keyConcept: 'Negative Feedback Loop in Osmoregulation',
    difficulty: 'Medium',
    sourceNote: 'Grade 12 Biology Unit 3 Review Question'
  },
  {
    id: 'chem-g11-ex-1',
    grade: 'Grade 11',
    subject: 'Chemistry',
    unitNumber: 3,
    unitTitle: 'Physical States of Matter',
    topic: 'Ideal Gas Law Computation',
    type: 'exercise',
    question: 'A 5.00 L steel cylinder in a chemistry laboratory in Dire Dawa contains 0.80 moles of an ideal gas at a temperature of 27°C. What is the pressure inside the cylinder in atmospheres? (Take R = 0.0821 L·atm/(mol·K))',
    correctAnswerText: 'Pressure = 3.94 atmospheres',
    explanation: 'First convert temperature to Kelvin: T = 27 + 273.15 = 300.15 K (≈ 300 K).\nApply Ideal Gas Law PV = nRT ⟹ P = (nRT) / V.\nP = (0.80 mol × 0.0821 L·atm/(mol·K) × 300 K) / 5.00 L = 19.704 / 5.00 = 3.94 atm.',
    stepByStepSolution: [
      'Convert Celsius to Kelvin: T = 27°C + 273 = 300 K',
      'Identify variables: n = 0.80 mol, V = 5.00 L, R = 0.0821 L·atm/(mol·K)',
      'Rearrange PV = nRT to solve for P: P = nRT / V',
      'Calculate: P = (0.80 × 0.0821 × 300) / 5.00 = 19.704 / 5.00 = 3.94 atm'
    ],
    formulaUsed: 'P = nRT / V',
    keyConcept: 'Ideal Gas Equation',
    difficulty: 'Medium',
    sourceNote: 'Grade 11 Chemistry Unit 3 Review'
  }
];
