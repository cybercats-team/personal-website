'use client';

import { createContext, useState, useEffect } from "react";
import { Theme, type ThemeProps } from "@radix-ui/themes";

export type AppearanceType = "light" | "dark";
export type AppearanceProviderProps = { children: React.ReactNode };

export type AppearanceContextValue = [
  appearance: AppearanceType,  
  toggleAppearance: () => void
];

export const AppearanceContext = createContext<AppearanceContextValue>([
  "light", 
  () => {}
]);

export default function AppearanceProvider({ children }: AppearanceProviderProps) {
  const [appearance, setAppearance] = useState<AppearanceType>("light");
  const toggleAppearance = () => setAppearance(current => "light" === current ? "dark" : "light");
  const value: AppearanceContextValue = [appearance, toggleAppearance];

  // Detect the operating system theme on first page load.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;

    setAppearance(prefersDark ? "dark" : "light");
  }, []);

  return (
    <Theme
      appearance={appearance}
      accentColor="teal"
      grayColor="slate"
      radius="large"
      scaling="100%"
      panelBackground="solid"
    >
      <AppearanceContext.Provider value={value}>
        {children}
      </AppearanceContext.Provider>
    </Theme>
  );
};

