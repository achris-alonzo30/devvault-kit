"use client"
import React, { useState } from 'react';

const InterviewCoachingPage = () => {
  // State to manage form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [goals, setGoals] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form data changes
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value);
  const handleGoalsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setGoals(e.target.value);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Log the form data (in real use, submit to backend)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Preferred Date:', date);
    console.log('Goals:', goals);

    // Reset form after submission
    setName('');
    setEmail('');
    setDate('');
    setGoals('');
    setIsSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Interview Coaching</h1>
      <p>Welcome to the Interview Coaching page! Fill out the form below to schedule your session.</p>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <div>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your full name"
              required
              style={{ padding: '8px', width: '100%' }}
            />
          </div>

          <div style={{ marginTop: '10px' }}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email address"
              required
              style={{ padding: '8px', width: '100%' }}
            />
          </div>

          <div style={{ marginTop: '10px' }}>
            <label htmlFor="date">Preferred Coaching Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              required
              style={{ padding: '8px', width: '100%' }}
            />
          </div>

          <div style={{ marginTop: '10px' }}>
            <label htmlFor="goals">Interview Goals / Areas for Improvement:</label>
            <textarea
              id="goals"
              value={goals}
              onChange={handleGoalsChange}
              placeholder="Enter your goals or areas you'd like to improve on"
              required
              style={{ padding: '8px', width: '100%', height: '100px' }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '10px 20px',
              marginTop: '20px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Submit Coaching Request
          </button>
        </form>
      ) : (
        <div>
          <h2>Thank you for scheduling your interview coaching session!</h2>
          <p>We will get back to you with the details shortly.</p>
        </div>
      )}
    </div>
  );
};

export default InterviewCoachingPage;
