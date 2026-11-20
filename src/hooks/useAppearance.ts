'use client';

import { useSyncExternalStore } from "react";
import { default as store, type AppearanceType } from "@/store/appearance";

export type UseAppearanceHook = [AppearanceType, () => void];

const toggleAppearance = () => store.toggleAppearance();

export default function useAppearance(): UseAppearanceHook {
  const appearance = useSyncExternalStore<AppearanceType>(
      store.subscribe,
      store.getSnapshot,
      store.getServerSnapshot
    );

  return [appearance, toggleAppearance];
}
