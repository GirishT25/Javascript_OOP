// Here we see the if we call any function with in the another function it does not take the context references
// because the function get call in the another function release it context and the variable does it holding it
// to solve this we can use the 'call' keyword  so the execution get start but the parameter we need to pass like
// fucntion.call(this , variable_name) --> this will refer to use our current context and use our variable 

function SetUser(username){
    this.username =  username
    return console.log("called");
}

function createUser(username, email , password){
    SetUser.call(this , username)
    this.email = email;
    this.password = password;
}

const user = new createUser("girish" , "thoratgirish286@gmail.com" , "Girish@2509");
console.log(user);