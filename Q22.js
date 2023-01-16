// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method



const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(Math.min(19,22,19,24,20,25,26,24,25,24));
console.log(Math.max(19,22,19,24,20,25,26,24,25,24));

// medium age
const ages1 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const themiddle = Math.floor(ages1/2);
const value = ages1[themiddle];
console.log(themiddle);

//Average age
const ages2 = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
function getAvg(ages2) {
    const total = ages2.reduce((acc ,c) => acc + c , 0 );
    return total / ages2.length;

}
  const Average = getAvg(ages2);
  console.log(Average);

  //rang of ages
 function range(start,end) {
     var total = [];
     if(!end) {
        end = start;
        start = 0;
     }
     for (var i = start; i < end; i +=1){
        total.push(i);

     }
     return total;
 }
   console.log(range(19,26));

   //abs method
   var agess = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
   var absMax = agess.reduce(function(max,item){
       return Math.Max(Math.abs(max),Math.abs(item));
   });
   console.log(Math.Max(agess));