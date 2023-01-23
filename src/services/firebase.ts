import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DBURL,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const storage = getStorage(app);

const storageRef = ref(storage, "images/41e753cd733c7cc61892f6754cd00af5.jpg");

// useEffect(() => {
//   getDownloadURL(storageRef)
//     .then((url) => {
//       const img = document.getElementById("myimg");
//       img?.setAttribute("src", url);
//     })
//     .catch((error) => {
//       switch (error.code) {
//         case "storage/object-not-found":
//           console.log("Storage error:", "storage/object-not-found");
//           break;
//         case "storage/unauthorized":
//           console.log("Storage error:", "storage/unauthorized");
//           break;
//         case "storage/canceled":
//           console.log("Storage error:", "storage/canceled");
//           break;
//         case "storage/unknown":
//           console.log("Storage error:", "storage/unknown");
//           break;
//       }
//     });
// }, []);
