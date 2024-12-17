import React from 'react';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ href, variant = 'primary', children }: ButtonProps) {
  const baseStyles = "text-sm font-semibold";
  const styles = {
    primary: `${baseStyles} rounded-md bg-indigo-600 px-3.5 py-2.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`,
    secondary: `${baseStyles} leading-6 text-gray-900`
  };

  return (
    <a href={href} className={styles[variant]}>
      {children}
    </a>
  );
}