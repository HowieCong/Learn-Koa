# Learn-KOA

本项目用于学习 [Koa](https://koajs.com/) 框架的基本用法。

## 目录结构

```
package.json
README.md
src/
    01_快速入门.js
    02_中间件.js
```

## 安装依赖

```bash
npm install
```

## 运行示例

### 1. 快速入门

启动 `01_快速入门.js`：

```bash
node src/01_快速入门.js
```

访问: [http://localhost:4001](http://localhost:4001)

### 2. 中间件示例

启动 `02_中间件.js`：

```bash
node src/02_中间件.js
```

访问: [http://localhost:4002](http://localhost:4002)

## 开发辅助

可使用 `nodemon` 实现自动重启：

```bash
npx nodemon src/01_快速入门.js
```

或

```bash
npx nodemon src/02_中间件.js
```

## 依赖

- koa ^3.0.1
- nodemon (开发依赖)

---

如需更多 Koa 相关资料，请参考 [Koa 官方文档](https://koajs.com/)。
