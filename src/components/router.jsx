import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import NavBar from "./navbar";
import ErrorPage from "./errorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "profile/:name",
      element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;