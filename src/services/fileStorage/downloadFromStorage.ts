import { FirebaseError } from "firebase/app";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "services/firebase";
import handleStorageErrors from "./handleStorageErrors";

const downloadFromStorage = async (filename: string) => {
  try {
    const storageRef = ref(storage, filename);
    const url = await getDownloadURL(storageRef);

    return url;
  } catch (err) {
    handleStorageErrors(err as FirebaseError);
    return null;
  }
};

export default downloadFromStorage;
