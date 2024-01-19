let name ="ankit" // this  string data type we can use it in " "or in '' too
let age =22 //  range of intinger value is  from -(2^53 - 1) to 2^53 - 1.
let male = true

// null -> it is basically a  stand-alone value or we can say is type  --also it is the representaion of any value 
// undefined is another datatype --> 
// symbol --> when we need to talk about uniqueness then we talk about symbols 
//  object

//  with the help of typeof() function we can find the type of any datatype 

console.log( typeof "ankit", typeof age ,typeof null ,typeof undefined);
//  in this above log the type of null is basically a object 
// whreas the type of undefined is remaine  undefined 



/*
#Premative Datatype:- These all are call by value 
1.String
2.Number 
3.Boolean
4.Undefined
5.Symbol(to make any value unique )
6.BIG Int 


# Reference Type (Non Premative )
(we will get diract Reference of these datatype )
1.Array
2.Object 
3.Functions  

*/
let test = Symbol("123")
let test1 = Symbol("123")
console.log(test);
console.log(test1);
console.log(test===test1);
console.log(test==test1);

const heros=["shaktiman","ankit","doga","aman"]
// we will use square brackets for array 
console.log(heros);
let myself= {
    name :"ankit",
    age :22,
    sex:"male  ",
    about:"hero aadmi hu ",
}
console.log(myself);
// we will decleare the object inside the { } braces also known as body of the object 

 let me = function(){
    /*
    we can also wrap up the function into a varible  
    the datatype of this function willl be function 
    or in more precie manner we can call is object function
    */
    }