let score= "Sangam"

// console.log(score)
// console.log("type of score", typeof(score));

let valueInNumber= Number(score)

console.log("type after conversion ", typeof valueInNumber); //number
console.log(valueInNumber) //NaN (Not a number)

// for the above conversion here are the following results for the given values
// "33" --- 33
//"33abc" ---- NaN
//true-1 & false-0

// for boolean conversion
// "string"== true
//"" == 0

//we can merge two strings just by add operator str1+str2

console.log("1"+ 2);//12
console.log(1 + "2");//12
console.log("1"+2+2);//122
console.log(1+2+"3"); //33

//it is preferred to use brackets for getting expected output as per required logic

console.log(+true); // 1
console.log(+"");// 0



