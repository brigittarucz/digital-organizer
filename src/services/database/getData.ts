import { get, onValue, ref } from "firebase/database";
import { database } from "services/firebase";
import { List, Page } from "./models";

const getLists = (setLists: (lists: { [index: string]: List }) => void) => {
  const listsRef = ref(database, "lists/");
  return onValue(
    listsRef,
    (snapshot) => {
      const data = snapshot.val();
      setLists(data);
    },
    (err) => {
      console.log(err);
    }
  );
};

const getList = async (key: string) => {
  const listRef = ref(database, `lists/${key}`);

  try {
    const res = await get(listRef);
    if (res.exists()) {
      return res.val();
    } else {
      console.log("Item does not exist");
      return null;
    }
  } catch (err) {
    console.log("Error in retrieving list");
    return null;
  }
};

const getPage = async (key: string) => {
  const pageRef = ref(database, `pages/${key}`);

  try {
    const res = await get(pageRef);
    if (res.exists()) {
      return res.val();
    } else {
      console.log("Item does not exist");
      return null;
    }
  } catch (err) {
    console.log("Error in retrieving page");
    return null;
  }
};

const getPages = (setPages: (pages: { [index: string]: Page }) => void) => {
  try {
    const pagesRef = ref(database, "pages/");
    onValue(pagesRef, (snapshot) => {
      const data = snapshot.val();
      setPages(data);
    });
  } catch (err) {
    console.log(err);
  }
};

export { getLists, getPages, getList, getPage };
