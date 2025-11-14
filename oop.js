const user = {
    name: "Girish",
    age : 21,
    signedIn : true,
    getuserdetail : function (){ // this keyword refers to the current object / context
            // console.log(name);
            console.log(this.name) // it will access the current object varaiable
    }  
}

console.log(user.getuserdetail());


// Here we create the constructor function which is normal function and it is used to create or intialized the new object

function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne =  new User("Girish" , 5 , true );
console.log(userOne)
const userTwo = new User("Joey" , 5 , false);
console.log(userOne);  // here we see the creation of the constructor function and strore it in userTwo it overwrite the data
 // To avoid this usee 'new' Keyword
// It help in creating the new object       

