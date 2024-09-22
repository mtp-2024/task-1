import { DateTest } from "./task1.js";

var date1=new Date(2023,10,22,0,0);
var date2=new Date(2024,11,30,0,0);
var date3=new Date(2025,0,1,0,0);

var res1=DateTest(date1);
if(res1>6){
    console.log('right answer');
}else{
    throw new Error('wrong answer');
}

var res2=DateTest(date2);
if(res2<=1){
    console.log('right answer');
}else{
    throw new Error('wrong answer');
}


var res3=DateTest(date3);
if(res3>360){
    console.log('right answer');
}else{
    throw new Error('wrong answer');
}