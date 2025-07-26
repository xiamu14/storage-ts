# 📦 storage-ts

一个类型安全、可扩展的 Storage 抽象库，支持多种运行环境如 Web、 React-Native。定义不同的存储引擎（如 LocalStorage, SessionStorage, Memory、MMKV 等），并提供统一的类型推导与键管理机制。

## ✨ 特性

- ✅ **类型安全**：严格基于泛型定义的 schema 推导出键值类型
- 📦 **可插拔存储引擎**：支持 LocalStorage、 SessionStorage、 MemoryStorage、MMKVStorage 等
- 🧩 **可配置前缀**：避免键冲突，可设置全局或实例级前缀
- 🔍 **零依赖内核**：核心无第三方依赖，适合扩展与封装

---

## 📦 安装

```bash
# 安装核心库
bun install storage-ts

# 如需使用 MMKV 存储
bun install react-native-mmkv
```

## 使用方式

```ts
type Schema = {
  token: string
  profile: { name: string; age: number }
}

const storage = createStorage({storage:new LocalStorage<Schema>()})

// 保存
storage.set('token', 'abc123')
storage.set('profile', { name: 'Alice', age: 30 })

// 读取
const token = storage.get('token') // string | null
const profile = storage.get('profile') // { name: string; age: number } | null
```
