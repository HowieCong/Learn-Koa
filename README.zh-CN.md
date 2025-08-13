# Learn-KOA

Language : [🇺🇸 English](./README.md) | [🇨🇳 中文]

---

## 中文文档

本项目用于学习 [Koa](https://koajs.com/) 框架的基本用法和进阶技巧，适合初学者和进阶者快速上手。

---

## 文档亮点

- **中英文双语注释**：所有示例文件均配有详细的中英文注释，方便不同语言背景的开发者理解。
- **循序渐进的示例**：从 Koa 最基础的用法到进阶特性（如中间件、路由、错误处理、异步等），每个知识点都有独立文件，便于逐步学习和测试。
- **Koa3 最新特性覆盖**：示例基于 Koa3，涵盖官方推荐的用法和常见中间件，兼容 Node.js 16+，并包含 TypeScript 支持说明。
- **实用 RESTful API 案例**：内置用户路由示例，演示如何用 Koa 构建 RESTful 风格接口。
- **开发体验友好**：支持 nodemon 自动重载，开发脚本简单易用。

---

## 快速开始

1. **克隆仓库**
   ```bash
   git clone https://github.com/HowieCong/Learn-KOA.git
   cd Learn-KOA
   ```
2. **安装依赖**
   ```bash
   npm install
   ```
3. **运行任意示例（以快速入门为例）**
   ```bash
   node src/01_快速入门.js
   # 浏览器访问 http://localhost:4001
   ```
4. **推荐开发模式（自动重载）**
   ```bash
   npm run dev
   # 默认运行 src/08_错误处理.js，可修改 package.json 脚本或直接指定文件
   ```

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

---

### 依赖

- koa ^3.0.1
- koa-router ^13.1.1
- koa-body ^6.0.1
- koa-json-error ^3.1.2
- cross-env ^7.0.3
- nodemon (开发依赖)

---

### 脚本命令

- `npm run dev` — 使用 nodemon 启动开发环境（自动重载，运行 `src/08_错误处理.js`）
- `npm run prod` — 生产环境启动（用 cross-env 设置 `NODE_ENV=production`）

---

### 开发辅助

可使用 `nodemon` 实现自动重启：

```bash
npx nodemon src/01_快速入门.js
# 或其他示例文件
```

---

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

### 学习建议

- 阅读每个示例文件中的中英文注释，理解每一步的作用。
- 尝试修改中间件和路由，加深对 Koa 工作原理的理解。
- 推荐查阅 [Koa 官方文档](https://koajs.com/) 获取更多进阶内容。
- TypeScript 用户可参考 Koa 官方类型定义。

---

## 贡献指南

欢迎大家提交 PR 共同完善本项目！

**你可以：**

- 补充新的 Koa 示例文件（如中间件、路由、错误处理等进阶用法）
- 优化现有代码或注释（包括中英文翻译、代码风格等）
- 修复文档或代码中的错误

**贡献流程：**

1. Fork 本仓库
2. 新建分支进行修改
3. 提交 PR 并简要说明你的更改内容

我会及时 review 并合并有价值的贡献。感谢你的支持！

---

如需更多 Koa 相关资料，请参考 [Koa 官方文档](https://koajs.com/)
