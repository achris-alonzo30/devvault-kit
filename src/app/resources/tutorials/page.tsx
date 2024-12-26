"use client";

import Link from 'next/link';

export default function Tutorials() {
  const tutorials = [
    {
      title: 'How to Prepare for Coding Interviews',
      description: 'A step-by-step guide to prepare for coding interviews, from data structures to algorithms.',
      link: '/resources/tutorials/coding-interview-prep',
    },
    {
      title: 'Behavioral Interview Mastery',
      description: 'Learn how to ace your behavioral interviews with proven techniques.',
      link: '/resources/tutorials/behavioral-interview-mastery',
    },
    {
      title: 'Technical Skills to Master for Software Engineering',
      description: 'Discover the essential technical skills every software engineer needs to succeed.',
      link: '/resources/tutorials/technical-skills-engineering',
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-background text-foreground max-w-4xl my-24">
      <h1 className="text-4xl font-bold text-center mb-8">Tutorials</h1>
      <p className="text-lg text-center mb-8">
        Explore our tutorial series to help you excel in technical interviews, from coding skills to behavioral strategies.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.map((tutorial, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 flex flex-col justify-between bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-[#fcba28] mb-4">{tutorial.title}</h2>
            <p className="text-base text-gray-600 mb-6 flex-grow">{tutorial.description}</p>
            <Link
              href={tutorial.link}
              className="text-[#fcba28] hover:text-[#fcba28]/80 hover:underline text-lg font-medium mt-4"
            >
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
