"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Webinars() {
  const webinars = [
    {
      title: "Mastering Coding Interviews",
      description:
        "Join our expert-led session to tackle coding interview challenges with confidence.",
      date: "2024-12-15",
      speaker: "John Doe, Senior Engineer at TechCo",
      level: "Intermediate",
      link: "/resources/webinars/mastering-coding-interviews",
    },
    {
      title: "Behavioral Interviewing 101",
      description:
        "Learn strategies to excel in behavioral interviews and stand out to recruiters.",
      date: "2024-12-20",
      speaker: "Jane Smith, HR Lead at InnovateTech",
      level: "Beginner",
      link: "/resources/webinars/behavioral-interviewing",
    },
    {
      title: "Ace Your Technical Interviews",
      description:
        "Gain insights into mastering technical interviews from top engineers in the industry.",
      date: "2024-12-22",
      speaker: "Robert Lee, Lead Developer at CodeCraft",
      level: "Advanced",
      link: "/resources/webinars/ace-technical-interviews",
    },
    {
      title: "Data Structures and Algorithms Deep Dive",
      description:
        "Get an in-depth look at the key data structures and algorithms you need to ace technical interviews.",
      date: "2025-01-10",
      speaker: "Emily Brown, Software Engineer at DataFlow",
      level: "Advanced",
      link: "/resources/webinars/data-structures-algorithms",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const filteredWebinars = webinars.filter((webinar) => {
    const matchesSearch =
      webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel =
      selectedLevel === "" || webinar.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedLevel("");
  };

  return (
    <div className="container mx-auto px-6 py-12 bg-background text-gray-800">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-[#457b9d]">
        Upcoming Webinars
      </h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        Explore expert-led webinars designed to boost your skills and career.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search webinars..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80cfd1] text-gray-700"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1d3557] hover:text-[#457b9d]"
            >
              Clear
            </button>
          )}
        </div>

        <select
          className="p-4 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#80cfd1] text-gray-700"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredWebinars.length > 0 ? (
          filteredWebinars.map((webinar, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-bold text-[#1d3557] mb-4">
                {webinar.title}
              </h2>
              <p className="text-gray-600 mb-4">{webinar.description}</p>
              <div className="text-sm text-gray-500 space-y-2">
                <p>Speaker: {webinar.speaker}</p>
                <p>Date: {webinar.date}</p>
                <p>Level: {webinar.level}</p>
              </div>
              <Link
                href={webinar.link}
                className="inline-block mt-6 text-[#80cfd1] font-medium hover:text-[#457b9d]"
              >
                Learn More &rarr;
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No webinars match your search criteria.
          </p>
        )}
      </div>
    </div>
  );
}
