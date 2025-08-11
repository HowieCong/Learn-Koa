# Learn-KOA

Language : [🇺🇸 English] | [🇨🇳 中文](./README.zh-CN.md)

## English

This project is for learning the basics and advanced usage of the [Koa](https://koajs.com/) framework, suitable for beginners and those who want to deepen their understanding.

---

### Koa2 vs Koa3: Main Differences

| Feature              | Koa2                                  | Koa3 (latest)                   |
| -------------------- | ------------------------------------- | ------------------------------- |
| Node.js Version      | Requires Node.js >= 7.6 (async/await) | Requires Node.js >= 16          |
| Middleware Signature | `async (ctx, next)`                   | `async (ctx, next)` (unchanged) |
| Middleware Compose   | Uses `koa-compose` internally         | Uses `@koajs/compose`           |
| Error Handling       | Manual `try/catch` in middleware      | Improved error propagation      |
| Context Extension    | Directly on `ctx`                     | Same, but with stricter typings |
| Typescript Support   | Community maintained                  | Official TypeScript typings     |
| Package Name         | `koa`                                 | `koa` (v3.x.x)                  |
| Breaking Changes     | Some plugins may not be compatible    | Some APIs and plugins updated   |

**Summary:**  
Koa3 requires a newer Node.js version, has better TypeScript support, and some internal improvements. Most middleware usage remains the same, but always check plugin compatibility.

---

### Project Structure

```
package.json
README.md
src/
    01_快速入门.js           # Quick start with Koa
    02_中间件.js             # Middleware usage
    03_洋葱圈模型.js         # Onion model (middleware execution order)
    04_koa处理同步数据.js     # Handling synchronous data
    05_koa处理异步数据.js     # Handling asynchronous data
    06_路由.js               # Basic routing
    07_koa-router.js         # Advanced routing with koa-router and koa-body
    async.js
    await.js
    router/
        user.route.js        # User routes for RESTful API demo
```

### Install Dependencies

```bash
npm install
```

### Run Examples

#### 1. Quick Start

```bash
node src/01_快速入门.js
```

Visit: [http://localhost:4001](http://localhost:4001)

#### 2. Middleware Example

```bash
node src/02_中间件.js
```

Visit: [http://localhost:4002](http://localhost:4002)

#### 3. Onion Model (Middleware Execution Order)

```bash
node src/03_洋葱圈模型.js
```

Check the console output for middleware execution order.

#### 4. Synchronous Data Handling

```bash
node src/04_koa处理同步数据.js
```

Visit: [http://localhost:4004](http://localhost:4004)

#### 5. Asynchronous Data Handling

```bash
node src/05_koa处理异步数据.js
```

Visit: [http://localhost:4005](http://localhost:4005)

#### 6. Basic Routing

```bash
node src/06_路由.js
```

Visit: [http://localhost:4006](http://localhost:4006)

#### 7. Advanced Routing (RESTful API Demo)

```bash
node src/07_koa-router.js
```

Visit: [http://localhost:4007/users](http://localhost:4007/users)

- Supports GET `/users?start=18&end=20` for user list filtering
- Supports GET `/users/:id` for user detail
- Supports POST `/users` for user creation (see code for details)

### Development Tools

You can use `nodemon` for automatic restarts:

```bash
npx nodemon src/01_快速入门.js
# or any other example file
```

### Dependencies

- koa ^3.0.1
- koa-router ^13.1.1
- koa-body ^6.0.1
- nodemon (dev dependency)

---

For more information, please refer to the [Koa official documentation](https://koajs.com/).
