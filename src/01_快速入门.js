// 1. Import Koa
// 1. 导入Koa
const Koa = require('koa');

// 2. Instantiate the app object
// 2. 实例化app对象
const app = new Koa();

// 3. Write middleware
// 3. 编写中间件
app.use((ctx) => {
    // ctx: context, the context of the HTTP request
    // ctx: 上下文，HTTP请求的上下文
    ctx.body = 'hello koa2'
})

// 4. Start the server and listen on port 4001
// 4. 启动服务，监听4001端口
app.listen(4001, () => {
    console.log('server is running on http://localhost:4001')
})