"use client";

import { useState } from "react";
import Link from "next/link";

export default function SkillsAnalyzer() {
  const [options] = useState([
    {
      title: "Skill Assessment and Scoring",
      description:
        "Evaluate your skills with detailed scoring and actionable insights for improvement.",
      link: "/products/skills-analyzer/assessment",
    },
    {
      title: "Interactive Quiz-Based Skill Assessment",
      description: "Test your skills with quizzes and get immediate feedback.",
      link: "/products/skills-analyzer/quiz",
    },
    {
      title: "Resume Skill Matching",
      description:
        "Upload your resume to match your skills with job requirements and industry standards.",
      link: "/products/skills-analyzer/resume-matching",
    },
    {
      title: "Skill Gap Analysis",
      description:
        "Identify skill gaps by comparing your current skills with your target role.",
      link: "/products/skills-analyzer/gap-analysis",
    },
    {
      title: "Dynamic Learning Paths",
      description:
        "Create personalized learning paths to achieve your goals effectively.",
      link: "/products/skills-analyzer/learning-paths",
    },
    {
      title: "Skill Visualization",
      description:
        "Visualize your skillset with interactive charts for better understanding.",
      link: "/products/skills-analyzer/visualization",
    },
    {
      title: "Team Skills Analyzer",
      description:
        "Analyze team skills to identify strengths, gaps, and training needs.",
      link: "/products/skills-analyzer/team-analyzer",
    },
    {
      title: "AI-Powered Insights",
      description:
        "Get AI-driven insights for personalized recommendations and future trends.",
      link: "/products/skills-analyzer/ai-insights",
    },
  ]);

  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      {/* Header */}


      {/* Intro Section */}
      <section className="py-16 px-6">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#fcba28]">
            Why Choose Skills Analyzer?
          </h2>
          <p className="mt-6 text-gray-300 leading-relaxed">
            Skills Analyzer is designed to help individuals and teams unlock
            their full potential by providing actionable insights, personalized
            learning paths, and advanced analysis tools. Whether you&apos;re looking
            to enhance your skillset, identify gaps, or prepare for your dream
            job, our platform has you covered.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            From interactive quizzes to AI-powered insights, we bring a
            comprehensive approach to skill development. Join thousands of
            professionals and students who trust Skills Analyzer to achieve
            their goals.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <main className="py-10 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#fcba28]">
            Explore Features for Skill Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {options.map((option, index) => (
              <Link key={index} href={option.link}>
                <div className="bg-transparent border border-gray-700 rounded-lg p-6 hover:border-[#fcba28] hover:bg-opacity-20 transition duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-[#fcba28]">
                    {option.title}
                  </h3>
                  <p className="text-gray-300">{option.description}</p>
                  <button className="mt-4 px-6 py-2 bg-[#fcba28] text-black font-medium rounded hover:bg-[#e29f1e] transition">
                    Learn More
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <section className="bg-[#1a1a1a] py-12">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#fcba28]">
            Ready to Transform Your Skills?
          </h2>
          <p className="mt-4 text-gray-300">
            Join the Skills Analyzer community and take the first step towards
            a brighter future.
          </p>
          <button className="mt-6 px-8 py-3 bg-[#fcba28] text-black text-lg font-medium rounded hover:bg-[#e29f1e] transition">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}
