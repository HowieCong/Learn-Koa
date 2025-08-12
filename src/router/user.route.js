// Use koa-router
// 使用koa-router

// 1. Import koa-router package
// 1. 导入koa-router包
const Router = require('koa-router')

// 2. Instantiate router object with prefix '/users'
// 2. 实例化路由对象，设置前缀为'/users'
const router = new Router({prefix: '/users'})

// Simulated database
// 模拟数据库
const db = [
    {id: 1, name: 'xiaohua', age: 20},
    {id: 2, name: 'xiaoming', age: 18},
    {id: 3, name: 'xiaogang', age: 2}
]

// 3. Define routing rules
// 3. 编写路由规则

// GET /users?start=18&end=20 --- Get all users whose age is in [start, end), return as array
// GET /users?start=18&end=20 --- 获取年龄在[start, end)区间的所有用户信息，返回数组
router.get('/', (ctx) => {
    // Parse query parameters from URL, e.g. /users?start=18&end=20
    // 通过ctx.query解析URL中的查询参数，例如/users?start=18&end=20
    const { start = 0, end = 0 } = ctx.query

    // If start is not less than end, throw 422 error (Unprocessable Entity)
    // 如果start不小于end，抛出422错误（不可处理的实体）
    if( start >= end ) ctx.throw(422)

    // Filter users whose age is in [start, end)
    // 过滤出年龄在[start, end)区间的用户
    const res = db.filter((item) => item.age >= start && item.age < end)

    // If no users found, throw 404 error; otherwise, return result
    // 如果没有找到用户，抛出404错误；否则返回结果
    res.length === 0 ? ctx.throw(404) : (ctx.body = res)
})

// GET /users/:id --- Get user by id, return as object
// GET /users/:id --- 根据id获取单个用户信息，返回对象
router.get('/:id', (ctx) => {
    // Parse id parameter from URL
    // 从URL中解析id参数
    const id = ctx.params.id
    // Find user with matching id
    // 查找id匹配的用户
    const res = db.filter((item) => item.id == id)

    // If user not found, throw 404 error; otherwise, return user object
    // 如果没有找到用户，抛出404错误；否则返回用户对象
    if(!res[0]) ctx.throw(404)
    ctx.body = res[0]
})

// POST /users --- Create a new user (currently just logs request body)
// POST /users --- 创建新用户（目前只是打印请求体）
router.post('/', (ctx) => {
    console.log(ctx.request.body)
    ctx.body = '创建用户'
})

// GET /users/:id/article/:aid --- Get article by user id and article id
// GET /users/:id/article/:aid --- 根据用户id和文章id获取文章
router.get('/:id/article/:aid',(ctx) => {
    // Print route parameters
    // 打印路由参数
    console.log(ctx.params)
    // If no response is set, Koa returns 404 by default
    // 如果没有设置响应，Koa默认返回404错误

    // Example: if condition is false, throw 422 error with message
    // 示例：如果条件为false，抛出422错误并带有消息
    if(false){
        ctx.body = { id: 1, title: '文章1', content: '这是文章1的内容' }
    }else{
        // ctx.throw will send error response with status and message
        // ctx.throw会发送带有状态码和消息的错误响应
        ctx.throw(422, '参数格式不正确')
    }
})

// Export router object
// 导出路由对象
module.exports = router