import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "./errorpage";
import Product from "./product"

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
        path: "/:name",
        element: <App />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;