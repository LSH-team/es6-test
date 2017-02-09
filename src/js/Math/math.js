/**
 * Created by lsh on 17/2/9.
 */

let num1 = 10;
let num2 = NaN;
let num3 = -0;
let num4 = +0;
let num5 = -2;

let num6 = 'a string';

//返回数字正负数
console.log(Math.sign(num1));
console.log(Math.sign(num2));
console.log(Math.sign(num3));
console.log(Math.sign(num4));
console.log(Math.sign(num5));
console.log(Math.sign(num6));

console.log('-----------');
//返回整数部分、删除任何小数部分

let a = 21.32;

console.log(Math.trunc(a));

console.log('------------');
//返回小于或等于数值参数的最大整数
let b = 1.32;
let b1 = 0.2;
let b2 = -3.1;

console.log(Math.floor(b));
console.log(Math.floor(b1));
console.log(Math.floor(b2));