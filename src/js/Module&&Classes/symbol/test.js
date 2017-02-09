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

// let symbol1 = Symbol.for('test');
// let symbol2 = Symbol.for('test');
//
// let symbol3 = Symbol('test');
// let symbol4 = Symbol('test');
//
// console.log(symbol3 == symbol4);
// console.log(symbol1 == symbol2);
// //
// let person = {
//     name: 'lsh',
//     age: 25
// };
//
// function makeAge(person) {
//     let ageSymbol = Symbol.for('test');
//     let ageSymbol1 = Symbol('test');
//     person[ageSymbol] = 22;
//     person[ageSymbol1] = 23;
// }
//
// makeAge(person);
//
// console.log(person[symbol1]);
// console.log(person[symbol2]);
// console.log(person['age']);
// console.log(person[symbol3]);


let numbers = [1,2,4];

console.log(numbers[Symbol.toStringTag]);

console.log(typeof (numbers + 1));
console.log(numbers + 1);

numbers[Symbol.toPrimitive] = function () {
    return 999;
};

console.log(numbers + 1);
console.log(numbers);


