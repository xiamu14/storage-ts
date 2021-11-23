# storage-util

localStorage 和 sessionStorage 的工具库，增加 typescript的类型定义，可以在业务中限制 key-value 的类型，防止代码里无序的使用 storage。

## 使用方式

1. 初始化并导出 storage 实例
```ts
// session-util.ts
import StorageBase from "@redchili/storage-util";

export interface SessionProps { // 定义好业务中用到的所有 session key-value 类型
  token: string;
  money: money;
  thing: any;
}

export type SessionKey = keyof SessionProps;

const sessionUtil = new StorageBase<SessionProps>("sessionStorage"); // localStorage

export default sessionUtil;

```

2. 在代码中使用 sessionUtil

```ts
import sessionUtil from 'session-util'

sessionUtil.getItem('token');// great
sessionUtil.getItem('authToken'); // invalid, ts error

sessionUtil.setItem('token', '123123'); // great
sessionUtil.setItem('token', 123123); // invalid, ts error
```
