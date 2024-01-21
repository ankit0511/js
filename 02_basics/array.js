 // slice vs splice ->
 /*
 so basicallly slice did no tmake modification in norignal array 
 but in case of splice --> the orignal array get modified 
 */

 const dost = [ "ankit","anshul","rajesh", "jatin"]
 const dushman = ["anshul","ajay", "atul", "anand"]
//  dost.push(dushman);
 /* if we are pushing the entire array then at the end of the array the
 whole array get pushed as single index ... 
 which means on the  fifth index the whole #dushman array is present
 */
//  console.log(dost);

//  const newarr = dost.concat(dushman)
//  console.log(newarr);
 /*
 also when we concate the two arrays the output will the new array combinig the elements of both the arrays 
 */

 // in place of concat we can also use spread 
//  const combArr = [...dost,...dushman];
//  console.log(combArr);
 /*
 with this function or method we are first spreading the array and the combined both the arrays 

 majore benifit is that we can combine multiple arrys with the help of this command or function 
 */

  console.log(Array.isArray("Ankit"));
  console.log(Array.isArray(dost));

  // this line tells weather this array is presnt or not 
  console.log(Array.from("Ankit"));
  // this will make the array for us i fnot presnt 
  console.log(Array.from({name:"Ankit"}));
  // this will return empty array if we can not make the array 

let score =100;
let score1 =200;
let score3 =300;
console.log(Array.of(score,score1,score3));
// this will give us the array from the varibles 