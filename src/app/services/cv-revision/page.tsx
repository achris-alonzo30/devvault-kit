"use client";

import React, { useState } from "react";

const CvRevisionPage = () => {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setCvFile(e.target.files[0]);
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setFeedback(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("CV file:", cvFile);
    console.log("Feedback:", feedback);
    setCvFile(null);
    setFeedback("");
    setIsSubmitted(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
      style={{
        backgroundImage: "url('/path-to-your-background-image.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl max-w-3xl w-full p-8 space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-blue-600">CV Revision Hub</h1>
          <p className="text-gray-700">
            Enhance your professional profile. Upload your CV and share your feedback for expert revisions.
          </p>
        </div>

        {!isSubmitted ? (
          <>
            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {/* File Input */}
                <div>
                  <label
                    htmlFor="cvUpload"
                    className="block text-gray-700 font-semibold"
                  >
                    Upload Your CV (PDF, DOCX):
                  </label>
                  <input
                    type="file"
                    id="cvUpload"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                    required
                    className="block w-full px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>

                {/* Feedback Input */}
                <div>
                  <label
                    htmlFor="feedback"
                    className="block text-gray-700 font-semibold"
                  >
                    Your Feedback:
                  </label>
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={handleFeedbackChange}
                    placeholder="Provide your feedback or specific revision requests..."
                    required
                    className="block w-full px-4 py-2 border rounded-lg shadow resize-none focus:outline-none focus:ring focus:ring-blue-300"
                    style={{ minHeight: "100px" }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transform transition duration-300 hover:scale-105"
              >
                Submit for Revision
              </button>
            </form>

            {/* Additional Features */}
            <div className="text-center space-y-4 mt-8">
              <h2 className="text-xl font-semibold text-blue-600">
                Why Choose Our Service?
              </h2>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Professional editing tailored to your career goals.</li>
                <li>Fast turnaround times to meet deadlines.</li>
                <li>Detailed feedback for significant improvements.</li>
              </ul>
              <button
                onClick={() => alert("Learn more about our services!")}
                className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transform transition duration-300 hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-green-600">
              Submission Successful!
            </h2>
            <p className="text-gray-700">
              Thank you for submitting your CV. Our experts will review your document and provide feedback shortly.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-purple-500 text-white font-bold rounded-lg shadow hover:bg-purple-600 transform transition duration-300 hover:scale-105"
              >
                Submit Another CV
              </button>
              <button
                onClick={() => alert("Check out our other services!")}
                className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transform transition duration-300 hover:scale-105"
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

export default CvRevisionPage;
