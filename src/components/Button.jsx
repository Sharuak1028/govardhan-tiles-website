// src/components/Button.jsx
import React from 'react';
import clsx from 'clsx';
import './Button.css';

export function Button({ children, className, variant, ...props }) {
  const baseClasses = 'px-6 py-3 rounded-xl font-medium transition-all duration-300';
  const variants = {
    outline: 'bg-transparent border',
    default: 'bg-amber-500 text-white hover:bg-amber-600',
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant] || variants.default, className)}
      {...props}
    >
      {children}
    </button>
  );
}