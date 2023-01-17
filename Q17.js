// 17. Write a program which tells the number of days in a month.

function days(month){
    if(month == 30){
        return "30 days in a month";
    }else if(month == 28){
        return "28 days in a month";
    }else if(month == 31){
        return "31 days in a month";
    }
}
 let output = days(31);
 console.log(output);