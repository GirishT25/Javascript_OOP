let hero = ["Thor" ,"Iron Man"];

let hero_Power = {
    thor : "Hammer",
    IronMan : "Tech",

    getThorPower  : function(){
        console.log(`The Power of the Thor is ${this.thor}`);
    }
}
// Here we access the object heriarchy and using the prototype we create a function which is acessible throughout anywhere
Object.prototype.Girish = function(){ 
    console.log("Yes  is also  a SuperHero")
}

hero_Power.Girish(); // to create the function which is accessible everywhere we can use the prototype
hero.Girish(); // her we can access the function anywhere 


// -------------------Old style Inhertiance using objects ---------------------------

const User = {
    name: "Girish",
    email :"thoratgirish286@gmail.com"
}

const course = {
    course_name : "Computer",
    duration : "4 years"
}

// course.__proto__ = User;
Object.setPrototypeOf(course , User); // Here we are using the setPrototype method to give the access of the object 
                                      // It is same as extends keyword i.e which is like the one class has the access
                                    //   of the methods , var , functionalites of the parent class

console.log(course.name)

// -----------------------------------End of Inhertiance--------------------------------------------------------------

const demo_String = "Girish    ";
console.log(demo_String.length) // here we see we can get the space of the string as the length of the string
console.log(demo_String.trim().length) // we can also get the original length using this . but as the string increases
                                       // the use of trim().length also increase and it is time conusming so we will create
                                       // a function that will give  the truelenght of string using the prototype 

// Here we create the method which will give the acess of the orginal length
String.prototype.trueLength = function(){
    console.log(`True length of the String : ${this.trim().length}`);
}

demo_String.trueLength();
"Iron Man    ".trueLength(); // here we see we can directly access the method on the string also
