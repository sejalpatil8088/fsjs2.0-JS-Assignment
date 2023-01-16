// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.





// Date object 

 const now = new Date();
 console.log(now.getFullYear());

 console.log(now.getMonth());
 console.log(now.getDate());
 console.log(now.getDay());
 console.log(now.getHours());
 console.log(now.getMinutes());

 let now1 = new Date('1970-01-01');
 console.log(now1.getSeconds());


