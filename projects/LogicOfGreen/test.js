import { DataCheck } from "./time.js";
import {DateTime, Duration, Info, Interval, Settings} from 'luxon';

var data1=DateTime.local(2011,12,25,12,0);
var result=DataCheck(data1);
if (result.days > 0){
    console.log(`right`)
}
else{
    throw new Error(`wrong`); 
}

var data2 = DateTime.local(2024,12,31,23,59);
var result=DataCheck(data2);
if (result.days == 0){
    console.log(`right`)
}
else{
    throw new Error(`wrong`); 
}

var data3 = DateTime.local(2025,1,1,0,0);
var result=DataCheck(data3);
if (result.days > 300){
    
    console.log(`right`)
}
else{
    throw new Error(`wrong`); 
}