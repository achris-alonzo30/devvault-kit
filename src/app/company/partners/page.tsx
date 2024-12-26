"use client";

import Image from "next/image";
import { FaHandsHelping, FaNetworkWired, FaRocket } from "react-icons/fa";

export default function PartnersPage() {
  return (
    <div className="bg-background text-white min-h-screen p-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-[#fcba28]">
          Partner With Us
        </h1>
        <p className="text-xl">
          Collaborate with us to drive innovation and success.
        </p>
      </section>

      {/* Partnership Benefits */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Why Partner With Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center">
            <FaHandsHelping className="text-5xl text-[#fcba28] mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Mutual Growth</h3>
            <p>
              We believe in fostering partnerships that drive mutual success and
              long-term value.
            </p>
          </div>

          <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center">
            <FaNetworkWired className="text-5xl text-[#fcba28] mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Expansive Network</h3>
            <p>
              Join a global network of innovators, businesses, and industry
              leaders.
            </p>
          </div>

          <div className="p-8 bg-gray-800 rounded-lg shadow-lg text-center">
            <FaRocket className="text-5xl text-[#fcba28] mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">Innovative Solutions</h3>
            <p>
              Collaborate with us on cutting-edge projects that push the
              boundaries of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-center mb-8">
          Our Esteemed Partners
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <Image
              src="/images/partner1.jpg"
              alt="Partner 1"
              width={150}
              height={150}
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold">Partner 1</h3>
          </div>

          <div className="text-center">
            <Image
              src="/images/partner2.jpg"
              alt="Partner 2"
              width={150}
              height={150}
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold">Partner 2</h3>
          </div>

          <div className="text-center">
            <Image
              src="/images/partner3.jpg"
              alt="Partner 3"
              width={150}
              height={150}
              className="rounded-lg mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold">Partner 3</h3>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Interested in Partnering?
        </h2>
        <p className="text-lg mb-8">
          Reach out to us to explore how we can work together.
        </p>
        <a
          href="mailto:humeshdeshmukh0@gmail.com"
          className="bg-[#fcba28] text-black px-8 py-4 rounded-lg text-xl font-medium hover:bg-[#fcba28]/90 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
