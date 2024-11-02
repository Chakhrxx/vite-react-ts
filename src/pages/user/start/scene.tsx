// src/pages/start/index.tsx
import { useEffect, useState } from "react";
// Import components
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import { useLanguageStore } from "@/stores/language"; // Language management store
import { ScenePageType } from "@/types/scene"; // Type definition for the scene page type

import { flavors } from "@/constants/flavors";
import Avatar from "@/components/Avatar";

import Backdrop from "@/assets/svg/backdrop.svg";
import { useNameStore } from "@/stores/name";

const ScenePage = () => {
  const [selectedFlavor, setSelectedFlavor] = useState("");

  // retrieve translated text based on keys
  const { getText } = useLanguageStore();
  const { name } = useNameStore();

  // Destructure the sign-up form labels and title from the translation, providing default values
  const { title = "", btn: btnLabel = "" } =
    (getText("scene") as ScenePageType) || {};

  // State management for form visibility and terms conditions
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubTitleVisible, setIsSubTitleVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(false);

  // Use effect to handle visibility animations
  useEffect(() => {
    const timers = [
      setTimeout(() => setIsTitleVisible(true), 80),
      setTimeout(() => setIsSubTitleVisible(true), 300),
      setTimeout(() => setIsNextVisible(true), 700),
    ];
    return () => timers.forEach(clearTimeout); // Clean up timers on unmount
  }, []);

  const handleSelectFlavor = (flavor: string) => {
    setSelectedFlavor(flavor);
    console.log("scene", flavor);
    console.log("name", name);
  };

  // If there's an error, show the error page
  return (
    <>
      <Banner className="w-[200px]" />

      <div
        className={`flex flex-col relative items-center justify-center z-10 space-y-8`}
      >
        <div
          className={`flex flex-col -space-y-1 text-primary text-[20px] text-center`}
        >
          <p
            className={`transition-transform duration-1000 ease-in-out transform ${
              isTitleVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            {title.split("\n")[0].trim()}
          </p>
          <p
            className={`transition-transform duration-1000 ease-in-out transform ${
              isSubTitleVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            // className="text-primary text-[20px] text-center"
          >
            {title.split("\n")[1].trim()}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          {flavors.map((flavor, index) => (
            <div
              key={index}
              className={`flex flex-col items-center relative cursor-pointer ${
                selectedFlavor === flavor.flavor
                  ? "text-primary"
                  : selectedFlavor === ""
                  ? "text-white opacity-100"
                  : "text-white opacity-60"
              }`}
              onClick={() => handleSelectFlavor(flavor.flavor)}
            >
              <p>{flavor.flavor}</p>
              <Avatar
                url={flavor.image}
                className="!border-none !w-[100px] !h-auto !z-50 !relative !drop-shadow-lg" // Ensure Avatar is on top
              />
              {selectedFlavor === flavor.flavor && (
                <img
                  src={Backdrop}
                  alt="Backdrop"
                  className="absolute w-[140px] h-auto drop-shadow-lg" // Centered under Avatar
                />
              )}
            </div>
          ))}
        </div>

        <Button
          className={`rounded-xl !mt-8 w-[160px] hover:!bg-opacity-100 transition-transform duration-1000 ease-in-out transform ${
            isNextVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }
       `}
          type="button"
        >
          {btnLabel}
        </Button>
      </div>
    </>
  );
};

export default ScenePage;
