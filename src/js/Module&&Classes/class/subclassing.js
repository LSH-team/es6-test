/**
 * Created by lsh on 17/2/8.
 */

class ConvertableArray extends Array {
    convert () {
        let resultArr = [];
        this.forEach(value => resultArr.push('Converted!' + value));
        return resultArr;
    }
}

let numbers = new ConvertableArray();
numbers.push(1);
numbers.push(2);
numbers.push(3);

console.log(numbers.convert());