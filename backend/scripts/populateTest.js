const mongoose = require('mongoose');
const Test = require('../models/Test');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const chemistryTest = new Test({
  title: 'Basic Chemistry Concepts',
  topic: 'Chemistry',
  description: 'A test covering basic chemistry concepts for 8th-grade students.',
  duration: 30, // Duration in minutes
  marks: 30, // Total marks
  questions: [
    {
      question: 'What is the smallest unit of matter?',
      options: [
        'Molecule',
        'Atom',
        'Compound',
        'Element'
      ],
      correctAnswer: 'Atom'
    },
    {
      question: 'Which of the following is a physical change?',
      options: [
        'Burning of paper',
        'Rusting of iron',
        'Melting of ice',
        'Digestion of food'
      ],
      correctAnswer: 'Melting of ice'
    },
    {
      question: 'What is the symbol for water?',
      options: [
        'H2O',
        'O2',
        'CO2',
        'NaCl'
      ],
      correctAnswer: 'H2O'
    },
    {
      question: 'Which of the following is an element?',
      options: [
        'Water',
        'Oxygen',
        'Carbon dioxide',
        'Salt'
      ],
      correctAnswer: 'Oxygen'
    },
    {
      question: 'Which substance is a compound?',
      options: [
        'Iron',
        'Oxygen',
        'Water',
        'Gold'
      ],
      correctAnswer: 'Water'
    },
    {
      question: 'What is the atomic number of Hydrogen?',
      options: [
        '1',
        '2',
        '8',
        '12'
      ],
      correctAnswer: '1'
    },
    {
      question: 'What is the chemical formula for table salt?',
      options: [
        'NaCl',
        'H2O',
        'CO2',
        'O2'
      ],
      correctAnswer: 'NaCl'
    },
    {
      question: 'Which of the following is a mixture?',
      options: [
        'Air',
        'Water',
        'Carbon dioxide',
        'Oxygen'
      ],
      correctAnswer: 'Air'
    },
    {
      question: 'Which gas is released during photosynthesis?',
      options: [
        'Oxygen',
        'Carbon dioxide',
        'Nitrogen',
        'Hydrogen'
      ],
      correctAnswer: 'Oxygen'
    },
    {
      question: 'What is the process of turning liquid water into water vapor?',
      options: [
        'Condensation',
        'Freezing',
        'Evaporation',
        'Melting'
      ],
      correctAnswer: 'Evaporation'
    },
    {
      question: 'Which of the following is a chemical change?',
      options: [
        'Boiling water',
        'Cutting paper',
        'Burning wood',
        'Melting wax'
      ],
      correctAnswer: 'Burning wood'
    },
    {
      question: 'Which of the following is NOT a state of matter?',
      options: [
        'Solid',
        'Liquid',
        'Gas',
        'Energy'
      ],
      correctAnswer: 'Energy'
    },
    {
      question: 'What is the charge of a proton?',
      options: [
        'Positive',
        'Negative',
        'Neutral',
        'It depends'
      ],
      correctAnswer: 'Positive'
    },
    {
      question: 'Which element is known as the "king of chemicals"?',
      options: [
        'Hydrogen',
        'Oxygen',
        'Sulfuric acid',
        'Carbon'
      ],
      correctAnswer: 'Sulfuric acid'
    },
    {
      question: 'What is the chemical symbol for Carbon?',
      options: [
        'C',
        'Ca',
        'Cl',
        'Co'
      ],
      correctAnswer: 'C'
    },
    {
      question: 'Which of the following is a property of metals?',
      options: [
        'Brittle',
        'Good conductor of electricity',
        'Poor conductor of heat',
        'Non-malleable'
      ],
      correctAnswer: 'Good conductor of electricity'
    },
    {
      question: 'What type of bond is formed when atoms share electrons?',
      options: [
        'Ionic bond',
        'Covalent bond',
        'Metallic bond',
        'Hydrogen bond'
      ],
      correctAnswer: 'Covalent bond'
    },
    {
      question: 'What is the common name for H2O2?',
      options: [
        'Water',
        'Oxygen',
        'Hydrogen peroxide',
        'Sodium chloride'
      ],
      correctAnswer: 'Hydrogen peroxide'
    },
    {
      question: 'Which of the following is a chemical reaction?',
      options: [
        'Mixing salt and water',
        'Burning coal',
        'Melting ice',
        'Boiling water'
      ],
      correctAnswer: 'Burning coal'
    },
    {
      question: 'Which of the following is a compound?',
      options: [
        'Oxygen',
        'Carbon',
        'Sodium chloride',
        'Gold'
      ],
      correctAnswer: 'Sodium chloride'
    },
    {
      question: 'What do we call a substance that speeds up a chemical reaction?',
      options: [
        'Catalyst',
        'Reactant',
        'Product',
        'Solvent'
      ],
      correctAnswer: 'Catalyst'
    },
    {
      question: 'What is the pH value of pure water?',
      options: [
        '1',
        '7',
        '10',
        '14'
      ],
      correctAnswer: '7'
    },
    {
      question: 'Which of the following elements is a non-metal?',
      options: [
        'Iron',
        'Carbon',
        'Sodium',
        'Copper'
      ],
      correctAnswer: 'Carbon'
    },
    {
      question: 'What is the most abundant gas in the Earth’s atmosphere?',
      options: [
        'Oxygen',
        'Nitrogen',
        'Carbon dioxide',
        'Hydrogen'
      ],
      correctAnswer: 'Nitrogen'
    },
    {
      question: 'Which substance is commonly used as a fuel?',
      options: [
        'Water',
        'Carbon dioxide',
        'Hydrogen',
        'Coal'
      ],
      correctAnswer: 'Coal'
    },
    {
      question: 'What is the chemical name for baking soda?',
      options: [
        'Sodium bicarbonate',
        'Sodium chloride',
        'Calcium carbonate',
        'Ammonium nitrate'
      ],
      correctAnswer: 'Sodium bicarbonate'
    },
    {
      question: 'Which process involves breaking down a compound using electricity?',
      options: [
        'Electrolysis',
        'Distillation',
        'Evaporation',
        'Filtration'
      ],
      correctAnswer: 'Electrolysis'
    },
    {
      question: 'Which element is represented by the symbol "Fe"?',
      options: [
        'Iron',
        'Fluorine',
        'Silver',
        'Phosphorus'
      ],
      correctAnswer: 'Iron'
    },
    {
      question: 'Which gas is produced when acids react with metals?',
      options: [
        'Hydrogen',
        'Oxygen',
        'Carbon dioxide',
        'Nitrogen'
      ],
      correctAnswer: 'Hydrogen'
    },
    {
      question: 'What is the process of water changing into ice?',
      options: [
        'Freezing',
        'Melting',
        'Condensation',
        'Sublimation'
      ],
      correctAnswer: 'Freezing'
    },
    {
      question: 'Which of the following is a characteristic of acids?',
      options: [
        'Sour taste',
        'Sweet taste',
        'Bitter taste',
        'Salty taste'
      ],
      correctAnswer: 'Sour taste'
    }
  ]
});

chemistryTest.save()
  .then(() => {
    console.log('Chemistry Test saved successfully!');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error saving test:', error);
    mongoose.connection.close();
  });
