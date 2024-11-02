// src/pages/start/index.tsx
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup"; // Yup resolver for form validation
import { useForm, Controller } from "react-hook-form"; // Hook for form management
// Import components
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Hashtag from "@/components/Hashtag";
import { nameValidationSchema } from "@/constants/nameSchema"; // Validation schema for user name input from constants
import { useLanguageStore } from "@/stores/language"; // Language management store
import { StartForm } from "@/types/start"; // Type definition for the start form
import { useNameStore } from "@/stores/name"; // Import the Zustand store
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();
  // Set up form handling with react-hook-form
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur", // Validate on blur
    resolver: yupResolver(nameValidationSchema), // Use yup for validation
    defaultValues: {
      name: "",
    },
  });

  // retrieve translated text based on keys
  const { getText } = useLanguageStore();
  const { setName } = useNameStore(); // Destructure setName from the store

  // Destructure the sign-up form labels and title from the translation, providing default values
  const { title = "", btn: btnLabel = "" } =
    (getText("start") as StartForm) || {};

  // Watch the name field value
  const nameValue = watch("name");

  // State management for form visibility and terms conditions
  const [isContextVisible, setIsContextVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Use effect to handle visibility animations
  useEffect(() => {
    const timers = [
      setTimeout(() => setIsContextVisible(true), 80),
      setTimeout(() => setIsFormVisible(true), 300),
      setTimeout(() => setIsNextVisible(true), 800),
    ];
    return () => timers.forEach(clearTimeout); // Clean up timers on unmount
  }, []);

  // Validate button state whenever the name changes
  useEffect(() => {
    const validateButton = async () => {
      try {
        await nameValidationSchema.validate({ name: nameValue });
        setIsButtonDisabled(false); // Valid input, enable button
      } catch {
        setIsButtonDisabled(true); // Invalid input, disable button
      }
    };

    validateButton(); // Run validation
  }, [nameValue]); // Run effect on name change

  // Form submission handler
  const onSubmit = async (data: { name: string }) => {
    if (data?.name.trim()) {
      setName(data?.name);
      navigate("/start/scene");
    }
  };

  // If there's an error, show the error page
  return (
    <>
      <Banner className="w-[200px]" />
      <div
        className={`flex flex-col relative items-center justify-center z-10 mt-8 space-y-8`}
      >
        <p
          className="relative text-white text-[30px] space-y-0"
          style={{ overflowWrap: "break-word", wordBreak: "break-all" }}
        >
          <span className="block px-2">{nameValue}</span>
          {nameValue.length > 0 && (
            <span className="block border-b-[3px] border-dashed border-white mt-1 w-full" />
          )}
        </p>

        <div
          className={`text-primary uppercase text-center text-[38px] -space-y-4 transition-transform duration-1000 ease-in-out transform ${
            isContextVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <p>was</p>
          <p>born social</p>
        </div>

        <div
          className={`w-full flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out transform ${
            isFormVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <form
            className={`bg-primary px-5  pt-3 rounded-lg w-full ${
              errors.name ? "pb-4" : "pb-6"
            }`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col space-y-2 font-semibold justify-center items-center">
              <label htmlFor="name" className="uppercase text-[20px]">
                {title}
              </label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    className="w-full border border-[#7E7E7E]/50 rounded-md placeholder:text-[#7E7E7E]/50 placeholder:font-light placeholder:text-center placeholder:capitalize px-3 py-[6px] text-center flex items-center outline-primary"
                    type="text"
                    maxLength={19}
                    // placeholder={title}
                    {...field}
                  />
                )}
              />
              {errors.name && (
                <p className="font-semibold text-[10px]">
                  {errors.name.message}
                </p>
              )}
            </div>
          </form>
        </div>
        <Button
          className={`rounded-xl !mt-8 w-[160px] hover:!bg-opacity-100 transition-transform duration-1000 ease-in-out transform ${
            isNextVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }
          ${
            isButtonDisabled
              ? "disabled:!bg-opacity-50"
              : "tab-button-animation"
          }`}
          type="submit"
          onClick={() => handleSubmit(onSubmit)()}
          disabled={isButtonDisabled}
        >
          {btnLabel}
        </Button>
      </div>
      <Hashtag />
    </>
  );
};

export default StartPage;
