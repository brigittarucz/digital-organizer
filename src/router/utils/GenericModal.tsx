import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const GenericModal = ({ children, isVisible, setIsVisible }: Props) => {
  const close = () => {
    setIsVisible(false);
  };

  return (
    <div className="modal" style={{ display: isVisible ? "block" : "none" }}>
      <div className="modal_content-generic">
        <section className="modal_content-generic-grid">
          <article className="modal_content-generic-grid-children">
            {children}
          </article>
          <article className="modal_content-generic-grid-graphics">
            <span className="close-generic" onClick={close}>
              X
            </span>
          </article>
        </section>
      </div>
    </div>
  );
};

export default GenericModal;
