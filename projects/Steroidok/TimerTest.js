import { NewYearTimer } from './NewYearTimer.js';

function testNewYearTimer() {
    const case1 = new Date('December 31, 2024 23:59:00');
    const result1 = NewYearTimer(case1);
    if (result1.minutes === 1) {
        console.log('Test case 1 passed');
    } else {
        console.error('Test case 1 failed');
    }

    const case2 = new Date('January 1, 2024 00:00:00');
    const result2 = NewYearTimer(case2);
    if (result2.days === 366) {
        console.log('Test case 2 passed');
    } else {
        console.error('Test case 2 failed');
    }

    const case3 = new Date('September 29, 2024 18:47:00');
    const result3 = NewYearTimer(case3);
    if (result3.days === 93 && result3.hours === 5 && result3.minutes === 13) {
        console.log('Test case 3 passed');
    } else {
        console.error('Test case 3 failed');
    }
}

testNewYearTimer();
