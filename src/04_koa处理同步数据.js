// 1. Import Koa
// 1. 导入Koa
const Koa = require('koa');

// 2. Create app instance
// 2. 实例化app对象
const app = new Koa();

// 3. Register middleware
// 3. 注册中间件

app.use((ctx, next) => {
    // Initialize message with 'aa'
    // 初始化message为'aa'
    ctx.message = 'aa';
    // Call next middleware
    // 调用下一个中间件
    next();
    // Set response body after all middlewares have executed
    // 在所有中间件执行完后设置响应体
    ctx.body = ctx.message;
});

app.use((ctx, next) => {
    // Synchronously append 'bb' to message
    // 同步追加'bb'到message
    ctx.message += 'bb';
    // Call next middleware
    // 调用下一个中间件
    next();
});

app.use(async (ctx) => {
    // Asynchronously append 'cc' to message
    // 异步追加'cc'到message
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async operation // 模拟异步操作
    ctx.message += 'cc';
});

// 4. Start server on port 4004
// 4. 启动服务,监听4004端口
app.listen(4004, () => {
    console.log('server is running on http://localhost:4004');
});