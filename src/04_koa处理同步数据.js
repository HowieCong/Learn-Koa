// 需求
// 1.在middleware1中,构造一个message=aa
// 2.在middleware2中,同步追加bb
// 3.在middleware3中,异步追加cc

// 一.导入Koa
const Koa = require('koa');
// 二.实例化app对象
const app = new Koa();
// 三、编写中间件
app.use((ctx,next) => {
    ctx.message = 'aa'
    // ctx.body = ctx.message;
    next()
    ctx.body = ctx.message;
})
app.use((ctx,next) => {
    ctx.message += 'bb'
    next()
})
app.use((ctx) => {
    ctx.message += 'cc';
})
// 四、启动服务,监听4004端口
app.listen(4004, () => {
    console.log('server is running on http://localhost:4004')
})