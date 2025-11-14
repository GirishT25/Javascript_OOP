// // this is an get set method where we need values form the class and how do we need to acess it 
// // to solve this we can sent the values when the user will acess the values according to the our need
// // for security purpose how dow we need to reply on this 


// class User{
//     constructor(name , email){
//         this.name = name;
//         this.email = email
//     }
//     get name(){ 
//         return this._name.toUpperCase();  // here we see acess the name variable by '_' starting to that to because if
//                                           // don't use this it will show the execed the call stack error due to repatively calling the 
//                                           // the get function due to  returing the same variable it change the values
//     }
//     set name(value){
//         this._name = value; // here we see we returing the name value to the value variable
//                             // due to this it overwrite the value and return this value
//     }
//     get email(){
//         return this._email.toUpperCase();
//     }
//     set email(value){
//         this._email = value;
//     }
// }

// const user1 = new User("Girish" , "thoratgirish286@gmail.com");
// console.log(user1.email);
// console.log(user1.name);



function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);


function New_User(email , password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this , 'email' ,{
        get : function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value;
        }
    })
}

const user2 = new New_User("Girish@gamil.com" , "Girish@2509");
// console.log(user2);
console.log(user2.email);


// Getter and setter using the object
 const new_obj = {
    _email : "girish@2509@gmail.com",
    _password : "Girish@2509",
    
  get email(){
    return this._email.toUpperCase();
  },
  set email(value){
    this._password = value
  }
}

console.log(new_obj._password);

 