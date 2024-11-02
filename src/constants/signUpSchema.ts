// src/constants/signUpSchema.ts
import * as Yup from "yup"; // necessary package
// Define validation schema for sign-up form using Yup
export const signUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name must be at most 30 characters"),
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^[\w-.]+@[\w-]+\.[a-z]{2,}$/, // Regex for validating email format
      "Email must contain a valid format like xx@xx.xx"
    ),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must be digits") // Phone number must consist of digits only
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits"),
});
