/**
 * Created by lsh on 17/2/8.
 */


// import c, {keyValue as value, test} from './external';

// console.log(value);
// test();
// console.log(value);
// console.log(c);

import * as imported from './external.js';

console.log(imported);
console.log(imported.keyValue);
imported.test();
console.log(imported.default);
