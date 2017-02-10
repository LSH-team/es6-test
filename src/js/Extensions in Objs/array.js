/**
 * Created by lsh on 17/2/10.
 */

let array = Array.of(4, 3, 5);

console.log('----Array.of()-----');
console.log(array);

console.log('-----Array.from-----');
let newArray = Array.from(array, val => val);
let arr1 = array;
arr1[0] = 10;
newArray[0] = 8;
console.log(arr1);
console.log(newArray);
console.log(array);

console.log('-----Array.fill填充数组-----');
array.fill(10);
console.log(array);
array.fill(2, 0, 2);
console.log(array);

console.log('----Array.find()------');
console.log(array);
console.log(array.find(val => val > 1));

let inventory = [
    {name: 'apple', quantity: 2},
    {name: 'bananas', quantity: 3},
    {name: 'cherries', quantity: 4}
];

console.log(inventory.find((fruit) => fruit.name === 'cherries'));

console.log('----Array.indexOf-----');
console.log(array.fill(5, 1, 2));
console.log(array.indexOf(1,3));
console.log(array.indexOf(2));
console.log(array.indexOf(2, -1));
console.log(array.indexOf(2, -3));
console.log(array.indexOf(2, -4));

console.log('-----Array.copyWithin()------');
//不改变数组length
console.log(array);
console.log(array.copyWithin(1, 2));
console.log(array);
console.log(array.copyWithin(2, 0));
console.log(array);
console.log('---');
console.log(array.copyWithin(2, 4));
console.log(array);
console.log(array.copyWithin(2, 1, 3));

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
console.log([1, 2, 3, 4, 5].copyWithin(0, 2, 4));
console.log([1, 2, 3, 4, 5].copyWithin(2, 2, 4));

let arr = ['a', 'b', 'c'];

console.log('----entries()------');
let it = arr.entries();
for (let [idx, ele] of it) {
    console.log(idx + ": " + ele);
}

console.log('----keys()----');
for (let key of arr.keys()) {
    console.log(key);
}


