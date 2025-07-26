// MemoryStorage.ts
import type { StorageAdapter } from "../types";

export class MemoryStorage<TSchema extends Record<string, unknown>> implements StorageAdapter<TSchema > {
  private store: Partial<TSchema> = {};

  get<K extends keyof TSchema>(key: K): TSchema[K] | null {
    return this.store[key] ?? null;
  }

  set<K extends keyof TSchema>(key: K, value: TSchema[K]): void {
    this.store[key] = value;
  }

  delete(keys: (keyof TSchema)[]): void {
    for (const key of keys) {
      delete this.store[key];
    }
  }

  clear(): void {
    this.store = {};
  }
}
