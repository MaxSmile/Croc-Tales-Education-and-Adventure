// src/pages/Quiz.jsx
import React, { useState } from 'react';
import Layout from '../layouts/Layout';

const questions = [
  {
    question: "What should you always do before swimming in Northern Territory waters?",
    options: [
      "Check for crocodile warning signs",
      "Feed the crocodiles to keep them away",
      "Throw rocks into the water",
      "Ignore the crocodile signs"
    ],
    correctAnswer: 0
  },
  {
    question: "How far should you stay away from the water’s edge?",
    options: [
      "1 meter",
      "3 meters",
      "5 meters or more",
      "It doesn’t matter"
    ],
    correctAnswer: 2
  },
  {
    question: "What should you do if you spot a crocodile?",
    options: [
      "Approach it slowly for a picture",
      "Turn and run away",
      "Stay calm and back away",
      "Throw something at it"
    ],
    correctAnswer: 2
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (index) => {
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <Layout>
      <div className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Crocwise Quiz</h1>

        {showScore ? (
          <div className="bg-gray-200 p-6 rounded-lg">
            <h2 className="text-2xl mb-4">You scored {score} out of {questions.length}</h2>
            <button
              onClick={resetQuiz}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl mb-4">{questions[currentQuestion].question}</h2>

            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <p className="text-gray-500">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Quiz;
