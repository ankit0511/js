const user = new Object()
// the above aobject is singo=alton 
const user1 ={} 
//this is the non singalton object 
user1.id="12345"
user1.name="ankit sir "
user1.email="ankitbhhutbdaaadmihia@gmail.com"


console.log(user1);
const reguler={
    email: "sum@gmail.com",
    fullname:{
        userFullName:{
          firstName:"ankit",
          lastName:"patle",
}
    }
}
console.log(reguler.fullname.userFullName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// if we want to combine these two then 
const obj3 =Object.assign(obj1,obj2);
console.log(obj3);

const obj4 = Object.assign({}, obj1,obj2);
console.log(obj4);
/*
these are the two sytex ... both will give us the same ouptut 
*/

const obj5 = {...obj1,...obj2}
console.log(obj5);
// this is spread method to combine the two objects 