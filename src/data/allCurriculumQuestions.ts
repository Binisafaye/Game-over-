import { Question, Grade, Subject } from '../types/curriculum';
import { COMPREHENSIVE_QUESTION_BANK } from './questionBank';

// Additional questions for every subject and grade unit
export const EXTRA_QUESTIONS: Question[] = [
  // Grade 9 Physics Unit 1
  {
    id: 'phy-g9-u1-1',
    grade: 'Grade 9',
    subject: 'Physics',
    unitNumber: 1,
    unitTitle: 'Physics and Human Society',
    topic: 'Indigenous Knowledge & Physics Applications',
    type: 'choice',
    question: 'Which of the following traditional Ethiopian practices directly utilizes physical principles of thermal insulation and porous evaporative cooling?',
    options: [
      'A. Storing water in clay pots (ensira/gan)',
      'B. Using wooden plows (maresha)',
      'C. Grinding grain with stone mills (wefcho)',
      'D. Weaving cotton with looms (shemane)'
    ],
    correctAnswer: 0,
    explanation: 'Traditional Ethiopian clay pots (ensira and gan) have microporous terracotta walls. As tiny amounts of water seep out and evaporate from the outer surface, latent heat of vaporization is absorbed from the pot and water inside, keeping the water naturally cool even in hot climates.',
    keyConcept: 'Evaporative Cooling and Indigenous Technology',
    difficulty: 'Easy',
    sourceNote: 'Grade 9 Physics Unit 1 Ethiopian Curriculum'
  },
  // Grade 9 Physics Unit 7
  {
    id: 'phy-g9-u7-1',
    grade: 'Grade 9',
    subject: 'Physics',
    unitNumber: 7,
    unitTitle: 'Temperature and Thermometry',
    topic: 'Temperature Scales Conversion',
    type: 'choice',
    question: 'The normal human body temperature is approximately 37.0°C. What is this temperature on the Fahrenheit scale (°F)?',
    options: [
      'A. 74.0°F',
      'B. 98.6°F',
      'C. 100.4°F',
      'D. 310.15°F'
    ],
    correctAnswer: 1,
    explanation: 'Conversion formula: T(°F) = (9/5) × T(°C) + 32 = (1.8 × 37.0) + 32 = 66.6 + 32 = 98.6°F.',
    formulaUsed: 'T(°F) = (9/5)T(°C) + 32',
    keyConcept: 'Temperature Scale Transformation',
    difficulty: 'Easy',
    sourceNote: 'Grade 9 Physics Unit 7 Review'
  },

  // Grade 10 Physics Unit 4
  {
    id: 'phy-g10-u4-1',
    grade: 'Grade 10',
    subject: 'Physics',
    unitNumber: 4,
    unitTitle: 'Introduction to Electronics',
    topic: 'Semiconductors and Diodes',
    type: 'choice',
    question: 'A p-type semiconductor is created by doping pure silicon (a Group IV element) with which type of impurity atom?',
    options: [
      'A. Trivalent impurity atoms such as Boron or Aluminum',
      'B. Pentavalent impurity atoms such as Phosphorus or Arsenic',
      'C. Noble gases like Argon',
      'D. Group II alkaline earth metals'
    ],
    correctAnswer: 0,
    explanation: 'Doping silicon with trivalent impurities (Group III elements with 3 valence electrons, like Boron) creates an electron deficiency known as a hole. The majority charge carriers are positively charged holes, making it a p-type semiconductor.',
    keyConcept: 'Extrinsic Semiconductor Doping',
    difficulty: 'Medium',
    sourceNote: 'Grade 10 Physics Unit 4 Review'
  },

  // Grade 11 Physics Unit 1
  {
    id: 'phy-g11-u1-1',
    grade: 'Grade 11',
    subject: 'Physics',
    unitNumber: 1,
    unitTitle: 'Physics and Measurement',
    topic: 'Dimensional Analysis',
    type: 'choice',
    question: 'What are the dimensions of Universal Gravitational Constant G in terms of Mass [M], Length [L], and Time [T]?',
    options: [
      'A. [M⁻¹ L³ T⁻²]',
      'B. [M L² T⁻²]',
      'C. [M⁻² L² T⁻¹]',
      'D. [M⁻¹ L² T⁻²]'
    ],
    correctAnswer: 0,
    explanation: 'From Newton\'s law of gravitation: F = G (m₁m₂) / r² ⟹ G = F r² / (m₁m₂). Dimensions of Force [F] = [M L T⁻²], distance [r] = [L], mass = [M].\n[G] = ([M L T⁻²] · [L²]) / [M²] = [M⁻¹ L³ T⁻²].',
    formulaUsed: 'G = F · r² / (m₁ · m₂)',
    keyConcept: 'Dimensional Formulas of Physical Constants',
    difficulty: 'Medium',
    sourceNote: 'Grade 11 Physics Unit 1 Review'
  },

  // Grade 11 Physics Unit 6
  {
    id: 'phy-g11-u6-1',
    grade: 'Grade 11',
    subject: 'Physics',
    unitNumber: 6,
    unitTitle: 'Oscillations',
    topic: 'Simple Pendulum Period',
    type: 'choice',
    question: 'If the length of a simple pendulum is increased by a factor of 4, what happens to its period of oscillation T?',
    options: [
      'A. It remains unchanged',
      'B. It is doubled (2T)',
      'C. It is quadrupled (4T)',
      'D. It is halved (T/2)'
    ],
    correctAnswer: 1,
    explanation: 'The period of a simple pendulum is given by T = 2π √(L / g). Period is proportional to the square root of length (T ∝ √L). If length becomes 4L, the new period is T\' = 2π √(4L / g) = 2 × (2π √(L / g)) = 2T. The period doubles.',
    formulaUsed: 'T = 2π √(L/g)',
    keyConcept: 'Simple Harmonic Motion in Pendulums',
    difficulty: 'Easy',
    sourceNote: 'Grade 11 Physics Unit 6 Review'
  },

  // Grade 12 Physics Unit 4
  {
    id: 'phy-g12-u4-1',
    grade: 'Grade 12',
    subject: 'Physics',
    unitNumber: 4,
    unitTitle: 'Electromagnetism and DC Circuits',
    topic: "Kirchhoff's Laws & Capacitors",
    type: 'choice',
    question: 'Two capacitors of capacitances 6 μF and 3 μF are connected in series across a 12 V battery. What is the equivalent capacitance and total charge stored?',
    options: [
      'A. C_eq = 9 μF, Q = 108 μC',
      'B. C_eq = 2 μF, Q = 24 μC',
      'C. C_eq = 4.5 μF, Q = 54 μC',
      'D. C_eq = 2 μF, Q = 72 μC'
    ],
    correctAnswer: 1,
    explanation: 'For capacitors in series: 1/C_eq = 1/C₁ + 1/C₂ = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 ⟹ C_eq = 2 μF. Total charge Q = C_eq × V = 2 μF × 12 V = 24 μC.',
    formulaUsed: '1/C_eq = 1/C₁ + 1/C₂; Q = CV',
    keyConcept: 'Series Combination of Capacitors',
    difficulty: 'Medium',
    sourceNote: 'Grade 12 Physics Unit 4 Review'
  },

  // Grade 9 Math Unit 4
  {
    id: 'math-g9-u4-1',
    grade: 'Grade 9',
    subject: 'Mathematics',
    unitNumber: 4,
    unitTitle: 'Relations and Functions',
    topic: 'Domain and Range of Relations',
    type: 'choice',
    question: 'Which of the following sets of ordered pairs represents a valid function from set A = {1, 2, 3} to set B = {4, 5, 6}?',
    options: [
      'A. {(1, 4), (1, 5), (2, 6)}',
      'B. {(1, 4), (2, 5), (3, 6)}',
      'C. {(2, 4), (3, 5)}',
      'D. {(1, 5), (2, 4), (2, 6), (3, 5)}'
    ],
    correctAnswer: 1,
    explanation: 'A relation from A to B is a function if every element x in the domain A is paired with exactly one element y in the codomain B. In option B, every element {1, 2, 3} appears exactly once as the first component. Option A and D have duplicated x-values, and option C does not map element 1.',
    keyConcept: 'Definition and Criteria of a Function',
    difficulty: 'Easy',
    sourceNote: 'Grade 9 Mathematics Unit 4 Review'
  },

  // Grade 9 Math Unit 5
  {
    id: 'math-g9-u5-1',
    grade: 'Grade 9',
    subject: 'Mathematics',
    unitNumber: 5,
    unitTitle: 'Geometry and Measurement',
    topic: 'Polygons and Angles',
    type: 'choice',
    question: 'What is the sum of the interior angles of a regular hexagon (6-sided polygon)?',
    options: [
      'A. 360°',
      'B. 540°',
      'C. 720°',
      'D. 900°'
    ],
    correctAnswer: 2,
    explanation: 'The formula for the sum of interior angles of an n-sided polygon is S = (n - 2) × 180°. For a hexagon n = 6: S = (6 - 2) × 180° = 4 × 180° = 720°.',
    formulaUsed: 'S = (n - 2) × 180°',
    keyConcept: 'Polygon Angle Sum Theorem',
    difficulty: 'Easy',
    sourceNote: 'Grade 9 Mathematics Unit 5 Review'
  },

  // Grade 10 Math Unit 4
  {
    id: 'math-g10-u4-1',
    grade: 'Grade 10',
    subject: 'Mathematics',
    unitNumber: 4,
    unitTitle: 'Trigonometric Functions',
    topic: 'Standard Angle Values',
    type: 'choice',
    question: 'What is the exact value of cos(2π/3) on the unit circle?',
    options: [
      'A. 1/2',
      'B. -1/2',
      'C. √3/2',
      'D. -√3/2'
    ],
    correctAnswer: 1,
    explanation: 'The angle 2π/3 radians corresponds to 120°, which is located in Quadrant II. The reference angle is π - 2π/3 = π/3 (60°). In Quadrant II, cosine is negative. Therefore, cos(2π/3) = -cos(π/3) = -1/2.',
    keyConcept: 'Trigonometry on the Unit Circle',
    difficulty: 'Easy',
    sourceNote: 'Grade 10 Mathematics Unit 4 Review'
  },

  // Grade 11 Math Unit 3
  {
    id: 'math-g11-u3-1',
    grade: 'Grade 11',
    subject: 'Mathematics',
    unitNumber: 3,
    unitTitle: 'Vectors in Two Dimensions',
    topic: 'Angle Between Vectors',
    type: 'choice',
    question: 'Find the angle θ between the vectors u = (1, √3) and v = (√3, 1).',
    options: [
      'A. 0°',
      'B. 30°',
      'C. 45°',
      'D. 60°'
    ],
    correctAnswer: 1,
    explanation: 'Dot product: u · v = (1)(√3) + (√3)(1) = 2√3.\nMagnitudes: |u| = √(1² + (√3)²) = √(1 + 3) = 2; |v| = √((√3)² + 1²) = 2.\ncos(θ) = (u · v) / (|u||v|) = (2√3) / (2 × 2) = (2√3) / 4 = √3 / 2.\nTherefore θ = arccos(√3 / 2) = 30° (or π/6 rad).',
    formulaUsed: 'cos(θ) = (u · v) / (|u||v|)',
    keyConcept: 'Vector Angles and Dot Product',
    difficulty: 'Medium',
    sourceNote: 'Grade 11 Mathematics Unit 3 Review'
  },

  // Grade 11 Math Unit 5
  {
    id: 'math-g11-u5-1',
    grade: 'Grade 11',
    subject: 'Mathematics',
    unitNumber: 5,
    unitTitle: 'Introduction to Linear Programming',
    topic: 'Feasible Regions and Vertices',
    type: 'choice',
    question: 'In a linear programming problem, a bounded feasible region has vertices (0, 0), (0, 4), (3, 2), and (4, 0). Find the maximum value of the objective function Z = 5x + 3y.',
    options: [
      'A. 12',
      'B. 20',
      'C. 21',
      'D. 24'
    ],
    correctAnswer: 2,
    explanation: 'Evaluate Z at each corner point:\nAt (0, 0): Z = 0 + 0 = 0\nAt (0, 4): Z = 5(0) + 3(4) = 12\nAt (3, 2): Z = 5(3) + 3(2) = 15 + 6 = 21\nAt (4, 0): Z = 5(4) + 3(0) = 20.\nThe maximum value is 21, occurring at vertex (3, 2).',
    formulaUsed: 'Corner-Point Theorem for Optimization',
    keyConcept: 'Linear Programming Corner-Point Evaluation',
    difficulty: 'Medium',
    sourceNote: 'Grade 11 Mathematics Unit 5 Review'
  },

  // Grade 12 Math Unit 5
  {
    id: 'math-g12-u5-1',
    grade: 'Grade 12',
    subject: 'Mathematics',
    unitNumber: 5,
    unitTitle: 'Three-Dimensional Geometry and Vectors',
    topic: 'Cross Product of Vectors in 3D',
    type: 'choice',
    question: 'Compute the cross product u × v of vectors u = î + 2ĵ + 3k̂ and v = 4î + 5ĵ + 6k̂.',
    options: [
      'A. -3î + 6ĵ - 3k̂',
      'B. 3î - 6ĵ + 3k̂',
      'C. 4î + 10ĵ + 18k̂',
      'D. -3î - 6ĵ - 3k̂'
    ],
    correctAnswer: 0,
    explanation: 'Evaluate the determinant: [î, ĵ, k̂; 1, 2, 3; 4, 5, 6].\nî component = (2)(6) - (3)(5) = 12 - 15 = -3.\n-ĵ component = -[(1)(6) - (3)(4)] = -(6 - 12) = +6.\nk̂ component = (1)(5) - (2)(4) = 5 - 8 = -3.\nThus, u × v = -3î + 6ĵ - 3k̂.',
    formulaUsed: 'u × v = det [î, ĵ, k̂; u_x, u_y, u_z; v_x, v_y, v_z]',
    keyConcept: 'Vector Cross Product in 3D Space',
    difficulty: 'Medium',
    sourceNote: 'Grade 12 Mathematics Unit 5 Review'
  },

  // Grade 9 Biology Unit 1
  {
    id: 'bio-g9-u1-1',
    grade: 'Grade 9',
    subject: 'Biology',
    unitNumber: 1,
    unitTitle: 'Biology and Technology',
    topic: 'Microscopy Calculations',
    type: 'choice',
    question: 'A Grade 9 student in a biology lab views an onion epidermis cell using a 10× eyepiece lens and a 40× objective lens. What is the total magnification of the cell?',
    options: [
      'A. 50×',
      'B. 400×',
      'C. 40×',
      'D. 1000×'
    ],
    correctAnswer: 1,
    explanation: 'Total magnification of a compound light microscope is the product of the ocular (eyepiece) magnification and the objective lens magnification: Total = 10 × 40 = 400×.',
    formulaUsed: 'Total Magnification = Eyepiece × Objective',
    keyConcept: 'Optical Microscopy Magnification',
    difficulty: 'Easy',
    sourceNote: 'Grade 9 Biology Unit 1 Review'
  },

  // Grade 9 Biology Unit 5
  {
    id: 'bio-g9-u5-1',
    grade: 'Grade 9',
    subject: 'Biology',
    unitNumber: 5,
    unitTitle: 'Plant Anatomy and Physiology',
    topic: 'Vascular Tissue Function',
    type: 'choice',
    question: 'Which specialized plant vascular tissue is responsible for transporting water and dissolved inorganic minerals upward from roots to leaves?',
    options: [
      'A. Phloem sieve tube elements',
      'B. Xylem vessel elements and tracheids',
      'C. Parenchyma cortex cells',
      'D. Stomatal guard cells'
    ],
    correctAnswer: 1,
    explanation: 'Xylem tissue consists of dead lignified cells (vessels and tracheids) that conduct water and dissolved minerals un-directionally upward from the roots to all aerial parts through the transpiration pull.',
    keyConcept: 'Plant Vascular Tissues: Xylem vs Phloem',
    difficulty: 'Easy',
    sourceNote: 'Grade 9 Biology Unit 5 Review'
  },

  // Grade 10 Biology Unit 1
  {
    id: 'bio-g10-u1-1',
    grade: 'Grade 10',
    subject: 'Biology',
    unitNumber: 1,
    unitTitle: 'Sub-fields of Biology and Biotechnology',
    topic: 'Traditional Ethiopian Fermentation',
    type: 'choice',
    question: 'In the traditional Ethiopian preparation of "Tej" (honey wine), which natural plant leaves are boiled and used as a fermentation and bittering agent?',
    options: [
      'A. Gesho (Rhamnus prinoides)',
      'B. Kosso (Hagenia abyssinica)',
      'C. Moringa (Moringa stenopetala)',
      'D. Eucalyptus (Eucalyptus globulus)'
    ],
    correctAnswer: 0,
    explanation: 'Gesho (Rhamnus prinoides) leaves and stems are traditionally used throughout Ethiopia in brewing Tej and Tella. Gesho provides antimicrobial properties, flavor, and supports the yeast Saccharomyces cerevisiae during fermentation.',
    keyConcept: 'Indigenous Ethiopian Biotechnology',
    difficulty: 'Easy',
    sourceNote: 'Grade 10 Biology Unit 1 Review'
  },

  // Grade 10 Biology Unit 4
  {
    id: 'bio-g10-u4-1',
    grade: 'Grade 10',
    subject: 'Biology',
    unitNumber: 4,
    unitTitle: 'Microorganisms and Disease',
    topic: 'Malaria Transmission & Vector',
    type: 'choice',
    question: 'Malaria is caused by protozoan parasites of the genus Plasmodium. Which vector transmits this pathogen to humans?',
    options: [
      'A. Male Anopheles mosquito',
      'B. Female Anopheles mosquito',
      'C. Tsetse fly (Glossina)',
      'D. Housefly (Musca domestica)'
    ],
    correctAnswer: 1,
    explanation: 'Only female Anopheles mosquitoes transmit Plasmodium because they require blood meals to nourish developing eggs. Male mosquitoes feed exclusively on plant nectar and do not bite humans.',
    keyConcept: 'Vector Transmission of Infectious Pathogens',
    difficulty: 'Easy',
    sourceNote: 'Grade 10 Biology Unit 4 Review'
  },

  // Grade 11 Biology Unit 2
  {
    id: 'bio-g11-u2-1',
    grade: 'Grade 11',
    subject: 'Biology',
    unitNumber: 2,
    unitTitle: 'Biochemical Molecules',
    topic: 'Biomolecules & Protein Structure',
    type: 'choice',
    question: 'The secondary structure of proteins, such as the alpha-helix and beta-pleated sheet, is stabilized primarily by which type of chemical bond?',
    options: [
      'A. Covalent disulfide bridges',
      'B. Hydrogen bonds between peptide backbone C=O and N-H groups',
      'C. Hydrophobic interactions between nonpolar R-groups',
      'D. Phosphodiester bonds'
    ],
    correctAnswer: 1,
    explanation: 'The secondary structure of proteins consists of regular repeating conformations stabilized by hydrogen bonds between the carbonyl oxygen (C=O) of one amino acid residue and the amide hydrogen (N-H) of another in the polypeptide backbone.',
    keyConcept: 'Protein Secondary Structure Stabilization',
    difficulty: 'Medium',
    sourceNote: 'Grade 11 Biology Unit 2 Review'
  },

  // Grade 12 Biology Unit 4
  {
    id: 'bio-g12-u4-1',
    grade: 'Grade 12',
    subject: 'Biology',
    unitNumber: 4,
    unitTitle: 'Animal Reproduction and Development',
    topic: 'Hormonal Control of Menstrual Cycle',
    type: 'choice',
    question: 'A surge in which anterior pituitary hormone directly triggers ovulation (the release of the secondary oocyte from the Graafian follicle)?',
    options: [
      'A. Follicle-Stimulating Hormone (FSH)',
      'B. Luteinizing Hormone (LH)',
      'C. Progesterone',
      'D. Human Chorionic Gonadotropin (hCG)'
    ],
    correctAnswer: 1,
    explanation: 'Around day 14 of a typical menstrual cycle, high estrogen levels trigger positive feedback on the pituitary, causing a sharp LH surge. This surge causes the mature Graafian follicle to rupture and release the oocyte into the fallopian tube.',
    keyConcept: 'Endocrine Regulation of Ovulation',
    difficulty: 'Medium',
    sourceNote: 'Grade 12 Biology Unit 4 Review'
  },

  // Grade 9 Chemistry Unit 5
  {
    id: 'chem-g9-u5-1',
    grade: 'Grade 9',
    subject: 'Chemistry',
    unitNumber: 5,
    unitTitle: 'Chemical Bonding',
    topic: 'Ionic vs Covalent Bonds',
    type: 'choice',
    question: 'Which of the following compounds is formed predominantly through ionic bonding between an alkali metal and a halogen?',
    options: [
      'A. Methane (CH₄)',
      'B. Sodium chloride (NaCl)',
      'C. Carbon dioxide (CO₂)',
      'D. Water (H₂O)'
    ],
    correctAnswer: 1,
    explanation: 'Sodium (Na) has low electronegativity (0.9) and easily donates an electron to chlorine (electronegativity 3.0). The large electronegativity difference (>2.0) causes complete electron transfer, forming Na⁺ and Cl⁻ held together by strong electrostatic ionic forces.',
    keyConcept: 'Formation of Ionic Compounds',
    difficulty: 'Easy',
    sourceNote: 'Grade 9 Chemistry Unit 5 Review'
  },

  // Grade 10 Chemistry Unit 5
  {
    id: 'chem-g10-u5-1',
    grade: 'Grade 10',
    subject: 'Chemistry',
    unitNumber: 5,
    unitTitle: 'Introduction to Organic Chemistry',
    topic: 'Homologous Series of Alkanes',
    type: 'choice',
    question: 'What is the molecular formula and IUPAC name of an open-chain saturated alkane containing 5 carbon atoms?',
    options: [
      'A. C₅H₁₀, Pentene',
      'B. C₅H₁₂, Pentane',
      'C. C₅H₈, Pentyne',
      'D. C₅H₁₄, Pentanol'
    ],
    correctAnswer: 1,
    explanation: 'Saturated open-chain alkanes follow the general formula CₙH₂ₙ₊₂. For n = 5, the number of hydrogen atoms is 2(5) + 2 = 12. Thus, the formula is C₅H₁₂, named pentane.',
    formulaUsed: 'CₙH₂ₙ₊₂',
    keyConcept: 'General Formula of Alkanes',
    difficulty: 'Easy',
    sourceNote: 'Grade 10 Chemistry Unit 5 Review'
  },

  // Grade 11 Chemistry Unit 1
  {
    id: 'chem-g11-u1-1',
    grade: 'Grade 11',
    subject: 'Chemistry',
    unitNumber: 1,
    unitTitle: 'Fundamental Concepts of Chemistry',
    topic: 'Quantum Numbers & Pauli Principle',
    type: 'choice',
    question: 'What is the maximum number of electrons that can occupy a 3d subshell (where principal quantum number n = 3 and orbital angular quantum number l = 2)?',
    options: [
      'A. 2 electrons',
      'B. 6 electrons',
      'C. 10 electrons',
      'D. 14 electrons'
    ],
    correctAnswer: 2,
    explanation: 'For an orbital angular momentum quantum number l = 2 (d subshell), the magnetic quantum numbers m_l can take (2l + 1) = 2(2) + 1 = 5 values (-2, -1, 0, +1, +2), representing 5 individual orbitals. According to the Pauli Exclusion Principle, each orbital holds a maximum of 2 electrons (with opposite spins m_s = ±1/2). Therefore, 5 × 2 = 10 electrons maximum.',
    formulaUsed: 'Max electrons = 2(2l + 1)',
    keyConcept: 'Quantum Shell Capacities and Subshells',
    difficulty: 'Medium',
    sourceNote: 'Grade 11 Chemistry Unit 1 Review'
  },

  // Grade 12 Chemistry Unit 4
  {
    id: 'chem-g12-u4-1',
    grade: 'Grade 12',
    subject: 'Chemistry',
    unitNumber: 4,
    unitTitle: 'Polymers',
    topic: 'Addition vs Condensation Polymerization',
    type: 'choice',
    question: 'Which of the following polymers is synthesized through condensation (step-growth) polymerization with the elimination of a small byproduct molecule like water?',
    options: [
      'A. Polyethylene',
      'B. Polyvinyl chloride (PVC)',
      'C. Nylon-6,6',
      'D. Polystyrene'
    ],
    correctAnswer: 2,
    explanation: 'Nylon-6,6 is formed by the condensation polymerization of hexamethylenediamine and adipic acid. The amine group reacts with the carboxylic acid group to form an amide linkage (-CONH-), releasing a water molecule (H₂O) for each linkage formed. Polyethylene, PVC, and polystyrene are addition polymers formed from monomers containing carbon-carbon double bonds.',
    keyConcept: 'Condensation Polymerization & Polyamides',
    difficulty: 'Medium',
    sourceNote: 'Grade 12 Chemistry Unit 4 Review'
  },

  // Grade 12 Chemistry Unit 5
  {
    id: 'chem-g12-u5-1',
    grade: 'Grade 12',
    subject: 'Chemistry',
    unitNumber: 5,
    unitTitle: 'Environmental Chemistry',
    topic: 'Acid Rain & Atmospheric Chemistry',
    type: 'choice',
    question: 'Which two industrial gases released by fossil fuel combustion and metallurgical smelting are the primary precursors responsible for the formation of acid rain (pH < 5.6)?',
    options: [
      'A. Methane (CH₄) and Carbon monoxide (CO)',
      'B. Sulfur dioxide (SO₂) and Nitrogen oxides (NOₓ)',
      'C. Chlorofluorocarbons (CFCs) and Argon',
      'D. Ozone (O₃) and Hydrogen gas (H₂)'
    ],
    correctAnswer: 1,
    explanation: 'Sulfur dioxide (SO₂) and nitrogen oxides (NO and NO₂) react with atmospheric water vapor, oxygen, and oxidants to form sulfuric acid (H₂SO₄) and nitric acid (HNO₃), which precipitate as acid rain, causing soil acidification and structural erosion.',
    keyConcept: 'Chemical Precursors of Acid Rain',
    difficulty: 'Easy',
    sourceNote: 'Grade 12 Chemistry Unit 5 Review'
  }
];

export const ALL_QUESTIONS: Question[] = [
  ...COMPREHENSIVE_QUESTION_BANK,
  ...EXTRA_QUESTIONS
];

// Helper to filter questions
export function getQuestionsByFilter(
  subject?: Subject,
  grade?: Grade,
  unitNumber?: number,
  type?: 'choice' | 'review' | 'exercise'
): Question[] {
  return ALL_QUESTIONS.filter(q => {
    if (subject && q.subject !== subject) return false;
    if (grade && q.grade !== grade) return false;
    if (unitNumber !== undefined && q.unitNumber !== unitNumber) return false;
    if (type && q.type !== type) return false;
    return true;
  });
}
