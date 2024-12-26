/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaUsers, FaBuilding, FaLightbulb } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[url('/images/about-bg.jpg')] bg-cover bg-center min-h-screen text-white px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We are a passionate team dedicated to empowering professionals with the right tools, skills, and knowledge to crack big interviews.
        </p>
      </div>

      {/* Founders Section */}
      <div className="grid gap-16 lg:grid-cols-2 mb-16">
        {/* Humesh Deshmukh */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/humesh.jpg"
            alt="Humesh Deshmukh"
            width={200}
            height={200}
            className="rounded-full shadow-lg mb-4"
          />
          <h2 className="text-3xl font-semibold mb-2">Humesh Deshmukh</h2>
          <p className="text-lg text-gray-400 mb-4">Founder</p>
          <p className="text-gray-300 max-w-lg">
            Humesh is the visionary behind InterviewMaster.ai. With a strong background in tech and entrepreneurship, he is dedicated to revolutionizing the interview prep industry by leveraging AI and cutting-edge tools to simplify career development.
          </p>
        </div>

        {/* Aditi Lanjewar */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/aditi.jpg"
            alt="Aditi Lanjewar"
            width={200}
            height={200}
            className="rounded-full shadow-lg mb-4"
          />
          <h2 className="text-3xl font-semibold mb-2">Aditi Lanjewar</h2>
          <p className="text-lg text-gray-400 mb-4">Co-Founder</p>
          <p className="text-gray-300 max-w-lg">
            Aditi co-founded InterviewMaster.ai with a vision to make interview preparation more accessible and efficient. Her passion for technology and learning has helped shape the product's roadmap, ensuring a user-centric approach.
          </p>
        </div>
      </div>

      {/* Company Mission */}
      <div className="text-center mb-16">
        <h3 className="text-4xl font-semibold mb-4">Our Mission</h3>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We believe that everyone deserves the opportunity to achieve their career goals. Our mission is to provide innovative tools that help job seekers prepare for interviews confidently and effectively, empowering them to unlock their full potential.
        </p>
      </div>

      {/* Core Values */}
      <div className="grid gap-16 lg:grid-cols-3 text-center">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
          <FaLightbulb className="text-4xl text-yellow-400 mb-4" />
          <h4 className="text-2xl font-semibold mb-2">Innovation</h4>
          <p className="text-lg text-gray-300">
            We embrace technology and strive to continuously innovate to provide the best solutions for interview preparation.
          </p>
        </div>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
          <FaBuilding className="text-4xl text-yellow-400 mb-4" />
          <h4 className="text-2xl font-semibold mb-2">Excellence</h4>
          <p className="text-lg text-gray-300">
            We are committed to excellence in everything we do, from product development to customer support.
          </p>
        </div>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
          <FaUsers className="text-4xl text-yellow-400 mb-4" />
          <h4 className="text-2xl font-semibold mb-2">Community</h4>
          <p className="text-lg text-gray-300">
            Building a strong, supportive community is at the heart of our mission. We aim to empower people to help each other succeed.
          </p>
        </div>
      </div>
    </div>
  );
}
