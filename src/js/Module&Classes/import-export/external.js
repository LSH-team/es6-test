/**
 * Created by lsh on 17/2/8.
 */

let keyValue = 100;

function test() {
    keyValue = 200;
    console.log('tested');
}

let ab = 'text';

function returnValue() {
    return {
        x:1,
        y:2
    }
}

console.log(returnValue())

export { keyValue, test};

export default ab;