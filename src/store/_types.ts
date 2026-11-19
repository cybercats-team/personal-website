export interface IExternalSyncStore<SnapshotType> {
    subscribe(onStoreChange: () => void): () => void;
    getSnapshot(): SnapshotType;
    getServerSnapshot(): SnapshotType;
}