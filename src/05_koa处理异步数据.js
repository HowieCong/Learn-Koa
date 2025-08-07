// 需求
// 1.在middleware1中,构造一个message=aa
// 2.在middleware2中,同步追加bb
// 3.在middleware3中,异步追加cc

// 一.导入Koa
const Koa = require('koa');
// 二.实例化app对象
const app = new Koa();
// 三、编写中间件
app.use(async(ctx,next) => {
    ctx.message = 'aa'
    // ctx.body = ctx.message;
    awaitnext()
    ctx.body = ctx.message;
})
app.use(async(ctx,next) => {
    ctx.message += 'bb'
    await next()
})
app.use(async(ctx) => {
    // 返回一个promise对象，状态是fullfilled，值是cc
    const res = await Promise.resolve('cc')
    ctx.message += res;
})
// 四、启动服务,监听4005端口
app.listen(4005, () => {
    console.log('server is running on http://localhost:4005')
})