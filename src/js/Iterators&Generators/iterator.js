/**
 * Created by lsh on 17/2/9.
 */

// let array = [1,2,3];
//
// let it = array[Symbol.iterator]();
//
// console.log(it);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

let money = Symbol('money');
let arr = ['first', 1,4, 2, 'sencond'];
let obj = {
    name: 'lsh',
    age: '13',
    [money]: 1000
};

arr[Symbol.iterator] = function () {
    let nextValue = 10;
    return {
        next: function () {
            nextValue++;
            return {
                done: nextValue > 14 ? true: false,
                value: nextValue
            };
        }
    };
};

console.log(arr);
console.log('---for of ----');
for (let ele of arr) {
    console.log(ele);
}

console.log('----for in -----');
for (let ele in arr) {
    console.log(typeof ele + ': ' + arr[ele]);
}

console.log('----for of 获取对象key和value------');

console.log(obj);

for (let key of Object.keys(obj)) {
    console.log(key);
    console.log(obj[money]);
}

console.log('-------for in 获取对象key');
let inObj = {
    first: 1,
    1: 3,
    second: 2
};
for (let ele in inObj) {
    console.log(ele);
}




