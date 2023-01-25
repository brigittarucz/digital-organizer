interface FirebaseError extends Error {
  code: string;
}

const handleStorageErrors = (err: FirebaseError) => {
  switch (err.code) {
    case "storage/object-not-found":
      console.log("Object not found");
      break;
    case "storage/quota-exceeded":
      console.log("Quota exceeded");
      break;
    case "storage/unauthorized":
      console.log("Unauthorized error");
      break;
    default:
      console.log("Unknown error");
  }
};

export default handleStorageErrors;
