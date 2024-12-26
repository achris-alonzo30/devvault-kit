/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Tips = () => {
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
          Interview Preparation Tips
        </motion.h1>

        {/* Key Tips Section */}
        <motion.section
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-2xl font-semibold text-[#fcba28]">Key Tips for a Successful Interview</h2>
          
          {/* Tip List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <span className="text-3xl text-[#fcba28]">🔍</span>
                <h3 className="ml-4 text-xl font-medium">Research the Company</h3>
              </div>
              <p className="text-sm md:text-base">
                Understand the company’s values, mission, and culture. Tailor your responses to show that you align with their vision.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <span className="text-3xl text-[#fcba28]">💬</span>
                <h3 className="ml-4 text-xl font-medium">Practice Common Questions</h3>
              </div>
              <p className="text-sm md:text-base">
                Practice your answers to common interview questions such as "Tell me about yourself" and "What are your strengths and weaknesses?"
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <span className="text-3xl text-[#fcba28]">👗</span>
                <h3 className="ml-4 text-xl font-medium">Dress Professionally</h3>
              </div>
              <p className="text-sm md:text-base">
                Your attire should match the company's dress code, but always aim to be slightly more formal than the usual work attire.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <span className="text-3xl text-[#fcba28]">⏰</span>
                <h3 className="ml-4 text-xl font-medium">Be Punctual</h3>
              </div>
              <p className="text-sm md:text-base">
                Arrive early for the interview. It shows you are responsible, organized, and respectful of the interviewer's time.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Additional Interview Tips Section */}
        <motion.section
          className="space-y-12 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2 className="text-2xl font-semibold text-[#fcba28]">Advanced Tips for a Winning Interview</h2>
          <ul className="list-disc pl-6 space-y-4 text-sm md:text-base">
            <li>Be prepared to explain your past achievements with clear examples and metrics.</li>
            <li>Keep your answers concise but impactful, staying focused on the question.</li>
            <li>Be confident and positive, even when discussing challenges or weaknesses.</li>
            <li>Ask insightful questions that show your interest in the role and company.</li>
            <li>Follow up with a thank-you email after the interview to express your gratitude and enthusiasm.</li>
          </ul>
        </motion.section>

        {/* Schedule Mock Interview Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link href="/products/mock-interviews/schedule">
            <button className="bg-[#fcba28] text-black py-3 px-8 rounded-full shadow-lg hover:bg-[#e29f1e] transition duration-300">
              Schedule a Mock Interview
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tips;
