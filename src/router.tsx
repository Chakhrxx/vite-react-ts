import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/layout";
import HomePage from "./pages/user/home";
import HomeLayout from "./pages/user/home/layout";
import HomeStatePage from "./pages/user/home/state";
import ProfileLayout from "./pages/user/profile/layout";
import ProfilePage from "./pages/user/profile";
import NotFoundPage from "./pages/notFound";
import ErrorPage from "./pages/error";

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          children: [
            {
              path: "/profile",
              element: <ProfileLayout />,
              children: [
                {
                  path: "",
                  element: <ProfilePage />,
                },
              ],
            },
          ],
        },
        {
          path: "/",
          element: <HomeLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "/state",
              element: <HomeStatePage state="Hello world!" />,
            },
            {
              path: "*", // Catch-all route for 404 Not Found
              element: <NotFoundPage />,
            },
          ],
        },
      ],
    },
  ],
  { basename: "/" }
);
