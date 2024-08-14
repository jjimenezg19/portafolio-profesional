import { create } from "zustand"

export const useStore = create((set) => ({
  currentTheme: "light",
  setCurrentTheme: (currentTheme) => set({ currentTheme }),
  currentLanguage: "ES",
  setCurrentLanguage: (currentLanguage) => set({ currentLanguage })
}))
