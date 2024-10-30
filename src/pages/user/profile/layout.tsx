import { Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <>
      <div className="relative px-8 py-10 h-full">
        <Outlet />
      </div>
    </>
  );
}

export default ProfileLayout;
