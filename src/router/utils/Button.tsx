interface Props {
  title: string;
  type: "filled" | "elevated";
}

const Button = ({ title, type }: Props) => {
  const buttonStyleClass =
    type === "elevated" ? "button_elevated" : "button_filled";

  return <button className={`button ${buttonStyleClass}`}>{title}</button>;
};

export default Button;
