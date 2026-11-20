import { useSyncExternalStore } from "react";

const subscribe = (onStoreChange: () => void): () => void => {
  if ("undefined" === typeof window) {
    return () => { };
  }

  window.addEventListener("resize", onStoreChange);
  return () => window.removeEventListener("resize", onStoreChange);
};

export default function useWindowWidth(): number {
  return useSyncExternalStore(
    subscribe,
    () => "undefined" === typeof window ? 0 : window.innerWidth,
    () => 0
  );
}