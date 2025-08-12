// 1. Import the Koa package
// 1. 导入Koa包
const Koa = require('koa')

// 2. Create an instance of the app object
// 2. 实例化app对象
const app = new Koa()

// 3. Write middleware
// 3. 编写中间件
// Only one function can be passed as a parameter to app.use
// 在app.use中只能接受一个函数作为参数
app
    .use((ctx, next) => {
        // I form the header
        // 我来组成头部
        console.log('我来组成头部')
        next()
    })
    .use((ctx, next) => {
        // I form the body
        // 我来组成身体
        console.log('我来组成身体')
        next()
    })
    .use((ctx) => {
        // Assembly complete
        // 组装完成
        console.log('组装完成')
        ctx.body = '组装完成了'
    })

// 4. Start the server
// 4. 启动服务
app.listen(4002, () => {
    // Server is running on http://localhost:4002
    // server is running on http://localhost:4002
    console.log('server is running on http://localhost:4002')
})
