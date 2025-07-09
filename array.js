//Array

const myArr = [0,1,2,3,4]
const myHeroes = ["Shakitiman", "Mogli"]

const myArr2 = new Array("Lotus", "Rose")
console.log(myArr[3]);
console.log(myArr2[1]);

//Array Methods
myArr.push(5)
myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);


//slice, splice

console.log("A ", myArr);
const newA = myArr.slice(1, 3)
console.log(newA);
const newB = myArr.splice(1, 3)
console.log(newB);


