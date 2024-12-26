/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { FaNewspaper, FaBullhorn, FaPenFancy } from "react-icons/fa";

export default function PressPage() {
  return (
    <div className="bg-background text-white min-h-screen p-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#fcba28] mb-4">Press & Media</h1>
        <p className="text-xl">
          Stay updated with our latest news, announcements, and media coverage.
        </p>
      </section>

      {/* Latest News */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-center mb-8">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "InterviewMaster AI Wins Innovation Award",
              date: "November 15, 2024",
              image: "/images/press1.jpg",
            },
            {
              title: "Partnership with Leading Tech Giants",
              date: "October 30, 2024",
              image: "/images/press2.jpg",
            },
            {
              title: "New AI Tools for Interview Preparation",
              date: "September 20, 2024",
              image: "/images/press3.jpg",
            },
          ].map((news, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <Image
                src={news.image}
                alt={news.title}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{news.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{news.date}</p>
              <a
                href="#"
                className="text-[#fcba28] font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Media Coverage */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Media Coverage
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["TechCrunch", "Forbes", "BBC News"].map((outlet, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg text-center shadow-lg"
            >
              <FaBullhorn className="text-5xl text-[#fcba28] mb-4" />
              <h3 className="text-2xl font-bold">{outlet}</h3>
              <p className="text-sm mt-4">
                Coverage in {outlet}. <a href="#" className="hover:underline">View Article</a>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Press Kit */}
      <section className="text-center">
        <h2 className="text-4xl font-semibold mb-4">Download Our Press Kit</h2>
        <p className="text-lg mb-8">
          Access high-resolution logos, executive bios, and media assets.
        </p>
        <a
          href="/press-kit.zip"
          className="bg-[#fcba28] text-black px-8 py-4 rounded-lg text-xl font-medium hover:bg-[#fcba28]/90 transition"
        >
          Download Now
        </a>
      </section>
    </div>
  );
}
