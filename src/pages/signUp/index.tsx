// src/pages/SignUp/index.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Navigation hook for routing
import { yupResolver } from "@hookform/resolvers/yup"; // Yup resolver for form validation
import { useForm, Controller } from "react-hook-form"; // Hook for form management
// Import components
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import TermsCondition from "@/components/TermsCondition";
// Error handling component
import ErrorPage from "@/pages/error";
// Authentication hook
import { useAuth } from "@/hooks/useAuth";
// User type and Sign up form type definition
import { User } from "@/types/user";
import { SignUpForm } from "@/types/auth";
// Terms && condition store
import { useTermsConditionStore } from "@/stores/termsCondition";
// Sign up validation schema
import { signUpValidationSchema } from "@/constants/signUpSchema";
// Language management store
import { useLanguageStore } from "@/stores/language";

const SignUpPage = () => {
  // retrieve translated text based on keys
  const { getText } = useLanguageStore();

  // Destructure the sign-up form labels and title from the translation, providing default values
  const {
    title: formTitle = "",
    name: nameLabel = "",
    email: emailLabel = "",
    phone: phoneLabel = "",
    btn: btnLabel = "",
  } = (getText("signUp") as SignUpForm) || {};

  const navigate = useNavigate(); // Hook for navigation
  // Set up form handling with react-hook-form
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur", // Validate on blur
    resolver: yupResolver(signUpValidationSchema), // Use yup for validation
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // Watch the name field value
  const nameValue = watch("name");
  const emailValue = watch("email");
  const phoneValue = watch("phone");

  // State management for form visibility and terms conditions
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(false);
  const [isTermsConditionOpen, setIsTermsConditionOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [userdata, setUserData] = useState<User | null>(null);

  // Get terms agreement state
  const { isAgreed } = useTermsConditionStore();

  // Use authentication hook for sign-up
  const { signUp, error } = useAuth();

  // Use effect to handle visibility animations
  useEffect(() => {
    const timers = [
      setTimeout(() => setIsFormVisible(true), 80),
      setTimeout(() => setIsNextVisible(true), 700),
    ];
    return () => timers.forEach(clearTimeout); // Clean up timers on unmount
  }, []);

  // Form submission handler
  const onSubmit = async (data: User) => {
    if (!isAgreed) {
      setIsTermsConditionOpen(true); // Open terms condition if not agreed
      setUserData(data);
    } else {
      await signUp(data); // Call sign-up function
      navigate("/start"); // Redirect on success
    }
  };

  // Validate button state whenever the name changes
  useEffect(() => {
    const validateButton = async () => {
      try {
        await signUpValidationSchema.validate({
          name: nameValue,
          email: emailValue,
          phone: phoneValue,
        });
        setIsButtonDisabled(false); // Valid input, enable button
      } catch {
        setIsButtonDisabled(true); // Invalid input, disable button
      }
    };

    validateButton(); // Run validation
  }, [nameValue, emailValue, phoneValue]); // Run effect on name change

  // If there's an error, show the error page
  if (error) {
    return <ErrorPage back={"/sign-up"} />;
  } else
    return (
      <>
        <div
          className={`flex flex-col relative items-center justify-center z-10 my-10  transition-transform duration-1000 ease-in-out transform ${
            isFormVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <div className="w-full flex flex-col items-center justify-center">
            <Banner className="w-[140px]" />
            <form
              className="signup-form bg-white px-8 pb-8 pt-8 -mt-[64px] space-y-2 rounded-2xl w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="text-center w-full pt-8 text-[28px] font-medium">
                {formTitle}
              </h1>
              <div className="space-y-1">
                <label htmlFor="name" className="capitalize">
                  {nameLabel}
                </label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      className={`w-full border border-[#7E7E7E]/50 rounded-md placeholder:text-[#7E7E7E]/50 placeholder:font-light placeholder:capitalize px-3 py-[6px] flex items-center outline-primary focus:bg-primary ${
                        nameValue ? "bg-primary" : ""
                      }`}
                      type="text"
                      placeholder={nameLabel}
                      {...field}
                    />
                  )}
                />
                {errors.name && (
                  <p className="text-red-500 font-semibold text-[10px]">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="capitalize">
                  {emailLabel}
                </label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      className={`w-full border border-[#7E7E7E]/50 rounded-md placeholder:text-[#7E7E7E]/50 placeholder:font-light placeholder:capitalize px-3 py-[6px] flex items-center outline-primary focus:bg-primary ${
                        emailValue ? "bg-primary" : ""
                      }`}
                      placeholder={emailLabel}
                      type="email"
                      {...field}
                    />
                  )}
                />
                {errors.email && (
                  <p className=" text-red-500 font-semibold text-[10px]">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="capitalize">
                  {phoneLabel}
                </label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <input
                      className={`w-full border border-[#7E7E7E]/50 rounded-md placeholder:text-[#7E7E7E]/50 placeholder:font-light placeholder:capitalize px-3 py-[6px] flex items-center outline-primary focus:bg-primary ${
                        phoneValue ? "bg-primary" : ""
                      }`}
                      type="text"
                      placeholder={phoneLabel}
                      {...field}
                    />
                  )}
                />
                {errors.phone && (
                  <div className=" text-red-500 font-semibold text-[10px]">
                    {errors.phone.message}
                  </div>
                )}
              </div>
            </form>
          </div>
          <Button
            className={`rounded-xl mt-16 w-[160px] hover:!bg-opacity-100 transition-transform duration-1000 ease-in-out transform 
              ${isNextVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
              ${
                isButtonDisabled
                  ? "disabled:!bg-opacity-50"
                  : "tab-button-animation"
              }
              `}
            type="submit"
            onClick={() => handleSubmit(onSubmit)()}
            disabled={isButtonDisabled}
          >
            {btnLabel}
          </Button>
        </div>

        <TermsCondition
          isOpen={isTermsConditionOpen}
          onSubmit={() => signUp(userdata as User)}
          onClose={() => setIsTermsConditionOpen(false)}
        />
      </>
    );
};

export default SignUpPage;
