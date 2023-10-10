const students = {
    2222: {
        name: 'jack',
        section: 'c',
        class: 'IX',
        address: {
            'building no': 12,
            'street': 'St. Jonson',
            'city': 'Petersberg',
            'country': 'UK'
        }
    },
    3333: {
        name: 'harry',
        section: 'D',
        class: 'X',
        adress: {
            'building no': 85,
            'Street': 'DC Road',
            'city': 'Khilkhet',
            'country': 'Bangladesh'
        }
    }
}
// console.log(students[2222].address.city);
// console.log(data2.data[0].bookDetails.name);
// console.log(data2.data[1].bookCategory);

const oddNumbers = [1, 3, 5, 7, 9];
const evenNumbers = [];
for (let i = 0; i < oddNumbers.length; i++) {
    const element = oddNumbers[i] + 1;
    // evenNumbers.push(element);
}
//     console.log(evenNumbers);

const even = oddNumbers.map(n => n + 10);
// evenNumbers.push(...even);
// console.log(evenNumbers);

const arr = [33, 50, 79, 78, 90, 101, 30];
const divisabelByTen = arr.filter(e => e % 10 === 0);
// console.log(divisabelByTen);

const find = arr.find(e => e % 10 === 0);
// console.log(find);

const instructor = [
    { name: 'nodi', age: 28, position: 'senior' },
    { name: 'akhil', age: 26, position: 'junior' },
    { name: 'shoubuj', age: 30, position: 'senior' },
];

const senior = instructor.filter(i => i.position === 'senior'); 
// const senior = instructor.filter(i => console.log(i));
// console.log(senior);