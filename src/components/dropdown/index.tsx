import React, { useEffect, useState } from 'react';

interface DropdownSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: any[];
  id?: string;
  // value: string;
//   onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownSelectProps> = ({
  label,
  options,
  value,
  onChange,
  className,
  defaultValue,
  id,
  ...rest
}) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const selectOption = (option: string) => {
  //   onChange(option);
  //   toggleDropdown();
  // };

  // Close the dropdown when clicking outside of it
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (isOpen && !event.target) {
  //       toggleDropdown();
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [isOpen]);

  return (
    <div className={`mb-4 relative dark:text-white text-gray-700 ${className}`}>
      <label className='block text-sm font-semibold dark:text-gray-300 text-gray-700 mb-1'>{label}</label>
      <div className="relative">
        <select
          {...rest}
          value={value}
          onChange={onChange}
          className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary dark:bg-gray-800 dark:border-gray-700'
        >
          {defaultValue && <option value={defaultValue}>
              {defaultValue}
            </option>
          }
          {options.map((option) => (
            <option key={(option.id || option)} value={(id && option.id || option.name || option || option.id)}>
              {/* {(option.name || option || option.id)} */}
              {( id && option.id || option.name || option || option.id)}
            </option>
          ))}
        </select>
        {/* <span className="absolute right-0 top-0 bottom-0 flex items-center pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-4 h-4 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span> */}
      </div>
    </div>
  );
};

export default Dropdown;
