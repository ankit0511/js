//  let a =10
//  const b=20
//  //var c= 30
//  // generally we did not use the var keyword bcoz it is a global scope 

// if(true){
// let a=200
//  let b=100
// console.log("inner value of b",b);
// console.log("inner value of a",a);

 //-->scope 
// console.log(b);
// console.log(a);

//nested functions 

// function one(){
//     const username = "ankit"
//     function two(){
//         const website ="github.com"
//         console.log(username)
//     }
    // console.log(website);
//     two()

// }
// one()

// now there are two in which we can declare the function 
//1.

// function addone(num){
//     return num+1
// }
//   console.log(addone(5))

// //2.
// const addtwo = function(num){
//     return num+2
// }
//  console.log(addtwo(10))
 /*

 bothr the function wil work properly but when we 
 bring the function declearation above the function call then the second function will give us the
 error 
 */
// console.log(addone(5))

//  function addone(num){
//     return num+1
// }

// //2.
// const addtwo = function(num){
//     return num+2
// }
//  console.log(addtwo(10))
 /*
 the above code is working fine 
 */

 function addone(num){
    return num+1
}
  console.log(addone(5))

//2.
console.log(addtwo(10))

const addtwo = function(num){
    return num+2
}
/*
but this code gives us the error 
 Cannot access 'addtwo' before initialization
    at Object.<anonymous> 
*/