// src/stores/name.ts
import { create } from "zustand"; // necessary package
import { NameState } from "@/types/user";

export const useNameStore = create<NameState>((set) => ({
  name: "",
  setName: (name) => set({ name }),
}));
