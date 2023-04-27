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
      <div className="modal_content">
        <section className="modal_content-grid">
          <article className="modal_content-grid-children">{children}</article>
          <article className="modal_content-grid-graphics">
            <span className="close" onClick={close}>
              X
            </span>
          </article>
        </section>
      </div>
    </div>
  );
};

export default GenericModal;
