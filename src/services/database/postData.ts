import { child, push, ref, set } from "firebase/database";
import { database } from "services/firebase";
import { List, Page } from "./models";

const postList = async ({ points, title }: List) => {
  try {
    const commonKey = push(child(ref(database), "lists")).key;
    const listsRef = ref(database, `lists/${commonKey}`);

    return await set(listsRef, {
      points,
      title,
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};

const postPage = async ({
  description,
  keysLists,
  images,
  links,
  title,
}: Page) => {
  try {
    const commonKey = push(child(ref(database), "pages")).key;
    const pagesRef = ref(database, `pages/${commonKey}`);

    return await set(pagesRef, {
      description,
      keysLists,
      images,
      links,
      title,
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};

export { postList, postPage };
