import React, { ButtonHTMLAttributes } from 'react';

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className = '',
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      className={
        `disabled:bg-opacity-90 bg-transparent border border-slate-900 dark:border-slate-100 hover:bg-slate-100 dark:hover:bg-slate-200 text-slate-900 dark:text-slate-100 rounded-md px-4 py-2 font-medium ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;