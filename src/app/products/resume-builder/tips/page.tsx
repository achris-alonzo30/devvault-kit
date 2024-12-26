/* eslint-disable react/no-unescaped-entities */
"use client"; // For Next.js 13+ to enable client-side rendering

import { motion } from "framer-motion";

export default function ResumeTips() {
  return (
    <div className="min-h-screen bg-background text-white pt-20 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-screen-xl mx-auto"
      >
        {/* Page Header */}
        <motion.h1
          className="text-4xl font-extrabold text-center mb-12 text-[#fcba28]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Resume Tips & Best Practices
        </motion.h1>

        {/* Tips Section */}
        <div className="space-y-8">
          {/* Tip 1 */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
          >
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-[#fcba28]">
                Tailor Your Resume for Each Job
              </h2>
              <p className="text-sm md:text-base">
                Research the job you're applying for and customize your resume
                to highlight the skills and experience most relevant to the
                position. Use keywords from the job description to make your
                resume stand out to recruiters and applicant tracking systems
                (ATS).
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/tips-customize.png"
                alt="Tailored Resume"
                className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          </motion.section>

          {/* Tip 2 */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
          >
            <div className="md:w-1/2">
              <img
                src="/images/tips-formatting.png"
                alt="Resume Formatting"
                className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-[#fcba28]">
                Use Clear and Professional Formatting
              </h2>
              <p className="text-sm md:text-base">
                Ensure your resume is easy to read by using a clean and
                professional layout. Stick to standard fonts like Arial or
                Times New Roman, and use bullet points to list your
                accomplishments for better readability.
              </p>
            </div>
          </motion.section>

          {/* Tip 3 */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
          >
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-[#fcba28]">
                Keep It Concise
              </h2>
              <p className="text-sm md:text-base">
                Limit your resume to one or two pages, focusing on your most
                recent and relevant experience. Recruiters often spend less than
                30 seconds on a resume, so make sure your key points are easily
                accessible.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/tips-concise.png"
                alt="Concise Resume"
                className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          </motion.section>

          {/* Additional Tips */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-[#fcba28]">
              More Resume Tips:
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
              <li>Proofread your resume to eliminate typos and errors.</li>
              <li>Focus on measurable achievements rather than tasks.</li>
              <li>Include a professional email address and LinkedIn profile.</li>
              <li>Avoid including unnecessary personal details.</li>
              <li>Use action verbs like "led," "created," and "achieved."</li>
            </ul>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
