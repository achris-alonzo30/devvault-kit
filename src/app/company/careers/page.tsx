/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaBriefcase, FaUsers, FaHeart, FaPaperPlane } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Careers() {
  return (
    <div className="bg-[url('/images/careers-bg.jpg')] bg-cover bg-center min-h-screen text-white px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          At InterviewMaster.ai, we're looking for passionate individuals who want to make a difference in the world of interview preparation. If you're excited about the intersection of AI and career development, we want to hear from you.
        </p>
      </div>

      {/* Company Culture Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold mb-6">Our Culture</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
          We are a dynamic team that thrives on innovation, collaboration, and continuous learning. At InterviewMaster.ai, we believe in empowering each other, pushing boundaries, and having fun while we do it.
        </p>
        <div className="flex justify-center gap-16">
          <div className="flex flex-col items-center">
            <FaUsers className="text-5xl text-yellow-400 mb-4" />
            <h3 className="text-2xl font-semibold">Teamwork</h3>
            <p className="text-gray-300">We believe that great things happen when we work together.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHeart className="text-5xl text-yellow-400 mb-4" />
            <h3 className="text-2xl font-semibold">Passion</h3>
            <p className="text-gray-300">Passion is at the heart of everything we do.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaBriefcase className="text-5xl text-yellow-400 mb-4" />
            <h3 className="text-2xl font-semibold">Growth</h3>
            <p className="text-gray-300">We are committed to professional growth and personal development.</p>
          </div>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold mb-6">Current Openings</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Job Listing 1 */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">AI Engineer</h3>
            <p className="text-lg text-gray-300 mb-4">We are looking for an AI Engineer to help build intelligent interview preparation tools.</p>
            <Link href="/careers/ai-engineer" className="text-yellow-400 font-semibold hover:underline">Learn More</Link>
          </div>
          {/* Job Listing 2 */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">Product Designer</h3>
            <p className="text-lg text-gray-300 mb-4">We are looking for a talented Product Designer to help us create seamless user experiences.</p>
            <Link href="/careers/product-designer" className="text-yellow-400 font-semibold hover:underline">Learn More</Link>
          </div>
          {/* Job Listing 3 */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">Marketing Manager</h3>
            <p className="text-lg text-gray-300 mb-4">We are looking for a Marketing Manager to help us grow our brand and reach new audiences.</p>
            <Link href="/careers/marketing-manager" className="text-yellow-400 font-semibold hover:underline">Learn More</Link>
          </div>
          {/* Job Listing 4 */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold mb-4">Backend Developer</h3>
            <p className="text-lg text-gray-300 mb-4">We are looking for a skilled Backend Developer to join our growing team.</p>
            <Link href="/careers/backend-developer" className="text-yellow-400 font-semibold hover:underline">Learn More</Link>
          </div>
        </div>
      </div>

      {/* Apply Now Section */}
      <div className="bg-black bg-opacity-60 p-16 text-center rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Excited to Join Us?</h2>
        <p className="text-lg text-gray-300 mb-6">
          If you're passionate about revolutionizing the interview process and want to be a part of a fast-growing company, we’d love to hear from you. Apply now to join our team!
        </p>
        <Link
          href="/apply"
          className="inline-block bg-yellow-400 text-black py-2 px-6 rounded-full text-xl font-semibold hover:bg-yellow-500 transition duration-300"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
