// 'await' can only be used inside an 'async' function
// await 不能单独使用，必须要跟async使用

// 'await' expects a Promise and returns its resolved value
// await 后面跟一个promise对象，表达式返回一个promise结果
async function foo() {
    // Create a new Promise that resolves to 123
    // 创建一个Promise对象，最终会resolve为123
    const p = new Promise((resolve, reject) => {
        // Call resolve to fulfill the promise with value 123
        // 调用resolve，p的结果是123，状态是fulfilled
        resolve(123)
    })
    // Wait for the promise to resolve and get its value
    // 等待Promise对象p完成，并获取其结果
    const res = await p
    // Output the resolved value to the console
    // 打印Promise的结果到控制台
    console.log(res)
}

// Call the async function
// 调用异步函数
foo()