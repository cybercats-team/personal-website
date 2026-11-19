import { IExternalSyncStore } from "@/store/_types";
import { useSyncExternalStore } from "react";

export default function useStore<T>(store: IExternalSyncStore<T>): T {
    return useSyncExternalStore(
        store.subscribe,
        store.getSnapshot,
        store.getServerSnapshot
    );
}
