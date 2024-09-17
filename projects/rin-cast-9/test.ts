import { timeUntilNewYear } from "./countdown";

function runTests(): void {
    const testCases: Date[] = [
        new Date(`December 25, 2011 12:00:00`),
        new Date(`December 31, 2024 23:59:30`),
        new Date(`January 1, 2025 00:00:00`)
    ];

    testCases.forEach((testCase, index) => {
        const result = timeUntilNewYear(testCase);
        
        switch (index) {
            case 0:
                if (result.days > 0) {
                    console.log(`\x1b[32mTest ${index + 1} passed ✔\x1b[0m`);
                }
                else {
                    throw new Error(`\x1b[31mTest ${index + 1} failed ✘\x1b[0m`);
                }
                break;

            case 1:
                if (result.days === 0) {
                    console.log(`\x1b[32mTest ${index + 1} passed ✔\x1b[0m`);
                }
                else {
                    throw new Error(`\x1b[31mTest ${index + 1} failed ✘\x1b[0m`);
                }
                break;

            case 2:
                if (result.days > 300) {
                    console.log(`\x1b[32mTest ${index + 1} passed ✔\x1b[0m`);
                }
                else {
                    throw new Error(`\x1b[31mTest ${index + 1} failed ✘\x1b[0m`);
                }
                break;
        }
    })
}

runTests();