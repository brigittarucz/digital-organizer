import { useLoaderData } from "react-router-dom";
import { List, Page } from "services/database/models";
import DetailsView from "./components/details/DetailsView";
import NavView from "./components/nav/NavView";
interface DetailsData {
  resListArray: List[];
  resPage: Page;
}

const DetailsPage = () => {
  const data = useLoaderData() as DetailsData;

  return (
    <>
      <NavView />
      <h1> Details Page </h1>
      <DetailsView resListArray={data.resListArray} resPage={data.resPage} />
    </>
  );
};
export default DetailsPage;
