const score = 100
const balance = new Number(10)

console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(typeof balance.toString())
console.log(balance.toFixed(2));

const no = 1000000
console.log(no.toLocaleString());


/************Maths **********/
console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(5.7));
console.log(Math.ceil(6.7));
console.log(Math.floor(7.8));

console.log(Math.min(4,5));
console.log(Math.max(78,90));

//value between 0 and 1
console.log(Math.random());

console.log((Math.random()*10) + 1)

const max= 20
const min =10
console.log(Math.random()*(max - min + 1));
console.log(Math.floor(Math.random()*(max - min + 1)));