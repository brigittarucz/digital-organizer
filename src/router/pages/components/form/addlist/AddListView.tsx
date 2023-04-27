import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Button from "router/utils/Button";
import uploadToStorage from "services/fileStorage/uploadToStorage";
import AddListForm from "./AddListForm";
import { handleUpload as handleFileUpload } from "../utils/handleUpload";

const AddListView = () => {
  const imageUploadRef = useRef(null);
  const [listTitleInput, setListTitleInput] = useState("");
  const [listDescriptionInput, setListDescriptionInput] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [pointsCount, setPointsCount] = useState(1);
  const [listPointsInputs, setListPointsInputs] = useState<
    (string | undefined)[]
  >([]);
  const [listPointsDescriptionsInputs, setListPointsDescriptionsInputs] =
    useState<(string | undefined)[]>([]);

  const handleSubmit = async (ev: FormEvent) => {
    console.log("submit");
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
        <AddListForm
          pointsCount={pointsCount}
          setPointsCount={setPointsCount}
          listTitleInput={listTitleInput}
          setListTitleInput={setListTitleInput}
          listPointsInputs={listPointsInputs}
          setListPointsInputs={setListPointsInputs}
          listPointsDescriptionsInputs={listPointsDescriptionsInputs}
          setListPointsDescriptionsInputs={setListPointsDescriptionsInputs}
          listDescriptionInput={listDescriptionInput}
          setListDescriptionInput={setListDescriptionInput}
          handleUpload={handleUpload}
          imageUploadRef={imageUploadRef}
        />
        <div className="add_form-submit_button">
          <Button title={"Add New List"} type="elevated" submit={true} />
        </div>
      </form>
    </div>
  );
};

export default AddListView;
