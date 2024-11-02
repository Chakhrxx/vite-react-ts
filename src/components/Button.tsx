// src/components/Button.tsx
import classNames from "classnames"; // necessary package
import React from "react";
// ButtonProps type for props validation
import { ButtonProps } from "@/types/button";
// styles for button variants from constants
import { buttonVariantClassNames } from "@/constants/button";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    // Determine the button variant, defaulting to 'primary' if not specified
    const variant = props.variant ?? "primary";
    // Get the corresponding CSS class names for the variant
    const buttonStyle = buttonVariantClassNames[variant];
    return (
      <button
        ref={ref}
        {...props}
        className={classNames(
          "block min-w-24 py-2 rounded uppercase font-semibold transition-all duration-300 disabled:bg-opacity-50 disabled:text-secondary]/50",
          buttonStyle,
          props.className
        )}
      >
        {props.children} {/* Render the button's children (text or icons) */}
      </button>
    );
  }
);

export default Button;
