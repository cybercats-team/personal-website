'use client';

import { default as appearanceStore, type AppearanceType } from "@/store/appearance";
import useStore from "@/hooks/useStore";

export type UseAppearanceHook = [AppearanceType, () => void];

const toggleAppearance = () => appearanceStore.toggleAppearance();

export default function useAppearance(): UseAppearanceHook {
  const appearance = useStore<AppearanceType>(appearanceStore);

  return [appearance, toggleAppearance];
}
