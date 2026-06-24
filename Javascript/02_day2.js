const arr=[3,5,7,8,9]
console.log(arr.push(1));
console.log(arr.slice(1,4));  
//slice sirf return krta hai 
//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log(arr.splice(1,4)); //The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place...

console.log(arr);

const a = new Array(1,2,3,4,5,66,7,7,8)
console.log(a);
console.log(a.pop(4));
console.log(a.shift(8));
console.log(a.unshift(3))
console.log(a);

//map
console.log(a.map((c)=>c*2));

//filter
console.log(a.filter(Number=>Number>3));

//length

const b= [2,4,5,678,99,0]
console.log(b.length);

//find

console.log(b.find(x=>x==99));

//findIndex

console.log(b.findIndex(x=>x==5));

//includes

console.log(b.includes(678));

//reverse

console.log(b.reverse())
//foreach
b.forEach((x)=>console.log(x))

//toString

console.log(b.toString());
console.log(b.toLocaleString());

let Number =10000000;
console.log(Number.toLocaleString("en-IN"));
console.log(Number.toLocaleString());

//FLAT METHOD
const c=[1,2,3,[4,5],6,[7,8,[9,10,[11,12]]]];
console.log(c.flat(Infinity));

//concat method
let d=[1,2,3]

console.log(d.concat(4,5,6));
//join
let f=['hg','56','fvfb']

console.log(f.join('-'));
//sort

let g=[3,1,5,0,7,2,5,6,1,2,9,5]
console.log(g.sort().reverse());
