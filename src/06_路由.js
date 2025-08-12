// 1. Import Koa
// 1. 导入Koa
const Koa = require('koa');

// 2. Create an instance of the Koa application
// 2. 实例化Koa应用对象
const app = new Koa();

// 3. Register middleware to handle requests
// 3. 注册中间件处理请求
app.use((ctx) => {
    // Print the HTTP context (includes request and response)
    // 打印HTTP上下文（包含请求和响应）
    console.log(ctx);

    // ctx.request: Information about the HTTP request
    // ctx.response: Information about the HTTP response
    // The following code omits explicit use of request and response
    // ctx.request：HTTP请求相关信息
    // ctx.response：HTTP响应相关信息
    // 下面的写法省略了对request和response的显式使用

    if (ctx.url == '/') {
        // Handle the home page route
        // 处理主页路由
        ctx.body = 'This is the homepage';
        // 这是主页
    } else if (ctx.url == '/users') {
        if (ctx.method == 'GET') {
            // Handle GET request for /users
            // 处理对/users的GET请求
            ctx.body = 'This is the user page';
            // 这里是用户页
        } else if (ctx.method == 'POST') {
            // Handle POST request for /users
            // 处理对/users的POST请求
            ctx.body = 'Create user';
            // 创建用户
        } else {
            // Respond with 405 Method Not Allowed for other methods
            // 对其他方法返回405 Method Not Allowed
            ctx.status = 405;
        }
    } else {
        // Respond with 404 Not Found for unknown routes
        // 对未知路由返回404 Not Found
        ctx.status = 404;
    }
});

// 4. Start the server and listen on port 4006
// 4. 启动服务器并监听4006端口
app.listen(4006, () => {
    console.log('server is running on http://localhost:4006');
    // 服务器正在 http://localhost:4006 上运行
});