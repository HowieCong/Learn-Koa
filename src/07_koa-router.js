// 一.导入Koa
const Koa = require ('koa');
// 二.实例化app对象
const app = new Koa();
// 三、导入router路由
const userRoute = require('./router/user.route')
// 四、注册中间件
app.use( userRoute.routes()).use( userRoute.allowedMethods()) // 处理404和405
// 四、启动服务,监听4007端口
app.listen(4007, () => {
    console.log('server is running on http://localhost:4007')
})