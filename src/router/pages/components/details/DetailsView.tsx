import { List, Page } from "services/database/models";
import ListView from "./Components/ListView";
import PageView from "./Components/PageView";

interface Props {
  resListArray: List[];
  resPage: Page;
}

const DetailsView = ({ resListArray, resPage }: Props) => {
  const pageComponent =
    resPage === null ? (
      <p>Error in getting page data</p>
    ) : (
      <PageView resPage={resPage} />
    );

  const listComponent =
    resListArray.length === 0 ? (
      <p>No lists in page</p>
    ) : resListArray[0] === null ? (
      <p>Error in getting list data </p>
    ) : (
      resListArray.map((list, index) => <ListView key={index} list={list} />)
    );

  return (
    <>
      <div>{pageComponent}</div>
      <div>{listComponent}</div>
    </>
  );
};

export default DetailsView;
