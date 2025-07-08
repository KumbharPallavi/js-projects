let objOne = {
    email : "user@google.com",
    age : 22
}

let objTwo = objOne
objTwo.email = "test@google.com"

console.log(objOne.email);
console.log(objTwo.email);

