"use client";

import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";  // Importing Image component from next/image

const events = [
  {
    id: 1,
    title: "Tech Innovators Meetup",
    date: "December 10, 2024",
    time: "3:00 PM - 6:00 PM",
    location: "Tech Park, New York",
    description: "Join industry leaders and innovators in a networking and idea-sharing event.",
    image: "/images/tech-meetup.jpg",
  },
  {
    id: 2,
    title: "AI Hackathon 2025",
    date: "January 20, 2025",
    time: "9:00 AM - 9:00 PM",
    location: "Virtual",
    description: "Compete with the best minds in AI and machine learning to solve real-world challenges.",
    image: "/images/ai-hackathon.jpg",
  },
  {
    id: 3,
    title: "Career Growth Workshop",
    date: "February 5, 2025",
    time: "11:00 AM - 4:00 PM",
    location: "Downtown Conference Center, San Francisco",
    description: "A workshop designed to help professionals plan and accelerate their career growth.",
    image: "/images/career-workshop.jpg",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-[url('/path-to-bg.jpg')] bg-cover bg-center text-white px-8 py-12">
      <h1 className="text-5xl font-bold text-center mb-10">Upcoming Events</h1>
      <p className="text-lg text-center mb-12">
        Stay updated with the latest community events, workshops, and hackathons.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-black bg-opacity-80 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={500}  // Specify the width of the image
              height={300} // Specify the height of the image
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <FaCalendarAlt className="mr-2" />
                <span>{event.date}</span>
                <FaClock className="ml-4 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <FaMapMarkerAlt className="mr-2" />
                <span>{event.location}</span>
              </div>
              <p className="text-gray-300 mb-4">{event.description}</p>
              <button className="w-full py-2 px-4 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
