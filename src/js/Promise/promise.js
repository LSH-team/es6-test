/**
 * Created by lsh on 17/2/9.
 */

// let promise = new Promise(function (resolve, reject) {
//     console.log('Start');
//     setTimeout(function () {
//         // resolve('Done');
//         reject('Error');
//     }, 1000);
// });
//
// // promise.then(function (value) {
// //     console.log(value);
// // });
//
// promise.then(null, function (e) {
//     console.log(e);
// });


// function waitAdd(num) {
//     return new Promise(function (resolve, reject) {
//         if (num > 2) {
//             reject('Rejected');
//         } else {
//             setTimeout(function () {
//                 console.log(num);
//                 num++;
//                 resolve(num);
//             }, 100);
//         }
//     });
// }
//
// waitAdd(1)
//     .then(waitAdd)
//     .then(waitAdd)
//     .then(waitAdd)
//     .then(function (number) {
//         console.log("tag");
//         console.log(number);
//     })
//     .catch(function (e) {
//         console.log(e);
//     });


let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Resolve');
    }, 1000);
});


let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('Rejected');
    }, 2000);
});

Promise.all([promise1, promise2])
    .then(function (success) {
        console.log('------Promise.all()------');
        console.log(success);
    })
    .catch(function (error) {
        console.log('------Promise.all()------');
        console.log(error);
});


let promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('Show Rejected!');
    }, 500);
});


let promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Resolve');
    }, 1000);
});


let promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('Rejected');
    }, 2000);
});

Promise.race([promise3, promise4, promise5])
    .then(function (success) {
        console.log('-------Promise.race()--------');
        console.log(success);
    })
    .catch(function (error) {
        console.log('-------Promise.race()--------');
        console.log(error);
    });
