//alert('hello world');

console.log('welcome');
console.log(1234);
console.log(23.5676);
console.log(true);
console.log([11,22,33,44,55]);
console.log({fname:'sk',age:18});
console.table({fname:'sk',age:18});
console.error('this is wrong');
console.warn('error happened')
//console.clear();
console.time('Timer:');
for(i=0;i<10;i++){
    console.log(i)
}
console.timeEnd('Timer:')

var a=20;
var b=90;
console.log(a+b);

/*
// var global

if(true){
    var s='hello';
}
console.log(s)     

//let local

if (true) {
  let d = "hello";
}
console.log(d);     

//const local

if (true) {
  const k = "hello";
}
console.log(k);     
*/

/*
// redeclare

var a=9;
var a=10;
console.log(a);

let h = 9;
console.log(h);

let h = 10;
console.log(h);

const p = 9;
console.log(h);

const p = 10;
console.log(p);
*/


const s={name:'sk',age:'18'}
console.table(s)
s.name='ak'
console.table(s);

//-------------------------

var a="hello"
var a=90
a=99

let c="sk"
//let c=99
c=88

const o=90
//const o="sk"
o=99
console.log(o);