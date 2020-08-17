/**
 * 模拟实现lodash中的flowRight函数
 */

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toLocaleUpperCase = str => str.toLocaleUpperCase()

// const compose = function (...args) {
//     return function (value) {
//         return args.reverse().reduce(function (acc, fn) {
//             return fn(acc)
//         }, value)
//     }
// }

const compose = (...args) => (value) => args.reverse().reduce((acc, fn) => fn(acc), value)

let res = compose(toLocaleUpperCase, first, reverse)

console.log(res(["one", "two", "three"]))