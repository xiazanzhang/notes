/**
 * 柯里化案例
 * 
 * match： 可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
 * filter：创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
 * curry：创建一个函数，该函数接收 func 的参数，要么调用func返回的结果，如果 func 所需参数已经提供，则直接返回 func 所执行的结果。或返回一个函数，接受余下的func 参数的函数，可以使用 func.length 强制需要累积的参数个数。
 */

let _ = require("lodash")

//纯函数
const match = function (reg, str) {
    return str.match(reg)
}

console.log(match(/\s+/g, "Hello World"))  //输出：[ ' ' ]

//柯里化
const matchCurry = function (reg) {
    return function (str) {
        return str.match(reg)
    }
}

const haveSpace = matchCurry(/\s+/g)
const haveNumber = matchCurry(/\d+/g)

console.log(haveSpace("Hello World"))      //输出：[ ' ' ]
console.log(haveNumber("Hello 2 World"))   //输出：[ '2' ]

//lodash的柯里化函数
const matchCurryByLodash = _.curry(function (reg, str) {
    return str.match(reg)
})

const haveSpaceByLodash = matchCurryByLodash(/\s+/g)
const haveNumberByLodash = matchCurryByLodash(/\d+/g)

console.log(haveSpaceByLodash("Hello World"))      //输出：[ ' ' ]
console.log(haveNumberByLodash("Hello 2 World"))   //输出：[ '2' ]

//filter
const filter = _.curry(function (fn, array) {
    return array.filter(fn)
})

const findSpace = filter(haveSpace)
const findSpaceByLodash = filter(haveSpaceByLodash)

console.log(findSpace(['John Conner', 'Jogn_Donne']))          //输出：[ 'John Conner' ]
console.log(findSpaceByLodash(['John Conner', 'Jogn_Donne']))  //输出：[ 'John Conner' ]

//es6写法 一行代码搞定 “简单点 说话的方式简单点...”
const matchByes6 = reg => (str) => str.match(reg)
const filterLodashByEs6 = _.curry((fn) => (array) => array.filter(fn))

const haveSpaceByEs6 = matchByes6(/\s+/g)
const haveNumberByEs6 = matchByes6(/\d+/g)
const findSpaceByEs6 = filterLodashByEs6(haveSpaceByEs6)

console.log(haveSpaceByEs6("Hello World"))                   //输出：[ ' ' ]
console.log(haveNumberByEs6("Hello 2 World"))                //输出：[ '2' ]
console.log(findSpaceByEs6(['John Conner', 'Jogn_Donne']))   //输出：[ 'John Conner' ]
