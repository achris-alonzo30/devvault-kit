"use client"; // For client-side rendering in Next.js 13+

import { motion } from "framer-motion";

const FeatureCard = ({ title, content, delay }: { title: string; content: string; delay: number }) => (
  <motion.div
    className="rounded-lg p-6 hover:scale-105 transition-transform"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
  >
    <h2 className="text-2xl font-bold text-[#fcba28] mb-4">{title}</h2>
    <p className="text-base">{content}</p>
  </motion.div>
);

export default function HireResumeWriter() {
  return (
    <div className="min-h-screen bg-background text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-screen-2xl mx-auto px-8 py-16"
      >
        {/* Header Section */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl font-extrabold text-[#fcba28] tracking-wide">
            Hire a Professional Resume Writer
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Elevate your career with expertly crafted resumes tailored to your goals.
          </p>
        </motion.header>

        {/* Features Section */}
        <section className="space-y-16">
          <FeatureCard
            title="Tailored to Your Career Goals"
            content="We analyze your career objectives and customize your resume to align with your aspirations. Whether you're starting fresh or aiming for a senior-level position, we've got you covered."
            delay={0.5}
          />
          <FeatureCard
            title="Industry-Specific Expertise"
            content="Our writers specialize in various industries, crafting resumes that resonate with recruiters in your field."
            delay={0.7}
          />
          <FeatureCard
            title="ATS-Friendly Resumes"
            content="Optimized for Applicant Tracking Systems (ATS) to ensure you stand out and get shortlisted."
            delay={0.9}
          />
          <FeatureCard
            title="Quick Turnaround Time"
            content="Need a resume in a hurry? Get fast, high-quality service to meet your deadlines."
            delay={1.1}
          />
        </section>

        {/* Call to Action */}
        <motion.section
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <h2 className="text-4xl font-bold text-[#fcba28] mb-6">
            Ready to Elevate Your Career?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Let our expert resume writers help you shine. Contact us today to get started!
          </p>
          <button
            className="bg-[#fcba28] text-black font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 hover:shadow-2xl transition-transform"
            onClick={() => window.location.href = "/contact"}
            aria-label="Hire a Professional Resume Writer"
          >
            Hire a Writer
          </button>
        </motion.section>
      </motion.div>
    </div>
  );
}
