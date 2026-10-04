import { Grade, Subject, SubjectCurriculum } from '../types/curriculum';

export const ETHIOPIAN_CURRICULUM_UNITS: SubjectCurriculum[] = [
  // ==========================================
  // PHYSICS
  // ==========================================
  {
    grade: 'Grade 9',
    subject: 'Physics',
    overview: 'Foundations of physical sciences, measurements, one-dimensional kinematics, Newtonian mechanics, work, energy, power, simple machines, fluids, and heat.',
    units: [
      {
        unitNumber: 1,
        title: 'Physics and Human Society',
        description: 'The nature and branches of physics, scientific inquiry, role of physics in technological advancement, and Ethiopian indigenous knowledge in physical applications.',
        keyTopics: ['Definition & branches of physics', 'Physics and technology', 'Indigenous technological knowledge in Ethiopia', 'Scientific investigation methods'],
      },
      {
        unitNumber: 2,
        title: 'Physical Quantities and Measurement',
        description: 'Fundamental and derived physical quantities, SI base units, measuring instruments (vernier caliper, micrometer), significant figures, errors, and uncertainties.',
        keyTopics: ['SI base units and derived units', 'Standard prefixes', 'Measuring instruments & accuracy', 'Errors, precision, and significant figures'],
        formulas: [
          { name: 'Percentage Error', formula: '% Error = (|Measured - True| / True) × 100%', note: 'Used to quantify measurement accuracy' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Motion in One Dimension',
        description: 'Position, displacement, speed, velocity, uniform acceleration, kinematics equations in 1D, graphical analysis, and motion under gravity (free fall).',
        keyTopics: ['Distance vs Displacement', 'Speed vs Velocity', 'Uniformly accelerated linear motion', 'Kinematics graphs (s-t, v-t, a-t)', 'Free fall under gravity'],
        formulas: [
          { name: 'Velocity Equation', formula: 'v = u + at', note: 'Linear kinematics' },
          { name: 'Displacement Equation', formula: 's = ut + (1/2)at²', note: 'Distance with constant acceleration' },
          { name: 'Velocity-Displacement Relation', formula: 'v² = u² + 2as', note: 'Kinematics without time' },
          { name: 'Average Velocity', formula: 'v_avg = (u + v) / 2', note: 'Valid for uniform acceleration' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Force, Work, Energy, and Power',
        description: "Newton's three laws of motion, inertia, friction, gravitational force, work done by constant forces, kinetic and potential energy, conservation of mechanical energy, and power.",
        keyTopics: ["Newton's First, Second, and Third Laws", 'Types of forces and friction (static vs kinetic)', 'Work done by a force', 'Kinetic energy and gravitational potential energy', 'Work-Energy Theorem', 'Power and efficiency'],
        formulas: [
          { name: "Newton's Second Law", formula: 'F_net = ma', note: 'Force = mass × acceleration' },
          { name: 'Frictional Force', formula: 'f = μN', note: 'μ = coefficient of friction, N = normal force' },
          { name: 'Work Done', formula: 'W = F · s · cos(θ)', note: 'θ is angle between force and displacement' },
          { name: 'Kinetic Energy', formula: 'KE = (1/2)mv²', note: 'Energy of motion' },
          { name: 'Gravitational Potential Energy', formula: 'PE = mgh', note: 'Energy due to elevation' },
          { name: 'Power', formula: 'P = W / t = F · v', note: 'Rate of doing work' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Simple Machines',
        description: 'Principles of machines, Mechanical Advantage (MA), Velocity Ratio (VR), Efficiency (η), levers of different orders, inclined planes, wedges, screws, wheel and axle, and pulley systems.',
        keyTopics: ['Mechanical Advantage & Velocity Ratio', 'Efficiency of machines', 'Classification of levers', 'Pulleys (single, block and tackle)', 'Inclined planes and screws'],
        formulas: [
          { name: 'Mechanical Advantage', formula: 'MA = Load / Effort', note: 'Force ratio' },
          { name: 'Velocity Ratio', formula: 'VR = Distance moved by effort / Distance moved by load', note: 'Displacement ratio' },
          { name: 'Efficiency', formula: 'η = (MA / VR) × 100% = (Work Output / Work Input) × 100%', note: 'Always < 100% due to friction' }
        ]
      },
      {
        unitNumber: 6,
        title: 'Fluid Statics',
        description: "Density and specific gravity, pressure in static fluids, variation of pressure with depth, atmospheric pressure, Pascal's principle and hydraulic systems, Archimedes' principle, and floatation.",
        keyTopics: ['Density and relative density', 'Hydrostatic pressure equation', 'Atmospheric pressure & barometers', "Pascal's principle & hydraulics", "Archimedes' principle & buoyancy", 'Law of floatation'],
        formulas: [
          { name: 'Hydrostatic Pressure', formula: 'P = ρgh', note: 'ρ is fluid density, h is depth' },
          { name: "Pascal's Principle", formula: 'F₁ / A₁ = F₂ / A₂', note: 'Hydraulic lift principle' },
          { name: 'Buoyant Force', formula: 'F_b = ρ_fluid · V_submerged · g = Weight of displaced fluid', note: "Archimedes' law" }
        ]
      },
      {
        unitNumber: 7,
        title: 'Temperature and Thermometry',
        description: 'Concepts of thermal equilibrium and temperature, thermometric properties, Celsius, Fahrenheit, and Kelvin temperature scales, and linear/volumetric thermal expansion.',
        keyTopics: ['Thermal equilibrium & Zeroth Law', 'Thermometric properties', 'Conversion between °C, °F, and K', 'Linear, areal, and volumetric thermal expansion'],
        formulas: [
          { name: 'Celsius to Kelvin', formula: 'T(K) = T(°C) + 273.15', note: 'Absolute temperature scale' },
          { name: 'Celsius to Fahrenheit', formula: 'T(°F) = (9/5)T(°C) + 32', note: 'Temperature conversion' },
          { name: 'Linear Expansion', formula: 'ΔL = α · L₀ · ΔT', note: 'α is linear expansivity' }
        ]
      }
    ]
  },
  {
    grade: 'Grade 10',
    subject: 'Physics',
    overview: 'Vector operations, two-dimensional motion, projectile trajectory, circular motion, electromagnetism, electromagnetic induction, introduction to electronics, and wave motion & sound.',
    units: [
      {
        unitNumber: 1,
        title: 'Vector Quantities',
        description: 'Representation of vectors, scalar vs vector quantities, vector components, resolution into x and y axes, vector addition using analytical methods, unit vectors, and scalar product.',
        keyTopics: ['Vector addition & subtraction (graphical & analytical)', 'Resolution into rectangular components', 'Unit vector notation (i, j)', 'Dot product of two vectors'],
        formulas: [
          { name: 'Vector Components', formula: 'A_x = A cos(θ),  A_y = A sin(θ)', note: 'Resolution along axes' },
          { name: 'Vector Magnitude', formula: '|A| = √(A_x² + A_y²)', note: 'Pythagorean magnitude' },
          { name: 'Dot Product', formula: 'A · B = |A||B| cos(θ) = A_x B_x + A_y B_y', note: 'Scalar product' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Motion in Two Dimensions',
        description: 'Projectile motion, time of flight, maximum height, horizontal range, uniform circular motion, centripetal acceleration, and centripetal force.',
        keyTopics: ['Independence of vertical and horizontal motions', 'Projectile trajectory equations', 'Time of flight, H_max, and Range', 'Uniform circular motion & centripetal acceleration'],
        formulas: [
          { name: 'Time of Flight', formula: 'T = (2u sin(θ)) / g', note: 'Total time in air' },
          { name: 'Maximum Height', formula: 'H = (u² sin²(θ)) / (2g)', note: 'Peak altitude' },
          { name: 'Horizontal Range', formula: 'R = (u² sin(2θ)) / g', note: 'Maximum range when θ = 45°' },
          { name: 'Centripetal Acceleration', formula: 'a_c = v² / r = ω²r', note: 'Directed toward center' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Electromagnetism',
        description: "Magnetic fields, field lines, magnetic force on moving charge and current-carrying wire, electromagnetic induction, Faraday's Law, Lenz's Law, generators, and transformers.",
        keyTopics: ['Magnetic poles and magnetic flux', 'Lorentz force on charged particles', "Right-hand rule for magnetic forces", "Faraday's Law of induction & Lenz's Law", 'Electric motors and generators', 'Step-up and step-down transformers'],
        formulas: [
          { name: 'Magnetic Force on Charge', formula: 'F = qvB sin(θ)', note: 'Lorentz force' },
          { name: 'Magnetic Force on Wire', formula: 'F = I L B sin(θ)', note: 'Force on current-carrying conductor' },
          { name: "Faraday's Induction Law", formula: 'ε = -N (ΔΦ / Δt)', note: 'Induced electromotive force' },
          { name: 'Transformer Ratio', formula: 'V_s / V_p = N_s / N_p = I_p / I_s', note: 'Ideal transformer relationship' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Introduction to Electronics',
        description: 'Conductors, insulators, intrinsic and extrinsic semiconductors, p-type and n-type materials, p-n junction diode, forward and reverse bias, rectification, and introductory transistors.',
        keyTopics: ['Energy band theory overview', 'Doping (p-type and n-type semiconductors)', 'p-n junction and depletion layer', 'Half-wave and full-wave rectification', 'Transistor as a switch & amplifier'],
      },
      {
        unitNumber: 5,
        title: 'Wave Motion and Sound',
        description: 'Classification of waves (transverse and longitudinal), wave characteristics (wavelength, frequency, velocity, amplitude), wave equation, sound propagation, reflection, echo, resonance, and Doppler effect.',
        keyTopics: ['Transverse vs Longitudinal waves', 'Wave speed formula', 'Properties of sound (pitch, loudness, timbre)', 'Speed of sound in various media', 'Echo and reverberation', 'Doppler Effect for sound'],
        formulas: [
          { name: 'Universal Wave Equation', formula: 'v = f · λ', note: 'Speed = frequency × wavelength' },
          { name: 'Period-Frequency Relation', formula: 'T = 1 / f', note: 'Inverse relation' },
          { name: 'Echo Distance', formula: 'd = (v · t) / 2', note: 'Reflected sound travel' }
        ]
      }
    ]
  },
  {
    grade: 'Grade 11',
    subject: 'Physics',
    overview: 'Advanced kinematics in 2D, rigorous dynamics, friction, gravitation, work-energy theorem, rotational dynamics, moment of inertia, oscillations, and simple harmonic motion.',
    units: [
      {
        unitNumber: 1,
        title: 'Physics and Measurement',
        description: 'Units, dimensional analysis, checking validity of physical equations, propagation of uncertainties, and experimental error analysis.',
        keyTopics: ['Dimensions of physical quantities', 'Dimensional homogeneity principle', 'Absolute, relative, and percentage uncertainties', 'Propagation of errors in addition, multiplication, and powers'],
        formulas: [
          { name: 'Dimensional Formula', formula: '[Force] = [M L T⁻²], [Work] = [M L² T⁻²]', note: 'Dimensional verification' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Two-Dimensional Kinematics',
        description: 'Relative velocity in two dimensions, projectile motion from elevated surfaces, angular velocity, and tangential acceleration.',
        keyTopics: ['Position vector and displacement vector in 2D', 'Relative velocity (river-boat & wind-plane problems)', 'Projectile launched from height h', 'Tangential and radial acceleration'],
        formulas: [
          { name: 'Relative Velocity', formula: 'v_AB = v_A - v_B', note: 'Vector relative velocity' },
          { name: 'Total Acceleration', formula: 'a = √(a_t² + a_r²)', note: 'Tangential and radial components' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Dynamics and Newton’s Laws',
        description: "Static and kinetic friction, dynamics of banking curves, universal gravitation, Kepler's laws of planetary motion, gravitational potential energy, and escape velocity.",
        keyTopics: ['Free-body diagrams on inclined planes with friction', 'Banking of road curves with and without friction', "Newton's Law of Universal Gravitation", "Kepler's Three Laws of Planetary Motion", 'Orbital speed and Escape velocity'],
        formulas: [
          { name: 'Banked Road (no friction)', formula: 'tan(θ) = v² / (rg)', note: 'Ideal banking angle' },
          { name: 'Universal Gravitation', formula: 'F = G (m₁m₂) / r²', note: 'G = 6.674 × 10⁻¹¹ N·m²/kg²' },
          { name: 'Escape Velocity', formula: 'v_esc = √(2GM / R) = √(2gR)', note: 'Velocity to escape gravity' },
          { name: "Kepler's Third Law", formula: 'T² ∝ r³', note: 'Orbital period and radius ratio' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Work, Energy, and Power',
        description: 'Conservative and non-conservative forces, potential energy curves, conservation of mechanical energy, work done by variable forces, and spring elastic potential energy.',
        keyTopics: ['Work done by variable force (integral/area under F-x graph)', "Hooke's Law and elastic potential energy", 'Conservative vs Non-conservative forces', 'Work-Energy principle for non-conservative systems'],
        formulas: [
          { name: 'Elastic Potential Energy', formula: 'PE_elastic = (1/2)kx²', note: 'Spring energy' },
          { name: 'Conservation of Mechanical Energy', formula: 'KE_i + PE_i = KE_f + PE_f', note: 'Conservative system' },
          { name: 'Work by Non-conservative Force', formula: 'W_nc = ΔE_mech', note: 'Frictional dissipation' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Rotational Motion and Equilibrium',
        description: 'Torque, conditions for static equilibrium, moment of inertia of regular bodies, rotational kinetic energy, angular momentum, and conservation of angular momentum.',
        keyTopics: ['Torque (moment of a force)', 'First and Second conditions of equilibrium', 'Moment of inertia (I = Σmr²)', "Newton's second law for rotation (τ = Iα)", 'Angular momentum (L = Iω) and conservation'],
        formulas: [
          { name: 'Torque', formula: 'τ = r · F · sin(θ)', note: 'Rotational force moment' },
          { name: 'Rotational Second Law', formula: 'Στ = I · α', note: 'Torque = moment of inertia × angular acceleration' },
          { name: 'Rotational Kinetic Energy', formula: 'KE_rot = (1/2)Iω²', note: 'Kinetic energy of rotating body' },
          { name: 'Angular Momentum', formula: 'L = Iω', note: 'Conserved when external torque is zero' }
        ]
      },
      {
        unitNumber: 6,
        title: 'Oscillations',
        description: 'Simple Harmonic Motion (SHM), kinematics and dynamics of SHM, simple pendulum, horizontal and vertical mass-spring systems, energy in SHM, and damped & forced oscillations.',
        keyTopics: ['Characteristics of SHM', 'Displacement, velocity, and acceleration equations of SHM', 'Period and frequency of mass-spring system', 'Period of simple pendulum', 'Damping and resonance'],
        formulas: [
          { name: 'Period of Mass-Spring', formula: 'T = 2π √(m / k)', note: 'Independent of amplitude' },
          { name: 'Period of Simple Pendulum', formula: 'T = 2π √(L / g)', note: 'For small angle oscillations' },
          { name: 'Total Energy in SHM', formula: 'E_total = (1/2)kA²', note: 'A is amplitude' }
        ]
      }
    ]
  },
  {
    grade: 'Grade 12',
    subject: 'Physics',
    overview: 'Two-dimensional dynamics and collisions, fluid dynamics & Bernoulli, electric fields, Gauss’s law, DC circuits, magnetism, electromagnetic waves, and modern/nuclear physics.',
    units: [
      {
        unitNumber: 1,
        title: 'Application of Physics in Other Fields',
        description: 'Interdisciplinary physics: Geophysics (seismic waves, Earth magnetism), Astrophysics (stellar evolution, Doppler shift of galaxies), Biophysics, and Medical Physics (imaging, radiation therapy).',
        keyTopics: ['Geophysics & plate tectonics', 'Astrophysics & cosmology (Hubble’s law)', 'Biophysics in human locomotion & senses', 'Medical imaging (X-ray, MRI, ultrasound)'],
      },
      {
        unitNumber: 2,
        title: 'Two-Dimensional Motion & Dynamics',
        description: 'Center of mass, linear momentum in 2D, elastic and inelastic collisions in two dimensions, impulse-momentum theorem, and rocket propulsion.',
        keyTopics: ['Center of mass of multi-particle systems', 'Impulse and linear momentum', 'Conservation of linear momentum in 2D', 'Elastic vs inelastic collisions in two dimensions'],
        formulas: [
          { name: 'Impulse-Momentum Theorem', formula: 'J = F_avg · Δt = Δp', note: 'Change in momentum' },
          { name: '2D Momentum Conservation', formula: 'p_x,initial = p_x,final  and  p_y,initial = p_y,final', note: 'Conserved along each axis' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Fluid Mechanics',
        description: "Fluid dynamics, streamline and turbulent flow, equation of continuity, Bernoulli's equation and its applications (Venturi meter, Torricelli's theorem, lift on an airplane wing), and viscosity.",
        keyTopics: ['Ideal fluid assumptions', 'Equation of continuity for incompressible flow', "Bernoulli's principle & equation", "Torricelli's law of efflux", 'Venturi meter & aerodynamic lift', "Poiseuille's law and viscosity"],
        formulas: [
          { name: 'Equation of Continuity', formula: 'A₁v₁ = A₂v₂ = Constant (Volume Flow Rate Q)', note: 'Conservation of mass' },
          { name: "Bernoulli's Equation", formula: 'P + (1/2)ρv² + ρgh = Constant', note: 'Conservation of energy in fluid flow' },
          { name: "Torricelli's Speed of Efflux", formula: 'v = √(2gh)', note: 'Speed from orifice at depth h' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Electromagnetism and DC Circuits',
        description: "Coulomb's Law, electric field and potential, capacitors and dielectrics, Ohm's law, resistivity, Kirchhoff's rules for complex circuits, magnetic fields produced by currents (Biot-Savart & Ampere's Law), and AC basics.",
        keyTopics: ["Coulomb's Law & Electric field strength", 'Capacitors in series and parallel', "Kirchhoff's Current Law (junction) & Voltage Law (loop)", 'Magnetic force between parallel currents', "Ampere's circuital law", 'Alternating current (AC) RMS values'],
        formulas: [
          { name: "Coulomb's Law", formula: 'F = k (q₁q₂) / r²', note: 'k = 8.99 × 10⁹ N·m²/C²' },
          { name: 'Capacitance of Parallel Plate', formula: 'C = (ε₀ · A) / d', note: 'With dielectric: C = κ C₀' },
          { name: "Kirchhoff's Junction Rule", formula: 'ΣI_in = ΣI_out', note: 'Conservation of electric charge' },
          { name: "Kirchhoff's Loop Rule", formula: 'ΣΔV = 0', note: 'Conservation of electric energy' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Atomic and Nuclear Physics',
        description: 'Photoelectric effect, photon model of light, de Broglie wavelength, Bohr model of hydrogen, atomic spectra, nuclear structure, binding energy, radioactivity (alpha, beta, gamma decay), half-life, fission and fusion.',
        keyTopics: ['Photoelectric effect equation', "de Broglie matter wavelength (λ = h/p)", 'Bohr postulates & energy levels of H-atom', 'Mass defect and nuclear binding energy (E = mc²)', 'Radioactive decay law & half-life calculation', 'Nuclear fission vs nuclear fusion'],
        formulas: [
          { name: "Einstein's Photoelectric Equation", formula: 'hf = Φ + KE_max', note: 'Φ = work function, h = Planck constant' },
          { name: 'de Broglie Wavelength', formula: 'λ = h / p = h / (mv)', note: 'Wave-particle duality' },
          { name: 'Radioactive Decay Law', formula: 'N(t) = N₀ · (1/2)^(t / T_half)', note: 'Decay over elapsed time t' },
          { name: 'Mass-Energy Equivalence', formula: 'ΔE = (Δm)c²', note: 'c = 3.0 × 10⁸ m/s' }
        ]
      }
    ]
  },

  // ==========================================
  // MATHEMATICS
  // ==========================================
  {
    grade: 'Grade 9',
    subject: 'Mathematics',
    overview: 'Foundational secondary mathematics: set theory, real number system, algebraic equations & inequalities, relations and functions, geometry & measurement, and introductory statistics and probability.',
    units: [
      {
        unitNumber: 1,
        title: 'Further on Sets',
        description: 'Set notation, subsets, union, intersection, difference, complement of sets, Cartesian product of sets, and solving practical word problems using 2 and 3-set Venn diagrams.',
        keyTopics: ['Set operations and properties', 'Cartesian product (A × B)', 'Venn diagrams for two and three sets', 'Inclusion-Exclusion principle in applications'],
        formulas: [
          { name: 'Two-Set Union Formula', formula: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B)', note: 'Inclusion-exclusion' },
          { name: 'Cartesian Product Cardinality', formula: 'n(A × B) = n(A) × n(B)', note: 'Number of ordered pairs' }
        ]
      },
      {
        unitNumber: 2,
        title: 'The Real Number System',
        description: 'Classification of real numbers, rational vs irrational numbers, properties of radicals, laws of integer and rational exponents, rationalizing denominators, and scientific notation.',
        keyTopics: ['Rational vs irrational proof (e.g. √2 is irrational)', 'Laws of exponents', 'Simplification of radicals', 'Rationalizing monomial and binomial denominators'],
        formulas: [
          { name: 'Laws of Exponents', formula: 'a^m · a^n = a^(m+n),  (a^m)^n = a^(mn)', note: 'Exponent properties' },
          { name: 'Radical Exponent Rule', formula: 'ⁿ√(aᵐ) = a^(m/n)', note: 'Fractional powers' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Solving Equations and Inequalities',
        description: 'Linear equations in one variable, equations involving absolute values, linear inequalities in one variable, and systems of linear equations in two variables (substitution and elimination).',
        keyTopics: ['Linear equations with fractions & brackets', 'Absolute value equations (|ax + b| = c)', 'Linear inequalities and sign reversal on division by negative', '2×2 Systems of linear equations'],
        formulas: [
          { name: 'Absolute Value Rule', formula: '|x| = c ⟺ x = c or x = -c (for c ≥ 0)', note: 'Two solution branches' },
          { name: 'Absolute Value Inequality', formula: '|x| < c ⟺ -c < x < c', note: 'Bounded interval' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Relations and Functions',
        description: 'Concept of relation, domain, range, inverse of a relation, definition of a function, vertical line test, evaluation of functions, and linear functions.',
        keyTopics: ['Domain and range of relations', 'Function definition (each input has exactly one output)', 'Vertical line test', 'Linear function f(x) = mx + b and its graph'],
      },
      {
        unitNumber: 5,
        title: 'Geometry and Measurement',
        description: 'Congruency and similarity of triangles, properties of polygons, circle theorems (central angle, inscribed angle, cyclic quadrilaterals), perimeter, area, and surface area & volume of regular solids.',
        keyTopics: ['Triangle similarity criteria (AA, SAS, SSS)', 'Sum of interior angles of polygon ((n-2) × 180°)', 'Circle theorems (angle at center = 2 × angle at circumference)', 'Surface area and volume of cylinders, cones, and prisms'],
        formulas: [
          { name: 'Polygon Interior Angle Sum', formula: 'S = (n - 2) × 180°', note: 'n = number of sides' },
          { name: 'Cylinder Volume', formula: 'V = πr²h', note: 'Base area × height' },
          { name: 'Cone Volume', formula: 'V = (1/3)πr²h', note: 'One-third of cylinder' }
        ]
      },
      {
        unitNumber: 6,
        title: 'Statistics and Probability',
        description: 'Data collection and frequency distribution tables, graphical representation (histograms, polygons), measures of central tendency (mean, median, mode), and basic theoretical probability.',
        keyTopics: ['Grouped and ungrouped frequency tables', 'Mean, median, and mode for grouped and ungrouped data', 'Sample space and event', 'Classical probability formula'],
        formulas: [
          { name: 'Arithmetic Mean', formula: 'x̄ = (Σf·x) / (Σf)', note: 'Weighted average' },
          { name: 'Probability of Event', formula: 'P(E) = n(E) / n(S)', note: 'Favorable outcomes / Total outcomes' }
        ]
      }
    ]
  },
  {
    grade: 'Grade 10',
    subject: 'Mathematics',
    overview: 'Polynomial functions, relations & inverse functions, exponential and logarithmic functions, trigonometric functions, coordinate analytical geometry, and advanced statistics/probability.',
    units: [
      {
        unitNumber: 1,
        title: 'Relations and Functions',
        description: 'Composite functions, one-to-one and onto functions, horizontal line test, determining the inverse of a function, domain and range of inverse functions.',
        keyTopics: ['Function composition (f ∘ g)(x)', 'One-to-one (injective) functions', 'Finding formula of inverse f⁻¹(x)', 'Domain and range of f⁻¹'],
        formulas: [
          { name: 'Composite Function', formula: '(f ∘ g)(x) = f(g(x))', note: 'Output of g becomes input to f' },
          { name: 'Inverse Condition', formula: 'f(f⁻¹(x)) = x and f⁻¹(f(x)) = x', note: 'Reflection over y = x' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Polynomial Functions',
        description: 'Definition and degree of polynomials, operations on polynomials, long division and synthetic division, Remainder Theorem, Factor Theorem, Rational Root Theorem, and graphing polynomial functions.',
        keyTopics: ['Synthetic division algorithm', 'Remainder Theorem (P(c) = remainder)', 'Factor Theorem (x - c is factor ⟺ P(c) = 0)', 'Finding all real and rational roots of cubic & quartic polynomials'],
        formulas: [
          { name: 'Division Algorithm', formula: 'P(x) = D(x) · Q(x) + R(x)', note: 'Degree of R < Degree of D' },
          { name: 'Remainder Theorem', formula: 'P(x) ÷ (x - c) ⟹ Remainder = P(c)', note: 'Direct functional evaluation' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Exponential and Logarithmic Functions',
        description: 'Exponential functions, laws of logarithms, natural logarithms (ln), change of base formula, solving exponential and logarithmic equations, and real-world applications (growth and decay).',
        keyTopics: ['Exponential function f(x) = bˣ (b > 0, b ≠ 1)', 'Logarithmic definition: log_b(x) = y ⟺ bʸ = x', 'Product, quotient, and power laws of logarithms', 'Solving exponential equations using logs', 'Continuous growth & decay (A = Peʳᵗ)'],
        formulas: [
          { name: 'Log Product Rule', formula: 'log_b(xy) = log_b(x) + log_b(y)', note: 'Multiplication inside = addition outside' },
          { name: 'Log Quotient Rule', formula: 'log_b(x/y) = log_b(x) - log_b(y)', note: 'Division inside = subtraction outside' },
          { name: 'Log Power Rule', formula: 'log_b(xᵏ) = k · log_b(x)', note: 'Exponent pulled out as coefficient' },
          { name: 'Change of Base', formula: 'log_b(x) = ln(x) / ln(b) = log₁₀(x) / log₁₀(b)', note: 'Calculation using common/natural logs' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Trigonometric Functions',
        description: 'Radian and degree measures, unit circle trigonometry, definitions of sine, cosine, tangent, graphs of trig functions, amplitude and period, and Pythagorean trigonometric identities.',
        keyTopics: ['Degree to radian conversion (180° = π rad)', 'Trigonometric values of standard angles (30°, 45°, 60°, 90°)', 'Unit circle definitions (x = cos θ, y = sin θ)', 'Pythagorean identities and tangent identity', 'Graphs of y = sin x and y = cos x'],
        formulas: [
          { name: 'Radian-Degree Relation', formula: 'θ_rad = θ_deg × (π / 180°)', note: 'Angle unit conversion' },
          { name: 'Pythagorean Identity', formula: 'sin²(θ) + cos²(θ) = 1', note: 'Fundamental identity' },
          { name: 'Tangent Identity', formula: '1 + tan²(θ) = sec²(θ)', note: 'Derived from dividing by cos²(θ)' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Analytical Geometry',
        description: 'Distance formula, section formula (midpoint and division of segments), slope of a line, forms of linear equations, parallel and perpendicular line conditions, and equation of a circle.',
        keyTopics: ['Distance between two points in Cartesian plane', 'Slope formula and angle of inclination', 'Point-slope and slope-intercept form', 'Parallel lines (m₁ = m₂) and Perpendicular lines (m₁·m₂ = -1)', 'Circle standard equation (x - h)² + (y - k)² = r²'],
        formulas: [
          { name: 'Distance Formula', formula: 'd = √((x₂ - x₁)² + (y₂ - y₁)²)', note: 'Euclidean distance' },
          { name: 'Slope Formula', formula: 'm = (y₂ - y₁) / (x₂ - x₁)', note: 'Rise over run' },
          { name: 'Perpendicular Slopes', formula: 'm₁ · m₂ = -1', note: 'Negative reciprocals' },
          { name: 'Circle Equation', formula: '(x - h)² + (y - k)² = r²', note: 'Center at (h, k), radius r' }
        ]
      },
      {
        unitNumber: 6,
        title: 'Statistics and Probability',
        description: 'Measures of dispersion (range, mean deviation, variance, standard deviation), fundamental counting principle, permutations and combinations, conditional probability, and independent events.',
        keyTopics: ['Variance (σ²) and Standard Deviation (σ)', 'Permutations: order matters (nPr)', 'Combinations: selection without order (nCr)', 'Addition rule for mutually exclusive & non-mutually exclusive events', 'Conditional probability P(A|B)'],
        formulas: [
          { name: 'Permutation Formula', formula: 'nPr = n! / (n - r)!', note: 'Ordered arrangement' },
          { name: 'Combination Formula', formula: 'nCr = n! / (r!(n - r)!)', note: 'Unordered selection' },
          { name: 'Sample Standard Deviation', formula: 's = √[ Σ(x - x̄)² / (n - 1) ]', note: 'Spread of data' }
        ]
      }
    ]
  },
  {
    grade: 'Grade 11',
    subject: 'Mathematics',
    overview: 'Rational expressions & functions, partial fractions, matrices & determinants, 2D vectors, advanced trigonometry, and introductory linear programming.',
    units: [
      {
        unitNumber: 1,
        title: 'Further on Relations and Functions',
        description: 'Rational functions, domain restrictions, vertical, horizontal, and oblique asymptotes, holes in graphs, and decomposition of rational expressions into partial fractions.',
        keyTopics: ['Domain and range of rational functions', 'Vertical and horizontal asymptotes rules', 'Slant (oblique) asymptotes', 'Partial fraction decomposition (linear and quadratic factors)'],
        formulas: [
          { name: 'Horizontal Asymptote Rule', formula: 'If deg(num) = deg(den), y = a_n / b_n; If deg(num) < deg(den), y = 0', note: 'Behavior as x → ±∞' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Matrices and Determinants',
        description: 'Matrix operations (addition, scalar multiplication, matrix multiplication), transpose, determinant of 2×2 and 3×3 matrices, minor and cofactor, matrix inverse, and Cramer’s Rule for linear systems.',
        keyTopics: ['Matrix multiplication conditions and algorithm', 'Determinant of 2×2 and 3×3 using cofactors', 'Inverse of a matrix A⁻¹ = (1/det(A)) adj(A)', 'Solving 2×2 and 3×3 linear systems by Cramer’s Rule'],
        formulas: [
          { name: '2×2 Determinant', formula: 'det [a, b; c, d] = ad - bc', note: 'Cross-product subtraction' },
          { name: '2×2 Inverse', formula: 'A⁻¹ = (1 / (ad - bc)) [d, -b; -c, a]', note: 'Exists iff det(A) ≠ 0' },
          { name: 'Cramer’s Rule', formula: 'x_i = det(A_i) / det(A)', note: 'Solving systems with determinants' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Vectors in Two Dimensions',
        description: 'Vector representations in coordinate form, vector addition and subtraction, scalar multiplication, unit vectors, dot product, angle between two vectors, and projection of vectors.',
        keyTopics: ['Component form v = <v₁, v₂>', 'Magnitude and direction angle', 'Dot product u · v = u₁v₁ + u₂v₂', 'Orthogonal vectors condition (u · v = 0)', 'Orthogonal projection of u onto v'],
        formulas: [
          { name: 'Angle Between Vectors', formula: 'cos(θ) = (u · v) / (|u| · |v|)', note: 'Finds angle θ in [0, π]' },
          { name: 'Vector Projection', formula: 'proj_v(u) = [(u · v) / |v|²] v', note: 'Component of u in direction of v' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Further on Trigonometry',
        description: 'Sum and difference formulas for sine, cosine, tangent, double-angle formulas, half-angle formulas, solving trigonometric equations, and Law of Sines and Law of Cosines for non-right triangles.',
        keyTopics: ['Sum & difference identities (cos(A ± B), sin(A ± B))', 'Double-angle formulas (sin 2A, cos 2A)', 'Solving linear and quadratic trigonometric equations', 'Law of Sines and ambiguous case', 'Law of Cosines'],
        formulas: [
          { name: 'Double Angle Sine', formula: 'sin(2θ) = 2 sin(θ) cos(θ)', note: 'Key identity' },
          { name: 'Double Angle Cosine', formula: 'cos(2θ) = cos²(θ) - sin²(θ) = 2cos²(θ) - 1 = 1 - 2sin²(θ)', note: 'Three useful forms' },
          { name: 'Law of Cosines', formula: 'c² = a² + b² - 2ab cos(C)', note: 'Generalized Pythagorean theorem' },
          { name: 'Law of Sines', formula: 'a / sin(A) = b / sin(B) = c / sin(C)', note: 'Ratio equality' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Introduction to Linear Programming',
        description: 'Linear inequalities in two variables, graphical solution of systems of inequalities, feasible region, corner-point theorem, objective functions, and optimization problems in business and production.',
        keyTopics: ['Graphing linear inequalities in 2 variables', 'Bounded vs unbounded feasible regions', 'Corner points (vertices) determination', 'Maximizing or minimizing objective function z = ax + by'],
        formulas: [
          { name: 'Corner Point Principle', formula: 'The optimal value of z = ax + by occurs at a vertex of the feasible region', note: 'Fundamental theorem of LP' }
        ]
      }
    ]
  },
  {
    grade: 'Grade 12',
    subject: 'Mathematics',
    overview: 'Advanced secondary mathematics & calculus: sequences and series, limits and continuity, differential calculus, integral calculus, and 3D coordinate geometry & vectors.',
    units: [
      {
        unitNumber: 1,
        title: 'Sequences and Series',
        description: 'Arithmetic progressions (AP), geometric progressions (GP), general term formulas, sum of first n terms, infinite geometric series convergence, sigma notation, and mathematical induction principle.',
        keyTopics: ['Arithmetic progression: n-th term and sum', 'Geometric progression: n-th term and sum', 'Infinite geometric series convergence (|r| < 1)', 'Sum of infinite series S_∞ = a / (1 - r)', 'Proof by mathematical induction'],
        formulas: [
          { name: 'AP n-th Term', formula: 'a_n = a₁ + (n - 1)d', note: 'd = common difference' },
          { name: 'AP Sum', formula: 'S_n = (n / 2)[2a₁ + (n - 1)d] = (n / 2)(a₁ + a_n)', note: 'Sum of first n terms' },
          { name: 'GP n-th Term', formula: 'a_n = a₁ · r^(n - 1)', note: 'r = common ratio' },
          { name: 'Infinite GP Sum', formula: 'S_∞ = a₁ / (1 - r)  (for |r| < 1)', note: 'Convergent series sum' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Introduction to Calculus: Limits and Continuity',
        description: 'Intuitive concept of limit, algebraic evaluation of limits, indeterminate forms (0/0), one-sided limits, limits at infinity, definition of continuity, and Intermediate Value Theorem.',
        keyTopics: ['Limit laws (sum, product, quotient)', 'Evaluating limits by factoring and rationalization', 'Limits at infinity for rational functions', 'Three conditions for continuity at x = c', 'Intermediate Value Theorem'],
        formulas: [
          { name: 'Continuity Definition', formula: 'f is continuous at c ⟺ lim_{x→c} f(x) = f(c)', note: 'Requires limit exists and equals f(c)' },
          { name: 'Standard Trig Limit', formula: 'lim_{x→0} (sin x / x) = 1', note: 'Angle in radians' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Derivatives',
        description: 'Definition of derivative as limit of difference quotient, power rule, product rule, quotient rule, chain rule, derivatives of trig/exponential/logarithmic functions, implicit differentiation, tangent lines, and optimization (maxima and minima).',
        keyTopics: ['Limit definition f\'(x) = lim_{h→0} [f(x+h) - f(x)] / h', 'Power rule d/dx(xⁿ) = n xⁿ⁻¹', 'Product and Quotient rules', 'Chain rule for composite functions', 'First and Second Derivative tests for extrema', 'Applied optimization problems'],
        formulas: [
          { name: 'Product Rule', formula: '(fg)\' = f\'g + fg\'', note: 'Derivative of product' },
          { name: 'Quotient Rule', formula: '(f/g)\' = (f\'g - fg\') / g²', note: 'Low d-high minus high d-low' },
          { name: 'Chain Rule', formula: 'd/dx[f(g(x))] = f\'(g(x)) · g\'(x)', note: 'Derivative of composite' },
          { name: 'Equation of Tangent Line', formula: 'y - f(c) = f\'(c)(x - c)', note: 'Slope is f\'(c)' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Integrals',
        description: 'Antiderivatives and indefinite integrals, basic integration formulas, substitution method (u-substitution), Fundamental Theorem of Calculus, definite integrals, and area under and between curves.',
        keyTopics: ['Indefinite integrals & constant of integration C', 'Power rule for integrals ∫ xⁿ dx = (xⁿ⁺¹)/(n+1) + C', 'Integration by u-substitution', 'Fundamental Theorem of Calculus: ∫_a^b f(x)dx = F(b) - F(a)', 'Calculating area enclosed by curves'],
        formulas: [
          { name: 'Power Rule for Integrals', formula: '∫ xⁿ dx = (x^(n+1))/(n + 1) + C  (n ≠ -1)', note: 'Reverse of power rule' },
          { name: 'Log Integral', formula: '∫ (1/x) dx = ln|x| + C', note: 'Special case n = -1' },
          { name: 'Fundamental Theorem of Calculus', formula: '∫_a^b f(x) dx = F(b) - F(a)', note: 'F\'(x) = f(x)' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Three-Dimensional Geometry and Vectors',
        description: '3D Cartesian coordinate system, distance formula in 3D, spheres in 3D space, vectors in 3D, cross product of two vectors, geometric interpretation of cross product (area of parallelogram), and vector equations of lines and planes.',
        keyTopics: ['Distance and midpoint in 3D space', 'Sphere equation (x - a)² + (y - b)² + (z - c)² = r²', 'Vectors in 3D space (i, j, k components)', 'Cross product u × v and right-hand rule', 'Equations of lines and planes in 3D'],
        formulas: [
          { name: '3D Distance', formula: 'd = √[(x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²]', note: 'Euclidean distance in 3D' },
          { name: 'Cross Product Magnitude', formula: '|u × v| = |u||v| sin(θ) = Area of Parallelogram', note: 'Orthogonal to both u and v' }
        ]
      }
    ]
  },

  // ==========================================
  // BIOLOGY
  // ==========================================
  {
    grade: 'Grade 9',
    subject: 'Biology',
    overview: 'Foundations of life science, microscopy, cellular structure & transport, human digestive and respiratory systems, circulatory and excretory physiology, plant anatomy, and Ethiopian biodiversity & ecology.',
    units: [
      {
        unitNumber: 1,
        title: 'Biology and Technology',
        description: 'Branches of biology, scientific methodology, light microscopes and electron microscopes, magnification calculations, and Ethiopian indigenous biological practices and heritage.',
        keyTopics: ['Branches of modern biology', 'Parts and operation of light microscope', 'Total magnification formula', 'Indigenous biological knowledge in traditional agriculture and medicine'],
        formulas: [
          { name: 'Microscope Magnification', formula: 'Total Magnification = Eyepiece Magnification × Objective Magnification', note: 'Optics of compound microscope' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Cell Biology',
        description: 'Cell theory, prokaryotic versus eukaryotic cells, organelles and their specific functions (nucleus, mitochondria, ribosomes, ER, Golgi, chloroplast, cell wall), and membrane transport mechanisms (diffusion, osmosis, active transport).',
        keyTopics: ['Tenets of Cell Theory', 'Prokaryotes (bacteria) vs Eukaryotes', 'Plant cell vs Animal cell differences', 'Mitochondria (cellular respiration) and Chloroplasts (photosynthesis)', 'Diffusion, osmosis, turgidity, and plasmolysis'],
      },
      {
        unitNumber: 3,
        title: 'Human Biology: Digestive and Respiratory Systems',
        description: 'Anatomy of the human digestive tract, mechanical vs chemical digestion, digestive enzymes (amylase, pepsin, lipase, trypsin), absorption in villi, respiratory anatomy, mechanism of breathing, gas exchange in alveoli, and respiratory diseases.',
        keyTopics: ['Digestive tract organs and auxiliary glands (liver, pancreas)', 'Enzyme digestion of carbohydrates, proteins, and lipids', 'Structure of intestinal villi and microvilli', 'Inhalation vs exhalation mechanics', 'Gas exchange across alveolar membrane', 'Health hazards of smoking and air pollution'],
      },
      {
        unitNumber: 4,
        title: 'Human Biology: Circulatory System and Excretion',
        description: 'Structure of the human heart, double circulation (systemic and pulmonary), blood vessels (arteries, veins, capillaries), blood composition (erythrocytes, leukocytes, platelets, plasma), kidney anatomy, nephron functioning, and urine formation.',
        keyTopics: ['Four-chambered heart and cardiac cycle', 'Artery vs Vein vs Capillary histology', 'ABO and Rh blood group systems', 'Excretory organs in humans', 'Nephron processes: ultrafiltration, selective reabsorption, and secretion'],
      },
      {
        unitNumber: 5,
        title: 'Plant Anatomy and Physiology',
        description: 'Internal anatomy of roots, stems, and leaves, xylem and phloem transport, transpiration stream and stomata control, photosynthesis overview, and plant reproduction (flower structure, pollination, fertilization).',
        keyTopics: ['Xylem (water/minerals) vs Phloem (translocation of organic sugars)', 'Transpiration and factors affecting rate', 'Stomatal mechanism with guard cells', 'Anatomy of flower and double fertilization in angiosperms'],
      },
      {
        unitNumber: 6,
        title: 'Ecology and Conservation',
        description: 'Ecological hierarchy (organism, population, community, ecosystem, biome), trophic levels, food chains and food webs, ecological pyramids, symbiotic relationships, and conservation of Ethiopian wildlife and national parks.',
        keyTopics: ['Producers, consumers, and decomposers', '10% energy transfer rule across trophic levels', 'Symbiosis: mutualism, commensalism, parasitism', 'Endemic wildlife of Ethiopia (Walia ibex, Ethiopian wolf, Gelada baboon)', 'Protected areas in Ethiopia (Simien, Bale Mountains)'],
      }
    ]
  },
  {
    grade: 'Grade 10',
    subject: 'Biology',
    overview: 'Biotechnology, Mendelian genetics, nervous and endocrine coordination, microorganisms & pathogens, and Ethiopian environmental conservation & natural resources.',
    units: [
      {
        unitNumber: 1,
        title: 'Sub-fields of Biology and Biotechnology',
        description: 'Traditional biotechnology (fermentation, bread, injera, brewing) vs modern biotechnology (recombinant DNA, cloning, GMOs, tissue culture, bioremediation), and ethical considerations.',
        keyTopics: ['Traditional fermentation practices in Ethiopia (Tej, Tella, Injera)', 'Microorganisms in biotechnology', 'Recombinant DNA and transgenic organisms', 'Bioethics and biosafety regulations'],
      },
      {
        unitNumber: 2,
        title: 'Heredity and Genetics',
        description: "Mendelian genetics, Gregor Mendel's experiments on pea plants, Law of Segregation, Law of Independent Assortment, monohybrid and dihybrid crosses, Punnett squares, genotypes, phenotypes, and human sex determination and sex-linked traits.",
        keyTopics: ["Mendel's First and Second Laws", 'Monohybrid cross phenotypic ratio 3:1, genotypic ratio 1:2:1', 'Dihybrid cross phenotypic ratio 9:3:3:1', 'Incomplete dominance and codominance (ABO blood)', 'Sex-linked inheritance (hemophilia, color blindness)'],
      },
      {
        unitNumber: 3,
        title: 'Human Biology: Nervous and Endocrine Coordination',
        description: 'Structure and types of neurons, nerve impulse transmission (action potential, synapse), central nervous system (brain, spinal cord), peripheral nervous system, reflex arc, endocrine glands and their hormones, and feedback homeostasis.',
        keyTopics: ['Sensory, motor, and relay neurons', 'Synaptic transmission with neurotransmitters', 'Brain regions: cerebrum, cerebellum, medulla oblongata', 'Endocrine system: pituitary, thyroid, adrenal, pancreas, gonads', 'Blood glucose regulation (insulin and glucagon)'],
      },
      {
        unitNumber: 4,
        title: 'Microorganisms and Disease',
        description: 'Morphology and classification of bacteria, viruses, fungi, and protozoa, infectious diseases in Ethiopia (malaria, tuberculosis, HIV/AIDS, cholera), transmission modes, prevention, antibiotics, and vaccines.',
        keyTopics: ['Bacterial structure and reproduction (binary fission)', 'Viral structure and replication cycle', 'Malaria life cycle of Plasmodium in Anopheles and human liver/RBCs', 'HIV transmission and effect on CD4+ T helper cells', 'Vaccination and herd immunity'],
      },
      {
        unitNumber: 5,
        title: 'Natural Resources and Environmental Issues',
        description: 'Renewable and non-renewable resources, soil erosion and watershed management in the Ethiopian highlands, deforestation, water pollution, biodiversity loss, and climate change mitigation.',
        keyTopics: ['Soil degradation and terracing/reforestation in Ethiopia', 'Deforestation impacts and Green Legacy initiative', 'Water resource management (Blue Nile / Abay Basin)', 'Global warming and climate resilience in East Africa'],
      }
    ]
  },
  {
    grade: 'Grade 11',
    subject: 'Biology',
    overview: 'Biochemical molecules, enzymology, cellular ultrastructure & membrane dynamics, bioenergetics (cellular respiration & photosynthesis), and advanced genetics.',
    units: [
      {
        unitNumber: 1,
        title: 'The Science of Biology',
        description: 'Nature of biological inquiry, scientific methods, designing controlled experiments, hypothesis testing, biological measurements, data analysis, and laboratory bioethics.',
        keyTopics: ['Hypothesis formation and null hypothesis', 'Independent, dependent, and controlled variables', 'Peer review and ethical standards in biological research'],
      },
      {
        unitNumber: 2,
        title: 'Biochemical Molecules',
        description: 'Chemical basis of life: water properties, carbohydrates (monosaccharides, disaccharides, polysaccharides), lipids (triglycerides, phospholipids, steroids), proteins (amino acids, peptide bonds, four structural levels), and nucleic acids (DNA, RNA).',
        keyTopics: ['Hydrogen bonding and properties of water', 'Condensation and hydrolysis reactions', 'Carbohydrates: starch, glycogen, cellulose', 'Primary, secondary, tertiary, quaternary protein structures', 'Nucleotides and phosphodiester linkages'],
      },
      {
        unitNumber: 3,
        title: 'Enzymes',
        description: 'Nature of biological catalysts, activation energy reduction, enzyme active site, lock-and-key vs induced fit models, factors affecting enzyme activity (temperature, pH, substrate concentration), and competitive vs non-competitive inhibition.',
        keyTopics: ['Enzymes as globular protein catalysts', 'Lowering activation energy (E_a)', 'Optimum temperature and thermal denaturation', 'Michaelis-Menten kinetics overview (V_max, K_m)', 'Competitive vs Non-competitive allosteric inhibition'],
      },
      {
        unitNumber: 4,
        title: 'Cell Structure and Membrane Transport',
        description: 'Ultrastructure of plant and animal cells under electron microscopy, endomembrane system, cytoskeleton, fluid mosaic model of plasma membrane, passive transport (simple diffusion, facilitated diffusion), active transport (sodium-potassium pump), and bulk transport (endocytosis and exocytosis).',
        keyTopics: ['Detailed organelle morphology', 'Phospholipid bilayer with integral and peripheral proteins', 'Osmotic pressure and water potential (Ψ = Ψ_s + Ψ_p)', 'Primary and secondary active transport (Na⁺/K⁺ ATPase)', 'Phagocytosis, pinocytosis, receptor-mediated endocytosis'],
      },
      {
        unitNumber: 5,
        title: 'Energy Transformation: Respiration and Photosynthesis',
        description: 'Cellular respiration: glycolysis, transition reaction, Krebs cycle (citric acid cycle), electron transport chain (chemiosmosis and oxidative phosphorylation), anaerobic fermentation; Photosynthesis: light-dependent reactions (photosystems I & II, photophosphorylation) and Calvin cycle (carbon fixation, Rubisco).',
        keyTopics: ['ATP structure and high-energy phosphate bonds', 'Glycolysis in cytoplasm and yield (2 ATP, 2 NADH)', 'Mitochondrial matrix Krebs cycle and ETC on cristae', 'Aerobic vs Anaerobic respiration ATP yield comparison (30-32 ATP vs 2 ATP)', 'Chloroplast thylakoids and stroma reactions', 'Rubisco and carbon fixation in C3 vs C4 plants'],
      },
      {
        unitNumber: 6,
        title: 'Genetics: Chromosomal Basis of Inheritance',
        description: 'Chromosomes, mitosis vs meiosis stages, crossing over and independent assortment generating genetic variation, linkage and gene mapping, sex linkage, chromosomal non-disjunction, and human genetic disorders (Down syndrome, Turner syndrome, Klinefelter syndrome).',
        keyTopics: ['Meiosis I and Meiosis II detailed stages', 'Chiasmata formation and crossing over during prophase I', 'Gene linkage and recombination frequencies', 'Non-disjunction during meiosis and aneuploidy', 'Pedigree analysis conventions and interpretation'],
      }
    ]
  },
  {
    grade: 'Grade 12',
    subject: 'Biology',
    overview: 'Molecular genetics & recombinant DNA, evolutionary biology, human homeostasis & osmoregulation, animal reproduction & embryology, immunology, and applied ecology.',
    units: [
      {
        unitNumber: 1,
        title: 'Molecular Biology and Recombinant DNA',
        description: 'DNA structure (Watson-Crick double helix), semi-conservative DNA replication, transcription (RNA synthesis), mRNA processing, genetic code, translation (protein synthesis on ribosomes), regulation of gene expression (lac operon), and genetic engineering tools (restriction enzymes, ligases, plasmids, PCR, gel electrophoresis).',
        keyTopics: ['Double helix antiparallel strands and complementary base pairing', 'DNA polymerase, helicase, and Okazaki fragments', 'Transcription, RNA processing, and translation codons', 'The lac operon model in prokaryotes', 'Polymerase Chain Reaction (PCR) and DNA fingerprinting'],
      },
      {
        unitNumber: 2,
        title: 'Evolution',
        description: 'Theories of evolution (Lamarckian inheritance vs Darwinian natural selection), modern synthetic theory of evolution, lines of evidence for evolution (fossil record, comparative anatomy - homologous vs analogous structures, molecular biology, embryology), mechanisms of speciation, and hominid evolution (Lucy / Australopithecus afarensis in Ethiopia).',
        keyTopics: ['Natural selection principles', 'Homologous vs Analogous structures and convergent evolution', 'Hardy-Weinberg equilibrium principle', 'Allopatric and sympatric speciation', 'Hominid fossil discoveries in the Afar Depression, Ethiopia (Australopithecus afarensis, Ardipithecus ramidus)'],
        formulas: [
          { name: 'Hardy-Weinberg Equation', formula: 'p² + 2pq + q² = 1  and  p + q = 1', note: 'p = dominant allele freq, q = recessive allele freq' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Homeostasis and Kidney Function',
        description: 'Principles of negative feedback and homeostasis, thermoregulation in endotherms, detailed nephron countercurrent multiplier mechanism, hormonal regulation of osmoregulation (ADH, aldosterone), and acid-base blood buffer balance.',
        keyTopics: ['Negative feedback loop components', 'Thermoregulation mechanisms (vasodilation, sweating, shivering)', 'Loop of Henle countercurrent multiplier system', 'Antidiuretic Hormone (ADH) action on collecting ducts', 'Renin-angiotensin-aldosterone system (RAAS)'],
      },
      {
        unitNumber: 4,
        title: 'Animal Reproduction and Development',
        description: 'Gametogenesis (spermatogenesis in testes and oogenesis in ovaries), hormonal control of the female ovarian and menstrual cycles (GnRH, FSH, LH, estrogen, progesterone), fertilization, cleavage, blastocyst formation, implantation, placenta function, and human embryonic development.',
        keyTopics: ['Spermatogenesis vs Oogenesis timeline and chromosome count', 'Menstrual cycle phases (follicular, ovulation, luteal)', 'Acrosome reaction and prevention of polyspermy', 'Gastrulation into three germ layers (ectoderm, mesoderm, endoderm)', 'Placental transport and human pregnancy stages'],
      },
      {
        unitNumber: 5,
        title: 'Immunology',
        description: 'Innate non-specific immunity (physical barriers, phagocytes, inflammatory response, complement system) and adaptive specific immunity (humoral B-cell response, cell-mediated T-cell response, antibodies structure and classes), immunological memory, active vs passive immunity, and autoimmune disorders.',
        keyTopics: ['First and second lines of innate defense', 'B lymphocytes and plasma cell antibody secretion', 'Cytotoxic T cells (CD8+) and Helper T cells (CD4+)', 'Antibody structure (heavy and light chains, variable binding sites)', 'Primary vs secondary immune responses (anamnestic response)', 'Autoimmune diseases and allergic hypersensitivity'],
      },
      {
        unitNumber: 6,
        title: 'Applied Ecology and Sustainable Development',
        description: 'Biogeochemical cycles (carbon, nitrogen, phosphorus), population ecology dynamics (exponential vs logistic growth, carrying capacity K), r-selected vs K-selected species, human demographic trends, and sustainable resource management in Ethiopia.',
        keyTopics: ['Nitrogen cycle: nitrogen fixation, nitrification, denitrification', 'Logistic population growth curve (d discoveries and dN/dt = rN(1 - N/K))', 'Carrying capacity and limiting factors', 'Biodiversity hotspots and conservation strategies in the Horn of Africa'],
      }
    ]
  },

  // ==========================================
  // CHEMISTRY
  // ==========================================
  {
    grade: 'Grade 9',
    subject: 'Chemistry',
    overview: 'Introductory chemistry, laboratory safety, measurement and matter, atomic structure, periodic classification, and chemical bonding.',
    units: [
      {
        unitNumber: 1,
        title: 'Chemistry and Its Importance',
        description: 'Definition and scope of chemistry, chemical industries in Ethiopia (sugar, cement, textiles, fertilizers), lab apparatus, safety rules, hazard symbols, and emergency procedures.',
        keyTopics: ['Branches of chemistry', 'Chemical industries in Ethiopian economy', 'Common laboratory apparatus and uses', 'Hazard pictograms and laboratory safety protocols'],
      },
      {
        unitNumber: 2,
        title: 'Measurements and Units',
        description: 'SI units for physical and chemical quantities, metric prefixes, mass, volume, temperature, density, precision, accuracy, and significant figures in calculations.',
        keyTopics: ['Base and derived units in chemistry', 'Density calculations (ρ = m/V)', 'Rules for significant figures in operations', 'Dimensional analysis conversion factor method'],
        formulas: [
          { name: 'Density Formula', formula: 'ρ = m / V', note: 'Mass per unit volume' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Structure of the Atom',
        description: 'Development of atomic theory (Dalton, Thomson, Rutherford, Bohr), subatomic particles (protons, neutrons, electrons), atomic number (Z), mass number (A), isotopes, and relative atomic mass.',
        keyTopics: ["Dalton's atomic postulates", "Rutherford's gold foil experiment & nucleus", 'Atomic number, mass number, and isotopic notation', 'Calculating relative atomic mass from isotopic abundances'],
        formulas: [
          { name: 'Relative Atomic Mass', formula: 'A_r = Σ (Isotope Mass × % Abundance) / 100', note: 'Weighted average mass' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Periodic Classification of Elements',
        description: 'Historical development of the periodic table (Mendeleev vs Moseley), modern periodic law, periods and groups, electronic configuration and periodic trends (atomic radius, ionization energy, electron affinity, electronegativity).',
        keyTopics: ['Modern Periodic Law based on atomic number', 'Representative elements, transition metals, noble gases', 'Periodic trend in atomic radius across period and down group', 'First ionization energy and electronegativity trends'],
      },
      {
        unitNumber: 5,
        title: 'Chemical Bonding',
        description: 'Octet rule, types of chemical bonds: ionic (electrovalent) bonding and crystal lattices, covalent bonding (single, double, triple, coordinate), polar vs non-polar covalent bonds, Lewis electron-dot structures, and metallic bonding.',
        keyTopics: ['Ionic bonding mechanism (electron transfer)', 'Covalent bonding mechanism (electron sharing)', 'Lewis dot structures for simple molecules', 'Electronegativity differences and bond polarity', 'Properties of ionic vs covalent compounds'],
      }
    ]
  },
  {
    grade: 'Grade 10',
    subject: 'Chemistry',
    overview: 'Chemical reactions & stoichiometry, solutions and concentration, acids, bases & salts, reaction energetics, and introduction to organic hydrocarbons.',
    units: [
      {
        unitNumber: 1,
        title: 'Chemical Reactions and Stoichiometry',
        description: 'Types of chemical reactions (combination, decomposition, single replacement, double replacement, combustion), balancing chemical equations, the mole concept, Avogadro’s number, molar mass, molar volume of gases at STP, stoichiometric calculations, limiting reactants, theoretical yield, and percentage yield.',
        keyTopics: ['Balancing chemical equations by inspection', 'Mole concept and Avogadro constant (6.022 × 10²³)', 'Molar volume of ideal gas at STP = 22.4 L/mol', 'Limiting reactant determination', 'Percentage yield calculation'],
        formulas: [
          { name: 'Mole Equation', formula: 'n = m / M', note: 'Moles = mass / molar mass' },
          { name: 'Gas Moles at STP', formula: 'n = V / 22.4 L', note: 'At standard temperature and pressure' },
          { name: 'Percentage Yield', formula: '% Yield = (Actual Yield / Theoretical Yield) × 100%', note: 'Efficiency of reaction' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Solutions and Colloids',
        description: 'Classification of matter: pure substances vs mixtures, solutions (solute and solvent), solubility and factors affecting solubility (temperature, pressure - Henry’s law), concentration units (molarity, mass percentage), and colloids and suspensions.',
        keyTopics: ['Saturated, unsaturated, and supersaturated solutions', 'Solubility curves interpretation', 'Molarity (M) calculation and preparation', 'Dilution formula (M₁V₁ = M₂V₂)', 'Tyndall effect in colloids'],
        formulas: [
          { name: 'Molarity', formula: 'M = Moles of solute / Liters of solution = n / V', note: 'mol/L' },
          { name: 'Dilution Equation', formula: 'M₁ · V₁ = M₂ · V₂', note: 'Conservation of moles of solute' },
          { name: 'Mass Percent', formula: '% (w/w) = (Mass of solute / Total mass of solution) × 100%', note: 'Weight percentage' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Acids, Bases, and Salts',
        description: 'Arrhenius and Brønsted-Lowry acid-base concepts, conjugate acid-base pairs, properties of acids and bases, pH scale and calculations, acid-base indicators, neutralization reactions, and classification and naming of salts.',
        keyTopics: ['Arrhenius vs Brønsted-Lowry models', 'Conjugate acid-base pairs', 'pH and pOH definitions and calculations', 'Self-ionization of water and K_w = 1.0 × 10⁻¹⁴', 'Neutralization reaction producing salt and water'],
        formulas: [
          { name: 'pH Definition', formula: 'pH = -log₁₀[H⁺]', note: 'Hydrogen ion concentration measure' },
          { name: 'pOH Definition', formula: 'pOH = -log₁₀[OH⁻]', note: 'Hydroxide ion concentration' },
          { name: 'Water Autoionization Relation', formula: 'pH + pOH = 14.0 (at 25°C)', note: 'Constant sum' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Energy Changes in Chemical Reactions',
        description: 'Exothermic and endothermic reactions, enthalpy of reaction (ΔH), energy level profile diagrams, activation energy, calorimetry, and thermochemical equations.',
        keyTopics: ['Exothermic reactions (ΔH < 0, heat released)', 'Endothermic reactions (ΔH > 0, heat absorbed)', 'Activation energy (E_a) and activated complex', 'Calorimetry heat equation (q = mcΔT)'],
        formulas: [
          { name: 'Heat Transfer Equation', formula: 'q = m · c · ΔT', note: 'm = mass, c = specific heat capacity' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Introduction to Organic Chemistry',
        description: 'Unique properties of carbon (catenation, tetravalency), homologous series, hydrocarbons: alkanes, alkenes, alkynes, IUPAC nomenclature, isomerism (structural isomers), and basic chemical reactions (combustion, substitution, addition).',
        keyTopics: ['General formulas: Alkanes CₙH₂ₙ₊₂, Alkenes CₙH₂ₙ, Alkynes CₙH₂ₙ₋₂', 'IUPAC naming rules for branched hydrocarbons', 'Structural isomerism in alkanes (e.g. butane vs 2-methylpropane)', 'Addition reactions of alkenes with halogens and hydrogen'],
      }
    ]
  },
  {
    grade: 'Grade 11',
    subject: 'Chemistry',
    overview: 'Quantum atomic model, chemical bonding & VSEPR geometry, states of matter & gas laws, chemical kinetics, and dynamic chemical equilibrium.',
    units: [
      {
        unitNumber: 1,
        title: 'Fundamental Concepts of Chemistry',
        description: 'Quantum mechanical model of atom, quantum numbers (n, l, m_l, m_s), atomic orbitals (s, p, d, f shapes), electron configurations, Aufbau principle, Pauli exclusion principle, and Hund’s rule.',
        keyTopics: ['Four quantum numbers and their allowed values', 'Aufbau building-up principle and energy order', 'Pauli exclusion principle (no two electrons share 4 identical quantum numbers)', "Hund's rule of maximum multiplicity", 'Paramagnetism vs diamagnetism'],
      },
      {
        unitNumber: 2,
        title: 'Chemical Bonding and Structure',
        description: 'Valence Bond Theory, orbital hybridization (sp, sp², sp³, sp³d, sp³d²), sigma (σ) and pi (π) bonds, VSEPR theory and molecular geometries, dipole moments, and intermolecular forces (London dispersion, dipole-dipole, hydrogen bonding).',
        keyTopics: ['Hybridization concept and geometry matching', 'VSEPR electron pair repulsion predicting shapes (linear, trigonal planar, tetrahedral, bent, pyramidal)', 'Sigma vs Pi bonding characteristics', 'Intermolecular forces and effects on boiling/melting points'],
      },
      {
        unitNumber: 3,
        title: 'Physical States of Matter',
        description: "Kinetic Molecular Theory of gases, gas laws: Boyle's Law, Charles's Law, Gay-Lussac's Law, Combined Gas Law, Ideal Gas Law (PV = nRT), Dalton’s Law of partial pressures, Graham’s law of effusion, and real gas deviations (van der Waals equation).",
        keyTopics: ["Kinetic Molecular Theory postulates", "Boyle's, Charles's, and Avogadro's gas laws", 'Ideal Gas Law calculations with R = 0.0821 L·atm/(mol·K)', "Dalton's Law of partial pressures", "Graham's law of diffusion and effusion"],
        formulas: [
          { name: 'Ideal Gas Law', formula: 'P · V = n · R · T', note: 'R = 0.0821 L·atm/(mol·K) or 8.314 J/(mol·K)' },
          { name: 'Combined Gas Law', formula: '(P₁V₁) / T₁ = (P₂V₂) / T₂', note: 'For constant amount of gas' },
          { name: "Graham's Law", formula: 'Rate₁ / Rate₂ = √(M₂ / M₁)', note: 'Inverse square root of molar mass' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Chemical Kinetics',
        description: 'Reaction rate definition and measurement, collision theory, factors affecting reaction rate (concentration, temperature, surface area, catalysts), rate laws and reaction orders, initial rates method, half-life of reactions, and Arrhenius equation.',
        keyTopics: ['Rate of reaction expression (-Δ[R]/Δt = Δ[P]/Δt)', 'Differential rate law: Rate = k[A]ᵐ[B]ⁿ', 'Determining orders m and n from experimental rate data', 'Arrhenius equation and activation energy', 'Homogeneous vs heterogeneous catalysis'],
        formulas: [
          { name: 'Rate Law', formula: 'Rate = k [A]^m [B]^n', note: 'm and n determined experimentally' },
          { name: 'First-Order Half-Life', formula: 't_{1/2} = 0.693 / k', note: 'Independent of initial concentration' },
          { name: 'Arrhenius Equation', formula: 'k = A · e^(-E_a / RT)', note: 'Temperature dependence of rate constant' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Chemical Equilibrium',
        description: "Dynamic nature of chemical equilibrium, law of mass action, equilibrium constant expressions (K_c and K_p), relationship between K_c and K_p, reaction quotient (Q), Le Chatelier's principle (effects of concentration, temperature, pressure, volume), and industrial applications.",
        keyTopics: ['Dynamic equilibrium criteria', 'Equilibrium constant expression K_c = [C]^c [D]^d / ([A]^a [B]^b)', 'Comparing Q and K to predict direction of shift', "Le Chatelier's Principle shifts", 'Optimizing Haber process for NH₃ and Contact process for SO₃'],
        formulas: [
          { name: 'Equilibrium Constant Relation', formula: 'K_p = K_c (RT)^(Δn)', note: 'Δn = moles of gaseous products - moles of gaseous reactants' },
          { name: 'Reaction Quotient Comparison', formula: 'Q < K ⟹ shifts right (forward); Q > K ⟹ shifts left (reverse)', note: 'Predicts reaction progress' }
        ]
      }
    ]
  },
  {
    grade: 'Grade 12',
    subject: 'Chemistry',
    overview: 'Advanced acid-base equilibria, electrochemistry & redox, industrial chemistry processes, synthetic polymers, and environmental chemistry.',
    units: [
      {
        unitNumber: 1,
        title: 'Acid-Base Equilibria',
        description: 'Autoionization of water, weak acid and weak base equilibria (K_a and K_b calculations), percent ionization, Common Ion Effect, buffer solutions and Henderson-Hasselbalch equation, acid-base titrations and titration curves, and solubility product constant (K_sp).',
        keyTopics: ['Weak acid equilibria and ICE table calculations', 'Relationship K_a × K_b = K_w', 'Buffer solutions mechanism and buffering capacity', 'Henderson-Hasselbalch equation for buffer pH', 'Strong acid-strong base vs weak acid-strong base titration curves', 'Solubility product K_sp and precipitation criterion (Q_sp vs K_sp)'],
        formulas: [
          { name: 'Henderson-Hasselbalch Equation', formula: 'pH = pK_a + log₁₀([Conjugate Base] / [Weak Acid])', note: 'Buffer pH calculation' },
          { name: 'Weak Acid Ionization', formula: 'K_a = [H⁺][A⁻] / [HA]', note: 'Acid dissociation constant' },
          { name: 'Precipitation Condition', formula: 'Q_sp > K_sp ⟹ Precipitate forms', note: 'Supersaturated solution' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Electrochemistry',
        description: 'Balancing redox reactions (ion-electron method in acidic and basic media), Galvanic (Voltaic) cells, standard hydrogen electrode (SHE), standard reduction potentials (E°), cell potential (E°_cell = E°_cathode - E°_anode), spontaneity and Gibbs free energy (ΔG° = -nFE°), Nernst equation for non-standard cells, electrolytic cells, and Faraday’s laws of electrolysis.',
        keyTopics: ['Redox balancing by half-reaction method', 'Galvanic cell notation and components (salt bridge)', 'Calculating standard cell electromotive force E°_cell', 'Spontaneity criteria: E°_cell > 0 ⟺ ΔG° < 0 ⟺ K > 1', 'Nernst equation for concentration cells', 'Quantitative electrolysis using Faraday constant (F = 96,500 C/mol e⁻)'],
        formulas: [
          { name: 'Standard Cell Potential', formula: 'E°_cell = E°_cathode - E°_anode', note: 'Reduction potential difference' },
          { name: 'Free Energy and EMF', formula: 'ΔG° = -n · F · E°_cell', note: 'n = moles of electrons, F = 96,500 C/mol' },
          { name: 'Nernst Equation', formula: 'E_cell = E°_cell - (0.0592 / n) log₁₀(Q)  (at 298 K)', note: 'Non-standard conditions' },
          { name: "Faraday's Law of Electrolysis", formula: 'm = (M · I · t) / (n · F)', note: 'Mass of deposited substance' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Industrial Chemistry',
        description: 'Chemical manufacturing industries: raw materials, manufacturing of ammonia (Haber process), nitric acid (Ostwald process), sulfuric acid (Contact process), extraction of metals (iron in blast furnace, aluminum by Hall-Héroult process), and chemical plants in Ethiopia (Muger cement, Wonji sugar, Awash winery).',
        keyTopics: ['Haber process conditions (450°C, 200 atm, Fe catalyst)', 'Contact process reactions for H₂SO₄', 'Blast furnace reduction of hematite (Fe₂O₃)', 'Hall-Héroult electrolytic extraction of aluminum with cryolite', 'Industrial development in Ethiopia and environmental remediation'],
      },
      {
        unitNumber: 4,
        title: 'Polymers',
        description: 'Classification of polymers: natural vs synthetic, addition (chain-growth) polymerization (polyethylene, PVC, polystyrene), condensation (step-growth) polymerization (nylon, Dacron/polyester), thermoplastics vs thermosetting plastics, and environmental degradation and recycling of plastics.',
        keyTopics: ['Monomers and repeating units', 'Addition polymerization mechanism with free radicals', 'Condensation polymerization releasing water or small molecules', 'Thermoplastics (recyclable) vs Thermosetting resins (cross-linked)', 'Plastic pollution, biodegradable polymers, and recycling codes'],
      },
      {
        unitNumber: 5,
        title: 'Environmental Chemistry',
        description: 'Chemistry of the atmosphere, greenhouse effect and global warming, acid rain formation and chemical consequences, stratospheric ozone depletion by CFCs, water quality parameters (BOD, COD, dissolved oxygen), water purification steps, and green chemistry principles.',
        keyTopics: ['Greenhouse gases (CO₂, CH₄, N₂O) and infrared absorption', 'Acid deposition chemical reactions (SO₂ and NO_x forming acids)', 'Ozone hole catalytic destruction by chlorine radicals', 'Biochemical Oxygen Demand (BOD) and eutrophication', 'Principles of Green Chemistry (waste prevention, atom economy)'],
      }
    ]
  }
];
