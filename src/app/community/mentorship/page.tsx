"use client";

import { FaChalkboardTeacher, FaUserGraduate, FaHandshake } from "react-icons/fa";

export default function Mentorship() {
  const mentors = [
    {
      name: "Alice Johnson",
      expertise: "Software Engineering",
      bio: "10+ years at top tech companies, helping mentees ace coding interviews.",
      image: "/images/alice.jpg",
      link: "#",
    },
    {
      name: "David Lee",
      expertise: "Product Management",
      bio: "Product lead at a Fortune 500 company, passionate about mentoring future PMs.",
      image: "/images/david.jpg",
      link: "#",
    },
    {
      name: "Ravi Kumar",
      expertise: "Data Science",
      bio: "Data Scientist with experience in AI and ML, guiding students to success.",
      image: "/images/ravi.jpg",
      link: "#",
    },
    {
      name: "Sophie Chen",
      expertise: "UI/UX Design",
      bio: "Senior UX designer with a knack for mentoring aspiring designers.",
      image: "/images/sophie.jpg",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/path-to-your-bg.jpg')] bg-cover bg-center text-white px-8 py-12">
      <h1 className="text-5xl font-bold text-center mb-8">
        Mentorship Program
      </h1>
      <p className="text-lg text-center mb-12">
        Connect with experienced professionals to accelerate your career growth.
      </p>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-center text-center">
          <FaChalkboardTeacher className="text-6xl text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold">Expert Guidance</h2>
          <p className="text-gray-300">
            Learn from industry experts who can guide you through your career
            journey.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaUserGraduate className="text-6xl text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold">Skill Development</h2>
          <p className="text-gray-300">
            Enhance your skills and knowledge through personalized mentorship.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaHandshake className="text-6xl text-yellow-400 mb-4" />
          <h2 className="text-2xl font-semibold">Networking Opportunities</h2>
          <p className="text-gray-300">
            Build connections with professionals and expand your network.
          </p>
        </div>
      </div>

      {/* Mentors Section */}
      <h2 className="text-4xl font-bold text-center mb-8">Our Mentors</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="p-6 bg-black bg-opacity-90 rounded-lg shadow-xl hover:scale-105 transition-transform"
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold text-center">{mentor.name}</h3>
            <p className="text-sm text-gray-300 text-center">
              {mentor.expertise}
            </p>
            <p className="text-gray-400 text-center italic mb-4">{mentor.bio}</p>
            <div className="flex justify-center">
              <a
                href={mentor.link}
                className="text-yellow-400 hover:text-yellow-500 text-lg"
              >
                Apply for Mentorship
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
