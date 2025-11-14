class User{
    constructor(username){
        this.username = username
    }

    static logMe(){
        return console.log(`This is the Useer ${this.username}`);
    }
}

const user1 = new User("Girish");
// user1.logMe();

class newUser extends User{
    constructor(name , email){
        super(name);
        this.email = email;
    }

}

const user2 = new User("Girish" , "thoratgirish286@gmail.com");
console.log(user2);
// user2.logMe();

