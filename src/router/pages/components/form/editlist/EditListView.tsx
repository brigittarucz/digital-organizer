import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Button from "router/utils/Button";
import uploadToStorage from "services/fileStorage/uploadToStorage";
import EditListForm from "./EditListForm";
import { handleUpload as handleFileUpload } from "../utils/handleUpload";

const EditListView = () => {
  const imageUploadRef = useRef(null);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [pointsCount, setPointsCount] = useState(2);
  const [listTitleInput, setListTitleInput] = useState("Plans for tonight");
  const [listPointsInputs, setListPointsInputs] = useState<
    (string | undefined)[]
  >(["Eat dinner", "Brush teeth"]);
  const [listPointsDescriptionsInputs, setListPointsDescriptionsInputs] =
    useState<(string | undefined)[]>(["Sushi or stake", undefined]);

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (imageFile) {
      await uploadToStorage(imageFile);
    }
  };

  const handleUpload = (ev: ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(ev, imageUploadRef, setImageFile);
  };

  return (
    <div>
      <form className="add_form" onSubmit={(ev) => handleSubmit(ev)}>
        <EditListForm
          pointsCount={pointsCount}
          setPointsCount={setPointsCount}
          listTitleInput={listTitleInput}
          setListTitleInput={setListTitleInput}
          listPointsInputs={listPointsInputs}
          setListPointsInputs={setListPointsInputs}
          listPointsDescriptionsInputs={listPointsDescriptionsInputs}
          setListPointsDescriptionsInputs={setListPointsDescriptionsInputs}
          handleUpload={handleUpload}
          imageUploadRef={imageUploadRef}
        />
        <div className="add_form-submit_button">
          <Button title={"Save changes"} type="elevated" submit={true} />
        </div>
      </form>
    </div>
  );
};

export default EditListView;
