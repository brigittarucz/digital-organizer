import { useEffect, useState } from "react";
import { getPages } from "services/database/getData";
import { Page } from "services/database/models";

interface SanitizedPage {
  key: string;
  description: string;
  keysLists: string[];
  images: string[];
  links: string[];
  title: string;
}

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
    };

    sanitizedPages.push(page);
  }

  setSanitizedPages(sanitizedPages);
  // console.log(sanitizedPages);
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
          <p>{page.title}</p>
        </div>
      ))}
    </>
  );
};

export default AllView;
