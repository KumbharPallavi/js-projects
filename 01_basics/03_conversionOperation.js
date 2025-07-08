let score = "33"

console.log(typeof score)
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

//"33" => 33
//"33abc" => Nan
//true => 1
//false => 0
//null => 0
//undefined => Nan

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true
//0 => false
//"" => false
//"hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)

console.log(typeof stringNumber)


/****Opearions*****/
let value = 3
let negValue = -value
console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 ="Namaste"
let str2 = " India"
let str3 = str1 + str2
console.log(str3);
console.log(1 +2 + "3")

let gameCounter = 101
console.log(gameCounter++);
// console.log(++gameCounter);
