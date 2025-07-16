import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, ...rest }) => {
  let buttonClasses = 'px-4 py-2 rounded-full transition duration-300 ease-in-out ';

  switch (variant) {
    case 'primary':
      buttonClasses += 'bg-green-500 text-white hover:bg-green-700';
      break;
    case 'secondary':
      buttonClasses += 'bg-blue-500 text-white hover:bg-blue-700';
      break;
    case 'outline':
      buttonClasses += 'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white';
      break;
    case 'ghost':
      buttonClasses += 'text-green-800 hover:bg-gray-100';
      break;
    default:
      buttonClasses += 'bg-green-500 text-white hover:bg-green-700';
  }

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;