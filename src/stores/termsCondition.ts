// src/stores/useTermsCondition.ts
import { create } from "zustand"; // necessary package
import { TermsConditionState } from "@/types/termsCondition"; // Terms type definitions for terms state

export const useTermsConditionStore = create<TermsConditionState>((set) => ({
  isAgreed: false, // Default state indicating whether the terms are agreed to
  toggleAgreed: () =>
    set((state) => ({
      // Toggle the agreement state between true and false
      isAgreed: !state.isAgreed,
    })),
}));
