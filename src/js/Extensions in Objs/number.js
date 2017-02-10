/**
 * Created by lsh on 17/2/10.
 */

let number = 'NaN';
let num = 12.0;
let num1 = Infinity;

console.log('----是否为NaN----');
console.log(isNaN(number));
console.log(Number.isNaN(number));
console.log(isNaN(num));
console.log(Number.isNaN(num));

console.log('-----是否非无穷-----');
console.log(Number.isFinite(number));
console.log(Number.isFinite(num));
console.log(Number.isFinite(num1));

console.log('-----是否整型----');
console.log(Number.isInteger(number));
console.log(Number.isInteger(num));
console.log(Number.isInteger(num1));
