import { ref, remove, update } from "firebase/database";
import { database } from "services/firebase";

const deleteList = async (key: string) => {
  try {
    await remove(ref(database, `lists/${key}`));
  } catch (err) {
    console.log(err);
  }
};

const deletePage = async (pageKey: string, listsKeys: string[]) => {
  try {
    const updates: { [str: string]: null } = {};
    updates[`/pages/${pageKey}`] = null;
    listsKeys.forEach((listKey) => {
      updates[`/lists/${listKey}`] = null;
    });

    await update(ref(database), updates);
  } catch (err) {
    console.log(err);
  }
};

export { deleteList, deletePage };
