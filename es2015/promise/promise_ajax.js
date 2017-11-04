"use strict"

// 利用promise，简单封装ajax
let url1 = "http://jsonplaceholder.typicode.com/users";
let url2 = "http://jsonplaceholder.typicode.com/todos";


// 封装一个get请求的方法
// try...catch...:测试代码中的错误

function getJSON(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    try {
                        var response = JSON.parse(xhr.responseText);
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                } else {
                    reject(new Error(xhr.statusText));
                }
            }
        }
    })
}

getJSON(url1).then(resp => console.log(resp));

// 只有一个ajax请求，其参数需另外2个甚至更多请求都有返回结果之后才能确定

// 当数组所有的Promise对象状态都变成resolved或者rejected时，才调用then方法。

/*function renderAll() {
    return Promise.all([getJSON(url1), getJSON(url2)]);
}

renderAll().then(function(value) {
    console.log(value);
})*/


// 当数组中的其中一个Promsie状态变成resolved或者rejected时，即可调用.then方法
function renderRace() {
    return Promise.race([getJSON(url1), getJSON(url2)]);
}

renderRace().then(function(value) {
    console.log(value);
})

