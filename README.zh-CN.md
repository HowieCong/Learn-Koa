# Learn-KOA

Language : [🇺🇸 English](./README.md) | [🇨🇳 中文]

## 中文

本项目用于学习 [Koa](https://koajs.com/) 框架的基本用法和进阶技巧，适合初学者和进阶者快速上手。

---

### Koa2 与 Koa3 主要区别

| 特性             | Koa2                                  | Koa3（最新版）                |
| ---------------- | ------------------------------------- | ----------------------------- |
| Node.js 版本要求 | 需 Node.js >= 7.6（支持 async/await） | 需 Node.js >= 16              |
| 中间件签名       | `async (ctx, next)`                   | `async (ctx, next)`（无变化） |
| 中间件组合       | 内部用 `koa-compose`                  | 内部用 `@koajs/compose`       |
| 错误处理         | 需在中间件手动 `try/catch`            | 错误传递机制更完善            |
| Context 扩展     | 直接扩展 `ctx`                        | 相同，但类型更严格            |
| TypeScript 支持  | 社区维护                              | 官方内置类型声明              |
| 包名             | `koa`                                 | `koa`（v3.x.x）               |
| 兼容性           | 部分插件可能不兼容                    | 部分 API 和插件有更新         |

**总结：**  
Koa3 需要更高版本 Node.js，TypeScript 支持更好，内部机制有优化。大部分中间件用法不变，但需注意插件兼容性。

---

### 目录结构

```
package.json
README.md
src/
    01_快速入门.js           # Koa 快速入门
    02_中间件.js             # 中间件用法
    03_洋葱圈模型.js         # 洋葱圈模型（中间件执行顺序）
    04_koa处理同步数据.js     # 处理同步数据
    05_koa处理异步数据.js     # 处理异步数据
    06_路由.js               # 基础路由
    07_koa-router.js         # 进阶路由（koa-router + koa-body）
    08_错误处理.js           # Koa 错误处理
    async.js                 # async/await 示例
    await.js                 # await 示例
    router/
        user.route.js        # 用户路由，RESTful API 示例
```

### 安装依赖

```bash
npm install
```

### 脚本命令

- `npm run dev` — 使用 nodemon 启动开发环境（自动重载，运行 `src/08_错误处理.js`）
- `npm run prod` — 生产环境启动（用 cross-env 设置 `NODE_ENV=production`）

### 运行示例

#### 1. 快速入门

```bash
node src/01_快速入门.js
```

访问: [http://localhost:4001](http://localhost:4001)

#### 2. 中间件示例

```bash
node src/02_中间件.js
```

访问: [http://localhost:4002](http://localhost:4002)

#### 3. 洋葱圈模型

```bash
node src/03_洋葱圈模型.js
```

查看控制台输出，理解中间件执行顺序。

#### 4. 处理同步数据

```bash
node src/04_koa处理同步数据.js
```

访问: [http://localhost:4004](http://localhost:4004)

#### 5. 处理异步数据

```bash
node src/05_koa处理异步数据.js
```

访问: [http://localhost:4005](http://localhost:4005)

#### 6. 基础路由

```bash
node src/06_路由.js
```

访问: [http://localhost:4006](http://localhost:4006)

#### 7. 进阶路由（RESTful API 示例）

```bash
node src/07_koa-router.js
```

访问: [http://localhost:4007/users](http://localhost:4007/users)

- 支持 GET `/users?start=18&end=20` 用户列表筛选
- 支持 GET `/users/:id` 用户详情
- 支持 POST `/users` 创建用户（详见代码）

#### 8. 错误处理

```bash
node src/08_错误处理.js
```

演示如何在 Koa 中进行全局错误处理。

#### 9. async/await 示例

```bash
node src/async.js
node src/await.js
```

展示如何在 Koa 中使用 async/await。

#### 10. 自定义路由

`src/router/user.route.js` 文件包含用户相关 RESTful API 路由，已在 `07_koa-router.js` 中引入使用。

---

### 学习建议

- 阅读每个示例文件中的中英文注释，理解每一步的作用。
- 尝试修改中间件和路由，加深对 Koa 工作原理的理解。
- 推荐查阅 [Koa 官方文档](https://koajs.com/) 获取更多进阶内容。
- TypeScript 用户可参考 Koa 官方类型定义。

---

### 开发辅助

可使用 `nodemon` 实现自动重启：

```bash
npx nodemon src/01_快速入门.js
# 或其他示例文件
```

### 依赖

- koa ^3.0.1
- koa-router ^13.1.1
- koa-body ^6.0.1
- koa-json-error ^3.1.2
- cross-env ^7.0.3
- nodemon (开发依赖)

---

如需更多 Koa 相关资料，请参考 [Koa 官方文档](https://koajs.com/)
