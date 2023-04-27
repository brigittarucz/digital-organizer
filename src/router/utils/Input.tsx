import { FormEvent, useState } from "react";

interface Props {
  label: string;
  type: "text" | "textarea";
  name: string;
  value: any;
  minLength: number;
  maxLength: number;
  placeholder: string;
  setValue: (ev: string) => void | ((ev: FormEvent<HTMLInputElement>) => void);
  isArrayOfValues?: boolean;
  styleInput?: "shapeshifter" | "shapeshifter--edit" | "inline" | "file";
}

const Input = ({
  label,
  type,
  name,
  value,
  minLength,
  maxLength,
  placeholder,
  styleInput,
  setValue,
  isArrayOfValues,
}: Props) => {
  const [focused, isFocused] = useState(false);

  const formElement = (() => {
    switch (type) {
      case "textarea":
        return (
          <div className="textarea-container">
            <label className="textarea-container_label">
              <textarea
                rows={3}
                name={name}
                value={value}
                minLength={minLength}
                maxLength={maxLength}
                placeholder={placeholder}
                required
                onInput={(ev) => {
                  return isArrayOfValues
                    ? // @ts-ignore
                      setValue(ev)
                    : setValue((ev.target as HTMLInputElement).value);
                }}
                onFocus={() => {
                  isFocused(true);
                }}
                onBlur={() => {
                  isFocused(false);
                }}
              />
              <small
                className={`${
                  focused
                    ? "textarea-container_label-small--focused"
                    : "textarea-container_label-small"
                }`}
              >
                {label}
              </small>
              <small className="textarea-container_label-small--count">
                {value === undefined ? 0 : value.length}/{maxLength}
              </small>
            </label>
          </div>
        );
      default:
        return (
          <div
            className={`input-container ${
              styleInput ? "input-container--" + styleInput : ""
            }`}
          >
            <label className="input-container_label">
              <input
                type={type}
                name={name}
                value={value}
                minLength={minLength}
                maxLength={maxLength}
                placeholder={placeholder}
                required
                readOnly={styleInput === "shapeshifter" ? true : false}
                onFocus={() => {
                  if (
                    styleInput === "shapeshifter" ||
                    styleInput === "shapeshifter--edit"
                  ) {
                    return;
                  }
                  isFocused(true);
                }}
                onBlur={() => {
                  if (
                    styleInput === "shapeshifter" ||
                    styleInput === "shapeshifter--edit"
                  ) {
                    return;
                  }
                  isFocused(false);
                }}
                onInput={(ev) =>
                  isArrayOfValues
                    ? // @ts-ignore
                      setValue(ev)
                    : setValue((ev.target as HTMLInputElement).value)
                }
              />
              <small
                className={`${
                  focused
                    ? "input-container_label-small--focused"
                    : "input-container_label-small"
                }`}
              >
                {label}
              </small>
            </label>
          </div>
        );
    }
  })();

  return formElement;
};

export default Input;
