import { deleteObject, ref } from "firebase/storage";
import { storage } from "services/firebase";

const deleteFromStorage = async (filename: string) => {
  try {
    const storageRef = ref(storage, `images/${filename}`);

    const res = await deleteObject(storageRef);
    return res;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default deleteFromStorage;
