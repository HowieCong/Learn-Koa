// 一.导入Koa
const Koa = require('koa');
// 二.实例化app对象
const app = new Koa();
// 三、编写中间件
app.use((ctx,next) => {
    console.log(1);
    next()
    console.log(2);
})
app.use((ctx,next) => {
    console.log(3);
    next()
    console.log(4);
})
app.use((ctx) => {
    console.log(5);
    ctx.body = '处理完成';
})
// 四、启动服务,监听4003端口
app.listen(4003, () => {
    console.log('server is running on http://localhost:4003')
})