let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate);
let myCreatedDate1 = new Date("2023-01-23")
console.log(myCreatedDate1);


//date in milisecconds
let mDate = Date.now()
console.log(mDate);
console.log(myCreatedDate1.getTime());

console.log(myDate.getDay());
console.log(myDate.getFullYear());

console.log(`Today Day is ${myDate.getDay()} and year is ${myDate.getFullYear()}`);
