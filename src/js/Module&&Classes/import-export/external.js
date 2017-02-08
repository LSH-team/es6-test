/**
 * Created by lsh on 17/2/8.
 */

let keyValue = 100;

function test() {
    keyValue = 200;
    console.log('tested');
}

let ab = 'text';

export { keyValue, test};

export default ab;