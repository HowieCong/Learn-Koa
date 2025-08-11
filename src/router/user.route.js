// 三、使用koa-router
// 3.1 导入koa-router包
const Router = require('koa-router')
// 3.2 实例化路由对象
const router = new Router({prefix: '/users'})
const db = [
    {id: 1, name: 'xiaohua', age: 18},
    {id: 2, name: 'xiaoming', age: 20},
    {id: 3, name: 'xiaogang', age: 22}
]
// 3.3 编写路由规则
// GET /users --- 获取所有的用户信息，返回一个数组
router.get('/', (ctx) => {
    ctx.body = db
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
    ctx.body = '创建用户'
})
module.exports = router