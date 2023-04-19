import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { detailsPageLoader } from "./loaders/detailsPageLoader";
import ErrorPage from "./pages/ErrorPage";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  {
    path: "/page/:pageId",
    element: <DetailsPage />,
    errorElement: <ErrorPage />,
    loader: detailsPageLoader,
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

const RenderedRouterOutput = () => {
  return <Outlet />;
};

export { Router, RenderedRouterOutput };
