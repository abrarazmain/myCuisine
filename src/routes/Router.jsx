import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import Register from "../components/Register";
import Login from "../components/Login";
import ChefDetails from "../components/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    ErrorBoundary: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/chefs"),
      },
      {
        path: "chefs/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params}`),
      },

      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
  ,
]);

export default router;
