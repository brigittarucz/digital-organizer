import { FormEvent } from "react";

interface Props {
  label: string;
  type: string;
  name: string;
  value: any;
  minLength: number;
  maxLength: number;
  placeholder: string;
  setValue: (ev: string) => void | ((ev: FormEvent<HTMLInputElement>) => void);
  isArrayOfValues?: boolean;
}

const Input = ({
  label,
  type,
  name,
  value,
  minLength,
  maxLength,
  placeholder,
  setValue,
  isArrayOfValues,
}: Props) => {
  return (
    <div className="input-container">
      <label className="input-container_label">
        {label}
        <input
          type={type}
          name={name}
          value={value}
          minLength={minLength}
          maxLength={maxLength}
          placeholder={placeholder}
          required
          onInput={(ev) =>
            isArrayOfValues
              ? // @ts-ignore
                setValue(ev)
              : setValue((ev.target as HTMLInputElement).value)
          }
        />
      </label>
    </div>
  );
};

export default Input;
