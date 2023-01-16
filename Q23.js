 
//  23. Write a program to check that the number given by the user is a prime number or not.

 
 
 let number = 10;
 let isprime = true;
 if(number == 1){
     console.log('1 is either prime or composite number');
 }else if(number > 1){
     for(let i =2; i < number; i++){
         if(number % i == 0){
             isprime = false;
             break;
         }
    }

 
     if (isprime){
         console.log(`${number} is a prime number`);
     }else {
         console.log(`${number} is not a prime number`);
    }
 }


// var number = 9;
// if(number == 1){
//     console.log(`number is either prime or composite number ${number}`);
// }else if(number < 1){
//     console.log('number is not prime number')
// }
//    for( var i =1; i< number;i++){
//     if(number%i == 0 ){
//         var res = `${number} is not a prime number`;
//     }else{
//         var res = `${number} is prime number`;
//     }
//    }
//    console.log(res);

function checkPrime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        count += 1;
      }
    }
    if (count == 2) {
      return "The given number is Prime";
    } else {
      return "The given number is not prime";
    }
  }
  
  let output = checkPrime(8);
  console.log(output);