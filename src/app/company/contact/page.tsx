/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formData);
      setStatus("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="bg-background text-white min-h-screen p-8">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#fcba28]">Contact Us</h1>
        <p className="text-xl mt-4">
          We’d love to hear from you. Get in touch using the form below.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#fcba28] text-black py-3 rounded font-medium hover:bg-[#fcb828]/90 transition"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-center">{status}</p>}
        </form>
      </section>

      {/* Contact Details */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Reach Us Directly</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-2xl text-[#fcba28]" />
            <span>+91 9284330238</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl text-[#fcba28]" />
            <span>humeshdeshmukh0@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-2xl text-[#fcba28]" />
            <span>Pune, India</span>
          </div>
        </div>
      </section>
    </div>
  );
}
