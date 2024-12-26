"use client";

import { useState } from "react";
import Link from "next/link";

export default function Newsletters() {
  // Sample newsletters data
  const newsletters = [
    {
      title: "Monthly Coding Challenges",
      description: "Sharpen your coding skills with our monthly challenges.",
      date: "2024-12-05",
      link: "/resources/newsletters/monthly-coding-challenges",
    },
    {
      title: "Tech Industry Insights",
      description: "Stay updated with the latest trends in the tech industry.",
      date: "2024-12-10",
      link: "/resources/newsletters/tech-industry-insights",
    },
    {
      title: "Interview Prep Tips",
      description: "Get expert tips to ace your next technical interview.",
      date: "2024-12-15",
      link: "/resources/newsletters/interview-prep-tips",
    },
    {
      title: "Upcoming Tech Events",
      description: "Discover and register for upcoming tech events worldwide.",
      date: "2025-01-01",
      link: "/resources/newsletters/upcoming-tech-events",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter newsletters based on search query
  const filteredNewsletters = newsletters.filter((newsletter) =>
    newsletter.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-white px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">Latest Newsletters</h1>
      <p className="text-lg text-center mb-8">
        Stay informed with our curated newsletters, delivered to your inbox.
      </p>

      {/* Search Bar */}
      <div className="relative max-w-lg mx-auto mb-8">
        <input
          type="text"
          placeholder="Search newsletters..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 pl-10 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcba28]"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          🔍
        </span>
      </div>

      {/* Newsletters Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNewsletters.length > 0 ? (
          filteredNewsletters.map((newsletter, index) => (
            <div
              key={index}
              className="bg-[#1d3557] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#fcba28] mb-4">
                {newsletter.title}
              </h2>
              <p className="text-gray-300 mb-4">{newsletter.description}</p>
              <p className="text-sm text-gray-400 mb-4">Date: {newsletter.date}</p>
              <Link
                href={newsletter.link}
                className="text-[#fcba28] hover:underline text-lg font-medium"
              >
                Read More &rarr;
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-300 col-span-full">
            No newsletters found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
}
