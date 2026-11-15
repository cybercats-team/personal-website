'use client';

import { createContext, useState, useEffect } from "react";
import { Theme, type ThemeProps } from "@radix-ui/themes";

export type AppearanceType = ThemeProps['appearance'];
export type AppearanceProviderProps = { children: React.ReactNode };

export type AppearanceContextValue = {
  appearance: AppearanceType;
  setAppearance: (appearance: AppearanceType) => void;
  setLightAppearance: () => void;
  setDarkAppearance: () => void;
  setInheritAppearance: () => void;
  clearAppearance: () => void;
  toggleAppearance: () => void;
}

export const AppearanceContext = createContext<AppearanceContextValue>({
  appearance: undefined,
  setAppearance: () => {},
  setLightAppearance: () => {},
  setDarkAppearance: () => {},
  setInheritAppearance: () => {},
  clearAppearance: () => {},
  toggleAppearance: () => {}
});

export default function AppearanceProvider({ children }: AppearanceProviderProps) {
  const [appearance, setAppearance_] = useState<ThemeProps['appearance']>("light");

  const setAppearance = (appearance: AppearanceType) => setAppearance_(appearance);

  const setLightAppearance = () => setAppearance('light')
  const setDarkAppearance = () => setAppearance('dark')
  const setInheritAppearance = () => setAppearance('inherit')
  const clearAppearance = () => setAppearance(undefined)

  const toggleAppearance = () => setAppearance_(current => {
    switch (current) {
      case 'dark':
        return 'light';
      case 'light':
        return 'dark';
      default:
        return current;    
    }
  });

  const value: AppearanceContextValue = {
    appearance,
    setAppearance,
    setLightAppearance,
    setDarkAppearance,
    setInheritAppearance,
    clearAppearance,
    toggleAppearance
  };

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

