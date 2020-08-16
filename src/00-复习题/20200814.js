new Promise(function (resolve, reject) {
    console.log("AAAA");  //1
    resolve();
})
    .then(function () {
        new Promise(function (resolve, reject) {
            console.log("BBBB"); //5
            resolve();
        })
            .then(function () {
                console.log("CCCC"); //7
            })
            .then(function () {
                new Promise(function (resolve, reject) {
                    console.log("DDDD"); //9
                    resolve();
                })

                    .then(function () {
                        console.log("EEEE"); //10
                    })
                    .then(function () {
                        console.log("FFFF"); //11
                    });
                console.log("GGGG"); //8
            });
        console.log("HHHH"); //3
    })
    .then(function () {
        console.log("IIII");
    });

new Promise(function (resolve, reject) {
    console.log("JJJJ"); //2
    resolve();
})
    .then(function () {
        console.log("KKKK"); //4
    })
    .then(function () {
        console.log("LLLL"); //6
    });

// AAAA JJJJ HHHH KKKK BBBB LLLL CCCC GGGG DDDD EEEE FFFF