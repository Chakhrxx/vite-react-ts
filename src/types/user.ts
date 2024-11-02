// src/types/user.ts
export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  STAFF = "STAFF",
}

export interface User {
  name: string; // User's full name
  email: string; // User's email address
  phone: string; // User's phone number
  role?: UserRole;
}

export interface NameState {
  name: string;
  setName: (name: string) => void;
}
