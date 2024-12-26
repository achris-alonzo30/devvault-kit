"use client";

import Image from "next/image";
import { FaChartLine, FaHandshake, FaLightbulb } from "react-icons/fa";

export default function InvestorsPage() {
  return (
    <div className="bg-background text-white min-h-screen p-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-[#fcba28]">
          Welcome, Investors!
        </h1>
        <p className="text-xl">
          Join us in shaping the future of tech-driven interview solutions.
        </p>
      </section>

      {/* Founders Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Meet Our Founders
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-center">
            <Image
              src="/images/humesh.jpg"
              alt="Humesh Deshmukh"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold">Humesh Deshmukh</h3>
            <p className="text-lg mt-2">Founder & CEO</p>
            <p className="mt-4">
              Humesh Deshmukh is a visionary leader with a passion for
              revolutionizing the interview process.
            </p>
          </div>

          <div className="text-center">
            <Image
              src="/images/aditi.jpg"
              alt="Aditi Lanjewar"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold">Aditi Lanjewar</h3>
            <p className="text-lg mt-2">Co-Founder & COO</p>
            <p className="mt-4">
              Aditi Lanjewar brings strategic insights and operational excellence
              to the company, driving growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Why Invest in Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center">
            <FaLightbulb className="text-5xl text-[#fcba28] mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Innovative Solutions</h3>
            <p>
              We leverage cutting-edge technology to transform the interview
              experience and streamline recruitment.
            </p>
          </div>

          <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center">
            <FaChartLine className="text-5xl text-[#fcba28] mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Exponential Growth</h3>
            <p>
              Our platform is poised for rapid expansion, backed by a strong
              business model and market demand.
            </p>
          </div>

          <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center">
            <FaHandshake className="text-5xl text-[#fcba28] mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Trusted Partnerships</h3>
            <p>
              We collaborate with industry leaders to deliver exceptional value
              and drive mutual success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact for Investors */}
      <section className="text-center">
        <h2 className="text-4xl font-semibold mb-4">Ready to Invest?</h2>
        <p className="text-lg mb-8">
          Contact us today to learn more about our investment opportunities and
          how you can be part of our journey.
        </p>
        <a
          href="mailto:humeshdeshmukh0@gmail.com"
          className="bg-[#fcba28] text-black px-8 py-4 rounded-lg text-xl font-medium hover:bg-[#fcba28]/90 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
