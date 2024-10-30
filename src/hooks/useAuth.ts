// src/hooks/useAuth.ts
import { useState, useEffect } from "react";
import { authService } from "@/services/authService";
import { SignUpRequest } from "@/types/auth";
import { User } from "@/types/user";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const signUp = (data: SignUpRequest) => {
    setLoading(true);
    setError(null);

    authService
      .signUp(data)
      .then((response) => {
        setUser(response.user);
        return authService.getProfile(); // Fetch profile after sign-up
      })
      .then((profile) => {
        setUser(profile); // Update user state with profile data
      })
      .catch((error) => {
        console.error("Sign-up failed:", error);
        setError("Sign-up failed. Please try again."); // Set error message
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };

  const fetchProfile = () => {
    setLoading(true);
    setError(null);

    authService
      .getProfile()
      .then((profile) => {
        setUser(profile); // Update user state with profile data
      })
      .catch((error) => {
        console.error("Failed to fetch profile:", error);
        setError("Failed to fetch profile. Please try again.");
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };

  // Fetch profile on initial mount
  useEffect(() => {
    fetchProfile();
  }, []);

  return { signUp, fetchProfile, loading, error, user };
};
