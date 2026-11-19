import { useSyncExternalStore } from "react";
import { IExternalSyncStore } from "@/store/_types";

export default function useStore<SnapshotType>(store: IExternalSyncStore<SnapshotType>): SnapshotType {
  return useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot
  );
}
