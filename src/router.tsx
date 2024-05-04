import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import DashboardLayout from "./layouts/DashboardLayout";
import BooksPage from "./pages/Books";
import AuthLayout from "./layouts/AuthLayout";
import CreateBook from "./pages/CreateBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/dashboard/home"} />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "books", element: <BooksPage /> },
      { path: "books/create", element: <CreateBook /> },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
