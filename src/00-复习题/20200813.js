// 看代码写输出

// 代码1：
async function t1() {
    let a = await "lagou"  // 可以理解为 let a = "lagou"
    console.log(a)  // 输出 lagou
}
t1()

//await是一个表达式，如果后面的值不是Promise对象，就直接返回对应的值。

// 代码2：
async function t2() {
    let a = await new Promise((resolve) => { })
    console.log(a)
}
t2()

/**
 * await后面如果跟着一个Promose对象，await将等待Promise对象的resolve状态的值value，且将这个值返回给前面的变量，
 * 此时的Promise对象的状态是一个pending状态，没有resolve状态值，所以什么也打印不了。
 */

//输出 

// 代码3：
async function t3() {
    let a = await new Promise((resolve) => {
        resolve()
    })
    console.log(a)
}
t3()

//输出 undefined

/**
 * await后面如果跟着一个promise对象，await将等待promise对象的resolve状态的值value,且将这个值返回给前面的变量
 * 此时的promise对象的状态是一个resolve状态，但是他的状态值是undefined，所以返回的是undefined
 */

// 代码4：
async function t4() {
    let a = await new Promise((resolve) => {
        resolve("hello")
    })
    console.log(a)
}
t4()

//输出 hello

/**
 * await后面如果跟着一个promise对象，await将等待promise对象的resolve状态的值value,且将这个值返回给前面的变量
 * 此时的promise对象的状态是一个resolve状态，但是他的状态值是hello，所以返回的是hello
 */

// 代码5：
async function t5() {
    let a = await new Promise((resolve) => {
        resolve("hello")
    }).then(() => {
        return "lala"
    })
    console.log(a)
}
t5()

//输出 lala

/**
 * await后面如果跟着一个promise对象，await将等待promise对象的resolve状态的值value,且将这个值返回给前面的变量
 * 此时的promise对象的状态是一个resolve状态，但是他的状态值是hello，紧接着后面执行了一个then的方法
 * then返回的是一个全新的promise对象，且这个then方法中的返回值会作为这个全新promise中resolve的值，所以最终返回的是lala
 */

// 代码6：
async function t6() {
    let a = await fn().then((res) => { return res })
    console.log(a)
}

async function fn() {
    await new Promise((resolve) => {
        resolve("lagou")
    })
}
t6()

//输出 undefined

// 代码7：
async function t7() {
    let a = await fn2().then((res) => { return res })
    console.log(a)
}

async function fn2() {
    await new Promise((resolve) => {
        resolve("lagou")
    })
    return "lala"
}
t7()

//输出 lala