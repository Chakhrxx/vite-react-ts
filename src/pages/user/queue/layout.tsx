// src/pages/queue/layout.tsx
import { Outlet } from "react-router-dom"; // Outlet for rendering nested routes
// import WaterSplashing from "@/assets/images/background.png"; // background image
const HomeLayout = () => {
  return (
    <>
      <div className="relative p-10 h-full bg-black">
        {/* <img
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
          src={WaterSplashing}
        /> */}
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;