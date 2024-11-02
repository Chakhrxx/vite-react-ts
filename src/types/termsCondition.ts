// src/types/termsCondition.ts
import { ModalProps } from "./modal"; // ModalProps type for props validation
// Interface for TermsCondition component props, extending ModalProps
export interface TermsConditionProps extends ModalProps {
  onSubmit?: () => void;
}

export interface TermsConditionState {
  isAgreed: boolean; // Indicates if the user has agreed to the terms
  toggleAgreed: () => void; // Function to toggle the agreement state
}

export interface TermsConditionType {
  description: string; // The description displayed in the modal
  label: string; // The label for agreeing to the Terms and Conditions
  btn: string; // The text for the action button in the modal
}
