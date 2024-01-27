// for of loop 
//  const arr =[ 1,2,3,4,5]
//  for( const val of arr ){
//     console.log(val);
//  }
//  // map 
//  const map = new Map()
// map.set('IN',"india ")
// map.set('dushman',"pakistan")

// for( const [key,value] of map){
//     console.log(key, ':-',value)
// }
// // we can not iterate the objects using this loop 



// dealing with objects 
const myObjects ={
 js:'javascript',
 cpp:'c++',
 rb:'ruby'
}

// for in loop 
// for (const key in myObjects) {
//    console.log(`${key} and the name is ${myObjects[key]}`);
          
// }



// for Each loop  using functions 
const array = ["ankit", "ankshul","aayush","ajay"];
array.forEach(function (val) {
    console.log(val)
});
// using arrow operator 
array.forEach(element => {
    console.log(element);
});