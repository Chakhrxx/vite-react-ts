// src/pages/home/index.tsx
// necessary package
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // For navigation
import Banner from "@/components/Banner"; // Banner component
import Hashtag from "@/components/Hashtag"; // Hashtag component
import Button from "@/components/Button"; // Button component
import Switch from "@/components/Switch"; // Language switch component
import { useLanguageStore } from "@/stores/language"; // Language management store

const HomePage = () => {
  // retrieve translated text based on keys
  const { getText } = useLanguageStore();
  // State management for visibility of elements
  const [isSwitchVisible, setIsSwitchVisible] = useState(false);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);

  // Use effect to handle visibility animations
  useEffect(() => {
    const timers = [
      setTimeout(() => setIsSwitchVisible(true), 80),
      setTimeout(() => setIsWelcomeVisible(true), 400),
    ];

    return () => timers.forEach(clearTimeout); // Cleanup timers on unmount
  }, []);

  return (
    <>
      <Banner className="w-[200px]" />
      <div className="flex flex-col items-center justify-center  h-[55%]  relative z-10 border border-white">
        <Switch
          className={`transition-transform duration-1000 ease-in-out transform ${
            isSwitchVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        />
        <Link
          to={"/welcome"}
          className={`absolute -bottom-5 transition-transform duration-1000 ease-in-out transform ${
            isWelcomeVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <Button className="rounded-xl w-[160px] hover:!bg-opacity-100 tab-button-animation">
            {getText("home") as string}
          </Button>
        </Link>
      </div>
      <Hashtag />
    </>
  );
};

export default HomePage;
