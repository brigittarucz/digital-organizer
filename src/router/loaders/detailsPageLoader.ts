import { DataSnapshot } from "firebase/database";
import { LoaderFunctionArgs } from "react-router-dom";
import { getPage } from "services/database/getData";

const detailsPageLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<DataSnapshot | null> => {
  if (params && params.pageId) {
    return await getPage(params.pageId);
  } else {
    return null;
  }
};

export { detailsPageLoader };
