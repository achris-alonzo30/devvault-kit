"use client"; // For Next.js 13+ to enable client-side rendering

import Link from "next/link";
import { motion } from "framer-motion";

export default function MockInterviewLanding() {
  return (
    <div className="min-h-screen bg-background text-white pt-20 px-8 flex flex-col justify-between">
      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-screen-xl mx-auto"
      >
        {/* Heading Section */}
        <motion.h1
          className="text-4xl font-extrabold text-center mb-12 text-[#fcba28]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Mock Interview Preparation
        </motion.h1>

        {/* Zig-Zag Layout Section */}
        <div className="space-y-16">
          {/* Section 1 */}
          <motion.section
            className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#fcba28]">
                How to Give a Mock Interview
              </h2>
              <ul className="list-decimal pl-6 space-y-3 text-sm md:text-base">
                <li>Research the role and understand the key skills.</li>
                <li>Practice common interview questions and answers.</li>
                <li>Record your responses for review.</li>
                <li>Maintain good posture and speak clearly during the interview.</li>
                <li>Request feedback for improvement after the interview.</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/mock-interview-1.png"
                alt="Mock Interview Tips"
                className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          </motion.section>

          {/* Visual Mock Interview Simulation */}
          <motion.section
            className="flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="md:w-1/2">
              <img
                src="/images/visual-mock-interview.png"
                alt="Visual Mock Interview Simulation"
                className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#fcba28]">
                Visual Mock Interview Simulation
              </h2>
              <p className="mb-4 text-sm md:text-base">
                Experience a virtual interview simulation with an AI-powered interviewer.
                Respond to dynamic questions and receive instant feedback on your performance.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-sm md:text-base">
                <li>Real-time AI-based interview simulation.</li>
                <li>Tailored questions for your desired job role.</li>
                <li>Detailed performance metrics and feedback.</li>
              </ul>
              
            </div>
          </motion.section>

          {/* Section 3: Left-aligned */}
          <motion.section
            className="flex flex-col items-start space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#fcba28]">
              Why Mock Interviews Matter
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-sm md:text-base">
              <li>Helps you overcome nervousness and gain confidence.</li>
              <li>Provides you with an opportunity to practice answering questions.</li>
              <li>Enhances your communication and presentation skills.</li>
              <li>Prepares you for real-life job interviews.</li>
              <li>Improves feedback delivery and listening skills.</li>
            </ul>
            <div className="flex gap-6">
              
            </div>
          </motion.section>

          {/* Section 4: Centered Buttons */}
          <motion.section
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#fcba28] text-center">
              Ready to Begin Your Mock Interview Journey?
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/products/mock-interviews/schedule">
                <button className="bg-[#fcba28] text-black py-3 px-8 rounded-full shadow-lg hover:bg-[#e29f1e] transition duration-300">
                  Schedule Your Mock Interview
                </button>
              </Link>
              <Link href="/products/mock-interviews/visual-simulation">
                <button className="bg-[#b2be10] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#2c3648] transition duration-300">
                  Start the Simulation
                </button>
              </Link>
              <Link href="/products/mock-interviews/tips">
                <button className="bg-[#1c6bff] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#155bb5] transition duration-300">
                  Interview Tips
                </button>
              </Link>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
