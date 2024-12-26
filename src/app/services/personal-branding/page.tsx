/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from 'react';

const personalBrandingPage = () => {
  const [showTips, setShowTips] = useState(false);

  const tips = [
    "Define Your Unique Selling Proposition (USP): Understand what makes you different from others in your field.",
    "Build an Online Presence: Create a professional website, LinkedIn profile, and social media profiles that reflect your personal brand.",
    "Consistency is Key: Ensure that your brand message, visuals, and content are consistent across all platforms.",
    "Network with Purpose: Connect with people who can help grow your personal brand, whether mentors, industry leaders, or like-minded peers.",
    "Provide Value: Share your knowledge, experiences, and insights through blogs, videos, or social media posts to position yourself as an expert."
  ];

  const handleToggleTips = () => {
    setShowTips((prevState) => !prevState);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Personal Branding Guide</h1>
      <p>Welcome to the personal branding page! Personal branding is the practice of marketing yourself and your career as a brand. Here are some key strategies to help you build and enhance your personal brand:</p>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleToggleTips}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {showTips ? "Hide Tips" : "Show Personal Branding Tips"}
        </button>
      </div>

      {showTips && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
          <h3>Top Personal Branding Tips</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            {tips.map((tip, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        <h2>Personal Branding Resources</h2>
        <p>Explore some valuable resources to help you create a strong personal brand:</p>
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>
              LinkedIn Personal Branding Tips
            </a>
          </li>
          <li>
            <a href="https://www.forbes.com/sites/forbescoachescouncil/2020/10/08/how-to-build-a-personal-brand-that-stands-out-in-a-crowded-market/" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>
              Forbes Article on Personal Branding
            </a>
          </li>
          <li>
            <a href="https://neilpatel.com/blog/personal-branding/" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>
              Neil Patel's Guide to Personal Branding
            </a>
          </li>
        </ul>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Personal Branding Workshop</h2>
        <p>Join our free personal branding workshop to learn more about how to grow your personal brand!</p>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => alert("Workshop Registration - (Feature Coming Soon)")}>
          Register for Workshop
        </button>
      </div>
    </div>
  );
};

export default personalBrandingPage;
