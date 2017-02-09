/**
 * Created by lsh on 17/2/9.
 */

// let obj = {
//     [Symbol.iterator]: gen
// };
//
// function *gen() {
//     yield 1;
//     yield 2;
// }
//
// for (let ele of obj) {
//     console.log(ele);
//}

function *gen(low, high) {
    for (let i=low; i<= high; i++) {
        try {
            yield i;
        } catch (e) {
            console.log(e);
        }
    }
}

let it = gen(2, 7);

// for (let ele of it) {
//     console.log(ele);
// }

// console.log("------------");

console.log(it.next());
console.log(it.next());
console.log(it.throw('error'));
console.log(it.return('return'));
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


// function *select() {
//     yield 'one';
//     yield 'two';
//     for (var i=0; i < 3; i++) {
//         yield i;
//     }
// }
//
// let it = select();
//
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());