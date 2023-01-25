import { FirebaseError } from "firebase/app";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "services/firebase";
import { v4 as uuidv4 } from "uuid";
import handleStorageErrors from "./handleStorageErrors";

const uploadToStorage = async (file: File) => {
  try {
    const uniqueIdFile = uuidv4();
    const mimeType = file.type;
    const extension = mimeType.split("/")[1];
    const storageRef = ref(storage, `images/${uniqueIdFile}.${extension}`);

    const res = await uploadBytes(storageRef, file);
    return res;
  } catch (err) {
    handleStorageErrors(err as FirebaseError);
    return null;
  }
};

export default uploadToStorage;
