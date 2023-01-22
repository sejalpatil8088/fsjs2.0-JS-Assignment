
// 03. Declare a varibale and assign string value to it and change all the string characters to capital letters
//  using toUpperCase() method.



//toUpperCase() method

   let arr = ['sejal','patil'];
   let upper = arr.map(element => {
       return element.toUpperCase();
   });
   console.log(upper);
 // toLowercase() method
 let arr1 = ['SEJAL'];
 let lower = arr1.map(element =>{
     return element.toLowerCase();

  });
  console.log(lower);

  let name = ["sejal"];
  let name1 = name.map(element => {
    return element.toUpperCase();
  });
  console.log(name1);