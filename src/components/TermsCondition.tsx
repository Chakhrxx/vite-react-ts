// src/components/TermsCondition.tsx
// TermsConditionProps type for props validation
import {
  TermsConditionProps,
  TermsConditionType,
} from "@/types/termsCondition";
// Zustand store for terms condition state
import { useTermsConditionStore } from "@/stores/termsCondition";
import BaseModal from "./BaseModal"; // Modal base component
import Button from "./Button"; // Button component
import { useLanguageStore } from "@/stores/language";
import { useNavigate } from "react-router-dom";

const TermsCondition: React.FC<TermsConditionProps> = ({
  isOpen = true, // Default to open
  onClose, // Function to close the modal
  onSubmit,
}) => {
  // retrieve translated text based on keys
  const { getText } = useLanguageStore();
  // Accessing agreed state and toggle function from Zustand store
  const { isAgreed, toggleAgreed } = useTermsConditionStore();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (onSubmit) {
      await onSubmit; // Call sign-up function
      navigate("/start"); // Redirect on success
    }
    toggleAgreed();
  };

  // Destructure the sign-up form labels and title from the translation, providing default values
  const {
    description = "",
    label = "",
    btn: actionLable = "",
  } = (getText("termsCondition") as TermsConditionType) || {};

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="modal-body flex flex-col justify-center p-8 space-y-5">
        <h1 className="font-bold text-[20px] text-center">PDPA</h1>
        <div className="text-left text-[11px]">
          <p className="indent-6">{description.split("\n")[0].trim()}</p>
          <p className="indent-6 mt-5">{description.split("\n")[1].trim()}</p>

          <div className="flex justify-center space-x-2 my-8">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={handleSubmit}
                className="hidden"
              />
              {/* Custom checkbox styling */}
              <span className="checkmark"></span>
            </label>

            <label className="font-medium text-secondary">{label}</label>
          </div>

          <Button
            className="mx-auto !rounded-full !capitalize"
            onClick={onClose}
            disabled={!isAgreed}
          >
            {actionLable}
          </Button>
        </div>
      </div>
    </BaseModal>
  );
};

export default TermsCondition;
