import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../Pages/HomePage";
import { MainLayout } from "../Layouts/MainLayout";
import UserLogin from "../Pages/LoginPage/UserLogin";
import RegisterLogin from "../Pages/RegisterPage/UserRegister";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "/register",
    element: <RegisterLogin />,
  },
  {
    path: "/products",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "tasks",
        element: <h1>Tasks</h1>,
      },
      {
        path: "projects",
        element: <h1>Projects</h1>,
      },
      {
        path: "Exit",
        element: <h1>Exit</h1>,
      },
    ],
  },
  {
    path: "/contact",
    element: <h1>Contact</h1>,
  },
]);
