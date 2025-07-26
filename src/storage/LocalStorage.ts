import type { StorageAdapter } from "../types";

export class LocalStorage<TSchema extends Record<string, unknown>> implements StorageAdapter<TSchema> {
  get<K extends keyof TSchema>(key: K): TSchema[K] | null {
    const raw = window.localStorage.getItem(String(key));
    return raw ? (JSON.parse(raw) as TSchema[K]) : null;
  }

  set<K extends keyof TSchema>(key: K, value: TSchema[K]): void {
    window.localStorage.setItem(String(key), JSON.stringify(value));
  }

  delete(keys: (keyof TSchema)[]): void {
    for (const key of keys) {
      window.localStorage.removeItem(String(key));
    }
  }

  clear(): void {
    window.localStorage.clear();
  }
}
