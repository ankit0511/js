// we declare date in millisecond 
let date = new Date()
console.log(date);
//this will return a complex output 
console.log(date.toString());
// this will give us date and time  // universal time to be very specfic 
console.log(date.toDateString());
// this will give us only date 
console.log(date.toISOString());
console.log(date.toLocaleString());
// this function will give us time time and date of london 
// date is alos an object 
 let myDate =new Date(2023,0,23)

/*
if we carefully oserv the pattern then we can easily come to the 
conclusion that months are assigned from 0 in javascript 

*/
console.log(myDate.toDateString())
// one more function in this series is :
let timeStamp = Date.now()
console.log(timeStamp);
// this will give values in miliseconds 
// to get rid out of this we will divide it by 1000 to get values in seconds
console.log(Math.round(timeStamp/1000));
// this will generate the values in seconds 

/*

there are so many functions are there such as 
getDay();
getMonth();
and so on ..
*/

