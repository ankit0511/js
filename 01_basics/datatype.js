let score = "33"
let score1 = "33abc" // some rendom string 
console.log(typeof score )
console.log(score )
 let valueInNumber = Number(score)
 // here what we are doing is we are just trying to convert strin to number 
 let value = Number(score1) 
 //converting this string into number 
 console.log(value) // this line will give output NaN -->  not a number 
 console.log(typeof(value))
console.log(typeof(valueInNumber))

/*it any varible contain null value then fater conversion to the number 
it will become zero(0)
--> also if any varible is undefined then after conversion we will get NaN ->(Not A Number )
*/
// if we conver any string into boolen then it will return #true value 
//  also when we try to convert empty string to boolen then it will return false as output  