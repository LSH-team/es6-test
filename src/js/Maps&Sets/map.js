/**
 * Created by lsh on 17/2/10.
 */

let a = {
    name: 'a'
};

let b = {
    name: 'b'
};

let c = {
    name: 'c'
};

let p = new Map();

p.set('A', a);
p.set('B', b);
p.set('C', c);

console.log(p);

console.log(p.size);

p.set('A', a);

console.log(p.size);

console.log(p.get('A'));


for (let key of p.keys()) {
    console.log(key);
}

for (let val of p.values()) {
    console.log(val);
}

for (let [key, value] of p.entries()) {
    console.log(key + ": " + value);
}

console.log(p);
for (let ele of p) {
    console.log(ele[0] + ": " + ele[1].name);
}

console.log('----Map-----');

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

console.log([...map]);
console.log(typeof [...map]);

console.log([...map.keys()]);
console.log(typeof [...map.keys()]);

console.log([...map.values()]);
console.log(typeof [...map.values()]);

console.log([...map.entries()]);
console.log(typeof [...map.entries()]);

console.log('----WeakMap-----');
let key1 = {a: 1};
let key2 = {b: 2};

let deck = new WeakMap();
deck.set(key1, a);
deck.set(key2, b);

console.log(deck.get(key1));