/**
 * Created by lsh on 17/2/8.
 */

class Person {
    constructor(name){
        this.name = name;
    }
    greet() {
        console.log('hello ' + this.name);
    }
}


let person = new Person('lsh');

person.greet();