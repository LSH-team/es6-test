// /**
//  * Created by lsh on 17/2/10.
//  */
//
// console.log('----construct-----');
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }
//
// function TopObj() {
//     this.age = 22;
// }
//
// let person = Reflect.construct(Person, ['lsh'], TopObj);
// let person1 = Reflect.construct(Person, ['lsh']);
//
// console.log(person);
// console.log(person1);
// console.log('--------');
// console.log(person instanceof Person);
// console.log(person.__proto__ === TopObj.prototype);
//
//
// console.log('----apply-----');
//
// class Person2 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet(prefix, p) {
//         console.log(prefix + p);
//         console.log('Hello! ' + this.name + ' ' + prefix + p);
//     }
// }
//
// let person2 = Reflect.construct(Person2, ['lsh', 22]);
// Reflect.apply(person2.greet, person2, []);
// Reflect.apply(person2.greet, {name: 'li'}, ['...', '!!!!!!']);
//


// console.log('-----prototype-----');
// class Person {
//     constructor() {
//         this.name = 'lsh';
//     }
// }
//
// let person = new Person();
//
// Person.prototype.age = 27;
//
// let proto = {
//     age: 30,
//     greet() {
//         console.log('Hello!');
//     }
// };
//
// console.log(person);
//
// console.log(Reflect.getPrototypeOf(person));
//
// Reflect.setPrototypeOf(person, proto);
//
// console.log(Reflect.getPrototypeOf(person));
// console.log(person.__proto__);
// console.log(person);
//
// person.greet();
// console.log(person.age);
// console.log(person.name);
//
// Reflect.apply(person.greet, null, []);
// console.log(Reflect.getPrototypeOf(person));
// console.log(Reflect.getPrototypeOf(person) === Person.prototype);
// console.log(person.__proto__ === Person.prototype);
// console.log(person.__proto__.prototype === Object.prototype);

// console.log('-----set-----get--------');
//
// class Person1 {
//     constructor(name, age) {
//         this._name = name;
//         this.age = age;
//         // this.name = name;
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     set name(value) {
//         this._name = value;
//     }
// }
//
// let mum = {
//    _name: 'mum'
// };
//
// let person1 = new Person1('lsh', 22);
// console.log(Reflect.get(person1, 'name'));
// console.log('----get-----');
//
// Reflect.set(person1, 'name', 'lll');
//
// console.log(Reflect.get(person1, 'name'));
//
// console.log(Reflect.get(person1, 'name', mum));
//
// console.log('----set-----');
// Reflect.set(person1, 'name', 'LSH');
//
// Reflect.set(person1, 'name', 'LSH', mum);
//
// console.log(Reflect.has(person1, 'name'));
//
// console.log(Reflect.has(person1, '_name'));
//
// console.log(Reflect.ownKeys(person1));
//
console.log('---preventExtensions----');
Reflect.preventExtensions(person1);
console.log(Reflect.isExtensible(person1));

console.log('---defineProperty-----');
Reflect.defineProperty(person1, 'hobbies', {
    // writable: false,
    writable: true,
    value: ['Sports', 'Cooking']
});
console.log(person1);
person1.hobbies = ['Nothing'];

console.log(person1.hobbies);

console.log('----deleteProperty-----');
Reflect.deleteProperty(person1, 'age');
console.log(person1.age);


let arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, "2");
console.log(arr);






