import Button from "router/utils/Button";
import Input from "router/utils/Input";
import editIconOutline from "assets/graphics/icons/edit-icon-outline.svg";
import editIconFilled from "assets/graphics/icons/edit-icon-filled.svg";
import { ChangeEvent, FormEvent, MouseEvent, RefObject, useState } from "react";
import InputFile from "router/utils/InputFile";

interface Props {
  linksCount: number;
  setLinksCount: (x: number) => void;
  pageTitleInput: string;
  setPageTitleInput: (x: string) => void;
  pageLinksInputs: (string | undefined)[];
  setPageLinksInputs: (x: (string | undefined)[]) => void;
  pageDescriptionInput: string;
  setPageDescriptionInput: (x: string) => void;
  handleUpload: (ev: ChangeEvent<HTMLInputElement>) => void;
  imageUploadRef: RefObject<HTMLImageElement>;
}

const EditPageForm = ({
  linksCount,
  setLinksCount,
  pageTitleInput,
  setPageTitleInput,
  pageLinksInputs,
  setPageLinksInputs,
  pageDescriptionInput,
  setPageDescriptionInput,
  handleUpload,
  imageUploadRef,
}: Props) => {
  const [pageTitleSelected, isPageTitleSelected] = useState(false);

  // TODO: Add links instead of input field

  const changeSelected = () => {
    isPageTitleSelected(!pageTitleSelected);
  };

  const setValuePoints = (ev: FormEvent<HTMLInputElement> | string) => {
    if (typeof ev === "string") {
      return;
    }
    // Split at "-"
    const index = Number((ev.target as HTMLInputElement).name.split("-")[1]);

    let links = pageLinksInputs;
    links[index] = (ev.target as HTMLInputElement).value;
    setPageLinksInputs(links);
  };

  return (
    <>
      <Input
        label="Page Title"
        type="text"
        name="pageTitle"
        value={pageTitleInput}
        minLength={5}
        maxLength={70}
        placeholder={"Type in the page title"}
        setValue={setPageTitleInput}
        styleInput={pageTitleSelected ? "shapeshifter--edit" : "shapeshifter"}
      />
      <Button
        type="icon-generic"
        onClick={changeSelected}
        selected={pageTitleSelected}
        iconSelectedTrue={editIconFilled}
        iconSelectedFalse={editIconOutline}
      />
      <Input
        label="Page Description"
        type="text"
        name="pageDescription"
        value={pageDescriptionInput}
        minLength={5}
        maxLength={70}
        placeholder={"Type in the page description"}
        setValue={setPageDescriptionInput}
      />

      <InputFile
        imageUploadRef={imageUploadRef}
        onChange={(ev) => handleUpload(ev)}
        buttonTitle={"Add Page Image"}
      />
      <>
        {[...Array(linksCount)].map((item, index) => (
          <div key={index}>
            <h6>Link {index + 1}</h6>
            <Input
              label="Link"
              type="text"
              name={"point-" + index}
              value={pageLinksInputs[index]}
              minLength={5}
              maxLength={70}
              placeholder={"Link "}
              isArrayOfValues={true}
              setValue={setValuePoints}
            />
          </div>
        ))}
      </>
      <div className="add_form-add_button">
        <Button
          onClick={(ev: MouseEvent<HTMLElement>) => {
            ev.preventDefault();
            const count = linksCount + 1;

            // Check if either one of them has values other than undefined
            let hasValues = 0;

            for (let i = 0; i < pageLinksInputs.length; i++) {
              if (pageLinksInputs[i] !== undefined) {
                hasValues = 1;
                break;
              }
            }

            // If not, create a new inputs array
            if (!hasValues) {
              let inputs = [...Array(count)];
              setPageLinksInputs(inputs);
            }

            if (hasValues) {
              const links = pageLinksInputs;
              links.push(undefined);
              setPageLinksInputs(links);
            }

            setLinksCount(count);
          }}
          type={"filled-tonal"}
          title={"Add Link"}
        />
      </div>
      <div className="add_form-remove_button">
        <Button
          type={"outline"}
          onClick={(ev: MouseEvent<HTMLElement>) => {
            ev.preventDefault();
            const count = linksCount - 1;

            // Check if either one of them has values other than undefined
            let hasValues = 0;

            for (let i = 0; i < pageLinksInputs.length; i++) {
              if (pageLinksInputs[i] !== undefined) {
                hasValues = 1;
                return;
              }
            }

            // If not, create a new inputs array
            if (!hasValues) {
              let inputs = [...Array(count)];
              setPageLinksInputs(inputs);
            }

            if (hasValues) {
              const links = pageLinksInputs;
              links.pop();
              setPageLinksInputs(links);
            }

            setLinksCount(count);
          }}
          title={"Remove Link"}
        />
      </div>
    </>
  );
};

export default EditPageForm;
