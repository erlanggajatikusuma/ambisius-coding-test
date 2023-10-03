import Image from 'next/image';
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  // onClick?: () => void;
  className?: string; // Add className prop
  imgSrc?: string;
  // disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor = 'bg-blue-500',   // Default background color class
  textColor = 'text-white',           // Default text color class
  onClick,
  className,                          // Add className prop
  imgSrc,
  disabled = true
}) => {
  const buttonClasses = `flex items-center justify-center p-2 rounded ${textColor} ${className} ${disabled ? 'bg-gray-400' : `${backgroundColor}`}`;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
        {imgSrc && (
            <Image
             src={imgSrc}
             alt="reset button"
             className="dark:invert mx-2"
             width={24}
             height={24}
             priority
           />
        )}
      {children}
    </button>
  );
};

