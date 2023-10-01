import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Dashboard } from "./pages/DashBoard.jsx";
import { Login } from "./pages/login-registration/Login.jsx";
import { StyledEngineProvider } from "@mui/material/styles";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActivityFormPage from "./pages/ActivityForm/ActivityFormPage.jsx";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage.jsx";
import { ProfilePage } from "./pages/ProfilePages/ProfilePage.jsx";
import { AllExercisePage } from "./pages/ExercisePage.jsx/allExercisePage.jsx";
import { RunningPage } from "./pages/ExercisePage.jsx/RunningPage.jsx";
import { AerobicsPage } from "./pages/ExercisePage.jsx/AerobicsPage.jsx";
import { ThaiBoxingPage } from "./pages/ExercisePage.jsx/ThaiBoxingPage.jsx";
import { WeightPage } from "./pages/ExercisePage.jsx/WeightPage.jsx";
import { YogaPage } from "./pages/ExercisePage.jsx/yogaPage.jsx";
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
  {
    path: "/Registration",
    element: <RegistrationPage />,
  },  
  {
    path: "/profilePage",
    element: <ProfilePage />,
  },
  {
    path: "/allExercise",
    element: <AllExercisePage />,
  },
  {
    path: "/runningPage",
    element: <RunningPage />,
  },
  {
    path: "/aerobicsPage",
    element: <AerobicsPage />,
  },  {
    path: "/thaiBoxingPage",
    element: <ThaiBoxingPage />,
  },
  {path: "/weightPage",
  element: <WeightPage />,
  },
  {path: "/yogaPage",
  element: <YogaPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StyledEngineProvider injectFirst>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </StyledEngineProvider>
);
