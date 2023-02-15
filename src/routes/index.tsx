import { createBrowserRouter, redirect } from "react-router-dom";
import { getAuth } from "../api/user";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () =>
      await getAuth()
        .then(() => null)
        .catch(() => redirect("/login")),
  },
  {
    path: "/login",
    element: <Auth />,
    loader: async () =>
      await getAuth()
        .then(() => redirect("/"))
        .catch(() => null),
  },
]);
