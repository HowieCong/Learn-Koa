// 1. Import Koa framework
// 1. 导入Koa框架
const Koa = require('koa');

// 2. Create an instance of Koa application
// 2. 实例化Koa应用对象
const app = new Koa();

// 3. Import koa-body middleware to parse request body parameters
// 3. 导入koa-body中间件，用于解析请求体参数
const { koaBody } = require('koa-body');

// 4. Register koa-body middleware, parsed data will be attached to ctx.request.body
// 4. 注册koa-body中间件，解析后的数据会挂载到ctx.request.body
app.use(koaBody());

// 5. Import user router module
// 5. 导入用户路由模块
const userRoute = require('./router/user.route');

// 6. Register router middleware
// 6. 注册路由中间件
// userRoute.routes() registers the defined routes
// userRoute.routes() 注册已定义的路由
// userRoute.allowedMethods() handles 404 (Not Found) and 405 (Method Not Allowed) errors
// userRoute.allowedMethods() 处理404（未找到）和405（方法不允许）错误
app.use(userRoute.routes()).use(userRoute.allowedMethods());

// 7. Listen for application error events
// 7. 监听应用错误事件
app.on('error', (err, ctx) => {
    // Log the error to the console
    // 将错误信息输出到控制台
    console.error(err);
    // Respond with the error message
    // 返回错误信息
    ctx.body = err;
});

// 8. Start the server and listen on port 4007
// 8. 启动服务器并监听4007端口
app.listen(4007, () => {
    // Print server running message
    // 打印服务器启动信息
    console.log('server is running on http://localhost:4007');
});