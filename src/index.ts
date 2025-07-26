import { CreateStorageOptions } from "./types";
import { Storage } from "./core/Storage";
export {type StorageAdapter} from "./types"


export function createStorage<TSchema extends Record<string, unknown>>(options: CreateStorageOptions<TSchema>) {
  return new Storage<TSchema>(options);
}



