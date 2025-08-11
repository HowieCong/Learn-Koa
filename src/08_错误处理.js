// 一.导入Koa
const Koa = require ('koa');
// 二.实例化app对象
const app = new Koa();
// 注册KoaBody中间件，解析请求体中的参数挂载到ctx.request.body
// koa-body 6.0版本
const { koaBody } = require('koa-body');
app.use(koaBody());

const error = require('koa-json-error');
app.use(error({
    format: (err) => {
        return {
            message: err.message,
            code: err.status,
            result: err.stack
        }
    },
    postFormat: (err, obj) => {
        const { result, ...rest } = obj
        return process.env.NODE_ENV === 'production' ? rest : obj
    }
}));

// 三、导入router路由
const userRoute = require('./router/user.route')
// 四、注册中间件
app.use( userRoute.routes()).use( userRoute.allowedMethods()) // 处理404和405

app.on('error', (err, ctx) => {
    console.error(err);
    ctx.body = err
});

// 四、启动服务,监听4008端口
app.listen(4008, () => {
    console.log('server is running on http://localhost:4008')
})