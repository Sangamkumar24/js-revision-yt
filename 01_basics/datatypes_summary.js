const id = Symbol('123');
const anotherId= Symbol('123');

console.log(id === anotherId);// false (even though value same h but symbol uniquely define karta h)

//Refernce type or Non primitive types

//Arrays, functions, objects

const arr= [1,2,3,4]; //array h but type iska object h

//various ways to define a function

// const myFunction= ()=>{
//     console.log("Hello");
// }

// const myFunction= function(){
//     console.log("Hello");
// }

function myFunction(){
    console.log("Hello");
}  // function h type function hi h

myFunction();  // in order to execute a function you need to call it
console.log(typeof myFunction);


const obj={
    name:"Sangam",
    age:"22"
} //object h type bhi object h

console.log(typeof obj);
