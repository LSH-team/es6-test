/**
 * Created by lsh on 17/2/8.
 */

// class Helper {
//     static logTwice(message) {
//         console.log(message);
//     }
// }
//
// Helper.logTwice('Logged!');

class Person {
    constructor(name){
        this.name = name;
    }
    greet() {
        console.log('hello ' + this.name + ' ! my age is ' + this.age);
    }
}


// let person = new Person('lsh');

// console.log(person.__proto__ == Person.prototype);

class Son extends Person {
    constructor(age) {
        super('lsh1');
        this.age = age;
    }

    greet() {
        console.log('hello!');
    }

    greetTwice() {
        this.greet();
        super.greet();
    }

}

let son = new Son(23);
son.greet();
son.greetTwice();
console.log(son);

console.log(son.__proto__ === Son);
console.log(son.__proto__ === Son.prototype);
console.log(son.__proto__ === Person.prototype);

