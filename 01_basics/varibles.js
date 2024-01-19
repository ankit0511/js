const accountId = 1115
let accountEmail = "ankit@gmail.com"
var accountPass = "123456"
 accountCity = "bhopal" 
//  we can also creaye varibles in above way but this is not the good practice to do so 
// changing the stuffs 
// accountId = 5; changing is not allowed .. in js when varible is const;
 
let state ; 
// when we prnt this stste we will get undefined  as output ;
accountEmail = "ajay@accountEmail.com"
accountPass ="balaghat"
accountCity= "jabalpur"
console.table([accountId,accountEmail,accountPass ,accountCity])
/*
do not use var .. 
because of issue in block and functional scope 

*/