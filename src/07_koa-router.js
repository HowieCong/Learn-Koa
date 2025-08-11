// 一.导入Koa
const Koa = require ('koa');
// 二.实例化app对象
const app = new Koa();
// 三、使用koa-router
// 3.1 导入koa-router包
const Router = require('koa-router')
// 3.2 实例化路由对象
const router = new Router()
// 3.3 编写路由规则
router.get('/', (ctx) => {
    ctx.body = '这是主页'
})
router.get('/users', (ctx) => {
    ctx.body = '这是用户页'
})
router.post('/users', (ctx) => {
    ctx.body = '创建用户'
})
// 四、注册中间件
app.use( router.routes())
app.use( router.allowedMethods()) // 处理404和405
// 四、启动服务,监听4007端口
app.listen(4007, () => {
    console.log('server is running on http://localhost:4007')
})