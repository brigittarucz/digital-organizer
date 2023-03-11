import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Input from "router/utils/Input";
import uploadToStorage from "services/fileStorage/uploadToStorage";

const AddView = () => {
  const imageUploadRef = useRef(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [linksCount, setLinksCount] = useState(1);

  const [pageTitleInput, setPageTitleInput] = useState("");
  const [pageLinkInputs, setPageLinkInputs] = useState<string[]>([]);
  const [pageDescriptionInput, setPageDescriptionInput] = useState("");

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (imageFile) {
      await uploadToStorage(imageFile);
    }
  };

  const handleUpload = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    if (
      !ev.target ||
      !(ev.target as unknown as HTMLInputElement).value.length
    ) {
      (imageUploadRef.current as unknown as HTMLImageElement).src = "";

      setImageFile(null);

      return;
    }

    // Cannot be null as it was checked through value
    const file = (ev.target as unknown as HTMLInputElement).files![0];
    setImageFile(file);

    const reader = new FileReader();
    reader.onerror = () => {
      console.log("Error ocurred reading file");
    };

    reader.onload = (ev) => {
      if (ev.target) {
        (imageUploadRef.current as unknown as HTMLImageElement).src =
          typeof ev.target.result === "string" ? ev.target.result : "";
      }
    };

    reader.readAsDataURL(file);
  };

  const setValueLinks = (ev: FormEvent<HTMLInputElement>) => {
    // Split at "-"
    const index = Number((ev.target as HTMLInputElement).name.split("-")[1]);
    let links = pageLinkInputs;
    links[index] = (ev.target as HTMLInputElement).value;
    setPageLinkInputs(links);
  };

  return (
    <div>
      <h3>Add page</h3>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <fieldset>
          <Input
            label="Page Title"
            type="text"
            name="pageTitle"
            value={pageTitleInput}
            minLength={5}
            maxLength={70}
            placeholder={"Type in the page title"}
            setValue={setPageTitleInput}
          />
          <img id="img" ref={imageUploadRef} alt="Uploaded content" />
          <input
            type="file"
            accept="image/*"
            onChange={(ev) => handleUpload(ev)}
          />
          <button
            onClick={(ev) => {
              ev.preventDefault();
              const count = linksCount + 1;
              const inputs = [...Array(count)];
              setPageLinkInputs(inputs);
              setLinksCount(count);
            }}
          >
            Add link
          </button>
          <button
            onClick={(ev) => {
              ev.preventDefault();
              const count = linksCount - 1;
              const inputs = [...Array(count)];
              setPageLinkInputs(inputs);
              setLinksCount(count);
            }}
          >
            Remove last link
          </button>

          {[...Array(linksCount)].map((item, index) => (
            <Input
              label="Link"
              type="text"
              name={"link-" + index}
              value={pageLinkInputs[index]}
              minLength={5}
              maxLength={70}
              placeholder={"Type in the links"}
              isArrayOfValues={true}
              // @ts-ignore
              setValue={setValueLinks}
            />
          ))}
          <Input
            label="Page Description"
            type="text"
            name="pageDescription"
            value={pageDescriptionInput}
            minLength={5}
            maxLength={70}
            placeholder={"Type in the page description"}
            setValue={setPageTitleInput}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddView;
