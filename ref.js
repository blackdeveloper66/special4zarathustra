var obj = {};
console.log(obj); // {}

obj.name = 123;

console.log(obj); // { name : 123 }

obj['sur name'] = 'Vasya';

console.log(obj); // { name : 123, "sur name" : "Vasya" }