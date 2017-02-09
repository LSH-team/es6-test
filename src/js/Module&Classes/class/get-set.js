/**
 * Created by lsh on 17/2/8.
 */

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        if (value.length > 2) {
            this._name = value;
        }
        console.log('Rejected');
    }
}

let person = new Person('so');
console.log(person._name);
console.log(person.name);
person.name = 'Lsh';
console.log(person._name);
console.log(person.name);