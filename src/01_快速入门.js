// 一.导入Koa
const Koa = require ('koa');
// 二.实例化app对象
const app = new Koa();
// 三、编写中间件
app.use((ctx) => {
    // ctx: context http 请求的上下文
    ctx.body = 'hello koa2'
})
// 四、启动服务,监听4000端口
app.listen(4001, () => {
    console.log('server is running on http://localhost:4001')
})