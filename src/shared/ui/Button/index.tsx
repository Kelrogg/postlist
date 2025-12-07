import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = styles.button;
  const variantClasses = styles[`button--${variant}`];
  const sizeClasses = styles[`button--${size}`];
  const fullClassName = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  return (
    <button className={fullClassName} {...props}>
      {children}
    </button>
  );
};