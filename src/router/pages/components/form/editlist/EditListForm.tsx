import Button from "router/utils/Button";
import Input from "router/utils/Input";
import editIconOutline from "assets/graphics/icons/edit-icon-outline.svg";
import editIconFilled from "assets/graphics/icons/edit-icon-filled.svg";
import { ChangeEvent, FormEvent, RefObject, useState } from "react";
import InputFile from "router/utils/InputFile";
import FormListPoint from "../utils/FormListPoint";
import FormListPointAdd from "../utils/FormListPointAdd";
import FormListPointRemove from "../utils/FormListPointRemove";

interface Props {
  pointsCount: number;
  setPointsCount: (x: number) => void;
  listTitleInput: string;
  setListTitleInput: (x: string) => void;
  listPointsInputs: (string | undefined)[];
  setListPointsInputs: (x: (string | undefined)[]) => void;
  listPointsDescriptionsInputs: (string | undefined)[];
  setListPointsDescriptionsInputs: (x: (string | undefined)[]) => void;
  handleUpload: (ev: ChangeEvent<HTMLInputElement>) => void;
  imageUploadRef: RefObject<HTMLImageElement>;
}

const EditListForm = ({
  pointsCount,
  setPointsCount,
  listTitleInput,
  setListTitleInput,
  listPointsInputs,
  setListPointsInputs,
  listPointsDescriptionsInputs,
  setListPointsDescriptionsInputs,
  handleUpload,
  imageUploadRef,
}: Props) => {
  const [listTitleSelected, isListTitleSelected] = useState(false);

  const changeSelected = () => {
    isListTitleSelected(!listTitleSelected);
  };

  // TODO: remove not working in edit list

  const setValuePoints = (ev: FormEvent<HTMLInputElement> | string) => {
    if (typeof ev === "string") {
      return;
    }
    // Split at "-"
    const index = Number((ev.target as HTMLInputElement).name.split("-")[1]);

    if ((ev.target as HTMLInputElement).name.includes("point")) {
      let points = listPointsInputs;
      points[index] = (ev.target as HTMLInputElement).value;
      setListPointsInputs(points);
    } else if ((ev.target as HTMLInputElement).name.includes("description")) {
      let descriptions = listPointsDescriptionsInputs;
      descriptions[index] = (ev.target as HTMLInputElement).value;
      setListPointsDescriptionsInputs(descriptions);
    }
  };

  return (
    <>
      <Input
        label="List Title"
        type="text"
        name="listTitle"
        value={listTitleInput}
        minLength={5}
        maxLength={70}
        placeholder={"Type in the list title"}
        setValue={setListTitleInput}
        styleInput={listTitleSelected ? "shapeshifter--edit" : "shapeshifter"}
      />
      <Button
        type="icon-generic"
        onClick={changeSelected}
        selected={listTitleSelected}
        iconSelectedTrue={editIconFilled}
        iconSelectedFalse={editIconOutline}
      />

      <InputFile
        imageUploadRef={imageUploadRef}
        onChange={(ev) => handleUpload(ev)}
        buttonTitle={"Add Point Image"}
      />

      <FormListPoint
        pointsCount={pointsCount}
        listPointsInputs={listPointsInputs}
        setValuePoints={setValuePoints}
        listPointsDescriptionsInputs={listPointsDescriptionsInputs}
      />
      <div className="add_form-add_button">
        <FormListPointAdd
          pointsCount={pointsCount}
          listPointsInputs={listPointsInputs}
          listPointsDescriptionsInputs={listPointsDescriptionsInputs}
          setListPointsInputs={setListPointsInputs}
          setListPointsDescriptionsInputs={setListPointsDescriptionsInputs}
          setPointsCount={setPointsCount}
        />
      </div>
      <div className="add_form-remove_button">
        <FormListPointRemove
          pointsCount={pointsCount}
          listPointsInputs={listPointsInputs}
          listPointsDescriptionsInputs={listPointsDescriptionsInputs}
          setListPointsInputs={setListPointsInputs}
          setListPointsDescriptionsInputs={setListPointsDescriptionsInputs}
          setPointsCount={setPointsCount}
        />
      </div>
    </>
  );
};

export default EditListForm;
