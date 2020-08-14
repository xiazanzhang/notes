new Promise(function (resolve, reject) {
    console.log("AAAA")
    resolve()
})
    .then(function () {
        new Promise(function (resolve, reject) {
            console.log("BBBB")
            resolve()
        })
            .then(function () {
                console.log("CCCC")
            })
            .then(function () {
                new Promise(function () {
                    new Promise(function (resolve, reject) {
                        console.log("DDDD")
                        resolve()
                    })
                        .then(function () {
                            console.log("EEEE")
                        })
                        .then(function () {
                            console.log("FFFF")
                        })
                    console.log("GGGG")
                })
                console.log("HHHH")
            })
            .then(function () {
                console.log("IIII")
            })
    })


new Promise(function (resolve, reject) {
    console.log("JJJJ")
    resolve()
})
    .then(function () {
        console.log("KKKK")
    })
    .then(function () {
        console.log("LLLL")
    })


// AAAA JJJJ BBBB KKKK LLLL CCCC HHHH DDDD EEEE FFFF IIII 