const user = {
    username: "ankit",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="Patel Saab"
// user.welcomeMessage()
console.log(this);
/*
this will return empty value in output 
*/

function paneer(){
    // if i initlize the  varible in thi s function 
    let username ="ankit"
    // and then try to print the value using this operator then 

    console.log(this.username);
    /*
    this will give us undefined as output 
    on this basic we can calculate that 
    this is only used in objects not in functions 
    */
}
paneer()

// ********Arriw function ********



//  const samosa =()=>{ // this is th earrow operator =>
//     let additional = "chatni"
//     console.log(this.additional);
//  }
//  samosa()
// the output of this code is also undefined 

 /* 
 
 const samosa =()=>{ // this is th earrow operator =>
    let additional = "chatni"
    console.log(this);
 }
 samosa() 
 
 */
 // and output of this one will be this ---> {}

// basic syntex of arrow function 
// ()=>{}
//  const addition =(num1, num2)=>{
//    return num1+num2
//  }

// we can also write the same function in other way 
const addition =(num1, num2)=>  (num1+num2)
// implicitly return function 
 console.log(addition(7,4));