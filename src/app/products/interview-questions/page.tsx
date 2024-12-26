/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from 'react';
import { questions, Question } from './questionsData';

const InterviewQuestions: React.FC = () => {
  const [questionsData, setQuestionsData] = useState<Question[]>(questions);
  const [filter, setFilter] = useState<string>('All');
  const [companyFilter, setCompanyFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState<boolean>(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState<boolean>(false);

  const handleBookmark = (id: number) => {
    setQuestionsData(prevQuestions =>
      prevQuestions.map(q =>
        q.id === id ? { ...q, isBookmarked: !q.isBookmarked } : q
      )
    );
  };

  const handleFilterChange = (filterValue: string) => {
    setFilter(filterValue);
    setIsCategoryDropdownOpen(false); // Close the dropdown after selection
  };

  const handleCompanyFilterChange = (companyValue: string) => {
    setCompanyFilter(companyValue);
    setIsCompanyDropdownOpen(false); // Close the dropdown after selection
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleViewDetails = (question: Question) => {
    setSelectedQuestion(question);
    setShowDetailsModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailsModal(false);
    setSelectedQuestion(null);
  };

  let filteredQuestions: Question[] = [];
  try {
    filteredQuestions = questionsData
      .filter(q => (filter === 'Bookmarked' ? q.isBookmarked : true))
      .filter(q => (filter === 'Tech' || filter === 'Non-Tech' ? q.category === filter : true))
      .filter(q => (companyFilter === 'All' ? true : q.company === companyFilter))
      .filter(q =>
        q.title.toLowerCase().includes(search.toLowerCase()) ||
        q.description.toLowerCase().includes(search.toLowerCase()) ||
        q.category.toLowerCase().includes(search.toLowerCase()) ||
        (q.company && q.company.toLowerCase().includes(search.toLowerCase())) // Check if q.company is defined
      );
  } catch (error) {
    console.error('Error filtering questions:', error);
  }

  return (
    <div className="bg-background py-16 px-4 md:px-10 mt-16 text-white">
      <h1 className="text-center text-4xl font-semibold mb-6 text-[#fcd34d]">Interview Questions</h1>

      {/* Search, Filter, and Progress Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search questions by title, category, or company..."
              value={search}
              onChange={handleSearchChange}
              className="p-3 border border-[#80cfd1] rounded-md w-full text-black focus:outline-none"
            />
            <button
              onClick={() => setSearch('')}
              className="bg-[#fcba28] text-black p-3 rounded-md hover:bg-[#1d3557] hover:text-white transition"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Filter by Category */}
          <div className="relative">
            <button
              onClick={() => setIsCategoryDropdownOpen(prev => !prev)}
              className="bg-[#80cfd1] p-3 rounded-md hover:bg-[#457b9d] text-black hover:text-white transition"
            >
              Filter by Category
            </button>
            {isCategoryDropdownOpen && (
              <div className="absolute right-0 mt-1 bg-[#2d2d2d] border rounded-md shadow-md z-10">
                <button onClick={() => handleFilterChange('All')} className="block px-4 py-2 text-white hover:bg-gray-600">All</button>
                <button onClick={() => handleFilterChange('Tech')} className="block px-4 py-2 text-white hover:bg-gray-600">Tech</button>
                <button onClick={() => handleFilterChange('Non-Tech')} className="block px-4 py-2 text-white hover:bg-gray-600">Non-Tech</button>
                <button onClick={() => handleFilterChange('Bookmarked')} className="block px-4 py-2 text-white hover:bg-gray-600">Bookmarked</button>
              </div>
            )}
          </div>

          {/* Filter by Company */}
          <div className="relative">
            <button
              onClick={() => setIsCompanyDropdownOpen(prev => !prev)}
              className="bg-[#457b9d] p-3 rounded-md hover:bg-[#1d3557] text-white transition"
            >
              Filter by Company
            </button>
            {isCompanyDropdownOpen && (
              <div className="absolute right-0 mt-1 bg-[#2d2d2d] border rounded-md shadow-md z-10">
                {['All', 'TCS', 'Infosys', 'Google', 'Amazon', 'Facebook', 'Apple', 'Microsoft', 'IBM'].map(company => (
                  <button
                    key={company}
                    onClick={() => handleCompanyFilterChange(company)}
                    className="block px-4 py-2 text-white hover:bg-gray-600"
                  >
                    {company}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Question Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map(question => (
            <div key={question.id} className="bg-[#2d2d2d] shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {question.title}
                  <span className="ml-2 bg-[#80cfd1] text-white text-xs py-1 px-3 rounded">{question.category}</span>
                  <span className="ml-2 bg-[#457b9d] text-white text-xs py-1 px-3 rounded">{question.company}</span>
                </h3>
                <p className="mt-2 text-gray-400">
                  {question.description.length > 100
                    ? question.description.substring(0, 100) + '...'
                    : question.description}
                </p>
                <div className="mt-4 flex items-center space-x-4">
                  <button
                    onClick={() => handleViewDetails(question)}
                    className="bg-[#457b9d] text-white px-6 py-2 rounded-md hover:bg-[#1d3557] transition"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleBookmark(question.id)}
                    className={`px-6 py-2 rounded-md ${question.isBookmarked ? 'bg-yellow-500' : 'bg-[#80cfd1]'} hover:bg-yellow-400 transition`}
                  >
                    {question.isBookmarked ? 'Unbookmark' : 'Bookmark'}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500">
            <p>No questions to display.</p>
          </div>
        )}
      </div>

      {/* Details Modal */}
      {selectedQuestion && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-[#2d2d2d] p-8 rounded-lg shadow-lg w-3/4 md:w-1/2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-[#fcd34d]">{selectedQuestion.title}</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                X
              </button>
            </div>
            <p><strong>Category:</strong> <span className="bg-[#80cfd1] text-white py-1 px-3 rounded">{selectedQuestion.category}</span></p>
            <p><strong>Company:</strong> <span className="bg-[#457b9d] text-white py-1 px-3 rounded">{selectedQuestion.company}</span></p>
            <p className="mt-4">{selectedQuestion.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterviewQuestions;
