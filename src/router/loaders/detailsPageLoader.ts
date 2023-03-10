import { LoaderFunctionArgs } from "react-router-dom";
import { getList, getPage } from "services/database/getData";
import { List, Page } from "services/database/models";

interface detailsPageLoaderReturnType {
  resPage: Page | null;
  resListArray: List[] | null[];
}

const detailsPageLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<detailsPageLoaderReturnType | null> => {
  if (params && params.pageId) {
    const resPage = await getPage(params.pageId);
    const resListPromises: Promise<List>[] = [];

    resPage.keysLists.forEach(async (listKey: string) => {
      const resListPromise = getList(listKey);
      resListPromises.push(resListPromise);
    });

    const resListArray = await Promise.all(resListPromises);

    return {
      resPage,
      resListArray,
    };
  } else {
    return null;
  }
};

export { detailsPageLoader };
