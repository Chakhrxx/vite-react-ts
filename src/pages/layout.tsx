// src/pages/layout
import { Outlet } from "react-router-dom"; // Outlet for rendering nested routes

const RootLayout = () => {
  return (
    <main className="max-w-md mx-auto h-dynamic-screen">
      <Outlet />
    </main>
  );
};

export default RootLayout;
