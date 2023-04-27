import { ChangeEvent, RefObject } from "react";

const handleUpload = (
  ev: ChangeEvent<HTMLInputElement>,
  imageUploadRef: RefObject<File> | null,
  setImageFile: (x: File | null) => void
) => {
  ev.preventDefault();

  if (!imageUploadRef || !imageUploadRef.current) {
    return;
  }

  if (!ev.target || !(ev.target as unknown as HTMLInputElement).value.length) {
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

export { handleUpload };
