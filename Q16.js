// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer






// let season = 'Spring';
// if(season == 'Autumn'){
//     console.log('January','February','March');
// }else if(season == 'Winter'){
//     console.log('December','January','February');
// }else if(season == 'Spring'){
//     console.log('March','April','May');
// }else if(season == 'Summer'){
//     console.log('June','July','August');
// }


function checkseason(month) {
    if (month == "September" || month == "October" || month == "November") {
      return "The season is [Autumn]";
    } else if (month == "December" || month == "January" || month == "February") {
      return " The season is [Winter]";
    } else if (month == "March" || month == "April" || month == "May") {
      return "The season is [Spring]";
    } else if (month == "June" || month == "July" || month == "August") {
      return "The season is [Summer]";
    }
  }
  
  let output = checkseason('November');
  console.log(output);