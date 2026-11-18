import EE from 'eventemitter3'
import { IExternalSyncStore } from './_types'
import { initialize } from 'next/dist/server/lib/render-server';

export type AppearanceType = "light" | "dark";

class AppearanceStore implements IExternalSyncStore<AppearanceType> {
    readonly kAppearanceLocalStorageKey = "ux_theme";
    readonly kAppearanceChanged = "ux_theme_changed";
    
    private events = new EE<string>();
    private appearance: AppearanceType = "light";
    private initialized = false;

    constructor() {
        this.subscribe = this.subscribe.bind(this);
        this.getSnapshot = this.getSnapshot.bind(this);
        this.getServerSnapshot = this.getServerSnapshot.bind(this);
    }

    public toggleAppearance() {
        const { kAppearanceChanged } = this;

        this.appearance = ("light" === this.appearance ? "dark" : "light");
        this.events.emit(kAppearanceChanged);
    }

    public subscribe(onStoreChange: () => void): () => void {
        const { kAppearanceChanged } = this;

        this.events.addListener(kAppearanceChanged, onStoreChange);
        return () => this.events.removeListener(kAppearanceChanged, onStoreChange);
    }
    
    public getSnapshot(): AppearanceType {        
        const { kAppearanceLocalStorageKey } = this;

        if (this.initialized || (typeof localStorage === "undefined")) {
            return this.appearance;
        }

        let storedValue: string | null = null;

        if (storedValue = localStorage.getItem(kAppearanceLocalStorageKey)) {
            return (this.appearance = storedValue as AppearanceType);
        }

        if (typeof window === "undefined") {
            return this.appearance;
        }

        const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
        localStorage.setItem(kAppearanceLocalStorageKey, (this.appearance = prefersDark ? "dark" : "light"));

        this.initialized = true;
        return this.appearance;
    }

    public getServerSnapshot(): AppearanceType {
        return this.appearance;
    }
}

export default new AppearanceStore()