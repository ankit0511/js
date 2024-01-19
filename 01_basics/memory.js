/* basically there are two types of memory 
1.Stack Memory 
2. Heap Memory 

stack memory is used in premitive datatypes 
whereas heap memory is used in non premitive datatypes 
 whenever  we use stack memory then we will get the copy of varible 
 and  when we use heap memory then we will get the reference of that object 

*/
 let ans="ankit"
 let answ = ans;
  ans="anshul"
 console.log(answ);
 console.log(ans);

 let hero ={
    name:"ankit",
    age:22,
 }
 let hero1=hero;
 console.log(hero.name);
 hero1.name="ajay"
 console.log(hero1);
 console.log(hero);