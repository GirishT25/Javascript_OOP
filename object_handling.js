// here we see the getOwnPropertyDescriptor is used to get the property of the object is it
//  writable , enumrable , itreatble 
// so to handle this we have an defineProperty concept that will change the properties of user created object
// Not the Javascript fucntion is created by the Javascript 


const descripter = Object.getOwnPropertyDescriptor(Math , "PI");
console.log(descripter);

console.log(Math.PI);
Math.PI = 5 ;
console.log(Math.PI);


const user = {
    name : "Girish",
    email :"thoratgirish286@gmail.com",
    greet : function(){
        console.log(`Hello ${this.name}`);
    }
}

console.log(Object.getOwnPropertyDescriptor(user , "name"));


Object.defineProperty(user , 'name',{
    // writable : false,
    // enumerable : false,
});

console.log(Object.getOwnPropertyDescriptor(user , "name"));

for (let [name, email] of Object.entries(user)) {
    if(typeof email !== 'function'){ // if we dont use the condition it will show the whole fucntion in the code
        console.log(`${name} : ${email}`); // This arsie the a Theme i.e 'Code Fhat Jaye Ka' 
    }
}
