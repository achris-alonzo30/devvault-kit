"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserPlus } from "react-icons/fa";

export default function Meetups() {
  const meetups = [
    {
      name: "AI Developers Meetup",
      date: "2024-12-05",
      location: "San Francisco, USA",
      description:
        "Join AI enthusiasts and professionals in San Francisco for an evening of talks, networking, and learning about the latest in AI.",
    },
    {
      name: "ReactJS Conference",
      date: "2024-12-12",
      location: "New York, USA",
      description:
        "A meetup for developers who are passionate about ReactJS. Learn about the latest updates, frameworks, and best practices.",
    },
    {
      name: "Women in Tech Meetup",
      date: "2024-12-18",
      location: "Virtual",
      description:
        "A virtual meetup empowering women in the tech community. Share experiences, learn from experts, and connect with like-minded individuals.",
    },
    {
      name: "Startup Founders Meetup",
      date: "2024-12-22",
      location: "Austin, USA",
      description:
        "An exclusive meetup for startup founders to network, share ideas, and discuss challenges and solutions in the startup world.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredMeetups = meetups.filter((meetup) =>
    meetup.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRegister = (meetupName: string) => {
    alert(`You have successfully registered for ${meetupName}!`);
  };

  return (
    <div className="min-h-screen bg-[url('/path-to-your-bg.jpg')] bg-cover bg-center text-white px-8 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-8">
        Explore Inspiring Meetups & Events
      </h1>
      <p className="text-lg text-center mb-12">
        Join exciting meetups and grow your professional network.
      </p>

      <div className="flex justify-center mb-12">
        <input
          type="text"
          placeholder="Search meetups..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-4 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMeetups.length > 0 ? (
          filteredMeetups.map((meetup, index) => (
            <div
              key={index}
              className="p-6 bg-opacity-90 bg-black rounded-lg shadow-xl hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-semibold mb-4">{meetup.name}</h2>
              <p className="text-gray-300 mb-4">{meetup.description}</p>
              <div className="flex items-center text-sm text-gray-400 mb-2">
                <FaCalendarAlt className="mr-2 text-yellow-400" />
                <span>{meetup.date}</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <FaMapMarkerAlt className="mr-2 text-yellow-400" />
                <span>{meetup.location}</span>
              </div>
              <button
                onClick={() => handleRegister(meetup.name)}
                className="mt-6 w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center"
              >
                <FaUserPlus className="mr-2" /> Register Now
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No meetups found. Check back later!
          </p>
        )}
      </div>
    </div>
  );
}
