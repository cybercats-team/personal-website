'use client';

import { useSyncExternalStore } from "react";
import { default as appearanceStore, type AppearanceType } from "@/store/appearance";

const toggleAppearance = () => appearanceStore.toggleAppearance();

export type UseAppearanceHook = [AppearanceType, () => void];

export default function useAppearance(): UseAppearanceHook {
  const appearance = useSyncExternalStore(
    appearanceStore.subscribe,
    appearanceStore.getSnapshot,
    appearanceStore.getServerSnapshot
  );

  return [appearance, toggleAppearance];
}