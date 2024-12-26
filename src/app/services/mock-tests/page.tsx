"use client"; // For client-side rendering in Next.js 13+

import { motion } from "framer-motion";
import Link from "next/link";

export default function MockTestsPage() {
  return (
    <div className="min-h-screen bg-background text-white px-6 py-12">
      {/* Main Container */}
      <motion.div
        className="max-w-7xl mx-auto space-y-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Page Heading */}
        <motion.h1
          className="text-4xl font-bold text-center text-yellow-400"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Mock Tests
        </motion.h1>
        <motion.p
          className="text-lg text-center text-gray-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Prepare for your dream job interviews with our tailored mock tests
          designed for a variety of industries and roles.
        </motion.p>

        {/* Section: Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[
            {
              title: "Industry-Specific Tests",
              description:
                "Mock tests customized for different industries like IT, Finance, Marketing, and more.",
              icon: "/icons/industry.svg",
            },
            {
              title: "Role-Based Tests",
              description:
                "Practice for specific job roles with role-focused questions and scenarios.",
              icon: "/icons/roles.svg",
            },
            {
              title: "Timed Challenges",
              description:
                "Simulate real-time interview scenarios with timed assessments.",
              icon: "/icons/timer.svg",
            },
            {
              title: "Detailed Analytics",
              description:
                "Get detailed feedback and analytics to understand your strengths and weaknesses.",
              icon: "/icons/analytics.svg",
            },
            {
              title: "Expert Solutions",
              description:
                "Learn from detailed solutions and explanations for every question.",
              icon: "/icons/solutions.svg",
            },
            {
              title: "Adaptive Difficulty",
              description:
                "Experience a dynamic difficulty level based on your performance.",
              icon: "/icons/adaptive.svg",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12"
              />
              <h2 className="text-xl font-semibold text-yellow-400">
                {feature.title}
              </h2>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-2xl font-semibold text-yellow-400">
            Ready to Test Your Skills?
          </h2>
          <p className="text-gray-300">
            Explore our wide range of mock tests and get started on your
            preparation journey today.
          </p>
          <Link href="/services/mock-tests/start">
            <button className="bg-yellow-400 text-black py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
              Start Mock Tests
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
