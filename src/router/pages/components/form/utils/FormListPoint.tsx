import { FormEvent } from "react";
import Input from "router/utils/Input";

interface Props {
  pointsCount: number;
  listPointsInputs: (string | undefined)[];
  setValuePoints: (ev: FormEvent<HTMLInputElement> | string) => void;
  listPointsDescriptionsInputs: (string | undefined)[];
}

const FormListPoint = ({
  pointsCount,
  listPointsInputs,
  setValuePoints,
  listPointsDescriptionsInputs,
}: Props) => {
  return (
    <>
      {[...Array(pointsCount)].map((item, index) => (
        <div key={index}>
          <h6>Point {index + 1}</h6>
          <Input
            label="Point"
            type="text"
            name={"point-" + index}
            value={listPointsInputs[index]}
            minLength={5}
            maxLength={70}
            placeholder={"Point "}
            isArrayOfValues={true}
            setValue={setValuePoints}
          />
          <Input
            label="Point Description"
            type="textarea"
            name={"description-" + index}
            value={listPointsDescriptionsInputs[index]}
            minLength={5}
            maxLength={70}
            placeholder={"Type new list description"}
            isArrayOfValues={true}
            setValue={setValuePoints}
          />
          <div className="add_form-contents-checkbox_container">
            <input type="checkbox" />
            <p className="text_body-1">Mark new point as done</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FormListPoint;
