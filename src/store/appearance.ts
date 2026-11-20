import EE from 'eventemitter3'
import { IExternalSyncStore } from './_types'

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
    this.store();

    this.events.emit(kAppearanceChanged);
  }

  public subscribe(onStoreChange: () => void): () => void {
    const { kAppearanceChanged } = this;

    this.events.addListener(kAppearanceChanged, onStoreChange);
    return () => this.events.removeListener(kAppearanceChanged, onStoreChange);
  }

  public getSnapshot(): AppearanceType {
    this.initialize();
    return this.appearance;
  }

  public getServerSnapshot(): AppearanceType {
    return this.appearance;
  }

  protected initialize(): void {
    if (this.initialized) {
      return;
    }

    const { kAppearanceLocalStorageKey } = this;
    this.initialized = true;    

    if (typeof localStorage === "undefined") {
      return;
    }

    let storedValue: string | null = null;

    if (storedValue = localStorage.getItem(kAppearanceLocalStorageKey)) {
      this.appearance = storedValue as AppearanceType;
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    
    this.appearance = (prefersDark ? "dark" : "light");
    this.store();
  }

  protected store(): void {
    const { kAppearanceLocalStorageKey } = this;

    localStorage.setItem(kAppearanceLocalStorageKey, this.appearance);
  }
}

const appearanceStore = new AppearanceStore();

export default appearanceStore;