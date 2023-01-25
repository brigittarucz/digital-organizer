import { onValue, ref } from "firebase/database";
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

export { getLists, getPages };
