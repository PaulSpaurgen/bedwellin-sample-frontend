import React from 'react';
import Button from '../Button';

interface ModalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  modalId: string;
  action: 'open' | 'close';
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  icon?: React.ReactNode;
  className?: string;
  iconPosition?: 'left' | 'right';
}

const ModalButton: React.FC<ModalButtonProps> = ({
  modalId,
  action,
  children,
  variant = 'primary',
  icon,
  iconPosition = 'left',
  className,
  ...props


}) => {
  const handleClick = () => {
    const modal = document.getElementById(modalId) as HTMLDialogElement;
    if (modal) {
      if (action === 'open') {
        modal.showModal();
      } else {
        modal.close();
      }
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      icon={icon}
      iconPosition={iconPosition}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ModalButton;
