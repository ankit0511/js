console.log(Math);
console.log(typeof Math);
//absloute value 
console.log(Math.abs(-13));
// round function will round off the number ..
console.log(Math.round(4.6));
// if we want to control this round of .. we can use predefiend function celling and floor 
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
/*
also so many function are there ... like sqrt 
power 
.min( to find the minimum value present);
.max ();

*/
// math.rendom --> it will get any values between zero and one 
console.log(Math.random());
// to generate values according to aur need we basically multiply the output by 10 100 1000 or many more 
console.log(Math.random()*10+1);
// here we arw adding 1 just to avoid the output to be zero 
let val = (Math.random()*10)+1;
let ans = Math.round(val);
console.log(ans);