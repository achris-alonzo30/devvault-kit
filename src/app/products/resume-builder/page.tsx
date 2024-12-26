/* eslint-disable react/no-unescaped-entities */
"use client"; // For Next.js 13+ to enable client-side rendering

import Link from "next/link";
import { motion } from "framer-motion";

export default function ResumeBuilderLanding() {
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
          Build Your Perfect Resume
        </motion.h1>

        {/* Zig-Zag Layout Section */}
        <div className="space-y-16">
          {/* Section 1: How to Build a Resume */}
          <motion.section
            className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#fcba28]">
                How to Build a Resume
              </h2>
              <ul className="list-decimal pl-6 space-y-3 text-sm md:text-base">
                <li>Start with your personal and contact details.</li>
                <li>Write a compelling objective or summary.</li>
                <li>Highlight your skills and achievements.</li>
                <li>List your education and professional experience.</li>
                <li>Make it visually appealing with clear formatting.</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/resume-building-1.png"
                alt="Resume Building Tips"
                className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          </motion.section>

          {/* Section 2: Visual Resume Builder */}
          <motion.section
            className="flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="md:w-1/2">
              <img
                src="/images/visual-resume-builder.png"
                alt="Visual Resume Builder"
                className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#fcba28]">
                Visual Resume Builder Tool
              </h2>
              <p className="mb-4 text-sm md:text-base">
                Use our interactive tool to create a visually appealing resume that will make you stand out to employers.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-sm md:text-base">
                <li>Drag and drop sections to customize your resume.</li>
                <li>Choose from various templates and designs.</li>
                <li>Real-time preview of your resume.</li>
              </ul>
            </div>
          </motion.section>

          {/* Section 3: Why Use a Resume Builder */}
          <motion.section
            className="flex flex-col items-start space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#fcba28]">
              Why Use a Professional Resume Builder?
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-sm md:text-base">
              <li>Increase your chances of landing your dream job with a polished resume.</li>
              <li>Ensure your resume highlights your strengths in the best light.</li>
              <li>Stay ahead of the competition with modern design and formatting.</li>
              <li>Get personalized advice for optimizing your resume for each job application.</li>
            </ul>
          </motion.section>

          {/* Section 4: Hire a Professional Resume Writer */}
          <motion.section
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#fcba28] text-center">
              Need Expert Help? Hire a Professional Resume Writer
            </h2>
            <p className="text-sm md:text-base">
              If you'd like to take your resume to the next level, consider hiring a professional resume writer who can tailor your resume to your specific needs and make it stand out to recruiters.
            </p>
            <Link href="/products/resume-builder/hire-resume-writer">
              <button className="bg-[#fcba28] text-black py-3 px-8 rounded-full shadow-lg hover:bg-[#e29f1e] transition duration-300">
                Hire a Professional Resume Writer
              </button>
            </Link>
          </motion.section>

          {/* Section 5: Call to Action with Buttons */}
          <motion.section
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#fcba28] text-center">
              Ready to Build Your Dream Resume?
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/products/resume-builder/create">
                <button className="bg-[#fcba28] text-black py-3 px-8 rounded-full shadow-lg hover:bg-[#e29f1e] transition duration-300">
                  Start Building Your Resume
                </button>
              </Link>
              <Link href="/products/resume-builder/examples">
                <button className="bg-[#b2be10] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#2c3648] transition duration-300">
                  View Resume Examples
                </button>
              </Link>
              <Link href="/products/resume-builder/tips">
                <button className="bg-[#1c6bff] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#155bb5] transition duration-300">
                  Resume Tips
                </button>
              </Link>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
