import { axiosInstance } from "@/libs/axios";
import { SignUpRequest, SignUpResponse } from "@/types/auth";
import { User } from "@/types/user";

export const authService = {
  // Sign up a new user with provided information
  signUp: (data: SignUpRequest): Promise<SignUpResponse> => {
    return axiosInstance
      .post<SignUpResponse>("/auth/sign-up", data)
      .then((response) => response.data) // Return the response data
      .catch((error) => {
        console.error("Error during sign up:", error); // Log the error
        throw error; // Re-throw the error for further handling
      });
  },

  // Retrieve the profile of the currently authenticated user
  getProfile: async (): Promise<User> => {
    return axiosInstance
      .get<User>("/me")
      .then((response) => response.data) // Return the user profile data from the response
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        throw error; // Re-throw the error for further handling
      });
  },
};
