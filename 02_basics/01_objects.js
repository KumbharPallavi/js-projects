//Singleton
//Object create

//object literals
const mySym = Symbol("key1")

const JsUser ={
    name : "Urmila",
    [mySym] : "mykey1",
    age: 22,
    place: "Jaipur",
    email: "urmila@google.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email="test@google.com"
console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email="test@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Good Morning");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());


JsUser.greeting2 = function(){
    console.log(`My name is ${this.name}`);
}

console.log(JsUser.greeting2());
