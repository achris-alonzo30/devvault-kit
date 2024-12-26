"use client"// BlogPage.tsx
import Link from 'next/link';


export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Web Development",
      date: "November 30, 2024",
      excerpt: "Discover the latest trends in web development and how they can shape the digital landscape.",
      link: "/blog/future-of-web-development",
    },
    {
      title: "Understanding AI and Its Impact",
      date: "November 28, 2024",
      excerpt: "A deep dive into artificial intelligence and its transformative effects across industries.",
      link: "/blog/understanding-ai",
    },
    {
      title: "Mastering JavaScript in 2024",
      date: "November 25, 2024",
      excerpt: "A comprehensive guide to enhancing your JavaScript skills with modern features and frameworks.",
      link: "/blog/mastering-javascript",
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-background text-foreground max-w-4xl my-24">
      <h1 className="text-4xl font-bold mb-12 border-b pb-4">Blog</h1>

      {posts.map((post, index) => (
        <article key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-[#fcba28]">{post.title}</h2>
          <p className="text-sm text-gray-500 mb-4">{post.date}</p>
          <p className="mb-4">{post.excerpt}</p>
          <Link
            href={post.link}
            className="text-[#fcba28] hover:text-[#fcba28]/70 hover:underline"
          >
            Read more →
          </Link>
        </article>
      ))}
    </div>
  );
}
