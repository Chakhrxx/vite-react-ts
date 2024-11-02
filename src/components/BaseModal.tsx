// src/components/BaseModal.tsx
import classNames from "classnames"; // necessary package
import { ModalProps } from "@/types/modal"; // ModalProps type for prop validation

const BaseModal: React.FC<ModalProps> = ({
  isOpen, // Controls modal visibility
  className, // Additional classes for styling
  onClose, // Function to close the modal
  children, // Content to be displayed inside the modal
}) => {
  // Determine modal classes based on isOpen state
  const modalClasses = isOpen
    ? "fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto "
    : "hidden";

  return (
    <div className={modalClasses}>
      <div
        className="absolute inset-0 bg-transparent backdrop-blur-[2px]"
        onClick={onClose} // Close modal on overlay click
      ></div>
      <div
        className={classNames(
          "bg-white w-11/12 md:max-w-md  mx-auto rounded-xl shadow  shadow-[#353535]/50  z-50  overflow-x-hidden overflow-y-scroll ",
          className // Additional classes passed as props
        )}
      >
        {children} {/* Render modal content */}
      </div>
    </div>
  );
};

export default BaseModal;
