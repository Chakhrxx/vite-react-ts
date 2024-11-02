// src/types/auth.ts
import { User } from "./user"; // User type for user information

// Define a type for the access token as a string
export type accessToken = string;

export interface SignUpResponse {
  user: User; // User object containing user information
  accessToken: accessToken; // Access token for authenticated requests
}

// Interface representing the structure of the Sign Up form, extending User properties
export interface SignUpForm extends User {
  title: string; // The title displayed on the form
  btn: string; // The text for the submission button
}
