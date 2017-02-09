/**
 * Created by lsh on 17/2/9.
 */
//
// let obj1 = {
//     a: 1
// };
//
// let obj2 = {
//     b: 2
// };
//
// var obj = Object.assign(obj1, obj2);
//
// console.log(obj);

// class Obj1 {
//     constructor() {
//         this.a = 1;
//     }
// }
//
// class Obj2 {
//     constructor() {
//         this.b = 2;
//     }
// }
//
// var obj1 = new Obj1();
// var obj2 = new Obj2();
//
// var obj = Object.assign(obj1, obj2);
//
// console.log(obj);
// console.log(obj instanceof  Obj2);
// console.log(obj.__proto__ === Obj1.prototype);
// console.log(obj.__proto__ === Obj2.prototype);
// console.log(obj.__proto__ === Object.prototype);
//
// console.log('改变对象属性');
// obj = Object.assign({}, obj1, obj2);
//
// console.log(obj.__proto__ === Obj1.prototype);
// console.log(obj.__proto__ === Obj2.prototype);
// console.log(obj.__proto__ === Object.prototype);
//
// console.log(Obj1.prototype);
// console.log(obj.__proto__);

let person = {
    name: 'lsh'
};

let boss = {
    name: 'gqz'
};

console.log(person.__proto__ === Object.prototype);

Object.setPrototypeOf(person, boss);

console.log(person.__proto__);
console.log(person.name);

console.log(person.__proto__ === boss);

console.log(person.name);
