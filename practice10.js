// 1. Print all even numbers from 0 – 10

const arr = []; // all even numbers in an array

let sum = 0; // sum of all even numbers

for (i = 1; i <= 100; i++) { // you have to replace 10 if need to print more / less.
    if (i % 2 === 0) {
        arr.push(i) // pushing elements to array
        sum = sum + i // doing sum of all even numbers
        // console.log(i , 'is an even number'); // printing all even numbers
    }
}
// console.log('total of even numbers is', sum);
// console.log('the array of all even number is', arr);



// 2. Print a table containing multiplication tables

for (let i = 1; i <= 10; i++) {
    let final = '';
    for (let j = 1; j <= 10; j++) { // replace 10 from this line if want to get more
        const multiplication = i * j; // multiply
        final = final + `${i} x ${j} = ${multiplication}\n` // final output ex: 1 x 1 = 1
    }
    // console.log(final);
}

// 3. Create a length converter function
// Kilometer to Mile function

const kilometerToMile = (kilometer) => parseFloat((kilometer / 1.609344).toFixed(5));  // 1.609344 kilometer = 1 mile

// console.log(kilometerToMile(4));


// 4. Calculate the sum of numbers within an array

const mixedNumbersArray = [3, -1, 7, -4, 2, -8, 5, 6];

const mixedIntegersAndDecimalsArray = [1, 2.5, -3, 4.75, -2, 6, -7.5, 8];

const sumOfArray = arr => {
    let sum = 0;
    for (const num of arr) {
        console.log(num,`\t+`, sum, `\t=`, sum += num);
    }
    return sum
};

// console.log(sumOfArray(mixedIntegersAndDecimalsArray));
// console.log(sumOfArray(mixedNumbersArray));


// 5. Create a function that reverses an array

const reverseArray = arr => Array.isArray(arr) ? arr.reverse() : 'give me an array';
console.log(reverseArray(1,2,3,4,5));