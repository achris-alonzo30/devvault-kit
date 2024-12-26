"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const VisualSimulation = () => {
  const [questions, setQuestions] = useState<{ question: string }[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // For navigating questions
  const [isRecording, setIsRecording] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);

  // Fetch questions from a local JSON file
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("/questions.json"); // Correct path for public directory
        const data = await response.json();
        setQuestions(data.questions);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    fetchQuestions();

    // Get user media for webcam access
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Failed to access webcam:", error);
      }
    };

    startVideo();
  }, []);

  // Start/Stop video recording
  const toggleRecording = () => {
    if (isRecording) {
      mediaRecorderRef.current?.stop();
    } else {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject as MediaStream;
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          setVideoBlob(event.data);
        };

        mediaRecorder.start();
      }
    }

    setIsRecording(!isRecording);
  };

  // Function to download the video
  const downloadRecording = () => {
    if (videoBlob) {
      const url = URL.createObjectURL(videoBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "interview-recording.webm"; // Default name for the file
      link.click();
    }
  };

  // Function to go to the next question
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Function to go to the previous question
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background text-white pt-20 px-8 flex flex-col justify-between">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-screen-xl mx-auto"
      >
        <motion.h1
          className="text-4xl font-extrabold text-center mb-12 text-[#fcba28]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Visual Simulation for Interview Practice
        </motion.h1>
      </motion.div>

      {/* Main Content Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Interview Questions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col space-y-4"
        >
          <h2 className="text-2xl font-semibold text-[#fcba28]">Interview Questions</h2>
          <p className="text-sm md:text-base">
            These questions are tailored to help you prepare for your next big interview.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
            {questions.length > 0 ? (
              <>
                <li className="text-white">
                  {questions[currentQuestionIndex]?.question}
                </li>
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={prevQuestion}
                    className="bg-[#fcba28] text-black py-2 px-4 rounded-lg shadow hover:bg-[#e29f1e] transition duration-300"
                  >
                    Previous Question
                  </button>
                  <button
                    onClick={nextQuestion}
                    className="bg-[#fcba28] text-black py-2 px-4 rounded-lg shadow hover:bg-[#e29f1e] transition duration-300"
                  >
                    Next Question
                  </button>
                </div>
              </>
            ) : (
              <p>Loading questions...</p>
            )}
          </ul>
        </motion.div>

        {/* Right Section: Live Recording and Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col space-y-6"
        >
          <h2 className="text-2xl font-semibold text-[#fcba28]">Live Simulation</h2>
          <div className="relative">
            {/* Live Camera Feed */}
            <div className="w-full h-80 md:h-96 bg-black border border-gray-700 rounded-md flex items-center justify-center mb-6">
              <video
                ref={videoRef}
                autoPlay
                muted
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            {/* Start/Stop Recording Button */}
            <button
              onClick={toggleRecording}
              className="absolute bottom-4 right-4 bg-[#fcba28] text-black py-2 px-4 rounded-lg shadow hover:bg-[#e29f1e] transition duration-300"
            >
              {isRecording ? "Stop Recording" : "Start Recording"}
            </button>
          </div>

          {/* Video Preview Section */}
          <div className="w-full h-80 md:h-96 bg-black border border-gray-700 rounded-md flex items-center justify-center">
            {videoBlob ? (
              <video
                controls
                className="w-full h-full object-cover rounded-md"
                src={URL.createObjectURL(videoBlob)}
              />
            ) : (
              <span className="text-gray-400">Video Preview</span>
            )}
          </div>

          {/* Download Recording Button */}
          {videoBlob && (
            <button
              onClick={downloadRecording}
              className="mt-4 bg-[#fcba28] text-black py-2 px-4 rounded-lg shadow hover:bg-[#e29f1e] transition duration-300"
            >
              Download Recording
            </button>
          )}
        </motion.div>
      </div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="max-w-screen-xl mx-auto mt-12"
      >
        
      </motion.div>
    </div>
  );
};

export default VisualSimulation;
