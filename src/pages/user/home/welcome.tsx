// src/pages/home/index.tsx
// necessary package
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // For navigation
import Banner from "@/components/Banner"; // Banner component
import Hashtag from "@/components/Hashtag"; // Hashtag component
import Button from "@/components/Button"; // Button component
import { useLanguageStore } from "@/stores/language";

const WelcomePage = () => {
  const { getText } = useLanguageStore();
  // State management for visibility of elements
  const [isSocialVisible, setIsSocialVisible] = useState(false);
  const [isBallVisible, setIsBallVisible] = useState(false);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);

  // Use effect to handle visibility animations
  useEffect(() => {
    const timers = [
      setTimeout(() => setIsSocialVisible(true), 80),
      setTimeout(() => setIsBallVisible(true), 300),
      setTimeout(() => setIsWelcomeVisible(true), 500),
    ];

    return () => timers.forEach(clearTimeout); // Cleanup timers on unmount
  }, []);

  return (
    <>
      <Banner className="w-[200px]" />
      <div className="flex flex-col items-center justify-center  h-[55%]  relative z-10 border border-white">
        <div className="flex flex-col items-center text-primary uppercase text-4xl">
          <p
            className={`transition-transform duration-1000 ease-in-out transform ${
              isSocialVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            born social
          </p>
          <p
            className={`transition-transform duration-1000 ease-in-out transform ${
              isBallVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            ball
          </p>
        </div>
        <Link
          to={"/sign-up"}
          className={`absolute -bottom-5 transition-transform duration-1000 ease-in-out transform ${
            isWelcomeVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <Button className="rounded-xl w-[160px] hover:!bg-opacity-100 tab-button-animation">
            {getText("welcome") as string}
          </Button>
        </Link>
      </div>
      <Hashtag />
    </>
  );
};

export default WelcomePage;
