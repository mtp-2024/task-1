import {GetDaysToNY} from "./time.js"
import {DateTime, Duration, Info, Interval, Settings} from 'luxon';


const test1 = (date) =>{
    var response = GetDaysToNY(date);
    if(response.days === 313){
        console.log(true, response.days)
    }else{console.log(false, response.days)}
}
const test2 = (date) =>{
    var response = GetDaysToNY(date);
    if(response.days > 0){
        console.log(true, response.days)
    }else{console.log(false, response.days)}
}
const test3 = (date) =>{
    var response = GetDaysToNY(date);
    if(response.days > 5){
        console.log(true, response.days)
    }else{console.log(false, response.days)}
}

test1(DateTime.local(2024,2,23,0,0))
test2(DateTime.local(2024,11,11,0,0))
test3(DateTime.local(2024,12,20,0,0))
