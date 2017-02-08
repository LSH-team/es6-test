/**
 * Created by lsh on 17/2/8.
 */

// let symbol = Symbol('test');
// let anotherSymbol = Symbol('test');
// let test = 'key';
//
// console.log(typeof symbol);
// console.log(symbol.toString());
// console.log(anotherSymbol == symbol);
//
// let obj = {
//     name: 'lsh',
//     [symbol]: 22,
//     [test]: 1
// };
//
// console.log(obj);
// console.log(obj[symbol]);
// console.log(obj);

let symbol1 = Symbol.for('test');
let symbol2 = Symbol.for('test');

let symbol3 = Symbol('test');
let symbol4 = Symbol('test');

console.log(symbol3 == symbol4);
console.log(symbol1 == symbol2)

