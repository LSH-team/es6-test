/**
 * Created by lsh on 17/2/11.
 */

// let person = {
//     name: 'lsh'
// };
//
// let handle = {
//     get(target, name) {
//         return name in target ? target[name] : 'Not existant';
//     },
//     set(target, property, value) {
//         if (value.length > 3) {
//             Reflect.set(target, property, value);
//         }
//     }
// };
//
// var proxy = new Proxy(person, handle);
//
// console.log(proxy);
// console.log(proxy.age);
//
// console.log(proxy.name);
//
// proxy.name = 'l';
//
// console.log(proxy.name);
//
// proxy.name = 'Good Lucky';
// console.log(proxy.name);
//
// var proxy1 = new Proxy({}, handle);
//
// Reflect.setPrototypeOf(person, proxy1);
//
// console.log(person.hobbies);

// let hand = {
//     set(target, property, value) {
//         Reflect.set(target, property, value);
//     }
// };
//
// let pro = new Proxy({}, hand);
//
// let protoProxy = new Proxy(pro, handle);
//
// Reflect.setPrototypeOf(person, protoProxy);
//
// console.log(person.name);
// console.log(person.hobbies);
//


// function log(message) {
//     console.log('Log entry created, message: ' + message);
// }
//
// let handler = {
//     apply: function (target, thisArg, argumentsList) {
//         console.log('target: ' + target);
//         console.log('thisArg: ' + thisArg);
//         console.log('argumentsList: ' + argumentsList);
//         if (argumentsList.length == 1) {
//             return Reflect.apply(target, thisArg, argumentsList);
//         }
//     }
// };
//
// let proxy = new Proxy(log, handler);
//
// proxy('Hello');

console.log('----Proxy.revocable随时取消对target代理，封闭对数据或接口的访问');
let person = {
    name: 'lsh'
};

let handler = {
    get: function (target, property) {
        return Reflect.get(target, property);
    }
};

let {proxy, revoke} = Proxy.revocable(person, handler);

console.log(proxy.name);

revoke();

console.log(proxy.name);

