import React from 'react';

interface ModalProps {
  id: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  modalPosition?: 'center' | 'top' | 'bottom';
  modalStyleClass?: string;
}

const Modal: React.FC<ModalProps> = ({
  id,
  children,
  onClose,
  showCloseButton = true,
  closeOnOverlayClick = true,
  modalPosition = 'center',
  modalStyleClass = ''

}) => {
  const modalPositionClass = modalPosition === 'center' ? 'modal-center' : modalPosition === 'top' ? 'modal-top' : 'modal-bottom';

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && onClose && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog id={id} className={`modal ${modalPositionClass} `}>
      <div className={`modal-box ${modalStyleClass} p-0`}>
        {children}



        {showCloseButton && (

          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={onClose}>Close</button>
            </form>
          </div>
        )}
      </div>
      <form 
        method="dialog" 
        className="modal-backdrop"
        onClick={handleOverlayClick}
      >
        {closeOnOverlayClick && <button hidden onClick={onClose}>close</button>}
      </form>
    </dialog>
  );
};

export default Modal;
