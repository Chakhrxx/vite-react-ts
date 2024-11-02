// src/constants/signUpSchema.ts
import * as Yup from "yup"; // necessary package
// Define validation schema for name form using Yup
export const nameValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(1, "Name must be at least 1 characters")
    .max(19, "Name must be at most 19 characters"),
});
