// ProgressBar.tsx
'use client';

import React from 'react';

interface ProgressBarProps {
  progress: number; // Progress value between 0 and 100
  label: string;    // Optional label to display beside the progress bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full">
      {label && <label className="text-sm font-medium text-gray-700 mb-2 block">{label}</label>}
      <div className="w-full h-4 bg-gray-200 rounded-full">
        <div
          className="h-full rounded-full bg-blue-500"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      <div className="text-sm text-gray-600 mt-2">{clampedProgress}%</div>
    </div>
  );
};

export default ProgressBar;
