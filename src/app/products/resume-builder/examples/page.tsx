"use client"; // For client-side rendering in Next.js 13+

import { motion } from "framer-motion";

const resumeSamples = [
  {
    id: 1,
    title: "Software Developer Resume",
    description:
      "A clean and modern resume template designed for software developers.",
    image: "/images/resume-software-developer.jpg",
  },
  {
    id: 2,
    title: "Marketing Manager Resume",
    description:
      "Highlighting key achievements and skills for marketing professionals.",
    image: "/images/resume-marketing-manager.jpg",
  },
  {
    id: 3,
    title: "Graphic Designer Resume",
    description:
      "A creative resume showcasing a portfolio and artistic skills.",
    image: "/images/resume-graphic-designer.jpg",
  },
  {
    id: 4,
    title: "Data Analyst Resume",
    description:
      "A professional template with focus on data visualization skills.",
    image: "/images/resume-data-analyst.jpg",
  },
];

export default function ResumeExamples() {
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
          Example Resumes
        </motion.h1>

        {/* Description */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-lg md:text-xl">
            Browse through our collection of professionally designed resume
            samples, tailored for various industries and roles. Get inspired and
            create your own standout resume today!
          </p>
        </motion.div>

        {/* Resume Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeSamples.map((resume) => (
            <motion.div
              key={resume.id}
              className="bg-card rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: resume.id * 0.2 }}
            >
              <img
                src={resume.image}
                alt={resume.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#fcba28] mb-2">
                  {resume.title}
                </h2>
                <p className="text-sm md:text-base mb-4">
                  {resume.description}
                </p>
                <button className="bg-[#fcba28] text-black font-bold py-2 px-4 rounded-md hover:bg-yellow-600">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
