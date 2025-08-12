// 1. Import Koa framework
// 1. 导入Koa框架
const Koa = require('koa');

// 2. Create Koa app instance
// 2. 实例化Koa应用对象
const app = new Koa();

// 3. Import and register koa-body middleware to parse request body
// 3. 导入并注册koa-body中间件，用于解析请求体
const { koaBody } = require('koa-body');
app.use(koaBody());

// 4. Import and use koa-json-error for error formatting
// 4. 导入并使用koa-json-error中间件进行错误格式化处理
const error = require('koa-json-error');
app.use(error({
    // Custom error format function
    // 自定义错误格式化函数
    format: (err) => {
        return {
            message: err.message, // Error message 错误信息
            code: err.status,     // HTTP status code HTTP状态码
            result: err.stack     // Error stack 错误堆栈
        }
    },
    // Post-format function to hide stack in production
    // 后置格式化函数，生产环境隐藏堆栈信息
    postFormat: (err, obj) => {
        const { result, ...rest } = obj
        return process.env.NODE_ENV === 'production' ? rest : obj
    }
}));

// 5. Import user router
// 5. 导入用户路由模块
const userRoute = require('./router/user.route')

// 6. Register router middleware and allowedMethods for 404/405 handling
// 6. 注册路由中间件及allowedMethods处理404和405错误
app.use(userRoute.routes()).use(userRoute.allowedMethods())

// 7. Listen for app-level error events and log them
// 7. 监听应用级错误事件并进行日志输出
app.on('error', (err, ctx) => {
    console.error(err); // Print error to console 打印错误到控制台
    ctx.body = err;     // Respond with error 返回错误响应
});

// 8. Start the server on port 4008
// 8. 启动服务，监听4008端口
app.listen(4008, () => {
    console.log('server is running on http://localhost:4008')
})