import type { StorageAdapter, CreateStorageOptions } from "../types";

export class Storage<TSchema extends Record<string, unknown>> {
  private prefix: string;
  private debug: boolean;
  private storage: StorageAdapter<TSchema>;

  constructor(options: CreateStorageOptions<TSchema>) {
    this.prefix = options.prefix || "";
    this.debug = options.debug ?? false;
    this.storage = options.storage;
  }

  private wrapKey(key: keyof TSchema): string {
    return this.prefix ? `${this.prefix}-${String(key)}` : String(key);
  }

  get<K extends keyof TSchema>(key: K): TSchema[K] | null {
    const realKey = this.wrapKey(key);
    const raw = localStorage.getItem(realKey);
    return raw ? JSON.parse(raw) as TSchema[K] : null;
  }

  set<K extends keyof TSchema>(key: K, value: TSchema[K]): void {
    const realKey = this.wrapKey(key);
    localStorage.setItem(realKey, JSON.stringify(value));
  }

  delete(keys: (keyof TSchema)[]): void {
    if (this.debug) console.log("[delete]", keys);
    this.storage.delete(keys);
  }

  clear(): void {
    if (this.debug) console.log("[clear]");
    this.storage.clear();
  }

  getOnce<K extends keyof TSchema>(key: K): TSchema[K] | null {
    const value = this.get(key);
    this.delete([key]);
    return value;
  }
}
