/**
 * 模拟实现lodash的curry函数
 */

const _ = require("lodash")

function add(a, b, c) {
    return a + b + c
}

const curried = _.curry(add)

console.log(curried(1, 2, 3))
console.log(curried(1, 2)(3))
console.log(curried(1)(2)(3))

// function curry(func) {
//     return function fn(...args) {
//         if (args.length < func.length) {
//             return function () {
//                 return fn(...args.concat(Array.from(arguments)))
//             }
//         }
//         return func(...args)
//     }
// }

const curry = (func) => fn = (...args) => {
    if (args.length < func.length) {
        return function () {
            return fn(...args.concat(Array.from(arguments)))
        }
    }
    return func(...args)
}

const curried2 = curry(add)

console.log(curried2(1, 2, 3))
console.log(curried2(1)(2, 3))
console.log(curried2(1)(2)(3))


/**
 * 柯里化可以让我们给一个函数传递较少的参数得到一个已经记住了某些固定的新函数（闭包）
 * 让函数变的更灵活，让函数的粒度更小
 * 可以把多元函数转换成一元的函数，可以组合使用函数产生功能更强大的函数
 */