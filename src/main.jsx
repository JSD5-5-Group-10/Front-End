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
import { ForgotPassword } from "./pages/login-registration/ForgotPassword.jsx";
import { ResetPassword } from "./pages/login-registration/ResetPassword.jsx";
import { store } from "./redux/store";
import { Provider } from "react-redux";

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
  },
  {
    path: "/thaiBoxingPage",
    element: <ThaiBoxingPage />,
  },
  { path: "/weightPage", element: <WeightPage /> },
  { path: "/yogaPage", element: <YogaPage /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset_password/:token", element: <ResetPassword /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </StyledEngineProvider>
  </Provider>
);
