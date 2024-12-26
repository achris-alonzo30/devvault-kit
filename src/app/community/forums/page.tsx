"use client";

import { useState } from "react";
import Link from "next/link";

export default function Forums() {
  // Sample forum categories and discussions data
  const categories = [
    { name: "General Discussion", slug: "general" },
    { name: "Coding Challenges", slug: "coding-challenges" },
    { name: "Interview Tips", slug: "interview-tips" },
    { name: "Career Advice", slug: "career-advice" },
  ];

  const discussions = [
    {
      title: "Best resources for mastering React?",
      author: "JaneDoe123",
      category: "Coding Challenges",
      date: "2024-11-28",
      link: "/community/forums/general/react-resources",
      replies: 12,
    },
    {
      title: "How to handle tricky behavioral questions?",
      author: "CodeMaster",
      category: "Interview Tips",
      date: "2024-12-01",
      link: "/community/forums/interview-tips/behavioral-questions",
      replies: 8,
    },
    {
      title: "Is a bootcamp worth it for a career switch?",
      author: "DevGuy",
      category: "Career Advice",
      date: "2024-11-25",
      link: "/community/forums/career-advice/bootcamp-worth-it",
      replies: 15,
    },
    {
      title: "Weekly coding challenge: Sorting algorithms",
      author: "ChallengeBot",
      category: "Coding Challenges",
      date: "2024-11-30",
      link: "/community/forums/coding-challenges/sorting-challenge",
      replies: 20,
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter discussions based on search and selected category
  const filteredDiscussions = discussions.filter((discussion) => {
    const matchesSearch = discussion.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background text-white px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6">Community Forums</h1>
      <p className="text-lg text-center mb-8">
        Join the conversation! Share your knowledge, ask questions, and connect
        with others.
      </p>

      {/* Categories and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Categories */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category.name
                  ? "bg-[#fcba28] text-gray-900"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search discussions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcba28]"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            🔍
          </span>
        </div>
      </div>

      {/* Discussions Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDiscussions.length > 0 ? (
          filteredDiscussions.map((discussion, index) => (
            <div
              key={index}
              className="bg-[#1d3557] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#fcba28] mb-4">
                {discussion.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4">
                By {discussion.author} | {discussion.date} |{" "}
                <span className="text-gray-300">
                  {discussion.replies} replies
                </span>
              </p>
              <p className="text-sm text-gray-300 mb-4">
                Category: {discussion.category}
              </p>
              <Link
                href={discussion.link}
                className="text-[#fcba28] hover:underline text-lg font-medium"
              >
                View Discussion &rarr;
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-300 col-span-full">
            No discussions found. Start a new one!
          </p>
        )}
      </div>
    </div>
  );
}
