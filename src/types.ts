
export interface StorageAdapter<TSchema extends Record<string, unknown>> {
  get<K extends keyof TSchema>(key: K): TSchema[K] | null;
  set<K extends keyof TSchema>(key: K, value: TSchema[K]): void;
  delete(keys: (keyof TSchema)[]): void;
  clear(): void;
}

export interface CreateStorageOptions<TSchema extends Record<string, unknown>> {
  prefix?: string;
  debug?: boolean;
  storage: StorageAdapter<TSchema>;
}
