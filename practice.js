// 1st Problem Solution


var amount = 1000;
var apple = 400;
var orange = 300;

var invoice = apple + orange;

var remainAmount = amount - invoice;
console.log("Remaing Amount is " + remainAmount);



// 2nd Problem Solution 


var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var total = math + biology + chemistry + physics + bangla;

var average = total / 5;
average = average.toFixed(2);

console.log("Average Number is " + average);


// 3rd Problem Solution


var firstSentence = "I am going to be";
var lastSentence = "an awesome web developer.";

var fullSentence = firstSentence + " " + lastSentence;
console.log(fullSentence);


// 4th Problem Solution


var devidend = 119;
var devisor = 5;

var quotient = devidend / devisor;
var remainder = devidend % devisor;
console.log(remainder);


var numbers = [12, 20, 30, 50];
console.log(numbers);

numbers.push(40);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(60);
console.log(numbers);

numbers.shift();
console.log(numbers);