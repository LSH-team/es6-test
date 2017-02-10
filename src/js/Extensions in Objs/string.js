/**
 * Created by lsh on 17/2/10.
 */


let name = 'lsh sh';

console.log('----startsWith-----');
console.log(name.startsWith('l'));
console.log(name.startsWith('L'));
console.log(name.startsWith('ls'));
console.log(name.startsWith('lh'));
console.log(name.startsWith('s'));

console.log('-----endsWith------');

console.log(name.endsWith('s'));
console.log(name.endsWith('SH'));
console.log(name.endsWith('sh'));
console.log(name.endsWith('h'));
console.log(name.endsWith('lsh'));

console.log('-----includes------');

console.log(name.includes('s'));
console.log(name.includes('S'));
console.log(name.includes(('sh')));
console.log(name.includes('hs'));
console.log(name.includes('h s'));
