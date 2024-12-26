"use client";
import React, { useEffect, useState } from "react";

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface PracticeTest {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

const PracticeTests: React.FC = () => {
  const [tests, setTests] = useState<PracticeTest[]>([]);
  const [selectedTest, setSelectedTest] = useState<PracticeTest | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showTestModal, setShowTestModal] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await fetch("/products/questions.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data: PracticeTest[] = await response.json();
        setTests(data);
      } catch (error) {
        console.error("Error fetching tests:", error);
      }
    };
    fetchTests();
  }, []);

  useEffect(() => {
    if (showTestModal) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      if (timeLeft === 0) handleNext();

      return () => clearInterval(timer);
    }
  }, [timeLeft, showTestModal]);

  const handleTestSelection = (test: PracticeTest) => {
    setSelectedTest(test);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswer("");
    setTimeLeft(30);
    setShowTestModal(true);
    setShowAnswer(false);
  };

  const handleNext = () => {
    if (currentQuestionIndex < selectedTest!.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      resetState();
    } else {
      setShowTestModal(false);
      alert(`Test Completed! Your final score is ${score}/${selectedTest?.questions.length}.`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      resetState();
    }
  };

  const handleAnswerSubmission = () => {
    const correctAnswer = selectedTest?.questions[currentQuestionIndex].answer.trim().toLowerCase();
    if (userAnswer.trim().toLowerCase() === correctAnswer) setScore((prev) => prev + 1);
    setShowAnswer(false);
    handleNext();
  };

  const resetState = () => {
    setUserAnswer("");
    setTimeLeft(30);
    setShowAnswer(false);
  };

  return (
    <div className="min-h-screen bg-background text-black pt-[80px] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-[#adb0b5]">Practice Tests</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-[#dcf2f1] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2 text-[#1d3557]">{test.title}</h2>
              <p className="text-[#457b9d] mb-4">{test.description}</p>
              <button
                className="w-full bg-[#80cfd1] text-white py-2 px-4 rounded-lg hover:bg-[#457b9d] transition"
                onClick={() => handleTestSelection(test)}
              >
                Start Test
              </button>
            </div>
          ))}
        </div>

        {showTestModal && selectedTest && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4">
            <div className="bg-white p-8 rounded-lg max-w-3xl w-full text-[#1d3557] relative">
              <h2 className="text-3xl font-bold mb-6">{selectedTest.title}</h2>
              <h4 className="text-xl font-semibold mb-4">
                {selectedTest.questions[currentQuestionIndex].question}
              </h4>
              <div className="mb-4 text-right">
                <span className="text-sm font-medium">Time Left: {timeLeft}s</span>
              </div>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your answer..."
                className="w-full p-3 rounded-lg bg-[#dcf2f1] text-black mb-4 focus:outline-none focus:ring-2 focus:ring-[#1d3557]"
              />
              {showAnswer && (
                <div className="text-green-600 font-bold mb-4">
                  Correct Answer: {selectedTest.questions[currentQuestionIndex].answer}
                </div>
              )}
              <div className="flex justify-between mt-4">
                <button
                  className="bg-[#457b9d] text-white py-2 px-4 rounded-lg hover:bg-[#1d3557] transition"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </button>
                <button
                  className="bg-[#80cfd1] text-white py-2 px-4 rounded-lg hover:bg-[#457b9d] transition"
                  onClick={() => setShowAnswer(true)}
                >
                  Show Answer
                </button>
                <button
                  className="bg-[#457b9d] text-white py-2 px-4 rounded-lg hover:bg-[#1d3557] transition"
                  onClick={handleNext}
                  disabled={currentQuestionIndex === selectedTest.questions.length - 1}
                >
                  Next
                </button>
              </div>
              <button
                className="w-full mt-6 bg-[#1d3557] text-white py-3 px-6 rounded-lg hover:bg-[#1a2e45]"
                onClick={handleAnswerSubmission}
              >
                Submit Answer
              </button>
              <div className="mt-6 text-center">
                <p className="text-lg font-bold">
                  Questions Attempted: {currentQuestionIndex + 1}/
                  {selectedTest.questions.length}
                </p>
                <p className="text-lg font-bold">Score: {score}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeTests;
