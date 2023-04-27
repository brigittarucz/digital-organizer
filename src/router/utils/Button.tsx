import { MouseEvent } from "react";

interface Props {
  title?: string;
  icon?: string;
  type:
    | "filled"
    | "filled-tonal"
    | "outline"
    | "elevated"
    | "icon-outline"
    | "icon-filled"
    | "icon-generic";
  onClick?: (() => void) | ((ev: MouseEvent<HTMLElement>) => void);
  selected?: boolean;
  iconSelectedTrue?: string;
  iconSelectedFalse?: string;
  submit?: true;
}

const Button = ({
  title,
  type,
  icon,
  onClick,
  selected,
  iconSelectedTrue,
  iconSelectedFalse,
  submit,
}: Props) => {
  const button = (() => {
    switch (type) {
      case "elevated":
        return (
          <button
            type={`${submit ? "submit" : "button"}`}
            className="button button_elevated"
            onClick={onClick}
          >
            {title}
          </button>
        );
      case "filled":
        return (
          <button className="button button_filled" onClick={onClick}>
            {title}
          </button>
        );
      case "filled-tonal":
        return (
          <button className="button button_filled--tonal" onClick={onClick}>
            {title}
          </button>
        );
      case "outline":
        return (
          <button className="button button_outline" onClick={onClick}>
            {title}
          </button>
        );
      case "icon-filled":
        return (
          <button
            className="button button_icon button_icon--filled"
            onClick={onClick}
          >
            <img src={icon} alt="Button Icon" />
          </button>
        );
      case "icon-outline":
        return (
          <button
            className="button button_icon button_icon--outline"
            onClick={onClick}
          >
            <img src={icon} alt="Button Icon" />
          </button>
        );
      case "icon-generic":
        return (
          <button
            className="button button_icon button_icon--generic"
            onClick={onClick}
            type="button"
          >
            {selected ? (
              <img src={iconSelectedTrue} alt="Button Icon Selected" />
            ) : (
              <img src={iconSelectedFalse} alt="Button Icon Not Selected" />
            )}
          </button>
        );
    }
  })();

  return button;
};

export default Button;
