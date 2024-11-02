import { useLanguageStore } from "@/stores/language"; // Zustand store for language state
import classNames from "classnames";
import { SwitchProps } from "@/types/switch";

const Switch: React.FC<SwitchProps> = ({ className }) => {
  const { selectedLanguage, toggleLanguage } = useLanguageStore();

  return (
    <>
      <div
        className={classNames(
          "flex w-full text-[50px] justify-center items-center font-extralight text-white z-50",
          className // Additional classes from props
        )}
        onClick={toggleLanguage}
      >
        <div
          className={`px-[24px] h-[14px] flex items-center cursor-pointer  ${
            selectedLanguage === "TH" ? "text-primary font-normal" : ""
          }`}
        >
          TH
        </div>
        <div className="bg-[#808080] h-[40px] w-[4px]"></div>
        <div
          className={`px-[24px] h-[14px] flex items-center cursor-pointer ${
            selectedLanguage === "EN" ? "text-primary font-normal" : ""
          }`}
        >
          EN
        </div>
      </div>
    </>
  );
};

export default Switch;
