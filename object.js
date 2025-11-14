function multiplyby5(num){
    return num * 5;
}
multiplyby5.power = 2; 
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype)

/// here wee see the prototype is return an object because everything in javascript is an object
// array string function everything;

// the prortotype do everything beyond the execution it holds the current context and store the all things in its context
// the javascript do search level wise it search the level untill it get the null value
// the prototype is get as the level of the javascript 



// this is the basic creation of the function with the refering the this keyqord
function createUser(Username , score){
    this.Username = Username; // this.Username tell us that it refer to the current context variable
    this.score = score;
}

// As the createuser is function it is an object . So we create the an other fucntion with the help of the prototype
// the prototype is like inhertiance it serach to the parent grandparent untill it get the value /  null


// here we create prototype increment on the createUser fucntion so that whenever an new object is created with the 
// create user function this increment function can also be accessbile
createUser.prototype.increment = function(){
    let score = this.score++  // use of this keyword like whenever the new object is created for this it will refer to that user 
  console.log(`there is increment in the user score ${score}`); // 
}
createUser.prototype.printMe = function(){
    console.log(`Username of  user is ${this.Username}`);
}
const user1  = new createUser("Girish" , 25); // here the new keyword is used to create the new object of the createUser Function 
const user2 = createUser("Joey" , 23); //


user1.increment() // here it show that it is accessbile to the object of the createUser 
user1.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.

*/



