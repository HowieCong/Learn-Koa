// 一.导入Koa
const Koa = require ('koa');
// 二.实例化app对象
const app = new Koa();
// 注册KoaBody中间件，解析请求体中的参数挂载到ctx.request.body
const { koaBody } = require('koa-body');
app.use(koaBody());
// 三、导入router路由
const userRoute = require('./router/user.route')
// 四、注册中间件
app.use( userRoute.routes()).use( userRoute.allowedMethods()) // 处理404和405

app.on('error', (err, ctx) => {
    console.error(err);
    ctx.body = err
});

// 四、启动服务,监听4007端口
app.listen(4007, () => {
    console.log('server is running on http://localhost:4007')
})