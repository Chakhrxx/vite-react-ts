// src/pages/error.tsx
import { Link } from "react-router-dom"; // necessary package
import { ErrorProps } from "@/types/error"; // ErrorProps type for props validation
import Button from "@/components/Button"; // custom button component
import WaterSplashing from "@/assets/images/background.png"; // background image

const ErrorPage: React.FC<ErrorProps> = ({ back = "/" }) => {
  const handleBackClick = () => {
    if (back) {
      window.location.reload(); // Reload the page when the button is clicked
    }
  };
  return (
    <main className="flex h-full relative justify-center items-center z-10">
      <img
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
        src={WaterSplashing}
      />
      <Link to={back}>
        <Button
          className="mx-auto rounded-t-xl !rounded-none !w-[275px] !h-[44px] relative hover:!bg-opacity-100 shadow-tabs tab-button-animation "
          onClick={handleBackClick}
        >
          500 - Internal Server Error
        </Button>
      </Link>
    </main>
  );
};

export default ErrorPage;
