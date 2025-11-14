// Inhertiance is the property of the class where on class inherit property of the other class 
// here we 





class User{
    constructor(username){
        this.username = username; 
    }

    logMe(){
        return console.log(`Hello ${this.username}`);
    }
}

class Instructor extends User{
    constructor(username , email , password){
            super(username); // it will directly acess the parent class and call it constructor nod
            this.email = email;
            this. password = password;
        }

    addcourse(){
        return console.log(`${this.username} introuduce the course`);
    }
}

const user1 = new Instructor("Girish","thoratgirish286@gmail.com" , "Girish@2t");

user1.addcourse();

console.log(user1 instanceof Instructor);
console.log(user1 instanceof User);
console.log(user1)
