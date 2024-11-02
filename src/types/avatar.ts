// src/types/avatar.ts
import { className } from "./className"; // className type definition

export interface AvatarProps {
  url?: string | null; // Optional URL for the avatar image, can be null
  className?: className; // Optional className for additional styling
}
