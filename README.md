# Learn-KOA

Language : [🇺🇸 English] | [🇨🇳 中文](./README.zh-CN.md)

---

## English Documentation

This project is for learning the basics and advanced usage of the [Koa](https://koajs.com/) framework, suitable for both beginners and advanced users.

---

## Highlights

- **Bilingual Comments**: All example files include detailed comments in both English and Chinese, making it easy for developers from different backgrounds to understand.
- **Step-by-Step Examples**: Each key concept (middleware, routing, error handling, async, etc.) is demonstrated in a separate file, allowing you to learn and test incrementally.
- **Covers Latest Koa3 Features**: Examples are based on Koa3, covering official best practices and common middleware, compatible with Node.js 16+, and including TypeScript support notes.
- **Practical RESTful API Demo**: Built-in user route examples show how to build RESTful APIs with Koa.
- **Developer Friendly**: Supports `nodemon` for automatic reloads, and provides simple development scripts.

---

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/HowieCong/Learn-KOA.git
   cd Learn-KOA
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run any example (e.g., Quick Start)**
   ```bash
   node src/01_快速入门.js
   # Visit http://localhost:4001 in your browser
   ```
4. **Recommended development mode (auto-reload)**
   ```bash
   npm run dev
   # By default runs src/08_错误处理.js; you can modify the script in package.json or specify another file directly
   ```

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
    08_错误处理.js           # Error handling in Koa
    async.js                 # async/await demo
    await.js                 # await demo
    router/
        user.route.js        # User routes for RESTful API demo
```

---

### Dependencies

- koa ^3.0.1
- koa-router ^13.1.1
- koa-body ^6.0.1
- koa-json-error ^3.1.2
- cross-env ^7.0.3
- nodemon (dev dependency)

---

### Scripts

- `npm run dev` — Start with nodemon for development (auto-reload, runs `src/08_错误处理.js`)
- `npm run prod` — Start in production mode (uses `cross-env` to set `NODE_ENV=production`)

---

### Development Tools

You can use `nodemon` for automatic restarts:

```bash
npx nodemon src/01_快速入门.js
# or any other example file
```

---

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

#### 8. Error Handling

```bash
node src/08_错误处理.js
```

Demonstrates how to handle errors globally in Koa.

#### 9. async/await Demos

```bash
node src/async.js
node src/await.js
```

Showcases how to use async/await in Koa middleware.

#### 10. Custom Router

The `src/router/user.route.js` file contains user-related RESTful API routes, which are imported and used in `07_koa-router.js`.

---

### Koa2 vs Koa3: Main Differences

| Feature              | Koa2                                  | Koa3 (latest)                   |
| -------------------- | ------------------------------------- | ------------------------------- |
| Node.js Version      | Requires Node.js >= 7.6 (async/await) | Requires Node.js >= 16          |
| Middleware Signature | `async (ctx, next)`                   | `async (ctx, next)` (unchanged) |
| Middleware Compose   | Uses `koa-compose` internally         | Uses `@koajs/compose`           |
| Error Handling       | Manual `try/catch` in middleware      | Improved error propagation      |
| Context Extension    | Directly on `ctx`                     | Same, but with stricter typings |
| TypeScript Support   | Community maintained                  | Official TypeScript typings     |
| Package Name         | `koa`                                 | `koa` (v3.x.x)                  |
| Breaking Changes     | Some plugins may not be compatible    | Some APIs and plugins updated   |

**Summary:**  
Koa3 requires a newer Node.js version, has better TypeScript support, and some internal improvements. Most middleware usage remains the same, but always check plugin compatibility.

---

### Learning Suggestions

- Read the comments in each example file (bilingual: English & Chinese).
- Try modifying the middleware and routes to deepen your understanding.
- Explore the official [Koa documentation](https://koajs.com/) for more advanced features.
- For TypeScript users, refer to Koa's official type definitions.

---

## Contribution Guide

Contributions are welcome!

**You can:**

- Add new Koa example files (such as advanced middleware, routing, error handling, etc.)
- Improve existing code or comments (including English/Chinese translation, code style, etc.)
- Fix errors in documentation or code

**Contribution process:**

1. Fork this repository
2. Create a new branch for your changes
3. Submit a PR and briefly describe your changes

I will review and merge valuable contributions promptly. Thank you for your support!

---

For more information, please refer to the [Koa official documentation](https://koajs.com/).
