const closure = function () {
    var num = 0
    return function (b) {
        return num += b
    }
}

let res = closure()

console.log(res(5))
console.log(res(5))

async function fn() {
    console.log(111)
    setTimeout(() => {
        console.log(222)
    }, 1000)
}

function fn2() {
    console.log(333)
}

console.log(444)

async function cb() {
    await fn()
}
console.log(cb())
fn2()

