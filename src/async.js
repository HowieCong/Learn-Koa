// async/await are JavaScript keywords
// async/await 是 JavaScript 的关键字

// The async keyword makes the function return a Promise
// async 用来修饰函数，将函数的返回值封装成 Promise 对象
async function foo() {
    // Returns 123, but wrapped in a Promise because of async
    // 返回 123，但由于 async，会被包装成 Promise
    return 123;
}

// Call the async function; it returns a Promise, not the value 123 directly
// 调用 async 函数，返回的是 Promise，而不是直接返回 123
const res = foo();

console.log(res); // Promise { 123 }
// 输出 Promise { 123 }

// Use .then to get the resolved value from the Promise
// 使用 .then 获取 Promise 解析后的值
res.then(data => {
    console.log(data); // 123
    // 输出 123
});