"use client";

import { FaLinkedin, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function SuccessStories() {
  const stories = [
    {
      name: "Sarah Johnson",
      title: "Software Engineer at Google",
      image: "/images/sarah.jpg",
      quote:
        "The journey was tough, but staying consistent and practicing interview questions helped me land my dream job at Google.",
      linkedin: "https://linkedin.com/in/sarahjohnson",
    },
    {
      name: "Michael Lee",
      title: "Product Manager at Amazon",
      image: "/images/michael.jpg",
      quote:
        "The key to my success was focusing on problem-solving and understanding the company’s product vision.",
      linkedin: "https://linkedin.com/in/michaellee",
    },
    {
      name: "Priya Sharma",
      title: "Data Scientist at Facebook",
      image: "/images/priya.jpg",
      quote:
        "Networking and building a strong portfolio made a huge difference in my job search. Never underestimate the power of connections.",
      linkedin: "https://linkedin.com/in/priyasharma",
    },
    {
      name: "James Kim",
      title: "AI Researcher at OpenAI",
      image: "/images/james.jpg",
      quote:
        "Preparing for behavioral questions and being confident about my technical skills helped me succeed.",
      linkedin: "https://linkedin.com/in/jameskim",
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/path-to-your-bg.jpg')] bg-cover bg-center text-white px-8 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-8">
        Inspiring Success Stories
      </h1>
      <p className="text-lg text-center mb-12">
        Meet the people who cracked prestigious interviews and made their dreams
        a reality.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <div
            key={index}
            className="p-6 bg-opacity-90 bg-black rounded-lg shadow-xl hover:scale-105 transition-transform"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="text-2xl font-semibold text-center mb-2">
              {story.name}
            </h2>
            <p className="text-sm text-gray-300 text-center mb-2">
              {story.title}
            </p>
            <p className="text-gray-400 text-center italic mb-4">
              <FaQuoteLeft className="inline-block mr-2 text-yellow-400" />
              {story.quote}
              <FaQuoteRight className="inline-block ml-2 text-yellow-400" />
            </p>
            <div className="flex justify-center">
              <a
                href={story.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-500 text-xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
