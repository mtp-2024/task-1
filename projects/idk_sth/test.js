import { timeUntilNewYear } from "./timeUntilNewYearFunction.js";

var testCases = [
    new Date(2024, 8, 22, 21, 0, 0),
    new Date(2024, 11, 11, 2, 13, 13),
    new Date(2025, 0, 1, 0, 0, 0)
];

testCases.forEach((testCase, index) => {
    var result = timeUntilNewYear(testCase);
    
    if (index == 0) {
        console.log(result)
        if (result == [ 100, 3, 0, 0 ] ) 
            console.log("The test is passed")
        else
            console.log("An error has occurred")
    }

    if (index == 1) {
        console.log(result)
        if (result == [20, 21, 46, 47] ) 
            console.log("The test is passed")
        else 
            console.log("An error has occurred")
    }

    if (index == 2) {
        console.log(result)
        if (result == [0, 0, 0, 0])
            console.log("The test is passed")
        else 
            console.log("An error has occurred")
    }
})



