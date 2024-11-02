// src/stores/useLanguage.ts
import { create } from "zustand"; // necessary package
import { LanguageState, TranslationKey } from "@/types/language"; // Import the updated LanguageState and TranslationKey
import { translations } from "@/constants/translations";

// Create a Zustand store for managing language selection
export const useLanguageStore = create<LanguageState>((set, get) => ({
  selectedLanguage: "EN", // Default language is English
  toggleLanguage: () =>
    set((state) => ({
      selectedLanguage: state.selectedLanguage === "EN" ? "TH" : "EN",
    })),
  getText: (key: TranslationKey) => {
    const state = get(); // Use get() to access the current state
    return translations[state.selectedLanguage][key]; // Return the corresponding translation
  },
}));
