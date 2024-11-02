import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/pages/layout";
import HomeLayout from "@/pages/user/home/layout";
import WelcomePage from "@/pages/user/home/welcome";
import HomePage from "@/pages/user/home";
import NotFoundPage from "@/pages/notFound";
import ErrorPage from "@/pages/error";
import SignUpLayout from "@/pages/signUp/layout";
import SignUpPage from "@/pages/signUp";
import StartLayout from "./pages/user/start/layout";
import StartPage from "@/pages/user/start";
import ScenePage from "./pages/user/start/scene";

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/start",
          element: <StartLayout />,
          children: [
            {
              path: "", // This is the default path for /start
              element: <StartPage />,
            },
            {
              path: "scene", // Change to relative path
              element: <ScenePage />,
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
              path: "welcome", // Change to relative path
              element: <WelcomePage />,
            },
          ],
        },
        {
          path: "/sign-up", // Catch-all route for 404 Not Found
          element: <SignUpLayout />,
          children: [
            {
              path: "",
              element: <SignUpPage />,
            },
          ],
        },
        {
          path: "*", // Catch-all route for 404 Not Found
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  { basename: "/" }
);
