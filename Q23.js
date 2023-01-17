 
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



