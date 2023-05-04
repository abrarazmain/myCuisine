import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Navbar from "./components/navbar";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import AuthProvider from "./components/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router}/></AuthProvider>
  </React.StrictMode>
);