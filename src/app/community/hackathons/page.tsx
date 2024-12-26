/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";

export default function Hackathons() {
  const hackathons = [
    {
      name: "AI Innovation Challenge",
      date: "2024-12-10",
      location: "Online",
      description:
        "A global competition focused on AI solutions for real-world problems. Showcase your innovative ideas and win exciting prizes.",
    },
    {
      name: "TechFest Hackathon",
      date: "2024-12-15",
      location: "New York, USA",
      description:
        "A 48-hour coding marathon for developers, designers, and entrepreneurs. Build, pitch, and win!",
    },
    {
      name: "GreenTech Hack",
      date: "2024-12-20",
      location: "San Francisco, USA",
      description:
        "Create sustainable solutions and contribute to a greener future. Open to all disciplines.",
    },
    {
      name: "HealthTech Hackathon",
      date: "2024-12-25",
      location: "Online",
      description:
        "Innovate in healthcare technology and improve lives. Join solo or in teams to create impactful solutions.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredHackathons = hackathons.filter((hackathon) =>
    hackathon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Apply handler
  const handleApply = (hackathonName: string) => {
    alert(`You have applied to ${hackathonName}!`);
  };

  return (
    <div className="min-h-screen bg-background text-white px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Hackathons & Tips</h1>
      <p className="text-lg text-center mb-8">
        Explore upcoming hackathons and learn how to maximize your chances of
        winning.
      </p>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search hackathons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-4 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#fcba28]"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredHackathons.length > 0 ? (
          filteredHackathons.map((hackathon, index) => (
            <div
              key={index}
              className="p-6 bg-[#1d3557] rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-[#fcba28] mb-2">
                {hackathon.name}
              </h2>
              <p className="text-gray-300 mb-4">{hackathon.description}</p>
              <p className="text-sm text-gray-400">
                Date: <span className="text-gray-200">{hackathon.date}</span>
              </p>
              <p className="text-sm text-gray-400">
                Location:{" "}
                <span className="text-gray-200">{hackathon.location}</span>
              </p>
              <button
                onClick={() => handleApply(hackathon.name)}
                className="mt-4 w-full bg-[#fcba28] text-black font-semibold py-2 px-4 rounded-lg hover:bg-[#fcb112] transition-colors"
              >
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No hackathons found. Check back later!
          </p>
        )}
      </div>

      <div className="bg-[#1d3557] p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-[#fcba28] mb-6">
          Tips for Winning Hackathons
        </h2>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-semibold">Understand the Problem:</span>{" "}
            Carefully read the hackathon brief and understand the problem
            you're solving. Ask questions if anything is unclear.
          </li>
          <li>
            <span className="font-semibold">Form a Balanced Team:</span> Build
            a team with diverse skills, including developers, designers, and
            business strategists.
          </li>
          <li>
            <span className="font-semibold">Focus on MVP:</span> Aim to create
            a Minimum Viable Product (MVP) that demonstrates the core
            functionality of your idea.
          </li>
          <li>
            <span className="font-semibold">Use Time Wisely:</span> Manage
            your time effectively. Allocate specific hours to brainstorming,
            development, and testing.
          </li>
          <li>
            <span className="font-semibold">Prioritize Presentation:</span>{" "}
            Prepare a clear and compelling pitch. Highlight the problem,
            solution, and impact.
          </li>
          <li>
            <span className="font-semibold">Leverage Tools:</span> Use
            open-source libraries, APIs, and frameworks to accelerate
            development.
          </li>
          <li>
            <span className="font-semibold">Test Thoroughly:</span> Ensure
            your solution is functional and bug-free. A polished product
            increases your chances of winning.
          </li>
          <li>
            <span className="font-semibold">Seek Feedback:</span> Get input
            from mentors and judges throughout the hackathon. Iterating on
            feedback shows adaptability.
          </li>
          <li>
            <span className="font-semibold">Stay Motivated:</span> Hackathons
            can be intense. Stay positive, take short breaks, and support your
            team.
          </li>
          <li>
            <span className="font-semibold">Network:</span> Connect with
            other participants, sponsors, and organizers. Networking can lead
            to future opportunities.
          </li>
        </ol>
      </div>
    </div>
  );
}
