// 1. Import Koa framework
// 1. 导入Koa框架
const Koa = require('koa');

// 2. Create an instance of Koa application
// 2. 实例化Koa应用对象
const app = new Koa();

// 3. Register middleware functions
// 3. 注册中间件函数

// Middleware 1: Demonstrates the onion model by logging before and after next()
// 中间件1：通过在next()前后打印，演示洋葱圈模型
app.use((ctx, next) => {
    console.log(1); // Before passing to next middleware
    // 在传递到下一个中间件前打印
    next(); // Pass control to the next middleware
    // 传递控制权到下一个中间件
    console.log(2); // After next middleware finishes
    // 下一个中间件执行完毕后打印
});

// Middleware 2: Similar structure to further illustrate the onion model
// 中间件2：结构类似，进一步演示洋葱圈模型
app.use((ctx, next) => {
    console.log(3);
    next();
    console.log(4);
});

// Middleware 3: The last middleware, sets the response body
// 中间件3：最后一个中间件，设置响应体
app.use((ctx) => {
    console.log(5);
    ctx.body = '处理完成'; // Set response body
    // 设置响应内容
});

// 4. Start the server and listen on port 4003
// 4. 启动服务器并监听4003端口
app.listen(4003, () => {
    console.log('server is running on http://localhost:4003');
});