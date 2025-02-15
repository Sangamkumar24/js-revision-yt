
console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null <= 0); //true
console.log(null >= 0); //true

//explaination for the above code
// in javascript when comparision operations are done like <,>,<= or >= 
// js converts null to 0 that is why null>=0 is true as 0>=0 is true
// simillarly null <0 is false as 0<0 is false
// but in case of == comparision js has different rule it does not converts null to 0, 
// hence resulting false
// in js null is only loosely equal to undefined i.e null==undefined is true 

console.log(undefined > 0);  //false
console.log(undefined == 0); //false
console.log(undefined <= 0); //false
console.log(undefined >= 0); //false

//here undefined is converted to NaN

// === strictly equal to --> it compares value as well as its datatype