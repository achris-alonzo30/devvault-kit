"use client";
import React, { useState } from 'react';

const ConsultationPage = () => {
  // State to handle form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulating a form submission
    console.log({
      name,
      email,
      message,
      appointmentDate,
    });

    // Reset form after submission
    setName('');
    setEmail('');
    setMessage('');
    setAppointmentDate('');
    setIsSubmitted(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
      style={{
        backgroundImage: "url('/path-to-your-background-image.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-3xl w-full">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-blue-600">Consultation Request</h1>
          <p className="text-gray-700">
            Schedule your consultation by filling out the form below.
          </p>
        </div>

        {/* Form Section */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 font-semibold"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 font-semibold"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-800 font-semibold"
              >
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message or reason for consultation"
                required
                className="w-full px-4 py-2 border rounded-lg shadow-sm resize-none focus:outline-none focus:ring focus:ring-blue-500"
                style={{ minHeight: '120px' }}
              />
            </div>

            {/* Date Input */}
            <div>
              <label
                htmlFor="appointmentDate"
                className="block text-gray-800 font-semibold"
              >
                Preferred Appointment Date:
              </label>
              <input
                type="date"
                id="appointmentDate"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
            >
              Schedule Consultation
            </button>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-green-600">
              Thank you for your request!
            </h2>
            <p className="text-gray-700">
              Your consultation request has been submitted. We will get back to you shortly.
            </p>

            <div className="flex justify-center gap-6">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transform transition duration-300"
              >
                Submit Another Request
              </button>
              <button
                onClick={() => alert("Check out our other services!")}
                className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-600 transform transition duration-300"
              >
                Explore Services
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationPage;
