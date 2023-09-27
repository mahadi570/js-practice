function findLeapYear(years) {
    const leapYears = [];
    for (i = 0; i < years.length; i++) {
        if (years[i] % 4 === 0) {
            leapYears.push(years[i]);
        }
        else {
            continue
        }
    }
    return leapYears;
}

const myYears = [2023, 2024, 2025, 2028, 2030];
const leapYears = findLeapYear(myYears);
console.log(leapYears);