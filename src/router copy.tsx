import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/layout";
import HomePage from "./pages/user/home";
import HomeLayout from "./pages/user/home/layout";
import HomeStatePage from "./pages/user/home/state";
import ProfileLayout from "./pages/user/profile/layout";
import ProfilePage from "./pages/user/profile";

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          // element: <ProtectedLayout />,
          // loader: protectedRouteLoader,
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
          ],
        },
      ],
    },
  ],
  { basename: "/" }
);
