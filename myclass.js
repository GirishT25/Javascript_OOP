// here we see the creation of the class and in the class we dont need to wirte the keyword funciton for creating the 
// Function
// construtor is used to exectue automatically when the new object is created 


class User{
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return console.log(`${this.password}#wer`);
    }
    hiuser(){
        return console.log(`Hello ${this.username} `);
    }
}


const newUser =  new User("Girish" , "thoratgirish286@gmail.com" , "Girish@2509");

// newUser("Girish" , "thoratgirish286@gmail.com" , "Girish@2509");
newUser.encryptPassword();
newUser.hiuser();