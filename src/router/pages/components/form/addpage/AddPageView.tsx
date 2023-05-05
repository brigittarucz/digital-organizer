import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Button from "router/utils/Button";
import uploadToStorage from "services/fileStorage/uploadToStorage";
import AddPageForm from "./AddPageForm";
import { handleUpload as handleFileUpload } from "../utils/handleUpload";

const AddPageView = () => {
  const imageUploadRef = useRef(null);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [linksCount, setLinksCount] = useState(0);
  const [pageTitleInput, setPageTitleInput] = useState("");
  const [pageLinksInputs, setPageLinksInputs] = useState<
    (string | undefined)[]
  >([]);
  const [pageDescriptionInput, setPageDescriptionInput] = useState<string>("");

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
        <AddPageForm
          linksCount={linksCount}
          setLinksCount={setLinksCount}
          pageTitleInput={pageTitleInput}
          setPageTitleInput={setPageTitleInput}
          pageLinksInputs={pageLinksInputs}
          setPageLinksInputs={setPageLinksInputs}
          pageDescriptionInput={pageDescriptionInput}
          setPageDescriptionInput={setPageDescriptionInput}
          handleUpload={handleUpload}
          imageUploadRef={imageUploadRef}
        />
        <div className="add_form-submit_button">
          <Button title={"Add New Page"} type="elevated" submit={true} />
        </div>
      </form>
    </div>
  );
};

export default AddPageView;
