"use client";

import Link from 'next/link';

export default function Ebooks() {
  const ebooks = [
    {
      title: 'Mastering the Art of Interviews',
      description: 'A comprehensive guide to acing job interviews with confidence.',
      link: '/resources/ebooks/mastering-interviews',
    },
    {
      title: 'Resume Building Essentials',
      description: 'Learn how to craft the perfect resume that stands out to recruiters.',
      link: '/resources/ebooks/resume-essentials',
    },
    {
      title: 'The Ultimate Job Search Strategy',
      description: 'Proven techniques to streamline your job search process.',
      link: '/resources/ebooks/job-search-strategy',
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-background text-foreground max-w-3xl my-24">
      <h1 className="text-3xl font-bold mb-8 border-b pb-2">eBooks</h1>
      <p className="mb-6 text-lg">
        Explore our curated collection of eBooks designed to help you succeed in your job search and career development.
      </p>

      <ul className="space-y-6">
        {ebooks.map((ebook, index) => (
          <li key={index} className="border rounded-lg p-4 hover:shadow-md">
            <h2 className="text-2xl font-semibold text-[#fcba28] mb-2">{ebook.title}</h2>
            <p className="mb-4">{ebook.description}</p>
            <Link
              href={ebook.link}
              className="text-[#fcba28] hover:text-[#fcba28]/70 hover:underline text-lg font-medium"
            >
              Read More &rarr;
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
