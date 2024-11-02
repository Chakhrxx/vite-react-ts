// src/pages/notFound.tsx
import { Link } from "react-router-dom"; // necessary package
import Button from "@/components/Button"; // custom Button component
import WaterSplashing from "@/assets/images/background.png"; // background image

const NotFoundPage = () => {
  return (
    <>
      <main className="flex h-full w-full relative justify-center items-center z-10">
        <img
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
          src={WaterSplashing}
        />
        <Link to={"/"}>
          <Button className="mx-auto rounded-t-xl !rounded-none !w-[275px] !h-[44px] relative hover:!bg-opacity-100 shadow-tabs tab-button-animation ">
            404 - Page Not Found
          </Button>
        </Link>
      </main>
    </>
  );
};

export default NotFoundPage;
