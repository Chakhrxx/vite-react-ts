// src/types/modal.ts
import { ReactNode } from "react"; // necessary package
import { className } from "./className"; // className type definition

export interface ModalProps {
  isOpen: boolean; // Indicates if the modal is open
  onClose: () => void; // Function to call when closing the modal
  children?: ReactNode; // Optional children nodes to be rendered inside the modal
  className?: className; // Optional className for additional styling
}
