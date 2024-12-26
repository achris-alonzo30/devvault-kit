import { useState } from 'react';

// Type definition for select option
interface Option {
  label: string;
  value: string;
}

// Props for the Select component
interface SelectProps {
  options: Option[];
  label: string;
  onChange: (value: string) => void;
  value: string;
}

// Select component
export function Select({ options, label, onChange, value }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle option selection
  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 relative">
        {/* Dropdown button */}
        <button
          type="button"
          className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleDropdown}
        >
          {value ? options.find(option => option.value === value)?.label : 'Select an option'}
        </button>

        {/* Dropdown options */}
        {isOpen && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
            {options.map(option => (
              <li
                key={option.value}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
