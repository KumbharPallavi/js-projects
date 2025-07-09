const name = "ABC"
const repoCount = 27

//latest code syntax
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const strName = new String("Canada");
console.log(strName[0]);
console.log(strName.__proto__);
console.log(strName.length);

console.log(strName.toLowerCase());

console.log(strName.charAt(2));
const newStr = strName.substring(0,4);
console.log(newStr);

const anotherStr = strName.slice(-3, 4);
console.log(anotherStr);


const oneStr = "  Japan   "
const newStr1 = oneStr.trim(oneStr)
console.log(newStr1);

const url = "https://ajay%20deshmukh.com"
console.log(url.replace('%20', '-' ))
console.log(url.includes("ajay"))
console.log(url.split('%20'));
