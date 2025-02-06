import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary',
  children,
  icon,
  className = '',
  iconPosition = 'left',
  ...props

}) => {
  const baseStyles = 'px-6 py-3 rounded-[10px] transition-colors duration-200 text-xs font-manrope';
  

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-tertiary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <div className={`flex items-center gap-2 ${iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
        {icon && <span >{icon}</span>}
        {children}
      </div>


    </button>

  );
};

export default Button;
