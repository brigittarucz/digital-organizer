import { ReactNode } from "react";

const Modal = ({
  children,
  isVisible,
  setIsVisible,
}: {
  children: ReactNode;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}) => {
  const close = () => {
    setIsVisible(false);
  };

  return (
    <div className="modal" style={{ display: isVisible ? "block" : "none" }}>
      <div className="modal-content">
        <span className="close" onClick={close}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
