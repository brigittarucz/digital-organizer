import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DBURL,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const storage = getStorage(app);

export { database, storage };
