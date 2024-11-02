import { TermsConditionType } from "./termsCondition";
// src/types/language.ts
import { SignUpForm } from "./auth";
import { StartForm } from "./start";
import { ScenePageType } from "./scene";

export type TranslationKey =
  | "welcome"
  | "home"
  | "signUp"
  | "termsCondition"
  | "start"
  | "scene"; // Define the valid keys for translations

// Union type representing possible values for translations, including strings and specific form type
export type TranslationValue =
  | string
  | SignUpForm
  | TermsConditionType
  | StartForm
  | ScenePageType;

export interface LanguageState {
  selectedLanguage: "EN" | "TH"; // Currently selected language
  toggleLanguage: () => void; // Function to toggle between languages
  getText: (key: TranslationKey) => TranslationValue; // Function to get the translated text based on a key
}
