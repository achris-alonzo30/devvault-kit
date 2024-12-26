// @ts-nocheck
"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

const features = [
  { name: "Automated Interview Scheduling", competitor: "3 hours", kit: "15 minutes" },
  { name: "Personalized Interview Feedback", competitor: "5+ hours", kit: "30 minutes" },
  { name: "Dynamic Coding Challenges Integration", competitor: "4 hours", kit: "20 minutes" },
  { name: "Real-Time Interview Analytics", competitor: "6 hours", kit: "20 minutes" },
  { name: "User Role Management (Recruiters, Candidates, Admin)", competitor: "4 hours", kit: "10 minutes" },
  { name: "Customizable Question Bank", competitor: "2 hours", kit: "10 minutes" },
  { name: "Seamless Video Interview Integration", competitor: "3 hours", kit: "Already optimized" },
  { name: "Auto Evaluation and Scoring System", competitor: "3 hours", kit: "Pre-configured" },
  { name: "Comprehensive Dashboard and Reporting", competitor: "5 hours", kit: "10 minutes" },
];

export const TimeComparisonTable = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    },
  };

  return (
    <section
      id="time-comparison-table"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#2e2e2e] to-[#121212] p-8"
    >
      <MaxWidthWrapper className="relative z-20 w-full max-w-5xl space-y-12 pb-16 pt-36">
        <h2 className="text-4xl font-semibold text-center text-white">
          InterviewMaster.ai Feature Comparison
        </h2>
        <div className="overflow-x-auto shadow-lg rounded-xl border border-[#444]">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#FF652F] text-white">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-center">Competitors</th>
                <th className="p-4 text-center">InterviewMaster.ai</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-[#1c1c1c]" : "bg-[#2a2a2a]"
                  } hover:bg-[#383838] transition-colors`}
                >
                  <td className="p-4 text-white border-b border-[#3f3f3f]">
                    {feature.name}
                  </td>
                  <td className="p-4 text-center text-gray-300 border-b border-[#3f3f3f]">
                    {feature.competitor}
                  </td>
                  <td className="p-4 text-center text-[#fcba28] font-semibold border-b border-[#3f3f3f]">
                    {feature.kit}
                  </td>
                </tr>
              ))}
              <tr className="bg-[#2a2a2a] font-bold text-white">
                <td className="p-4">Total Time Spent</td>
                <td className="p-4 text-center text-gray-300">40+ hours</td>
                <td className="p-4 text-center text-[#fcba28]">Less than 2 hours</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-[#444] p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold text-[#f38ba3] mb-4">Time Saved: 35+ hours</h3>
          <p className="text-white leading-relaxed">
            With <strong>InterviewMaster.ai</strong>, interviewers can reduce the setup time of interview management and feedback processes from over 40 hours to less than 2 hours. This allows you to:
            <strong className="underline text-[#fcba28]">focus on optimizing your recruitment process and improving candidate experience.</strong>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white">
          <span className="text-lg line-through">Competitors</span>
          <ArrowRight className="text-[#FF652F] w-8 h-8 rotate-90 md:rotate-0" />
          <div ref={ref} className="relative inline-block">
            <span className="text-lg font-semibold text-[#fcba28] z-10 relative px-2 py-1">
              Using InterviewMaster.ai
            </span>
            <motion.svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width="200%"
              height="200%"
              viewBox="0 0 360 80"
              initial="hidden"
              animate={controls}
            >
              <motion.path
                d="M20,40 C20,10 340,0 340,40 C340,70 20,80 20,40"
                fill="transparent"
                strokeWidth="2"
                stroke="#FF652F"
                variants={draw}
              />
            </motion.svg>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

// Instructions
/*
This component showcases the time savings of InterviewMaster.ai, comparing its features against competitors.
It aims to illustrate how InterviewMaster.ai can streamline the interview process and save valuable time for recruiters.
*/
