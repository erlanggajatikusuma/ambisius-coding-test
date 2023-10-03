import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string
}

const Input: React.FC<InputProps> = ({ label, placeholder, ...rest }) => {

  return (
    <div className='mb-4 flex-grow dark:text-white dark:bg-inherit dark:border-gray-700'>
      <label className='block text-sm font-semibold dark:text-gray-300 text-gray-700 mb-1'>{label}</label>
      <input
        placeholder={placeholder}
        {...rest}
        className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary dark:text-white dark:bg-gray-800 dark:border-gray-700'
      />
    </div>
  );
};

export default Input;
