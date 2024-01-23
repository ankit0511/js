// singleton :- it is the special type of object which is unique of its own type 
 // we made singleeton objects with the help of consructor 


 //Object.create->this is the object creation using constructor 

 // objects literals 
 const Js_user=  {
    name : "ankit",
    age : 22,
    gender :"male",
    collage:"jec jabalpur",

    
 }
 // to change the values 
 Js_user.collage="dhsgsu.sagar"
 // we can also freeze any value 
 // Object.freez(name of object)--> this is the basic syntex of js to freez any object 
 console.log(Js_user.collage);
 // there is one more way to call the object 
 console.log(Js_user["name"]);
 /*
 so behind the scene what is happening is the name is considerd as string -->"name" like this 
 
 */
 const Js_user1=  {
   "name" : "ankit",/* when we initilize the literals of objects like this
    it will become impossible for we ppl to acces this object value using 
    .operator so we use []-> square brackets to access this */
   age : 22,
   gender :"male",
   collage:"jec jabalpur",
}
console.log(Js_user1["name"]);

/*

so if we want to declare the symbol and declare it inside the object key 
so we have to follow a syntex 
*/
let mySym = Symbol("mynum")
const smbl ={
   [mySym]:"keyvalue",
}
console.log(smbl[mySym])// to access we have to use it in the []brackets 
console.log(typeof mySym)


// we can also use functions in this 

Js_user.greet = function () {
   console.log("Hello Ankit Sir ");
}
console.log(Js_user.greet);
// when we run this function it will give us dunction return back as output 
console.log(Js_user.greet());
// and with the paranthsis it will give us the correct output 

// to greet the user from the object keys we can 
Js_user.greet1 = function () {
   console.log(`Hello Mr, ${this.name}`);}
   console.log(Js_user.greet1());