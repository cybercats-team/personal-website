export interface IExternalSyncStore<Snapshot> {
    subscribe(onStoreChange: () => void): () => void;
    getSnapshot(): Snapshot;
    getServerSnapshot(): Snapshot;
}