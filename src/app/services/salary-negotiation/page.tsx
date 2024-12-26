"use client"; // For client-side rendering in Next.js 13+

import { motion } from "framer-motion";
import Link from "next/link";

export default function SalaryNegotiationPage() {
  return (
    <div className="relative min-h-screen bg-background-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Glowing Circle 1 */}
        <motion.div
          className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 top-10 left-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1.5 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        ></motion.div>
        {/* Glowing Circle 2 */}
        <motion.div
          className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 bottom-20 right-20"
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        ></motion.div>
        {/* Subtle Gradient Patterns */}
        <motion.div
          className="absolute w-[150%] h-[150%] bg-gradient-to-r from-purple-500 to-blue-500 opacity-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className="max-w-7xl mx-auto space-y-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Page Heading */}
        <motion.h1
          className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Salary Negotiation
        </motion.h1>
        <motion.p
          className="text-lg text-center text-gray-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Unlock the art of salary negotiation with expert strategies and tools
          tailored to your success.
        </motion.p>

        {/* Features Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[
            {
              title: "Market Research",
              description:
                "Access industry-specific salary data to ensure you're asking for a fair compensation.",
              icon: "/icons/market-research.svg",
            },
            {
              title: "Negotiation Strategies",
              description:
                "Master proven strategies to confidently discuss and negotiate salary offers.",
              icon: "/icons/strategy.svg",
            },
            {
              title: "Role-Based Insights",
              description:
                "Receive customized negotiation tips based on your job title and industry.",
              icon: "/icons/role-insights.svg",
            },
            {
              title: "Practice Scenarios",
              description:
                "Simulate real-world salary negotiation situations with interactive tools.",
              icon: "/icons/practice.svg",
            },
            {
              title: "Expert Tips",
              description:
                "Gain access to professional advice from HR experts and negotiation coaches.",
              icon: "/icons/expert-tips.svg",
            },
            {
              title: "Comprehensive Tools",
              description:
                "Use calculators and checklists to evaluate job offers and benefits.",
              icon: "/icons/tools.svg",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-xl p-6 space-y-4 transform transition-transform hover:-translate-y-2 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-14 h-14 mx-auto"
              />
              <h2 className="text-2xl font-semibold text-center text-blue-400">
                {feature.title}
              </h2>
              <p className="text-gray-300 text-center">{feature.description}</p>
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
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Take Control of Your Career
          </h2>
          <p className="text-gray-300">
            Start your journey to secure the salary you deserve.
          </p>
          <Link href="/services/salary-negotiation/start">
            <motion.button
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Start Learning
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
