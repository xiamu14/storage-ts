import { StorageType } from "./type";

// Storage 基类
export default class StorageBase<Props extends Record<string, any>> {
  

  storageType: StorageType = 'localStorage'

  constructor(type: StorageType) {
    this.storageType = type;
  }

  /* 本方法获取本地存储值 */
  getItem<U extends keyof Props>(key: U): Props[U] {
    if (typeof key === "string") {
      let result: any = window[this.storageType].getItem(key);
      try {
        return JSON.parse(result);
      } catch (error) {
        return result;
      }
    }
    throw new Error("invalid key:${key}");
  }

  /* 本方法设置本地存储值 */
  setItem<T extends Props, U extends keyof Props & string>(
    key: U,
    value: T[U]
  ): void {
    const val = typeof value === "string" ? value : JSON.stringify(value);
    window[this.storageType].setItem(key, val);
  }

  /* 本方法移除指定的本地存储值 */
  removeItem(key: keyof Props & string): void {
    window[this.storageType].removeItem(key);
  }

  /* 本方法清除所有的本地存储值 */
  clear() {
    window[this.storageType].clear();
  }
}
