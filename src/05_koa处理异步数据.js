// Requirement:
// 1. In middleware1, create a message = 'aa'
// 2. In middleware2, synchronously append 'bb'
// 3. In middleware3, asynchronously append 'cc'

// 需求：
// 1. 在middleware1中，构造一个message=aa
// 2. 在middleware2中，同步追加bb
// 3. 在middleware3中，异步追加cc

// 1. Import Koa
// 1. 导入Koa
const Koa = require('koa');

// 2. Instantiate the app object
// 2. 实例化app对象
const app = new Koa();

// 3. Write middleware
// 3. 编写中间件

app.use(async (ctx, next) => {
    ctx.message = 'aa'; // Initialize message with 'aa' // 用'aa'初始化message
    await next(); // Wait for the next middleware to finish // 等待下一个中间件执行完成
    ctx.body = ctx.message; // Set the response body to the final message // 将最终的message设置为响应体
});

app.use(async (ctx, next) => {
    ctx.message += 'bb'; // Synchronously append 'bb' // 同步追加'bb'
    await next(); // Proceed to the next middleware // 进入下一个中间件
});

app.use(async (ctx) => {
    // Asynchronously append 'cc' by awaiting a resolved Promise // 通过await一个已解决的Promise异步追加'cc'
    const res = await Promise.resolve('cc');
    ctx.message += res;
});

// 4. Start the server and listen on port 4005
// 4. 启动服务，监听4005端口
app.listen(4005, () => {
    console.log('server is running on http://localhost:4005');
});