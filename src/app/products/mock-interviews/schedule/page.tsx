"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ScheduleMockInterview = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roles = [
    "Software Engineer",
    "Product Manager",
    "Data Scientist",
    "UX/UI Designer",
    "Marketing Specialist",
  ];

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfz0RlRmMmuOpJt4lgd3ts_O7cJ23yV7IzUSF3v87v6Hr4JeQ/formResponse";

  const handleSchedule = () => {
    if (selectedDate && selectedRole && name && email && mobile) {
      setIsModalOpen(true);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmBooking = () => {
    if (selectedDate && selectedRole && name && email && mobile) {
      const formData = new FormData();
      formData.append("entry.1202266769", selectedRole);
      formData.append("entry.2046791324", selectedDate.toString());
      formData.append("entry.1765739268", name);
      formData.append("entry.1072284412", email);
      formData.append("entry.1038314431", mobile);

      fetch(googleFormUrl, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then(() => {
          alert("Your mock interview has been scheduled!");
          setIsModalOpen(false);
        })
        .catch((error) => {
          console.error("Error sending data to Google Form:", error);
          alert("Something went wrong. Please try again.");
        });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white pt-20 px-8 flex flex-col items-center">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-screen-xl w-full"
      >
        <motion.h1
          className="text-4xl font-extrabold text-center mb-12 text-[#fcba28]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Schedule Your Mock Interview
        </motion.h1>

        {/* Content Section */}
        <motion.section
          className="space-y-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-2xl font-semibold text-white">How to Schedule</h2>
          <p className="text-sm md:text-base text-white">
            Scheduling a mock interview is simple! Follow these steps to book your session:
          </p>
          <ul className="list-decimal pl-6 space-y-4 text-sm md:text-base text-white">
            <li>Select a date and time that suits your schedule.</li>
            <li>Provide details about the role or industry you are targeting.</li>
            <li>Confirm your booking and get ready for your interview.</li>
          </ul>
        </motion.section>

        {/* Date and Role Selection Section */}
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="space-y-4">
            <label className="block text-sm md:text-base font-semibold text-white">Select Date & Time</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)} // Updated to handle Date | null
              showTimeSelect
              dateFormat="Pp"
              className="mt-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-white w-full"
              placeholderText="Select Date & Time"
            />
          </div>

          <div className="space-y-4">
            <label className="block text-sm md:text-base font-semibold text-white">Select Role</label>
            <select
              className="mt-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white w-full"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Choose Role</option>
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <label className="block text-sm md:text-base font-semibold text-white">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white w-full"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-4">
            <label className="block text-sm md:text-base font-semibold text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white w-full"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-4">
            <label className="block text-sm md:text-base font-semibold text-white">Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="mt-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white w-full"
              placeholder="Enter your mobile number"
            />
          </div>
        </motion.section>

        {/* Button Section */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <button
            onClick={handleSchedule}
            className="bg-[#fcba28] text-black py-3 px-8 rounded-full shadow-lg hover:bg-[#e29f1e] transition duration-300"
          >
            Book Now
          </button>
        </motion.div>
      </motion.div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            className="bg-gray-900 p-8 rounded-lg text-center text-white max-w-lg w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#fcba28]">Confirm Your Booking</h3>
            <p className="mb-4">
              <strong>Role:</strong> {selectedRole}
            </p>
            <p className="mb-4">
              <strong>Date and Time:</strong> {selectedDate?.toLocaleString()}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={closeModal}
                className="bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition duration-300"
              >
                Close
              </button>
              <button
                onClick={handleConfirmBooking}
                className="bg-[#fcba28] text-black py-2 px-6 rounded-md hover:bg-[#e29f1e] transition duration-300"
              >
                Confirm Booking
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ScheduleMockInterview;
