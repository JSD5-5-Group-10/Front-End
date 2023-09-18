import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Dashboard } from "./pages/DashBoard.jsx";
import { Login } from "./pages/login-registration/Login.jsx";
import { StyledEngineProvider } from "@mui/material/styles";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActivityFormPage from "./pages/ActivityForm/ActivityFormPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/ActivityForm",
    element: <ActivityFormPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StyledEngineProvider injectFirst>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </StyledEngineProvider>
);
