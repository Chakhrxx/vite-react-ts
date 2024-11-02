// src/services/authService.ts
import { axiosInstance } from "@/libs/axios"; // axios instance for API calls
import { SignUpResponse } from "@/types/auth"; // sign upp response type definition
import { User } from "@/types/user"; // User type definition

export const authService = {
  // Sign up a new user with provided information
  signUp: (data: User): Promise<SignUpResponse> => {
    return axiosInstance
      .post<SignUpResponse>("/auth/sign-up", data)
      .then((response) => response.data) // Return the response data
      .catch((error) => {
        console.error("Error during sign up:", error); // Log the error
        throw error; // Re-throw the error for further handling
      });
  },
  signOut: () => {
    return axiosInstance
      .post("/auth/sign-out")
      .then(() => console.log("Successfully signed out"))
      .catch((error) => {
        console.error("Error during sign out:", error); // Log the error
        throw error; // Re-throw the error for further handling
      });
  },
  retrieveUser: (): Promise<User> => {
    return axiosInstance
      .get<User>("/auth/me")
      .then((response) => response.data) // Return the response data
      .catch((error) => {
        console.error("Error during sign up:", error); // Log the error
        throw error; // Re-throw the error for further handling
      });
  },
};
