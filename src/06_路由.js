// 一.导入Koa
const Koa = require ('koa');
// 二.实例化app对象
const app = new Koa();
// 三、编写中间件
app.use((ctx) => {
    console.log(ctx) // http上下文(http请求+http响应)
    // 1. ctx.request: http请求相关信息
    // 2. ctx.response: http响应相关信息
    // 下面的写法省略掉 request 和 response
    if(ctx.url == '/'){
        ctx.body = '这是主页'
    }else if(ctx.url == '/users'){
        if(ctx.method == 'GET'){
            ctx.body = '这里是用户页'
        }else if(ctx.method == 'POST'){
            ctx.body = '创建用户'
        }else {
            ctx.status = 405 // Method Not Allowed
        }
    } else {
        ctx.status = 404
    }
})
// 四、启动服务,监听4006端口
app.listen(4006, () => {
    console.log('server is running on http://localhost:4006')
})