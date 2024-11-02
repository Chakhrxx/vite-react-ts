// src/hooks/useAuth.ts
import { useState } from "react"; // necessary useState and useEffect from React
import { authService } from "@/services/authService";
import { User } from "@/types/user"; // User type definition
import { SignUpResponse } from "@/types/auth"; // Sign up response type definition
import { useOnce } from "./useOnce";

export const useAuth = () => {
  // State for loading status, error messages, and user data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  // Function to sign up a user
  const signUp = (data: User): Promise<SignUpResponse | void> => {
    setLoading(true); // Set loading to true when starting sign-up
    setError(null); // Clear any previous errors

    return authService
      .signUp(data)
      .then((response) => {
        // On successful sign-up, update user state and store access token
        setUser(response?.user);
        localStorage.setItem("accessToken", response?.accessToken); // Save token in local storage
        return response; // Return user information
      })
      .catch((error) => {
        console.error("Sign-up failed:", error); // Log error for debugging
        setError("Sign-up failed. Please try again."); // Set error message
      })
      .finally(() => {
        // Set loading to false regardless of success or failure
        setLoading(false);
      });
  };

  // Function to sign out a user
  const signOut = async () => {
    setLoading(true); // Set loading to true when starting sign-out
    setError(null); // Clear any previous errors

    try {
      await authService.signOut(); // Call sign out service
      setUser(null); // Clear user state
      localStorage.removeItem("accessToken"); // Remove token from local storage
      console.log("Successfully signed out");
    } catch (error) {
      console.error("Sign-out failed:", error); // Log error for debugging
      setError("Sign-out failed. Please try again."); // Set error message
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  // Function to retrieve user information
  const retrieveUser = () => {
    setLoading(true); // Start loading
    authService
      .retrieveUser()
      .then((userData) => {
        console.log("userData", userData);
        setUser(userData); // Set user data
      })
      .catch((error) => {
        console.error("Failed to retrieve user:", error); // Log error for debugging
        setError("Failed to retrieve user."); // Set error message
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  // Retrieve user on mount
  useOnce(() => {
    const accessToken = localStorage.getItem("accessToken"); // Get access token
    if (accessToken) {
      retrieveUser(); // Fetch user data when the component mounts
    }
  }); // Empty dependency array to run only on mount

  return { signUp, signOut, loading, error, user };
};
