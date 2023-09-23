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


// Learning Add / Remove element from Array


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


// Conditions

var goal = "I have chance to be a great Web Developer";
var learning = true ;
var effort = true;

if (learning === true && effort === true) {
    console.log(goal);
}
else{
    console.log("I have to give more effort");
}


var mySalary = 1000;
var rent = 300;
var food = 250;
var personalCoast = 50;

var totalCoast = rent + food + personalCoast;
var remain = mySalary - totalCoast;

if(remain >= 500){
    console.log('I will send money to home 500');

}
else{
    console.log('I cannot send money to home more than 400')
}

// Exploring More

var alia = 95;
var dalia = 66;
var salia = 80;
var malia = 59;
var lilia = 47;
var jalaia = 77;

if (alia >= 90){
    console.log("Got A+ Grade")
}
else if(alia >= 80 && alia <90){
    console.log("Got A grade")
}
else if(alia >= 70 && alia <80){
    console.log("Got B grade")
}
else if(alia >= 60 && alia <70){
    console.log("Got C grade")
}
else if(alia >= 50 && alia <60){
    console.log("Got D grade")
}
else{
    console.log("Got F grade")
}

