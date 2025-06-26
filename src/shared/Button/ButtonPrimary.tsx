import React, { ButtonHTMLAttributes } from 'react';

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = '',
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      className={
        `ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl rounded-md px-4 py-2 font-medium ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;