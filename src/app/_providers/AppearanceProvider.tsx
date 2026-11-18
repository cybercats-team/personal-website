'use client';

import { createContext, useSyncExternalStore } from "react";
import { Theme } from "@radix-ui/themes";
import  { default as appearanceStore, type AppearanceType } from "@/store/appearance";
export type AppearanceProviderProps = { children: React.ReactNode };

export type AppearanceContextValue = [
  appearance: AppearanceType,  
  toggleAppearance: () => void
];

const toggleAppearance = () => appearanceStore.toggleAppearance();

export const AppearanceContext = createContext<AppearanceContextValue>([
  "light", 
  () => {}
]);

export default function AppearanceProvider({ children }: AppearanceProviderProps) {
  const appearance = useSyncExternalStore(
    appearanceStore.subscribe, 
    appearanceStore.getSnapshot, 
    appearanceStore.getServerSnapshot
  );

  const value: AppearanceContextValue = [appearance, toggleAppearance];

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

