import { ChangeEvent, RefObject } from "react";

interface Props {
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  imageUploadRef: RefObject<HTMLImageElement>;
  buttonTitle: string;
}

const InputFile = ({ onChange, imageUploadRef, buttonTitle }: Props) => {
  return (
    <div className="input_file">
      <img id="img" ref={imageUploadRef} alt="Uploaded content" />
      <label className="input_file-custom">
        {buttonTitle}
        <input type="file" accept="image/*" onChange={onChange} />
      </label>
      <small className="text_caption">Max image size 4kB</small>
    </div>
  );
};

export default InputFile;
