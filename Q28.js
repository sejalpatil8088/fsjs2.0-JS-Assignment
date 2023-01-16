// 28. Write a program to print the given patterns using the loops-
// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
//    *
//    **
//    ***
//    b. Print a square pattern, if the input is 3 then the output should be similar to the given output
//    ***
//    ***
//    ***

//    c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//    *
//   ***
//   *****



// 1
   for(let i=1; i<=3; i++){
    
      console.log('*'.repeat(i));
 }



//  2
let num = 3;
let str = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    str += "*";
  }
  str += "\n";
}

console.log(str);



// 3

 let num1 = 3;
 let str1 = "";

 for (let i = 1; i <= num; i++) {
   for (let j = 1; j <= num - i; j++) {
     str += " ";
   }
   for (let k = 0; k < 2 * i - 1; k++) {
     str += "*";
   }
   str += "\n";
 }
 console.log(str);