//Singleton object
const name = new Object();

//Non Singleton Object
const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name ="test1"
tinderUser.email = "test1@google.com"

console.log(tinderUser);

const username ={
    email:"test@google.com",
    fullname:{
    userfullname:{
        firstname: "Ajay",
        lastname: "Joshi"
    }
}
}

console.log(username.fullname.userfullname.firstname)

const obj1={
    1: "a",
    2: "b"
}

const obj2={
    3: "c",
    4: "d"
}

console.log(obj1, obj2);

// const obj3 = Object.assign()
const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj3);
console.log(obj4);

//we can do it with spread operator ...
const obj10 = {...obj1, ...obj2}
console.log(obj10);

const users = [
    {
        name: "test1"
    },
    {
        name: "test2"
    },
    {
        name: "test3"
    },
    {
        name: "test4"
    },
    {
        name: "test5"
    },
]

console.log(users[1].name);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('email'));




