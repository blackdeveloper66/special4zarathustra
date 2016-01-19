//Primitive values (structure)

//Number    - 0 1 2 3 0.15 0.18
//Boolean   - true/false
//Null      - null
//Undefined - undefined
//String    - 'asdasd', "asd2131", '"asda\'s' "'asda\"asd'

//Number (NaN)
var a = 10;
a = 2 + 2;
a += 2;
a /= 3;
a++;
a--;

//Boolean
var a = true;
var b = 1 == 2 || 2 == 2;

//String
var name = 'Ivan';
var name2 = 'Masha';
var result = 'love';
console.log(name + " " + name2 + " " + result);

if ('10' == 10)  { console.log('10 = 10'); }
if ('10' === 10) { console.log('10 = 10'); }
if ('10' !== 10) { console.log('10 != 10'); }

console.log('0' + 10);
console.log(10 + '0' === 100);
console.log('aaa' + 10 * 2);

//Objects
var a = { aaa : 10 };

var b = a;
b.aaa = 12;

console.log(a.aaa);
console.log(a['aaa']);

console.log(a.bbb); //undefined

a['14  18  99'] = 10;

//Array
//http://javascript.ru/ecma/part15#a-15.4.1
var arr = [];
console.log(arr.length);

arr.length = 10;
console.log(arr[0]);

arr[20] = 10;
console.log(arr.length);
