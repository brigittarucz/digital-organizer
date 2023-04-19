import { useEffect, useState } from "react";
import { getPages } from "services/database/getData";
import { Page } from "services/database/models";
import HomeCardView from "router/pages/components/home/HomeCardView";
import { SanitizedPage } from "router/pages/components/home/utils/types";

// List page
const sanitizePages = (
  pages: { [index: string]: Page },
  setSanitizedPages: (pages: SanitizedPage[]) => void
) => {
  let sanitizedPages = [];

  for (let key in pages) {
    const page: SanitizedPage = {
      key,
      description: pages[key].description,
      keysLists: pages[key].keysLists,
      images: pages[key].images,
      links: pages[key].links,
      title: pages[key].title,
      dateModified: pages[key].dateModified,
      dateCreated: pages[key].dateCreated,
    };

    sanitizedPages.push(page);
  }

  setSanitizedPages(sanitizedPages);
  console.log(sanitizedPages);
};

const AllView = () => {
  const [pages, setPages] = useState<{ [index: string]: Page } | null>(null);

  const [sanitizedPages, setSanitizedPages] = useState<SanitizedPage[]>([]);

  useEffect(() => {
    getPages(setPages);
  }, []);

  useEffect(() => {
    if (pages) {
      sanitizePages(pages, setSanitizedPages);
    }
  }, [pages]);

  return (
    <>
      {sanitizedPages.map((page) => (
        <div key={page.key}>
          <HomeCardView page={page} />
        </div>
      ))}
    </>
  );
};

export default AllView;
