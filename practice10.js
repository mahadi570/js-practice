// 1. Print all even numbers from 0 – 10

const arr = []; // all even numbers in an array

let sum = 0; // sum of all even numbers

for(i = 1; i <= 100; i++){ // you have to replace 10 if need to print more / less.
    if(i % 2 === 0){
        arr.push(i) // pushing elements to array
        sum = sum + i // doing sum of all even numbers
        console.log(i , 'is an even number'); // printing all even numbers
    }
}
console.log('total of even numbers is', sum);
console.log('the array of all even number is', arr);