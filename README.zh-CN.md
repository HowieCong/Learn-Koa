# Learn-KOA

Language : [🇺🇸 English](./README.md) | [🇨🇳 中文](./README.zh-CN.md)

## 中文

本项目用于学习 [Koa](https://koajs.com/) 框架的基本用法和进阶技巧，适合初学者和进阶者快速上手。

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
    async.js
    await.js
    router/
        user.route.js        # 用户路由，RESTful API 示例
```

### 安装依赖

```bash
npm install
```

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
- nodemon (开发依赖)

---

如需更多 Koa 相关资料，请参考 [Koa 官方文档](https://koajs.com/)。
