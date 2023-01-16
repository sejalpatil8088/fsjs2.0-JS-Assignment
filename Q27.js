
// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

var num = 100
function demo(){
    var isPrime;

    for(var i=0;i<=100;i++){
        isPrime = 0;

         for(var j=2;j<=i/2;j++){
            if(i%j == 0 ){
                isPrime = 0;
                break;
            }
         }
         if(isPrime == 0){
            console.log(i);
         }
    }
}

 for (let i = 0; i <= 100; i++) {
    let count = 0;
     for (let j = 1; j <= i; j++) {
       if (i % j == 0) {
         count += 1;
       }
     }
     if (count == 2) {
       console.log(i);
     }
   }