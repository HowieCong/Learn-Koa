// 使用koa-router
// 1. 导入koa-router包
const Router = require('koa-router')

// 2. 实例化路由对象
const router = new Router({prefix: '/users'})
const db = [
    {id: 1, name: 'xiaohua', age: 20},
    {id: 2, name: 'xiaoming', age: 18},
    {id: 3, name: 'xiaogang', age: 2}
]

// 3. 编写路由规则
// GET /users?start=18&end=20 --- 获取所有的用户信息，返回一个数组
router.get('/', (ctx) => {
    // 通过ctx.query 是 ctx.request.query的代理，解析键值对参数
    const { start = 0, end = 0 } = ctx.query

    if( start >= end ) ctx.throw(422)

    const res = db.filter((item) => item.age >= start && item.age < end)
    // 解析键值对

    res.length === 0 ? ctx.throw(404) : (ctx.body = res)
})

// GET /users/:id --- 根据id获取单个用户的信息，返回一个对象
router.get('/:id', (ctx) => {
    // 解析id参数
    const id = ctx.params.id
    const res = db.filter((item) => item.id == id)

    if(!res[0]) ctx.throw(404)
    ctx.body = res[0]
})

router.post('/', (ctx) => {
    console.log(ctx.request.body)
    ctx.body = '创建用户'
})

//  接口： 获取id=1的用户编写artice
router.get('/:id/article/:aid',(ctx) => {
    console.log(ctx.params)
    // 没有通过ctx.body返回数据时，默认koa返回404错误
    // ctx.body = { id: 1, title: '文章1', content: '这是文章1的内容' }
    if(false){
        ctx.body = { id: 1, title: '文章1', content: '这是文章1的内容' }
    }else{
        return ctx.app.emit('error', { code: 404, message: '资源未找到', ctx })
    }
})

module.exports = router