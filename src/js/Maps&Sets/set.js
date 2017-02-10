/**
 * Created by lsh on 17/2/10.
 */

let set = new Set([1,2,3,1]);

set.add(2);
set.add(4);

console.log(set.has(2));

set.delete(1);

console.log(set);

for (let ele of set.entries()) {
    console.log(ele);
}

for (let ele of set) {
    console.log(ele);
}


console.log('----WeakSet-----');
let obj1 = {a: 1};
let obj2 = {b: 2};
let ws = new WeakSet([obj1, obj2]);
let ws1 = new WeakSet([{a: 1}, {b: 2}]);
//WeakSet只接受对象值、不接受原始值
console.log(ws === ws1);
console.log(ws.has(obj2));
console.log(ws1.has(obj1));
console.log(ws1.has({a: 1}));


console.log('----test-----');

ws.delete(obj2);

console.log(ws.has(obj2));

set.add(obj1);
