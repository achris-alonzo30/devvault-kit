/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Ensures this file works with React 18 client-side rendering

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";

// Define interface for resume data
interface ResumeData {
  name: string;
  email: string;
  phone: string;
  summary: string;
  experience: string;
  education: string;
  skills: string;
  projects: string;
  certifications: string;
  declaration: string;
}

const sections = [
  { label: "Name", type: "text", name: "name", placeholder: "Enter your name" },
  { label: "Email", type: "email", name: "email", placeholder: "Enter your email" },
  { label: "Phone", type: "text", name: "phone", placeholder: "Enter your phone number" },
  { label: "Summary", type: "textarea", name: "summary", placeholder: "Brief summary about yourself" },
  { label: "Experience", type: "textarea", name: "experience", placeholder: "Work experience" },
  { label: "Education", type: "textarea", name: "education", placeholder: "Education background" },
  { label: "Skills", type: "text", name: "skills", placeholder: "Skills (comma separated)" },
  { label: "Projects", type: "textarea", name: "projects", placeholder: "Describe your projects" },
  { label: "Certifications", type: "textarea", name: "certifications", placeholder: "Enter certifications" },
  { label: "Declaration", type: "textarea", name: "declaration", placeholder: "Declaration" },
];

// Resume Form Component
const ResumeForm = ({ setResumeData }: { setResumeData: React.Dispatch<React.SetStateAction<ResumeData>> }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setResumeData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {sections.map(({ label, type, name, placeholder }) => (
        <div key={name} className="mb-4">
          <label className="text-lg text-gray-200">{label}</label>
          {type === "textarea" ? (
            <textarea
              name={name}
              placeholder={placeholder}
              className="w-full p-2 mt-2 border rounded-lg bg-gray-800 text-gray-300"
              onChange={handleChange}
            />
          ) : (
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              className="w-full p-2 mt-2 border rounded-lg bg-gray-800 text-gray-300"
              onChange={handleChange}
            />
          )}
        </div>
      ))}
    </div>
  );
};

// Resume Preview Component
const ResumePreview = ({ resumeData }: { resumeData: ResumeData }) => (
  <div className="p-6 border rounded-lg bg-gray-800 shadow-lg text-gray-100">
    <h2 className="text-2xl font-bold mb-4 text-center">Resume Preview</h2>
    {Object.entries(resumeData).map(([key, value]) => (
      <div key={key} className="mt-4">
        <h3 className="text-lg font-semibold capitalize">{key}</h3>
        <p>{String(value) || "Not Provided"}</p>
      </div>
    ))}
  </div>
);

// Generate PDF Content
const generatePDF = (resumeData: ResumeData) => {
  const doc = new jsPDF();
  doc.setFont("helvetica", "bold");
  doc.text("Resume", 20, 20);

  let y = 40;
  for (const [key, value] of Object.entries(resumeData)) {
    doc.setFont("helvetica", "bold");
    doc.text(`${key.toUpperCase()}:`, 20, y);
    doc.setFont("helvetica", "normal");
    doc.text(`${value || "Not Provided"}`, 40, y);
    y += 10;
  }

  doc.save("resume.pdf");
};

// Generate DOCX Content
const generateDocx = (resumeData: ResumeData) => {
  const doc = new Document({
    sections: [
      {
        children: Object.entries(resumeData).map(([key, value]) =>
          new Paragraph({
            children: [
              new TextRun({ text: `${key.toUpperCase()}:`, bold: true }),
              new TextRun({ text: ` ${value || "Not Provided"}`, break: 1 }),
            ],
          })
        ),
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.docx";
    link.click();
    window.URL.revokeObjectURL(url);
  });
};

// Main Component
export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(
    sections.reduce((acc, { name }) => ({ ...acc, [name]: "" }), {} as ResumeData)
  );

  return (
    <div className="bg-gray-900 min-h-screen p-10">
      <h1 className="text-5xl font-bold text-white text-center mb-10">Advanced Resume Builder</h1>
      <ResumeForm setResumeData={setResumeData} />
      <div className="mt-8">
        <ResumePreview resumeData={resumeData} />
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <Button
          onClick={() => generatePDF(resumeData)}
          className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md"
        >
          <Download className="inline w-5 h-5 mr-2" />
          Download PDF
        </Button>
        <Button
          onClick={() => generateDocx(resumeData)}
          className="px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-md"
        >
          <Download className="inline w-5 h-5 mr-2" />
          Download DOCX
        </Button>
      </div>
    </div>
  );
}
