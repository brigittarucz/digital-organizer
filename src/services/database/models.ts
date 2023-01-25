// the id is the key

interface Point {
  additionalInformation: string;
  checked: boolean;
  description: string;
  images: string[]; // additional information images
}

interface List {
  points: Point[];
  title: string;
}

interface Page {
  description: string;
  keysLists: string[];
  images: string[]; // page cover images
  links: string[];
  title: string;
}

export type { List, Page };
