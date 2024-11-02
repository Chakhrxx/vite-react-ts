// src/types/button.ts
// Interface to specify different button variants
export interface ButtonVariant {
  variant:
    | "primary" // Main action button
    | "secondary" // Secondary action button
    | "danger" // Indicates a dangerous action
    | "success" // Success indication button
    | "warning" // Warning indication button
    | "info" // Informational button
    | "light" // Light-themed button
    | "violet"; // Violet-themed button
}

// Interface for Button component button props, extending standard button attributes
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant["variant"]; // Optional variant prop for styling
}
