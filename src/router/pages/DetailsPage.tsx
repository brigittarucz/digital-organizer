import { Link, useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const pageLists = useLoaderData();

  return (
    <>
      <li>
        <Link to={"/"}>Main page</Link>
      </li>
      <h1> Details Page </h1>
    </>
  );
};
export default DetailsPage;
